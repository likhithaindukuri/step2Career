package com.careerly.backend.dto;

import java.util.List;

public class ATSResponse {

  private int atsScore;

  private List<String> improvementSuggestions;

  private List<String> matchedKeywords;

  private List<String> missingKeywords;

  private String summary;

  public int getAtsScore() {
    return atsScore;
  }

  public void setAtsScore(int atsScore) {
    this.atsScore = atsScore;
  }

  public List<String> getImprovementSuggestions() {
    return improvementSuggestions;
  }

  public void setImprovementSuggestions(List<String> improvementSuggestions) {
    this.improvementSuggestions = improvementSuggestions;
  }

  public List<String> getMatchedKeywords() {
    return matchedKeywords;
  }

  public void setMatchedKeywords(List<String> matchedKeywords) {
    this.matchedKeywords = matchedKeywords;
  }

  public List<String> getMissingKeywords() {
    return missingKeywords;
  }

  public void setMissingKeywords(List<String> missingKeywords) {
    this.missingKeywords = missingKeywords;
  }

  public String getSummary() {
    return summary;
  }

  public void setSummary(String summary) {
    this.summary = summary;
  }
}

