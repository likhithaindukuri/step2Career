package com.careerly.backend.service;

import com.careerly.backend.ai.AIClient;
import com.careerly.backend.ai.AIResponseParser;
import com.careerly.backend.dto.ATSResponse;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
public class ATSAnalysisService {

  private final AIClient aiClient;

  private final AIResponseParser aiResponseParser;

  public ATSAnalysisService(AIClient aiClient, AIResponseParser aiResponseParser) {
    this.aiClient = aiClient;
    this.aiResponseParser = aiResponseParser;
  }

  public Mono<ATSResponse> analyze(String resume, String jobDescription) {
    return aiClient
      .analyzeATS(resume, jobDescription)
      .map(aiResponseParser::parseATSResponse);
  }
}

