package com.careerly.backend.dto;

import java.util.List;

public class InterviewQuestionsResponse {

  public static class InterviewQuestion {

    private String category;

    private String difficulty;

    private String question;

    private String reason;

    public String getCategory() {
      return category;
    }

    public void setCategory(String category) {
      this.category = category;
    }

    public String getDifficulty() {
      return difficulty;
    }

    public void setDifficulty(String difficulty) {
      this.difficulty = difficulty;
    }

    public String getQuestion() {
      return question;
    }

    public void setQuestion(String question) {
      this.question = question;
    }

    public String getReason() {
      return reason;
    }

    public void setReason(String reason) {
      this.reason = reason;
    }
  }

  private List<InterviewQuestion> questions;

  public List<InterviewQuestion> getQuestions() {
    return questions;
  }

  public void setQuestions(List<InterviewQuestion> questions) {
    this.questions = questions;
  }
}

