package com.careerly.backend.dto;

import java.util.List;

public class ResumeBulletsResponse {

  private List<String> improvedBullets;

  private String guidanceSummary;

  public List<String> getImprovedBullets() {
    return improvedBullets;
  }

  public void setImprovedBullets(List<String> improvedBullets) {
    this.improvedBullets = improvedBullets;
  }

  public String getGuidanceSummary() {
    return guidanceSummary;
  }

  public void setGuidanceSummary(String guidanceSummary) {
    this.guidanceSummary = guidanceSummary;
  }
}

