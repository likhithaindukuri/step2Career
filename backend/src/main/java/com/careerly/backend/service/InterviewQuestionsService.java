package com.careerly.backend.service;

import com.careerly.backend.ai.AIClient;
import com.careerly.backend.ai.AIResponseParser;
import com.careerly.backend.dto.InterviewQuestionsResponse;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
public class InterviewQuestionsService {

  private final AIClient aiClient;

  private final AIResponseParser aiResponseParser;

  public InterviewQuestionsService(
    AIClient aiClient,
    AIResponseParser aiResponseParser
  ) {
    this.aiClient = aiClient;
    this.aiResponseParser = aiResponseParser;
  }

  public Mono<InterviewQuestionsResponse> generateQuestions(
    String resumeText,
    String jobDescription,
    int questionCount
  ) {
    return aiClient
      .generateInterviewQuestions(resumeText, jobDescription, questionCount)
      .map(aiResponseParser::parseInterviewQuestionsResponse);
  }
}

