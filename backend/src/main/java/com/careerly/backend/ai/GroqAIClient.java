package com.careerly.backend.ai;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Component
public class GroqAIClient implements AIClient {

  private final WebClient webClient;

  public GroqAIClient(@Value("${groq.api.key}") String apiKey) {
    this.webClient =
      WebClient
        .builder()
        .baseUrl("https://api.groq.com/openai/v1")
        .defaultHeader("Authorization", "Bearer " + apiKey)
        .defaultHeader("Content-Type", "application/json")
        .build();
  }

  @Override
  public Mono<String> analyzeATS(String resumeText, String jobDescription) {
    String prompt =
      """
      You are an ATS resume analysis engine.
      Follow all rules strictly.
      You must return ONLY valid JSON.
      Do not include explanations.
      Do not include markdown.
      Do not include text outside JSON.

      Scoring rules:
      - atsScore is an integer from 0 to 100.
      - atsScore should roughly reflect the ratio of matchedKeywords to all keywords (matchedKeywords + missingKeywords).
      - Do not set atsScore to 0 if there are matchedKeywords, unless the resume is almost completely irrelevant.

      Suggestions rules:
      - If atsScore is 90 or above, focus improvementSuggestions on small polish (clarity, structure, achievements), not on missing core skills.
      - Do not say the candidate is lacking a skill that appears in matchedKeywords.

      Resume:
      %s

      Job Description:
      %s
      """
        .formatted(resumeText, jobDescription);

    Map<String, Object> requestBody =
      Map.of(
        "model",
        "llama-3.3-70b-versatile",
        "messages",
        List.of(
          Map.of(
            "role",
            "system",
            "content",
            "You are an ATS analysis engine. You must return ONLY valid JSON with the shape: {\"atsScore\": number, \"missingKeywords\": string[], \"matchedKeywords\": string[], \"improvementSuggestions\": string[], \"summary\": string}. Do not include any markdown or extra text."
          ),
          Map.of("role", "user", "content", prompt)
        ),
        "temperature",
        0.2
      );

    return this.webClient
      .post()
      .uri("/chat/completions")
      .bodyValue(requestBody)
      .retrieve()
      .onStatus(
        HttpStatusCode::isError,
        clientResponse ->
          clientResponse
            .bodyToMono(String.class)
            .defaultIfEmpty("Unknown error from Groq API while analyzing ATS match.")
            .flatMap(errorBody ->
              Mono.error(
                new IllegalStateException(
                  "Groq API request for ATS analysis failed. Please verify your API key and try again. Details: " +
                  errorBody
                )
              )
            )
      )
      .bodyToMono(String.class);
  }

  @Override
  public Mono<String> generateResumeBullets(
    String resumeText,
    String jobDescription
  ) {
    String prompt =
      """
      You are a resume bullet point rewriting assistant.
      Follow all rules strictly.
      You must return ONLY valid JSON.
      Do not include explanations.
      Do not include markdown.
      Do not include text outside JSON.

      Behaviour rules:
      - Focus on achievement-oriented, quantified bullet points.
      - Use strong action verbs and keep language specific and concise.
      - Align bullet points to the job description and its core skills.
      - Avoid fabricating achievements that are not plausible for the role.

      Resume content:
      %s

      Job Description:
      %s
      """
        .formatted(resumeText, jobDescription);

    Map<String, Object> requestBody =
      Map.of(
        "model",
        "llama-3.3-70b-versatile",
        "messages",
        List.of(
          Map.of(
            "role",
            "system",
            "content",
            "You are a resume bullet point generator. You must return ONLY valid JSON with the shape: {\"improvedBullets\": string[], \"guidanceSummary\": string}. Do not include any markdown or extra text."
          ),
          Map.of("role", "user", "content", prompt)
        ),
        "temperature",
        0.4
      );

    return this.webClient
      .post()
      .uri("/chat/completions")
      .bodyValue(requestBody)
      .retrieve()
      .onStatus(
        HttpStatusCode::isError,
        clientResponse ->
          clientResponse
            .bodyToMono(String.class)
            .defaultIfEmpty(
              "Unknown error from Groq API while generating resume bullets."
            )
            .flatMap(errorBody ->
              Mono.error(
                new IllegalStateException(
                  "Groq API request for resume bullets failed. Please verify your API key and try again. Details: " +
                  errorBody
                )
              )
            )
      )
      .bodyToMono(String.class);
  }

  @Override
  public Mono<String> generateInterviewQuestions(
    String resumeText,
    String jobDescription,
    int questionCount
  ) {
    String prompt =
      """
      You are an interview question generator.
      Follow all rules strictly.
      You must return ONLY valid JSON.
      Do not include explanations.
      Do not include markdown.
      Do not include text outside JSON.

      Behaviour rules:
      - Generate realistic, role-specific interview questions.
      - Use the resume and job description to shape the questions.
      - Include a mix of behavioural, technical, and situational questions where appropriate.
      - Keep questions concise and directly usable in an interview setting.

      Required number of questions: %d

      Candidate resume content:
      %s

      Job Description:
      %s
      """
        .formatted(questionCount, resumeText, jobDescription);

    Map<String, Object> requestBody =
      Map.of(
        "model",
        "llama-3.3-70b-versatile",
        "messages",
        List.of(
          Map.of(
            "role",
            "system",
            "content",
            "You are an interview preparation assistant. You must return ONLY valid JSON with the shape: {\"questions\": [{\"question\": string, \"reason\": string, \"category\": string, \"difficulty\": string}]}. Do not include any markdown or extra text."
          ),
          Map.of("role", "user", "content", prompt)
        ),
        "temperature",
        0.5
      );

    return this.webClient
      .post()
      .uri("/chat/completions")
      .bodyValue(requestBody)
      .retrieve()
      .onStatus(
        HttpStatusCode::isError,
        clientResponse ->
          clientResponse
            .bodyToMono(String.class)
            .defaultIfEmpty(
              "Unknown error from Groq API while generating interview questions."
            )
            .flatMap(errorBody ->
              Mono.error(
                new IllegalStateException(
                  "Groq API request for interview questions failed. Please verify your API key and try again. Details: " +
                  errorBody
                )
              )
            )
      )
      .bodyToMono(String.class);
  }

  @Override
  public Mono<String> analyzeCareerMatrix(
    String currentRole,
    String targetRole,
    String interests
  ) {
    String prompt =
      """
      You are a career path and gap analysis assistant.
      Follow all rules strictly.
      You must return ONLY valid JSON.
      Do not include explanations.
      Do not include markdown.
      Do not include text outside JSON.

      Behaviour rules:
      - Focus on practical, realistic next steps.
      - Highlight the most important skills and experiences needed to move from currentRole to targetRole.
      - Break the journey into clear stages with recommended focus areas.
      - Suggest skill clusters rather than an overwhelming list of tools.

      Current role:
      %s

      Target role:
      %s

      Interests or constraints shared by the user:
      %s
      """
        .formatted(currentRole, targetRole, interests);

    Map<String, Object> requestBody =
      Map.of(
        "model",
        "llama-3.3-70b-versatile",
        "messages",
        List.of(
          Map.of(
            "role",
            "system",
            "content",
            "You are a career coach. You must return ONLY valid JSON with the shape: {\"summary\": string, \"coreSkills\": string[], \"gaps\": string[], \"stages\": [{\"label\": string, \"description\": string, \"focusAreas\": string[]}]}. Do not include any markdown or extra text."
          ),
          Map.of("role", "user", "content", prompt)
        ),
        "temperature",
        0.5
      );

    return this.webClient
      .post()
      .uri("/chat/completions")
      .bodyValue(requestBody)
      .retrieve()
      .onStatus(
        HttpStatusCode::isError,
        clientResponse ->
          clientResponse
            .bodyToMono(String.class)
            .defaultIfEmpty(
              "Unknown error from Groq API while generating the career matrix."
            )
            .flatMap(errorBody ->
              Mono.error(
                new IllegalStateException(
                  "Groq API request for career matrix failed. Please verify your API key and try again. Details: " +
                  errorBody
                )
              )
            )
      )
      .bodyToMono(String.class);
  }
}

