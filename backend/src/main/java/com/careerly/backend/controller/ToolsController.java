package com.careerly.backend.controller;

import com.careerly.backend.dto.CareerMatrixRequest;
import com.careerly.backend.dto.CareerMatrixResponse;
import com.careerly.backend.dto.InterviewQuestionsRequest;
import com.careerly.backend.dto.InterviewQuestionsResponse;
import com.careerly.backend.dto.ResumeBulletsRequest;
import com.careerly.backend.dto.ResumeBulletsResponse;
import com.careerly.backend.service.CareerMatrixService;
import com.careerly.backend.service.InterviewQuestionsService;
import com.careerly.backend.service.ResumeBulletsService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/tools")
@CrossOrigin(origins = "*")
public class ToolsController {

  private final CareerMatrixService careerMatrixService;

  private final InterviewQuestionsService interviewQuestionsService;

  private final ResumeBulletsService resumeBulletsService;

  public ToolsController(
    CareerMatrixService careerMatrixService,
    InterviewQuestionsService interviewQuestionsService,
    ResumeBulletsService resumeBulletsService
  ) {
    this.careerMatrixService = careerMatrixService;
    this.interviewQuestionsService = interviewQuestionsService;
    this.resumeBulletsService = resumeBulletsService;
  }

  @PostMapping("/resume-bullets")
  public Mono<ResumeBulletsResponse> generateResumeBullets(
    @Valid @RequestBody ResumeBulletsRequest request
  ) {
    return resumeBulletsService.generateBullets(
      request.getResumeText(),
      request.getJobDescription()
    );
  }

  @PostMapping("/interview-questions")
  public Mono<InterviewQuestionsResponse> generateInterviewQuestions(
    @Valid @RequestBody InterviewQuestionsRequest request
  ) {
    return interviewQuestionsService.generateQuestions(
      request.getResumeText(),
      request.getJobDescription(),
      request.getQuestionCount()
    );
  }

  @PostMapping("/career-matrix")
  public Mono<CareerMatrixResponse> generateCareerMatrix(
    @Valid @RequestBody CareerMatrixRequest request
  ) {
    return careerMatrixService.analyzeCareerMatrix(
      request.getCurrentRole(),
      request.getTargetRole(),
      request.getInterests()
    );
  }
}

