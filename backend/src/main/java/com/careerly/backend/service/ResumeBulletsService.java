package com.careerly.backend.service;

import com.careerly.backend.ai.AIClient;
import com.careerly.backend.ai.AIResponseParser;
import com.careerly.backend.dto.ResumeBulletsResponse;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
public class ResumeBulletsService {

  private final AIClient aiClient;

  private final AIResponseParser aiResponseParser;

  public ResumeBulletsService(
    AIClient aiClient,
    AIResponseParser aiResponseParser
  ) {
    this.aiClient = aiClient;
    this.aiResponseParser = aiResponseParser;
  }

  public Mono<ResumeBulletsResponse> generateBullets(
    String resumeText,
    String jobDescription
  ) {
    return aiClient
      .generateResumeBullets(resumeText, jobDescription)
      .map(aiResponseParser::parseResumeBulletsResponse);
  }
}

