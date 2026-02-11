package com.careerly.backend.service;

import com.careerly.backend.ai.AIClient;
import com.careerly.backend.ai.AIResponseParser;
import com.careerly.backend.dto.CareerMatrixResponse;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
public class CareerMatrixService {

  private final AIClient aiClient;

  private final AIResponseParser aiResponseParser;

  public CareerMatrixService(AIClient aiClient, AIResponseParser aiResponseParser) {
    this.aiClient = aiClient;
    this.aiResponseParser = aiResponseParser;
  }

  public Mono<CareerMatrixResponse> analyzeCareerMatrix(
    String currentRole,
    String targetRole,
    String interests
  ) {
    return aiClient
      .analyzeCareerMatrix(currentRole, targetRole, interests)
      .map(aiResponseParser::parseCareerMatrixResponse);
  }
}

