package com.careerly.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class CareerMatrixRequest {

  @NotBlank(message = "Current role is required")
  @Size(
    max = 255,
    message = "Current role is too long. Please use a shorter title."
  )
  private String currentRole;

  @NotBlank(message = "Target role is required")
  @Size(
    max = 255,
    message = "Target role is too long. Please use a shorter title."
  )
  private String targetRole;

  @Size(
    max = 2000,
    message = "Interests and constraints text is too long. Try focusing on the most important details."
  )
  private String interests;

  public String getCurrentRole() {
    return currentRole;
  }

  public void setCurrentRole(String currentRole) {
    this.currentRole = currentRole;
  }

  public String getTargetRole() {
    return targetRole;
  }

  public void setTargetRole(String targetRole) {
    this.targetRole = targetRole;
  }

  public String getInterests() {
    return interests;
  }

  public void setInterests(String interests) {
    this.interests = interests;
  }
}

