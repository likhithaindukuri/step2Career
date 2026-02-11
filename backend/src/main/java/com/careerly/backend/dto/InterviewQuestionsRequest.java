package com.careerly.backend.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class InterviewQuestionsRequest {

  @NotBlank(message = "Resume text is required")
  @Size(
    max = 20000,
    message = "Resume text is too long. Try reducing it to the most relevant experience."
  )
  private String resumeText;

  @NotBlank(message = "Job description is required")
  @Size(
    max = 10000,
    message = "Job description is too long. Please shorten it to the most important parts."
  )
  private String jobDescription;

  @Max(
    value = 20,
    message = "You can request at most 20 questions at a time."
  )
  @Min(value = 3, message = "Ask for at least 3 questions.")
  private int questionCount = 8;

  public String getResumeText() {
    return resumeText;
  }

  public void setResumeText(String resumeText) {
    this.resumeText = resumeText;
  }

  public String getJobDescription() {
    return jobDescription;
  }

  public void setJobDescription(String jobDescription) {
    this.jobDescription = jobDescription;
  }

  public int getQuestionCount() {
    return questionCount;
  }

  public void setQuestionCount(int questionCount) {
    this.questionCount = questionCount;
  }
}

