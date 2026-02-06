package com.careerly.backend.ai;

import reactor.core.publisher.Mono;

public interface AIClient {

  Mono<String> analyzeATS(String resumeText, String jobDescription);
}

