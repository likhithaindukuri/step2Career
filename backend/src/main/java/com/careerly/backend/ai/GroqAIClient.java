package com.careerly.backend.ai;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Value;
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
      .exchangeToMono(clientResponse -> clientResponse.bodyToMono(String.class));
  }
}

