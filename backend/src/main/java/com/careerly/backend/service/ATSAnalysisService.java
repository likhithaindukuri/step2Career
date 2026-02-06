package com.careerly.backend.service;

import com.careerly.backend.ai.AIClient;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
public class ATSAnalysisService {

  private final AIClient aiClient;

  public ATSAnalysisService(AIClient aiClient) {
    this.aiClient = aiClient;
  }

  public Mono<String> analyze(String resume, String jobDescription) {
    return aiClient.analyzeATS(resume, jobDescription);
  }
}

