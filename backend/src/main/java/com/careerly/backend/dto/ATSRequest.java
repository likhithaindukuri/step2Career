package com.careerly.backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ATSRequest {

  @NotBlank(message = "Resume text is required")
  private String resumeText;

  @NotBlank(message = "Job description is required")
  private String jobDescription;
}

