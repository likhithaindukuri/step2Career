package com.careerly.backend.controller;

import com.careerly.backend.dto.ATSRequest;
import com.careerly.backend.dto.ATSResponse;
import com.careerly.backend.service.ATSAnalysisService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/ats")
@CrossOrigin(origins = "*")
public class ATSController {

  private final ATSAnalysisService atsAnalysisService;

  public ATSController(ATSAnalysisService atsAnalysisService) {
    this.atsAnalysisService = atsAnalysisService;
  }

  @PostMapping("/analyze")
  public Mono<ATSResponse> analyzeATS(@Valid @RequestBody ATSRequest request) {
    return atsAnalysisService.analyze(
      request.getResumeText(),
      request.getJobDescription()
    );
  }
}
