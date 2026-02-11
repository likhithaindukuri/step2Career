package com.careerly.backend.dto;

import java.util.List;

public class CareerMatrixResponse {

  public static class CareerStage {

    private String description;

    private List<String> focusAreas;

    private String label;

    public String getDescription() {
      return description;
    }

    public void setDescription(String description) {
      this.description = description;
    }

    public List<String> getFocusAreas() {
      return focusAreas;
    }

    public void setFocusAreas(List<String> focusAreas) {
      this.focusAreas = focusAreas;
    }

    public String getLabel() {
      return label;
    }

    public void setLabel(String label) {
      this.label = label;
    }
  }

  private List<String> coreSkills;

  private List<String> gaps;

  private String summary;

  private List<CareerStage> stages;

  public List<String> getCoreSkills() {
    return coreSkills;
  }

  public void setCoreSkills(List<String> coreSkills) {
    this.coreSkills = coreSkills;
  }

  public List<String> getGaps() {
    return gaps;
  }

  public void setGaps(List<String> gaps) {
    this.gaps = gaps;
  }

  public String getSummary() {
    return summary;
  }

  public void setSummary(String summary) {
    this.summary = summary;
  }

  public List<CareerStage> getStages() {
    return stages;
  }

  public void setStages(List<CareerStage> stages) {
    this.stages = stages;
  }
}

