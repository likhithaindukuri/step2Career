package com.careerly.backend.dto;

import java.util.List;
import lombok.Data;

@Data
public class ATSResponse {

  private int matchScore;

  private String summary;

  private List<String> matchedKeywords;

  private List<String> missingKeywords;

  private List<String> improvementSuggestions;

  private List<String> warnings;
}

