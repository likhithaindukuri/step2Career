package com.careerly.backend.ai;

import reactor.core.publisher.Mono;

public interface AIClient {

  Mono<String> analyzeCareerMatrix(
    String currentRole,
    String targetRole,
    String interests
  );

  Mono<String> analyzeATS(String resumeText, String jobDescription);

  Mono<String> generateInterviewQuestions(
    String resumeText,
    String jobDescription,
    int questionCount
  );

  Mono<String> generateResumeBullets(
    String resumeText,
    String jobDescription
  );
}

