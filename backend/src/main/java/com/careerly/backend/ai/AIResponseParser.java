package com.careerly.backend.ai;

import com.careerly.backend.dto.ATSResponse;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;

@Component
public class AIResponseParser {

  private final ObjectMapper objectMapper = new ObjectMapper();

  public ATSResponse parseATSResponse(
    String rawAIResponse,
    String resumeText,
    String jobDescription
  ) {
    try {
      JsonNode root = objectMapper.readTree(rawAIResponse);

      JsonNode choicesNode = root.path("choices");
      if (!choicesNode.isArray() || choicesNode.isEmpty()) {
        return fallbackResponse();
      }

      String content =
        choicesNode
          .get(0)
          .path("message")
          .path("content")
          .asText();

      String cleanedContent = cleanContent(content);

      ATSResponse parsed = objectMapper.readValue(
        cleanedContent,
        ATSResponse.class
      );

      return recomputeKeywordsAndScore(parsed, resumeText);
    } catch (Exception e) {
      return fallbackResponse();
    }
  }

  private String cleanContent(String content) {
    String trimmed = content.trim();

    if (trimmed.startsWith("```")) {
      int firstFenceEnd = trimmed.indexOf('\n');
      if (firstFenceEnd > 0) {
        trimmed = trimmed.substring(firstFenceEnd + 1);
      }
      int lastFenceStart = trimmed.lastIndexOf("```");
      if (lastFenceStart >= 0) {
        trimmed = trimmed.substring(0, lastFenceStart);
      }
      trimmed = trimmed.trim();
    }

    return trimmed;
  }

  private ATSResponse recomputeKeywordsAndScore(
    ATSResponse parsed,
    String resumeText
  ) {
    if (resumeText == null) {
      return parsed;
    }

    String normalizedResume = normalize(resumeText);

    java.util.Set<String> targetKeywords = new java.util.LinkedHashSet<>();

    if (parsed.getMatchedKeywords() != null) {
      targetKeywords.addAll(parsed.getMatchedKeywords());
    }
    if (parsed.getMissingKeywords() != null) {
      targetKeywords.addAll(parsed.getMissingKeywords());
    }

    if (targetKeywords.isEmpty()) {
      return parsed;
    }

    java.util.List<String> matched = new java.util.ArrayList<>();
    java.util.List<String> missing = new java.util.ArrayList<>();

    for (String keyword : targetKeywords) {
      String normalizedKeyword = normalize(keyword);
      if (normalizedKeyword.isEmpty()) {
        continue;
      }
      if (normalizedResume.contains(normalizedKeyword)) {
        matched.add(keyword);
      } else {
        missing.add(keyword);
      }
    }

    parsed.setMatchedKeywords(matched);
    parsed.setMissingKeywords(missing);

    int total = matched.size() + missing.size();
    if (total > 0) {
      int computedScore = (int) Math.round((matched.size() * 100.0) / total);
      parsed.setAtsScore(computedScore);
    }

    return parsed;
  }

  private String normalize(String value) {
    String lowerCased = value.toLowerCase();
    String onlyAlnumAndSpace = lowerCased.replaceAll("[^a-z0-9]+", " ");
    return onlyAlnumAndSpace.replaceAll("\\s+", " ").trim();
  }

  private ATSResponse fallbackResponse() {
    ATSResponse response = new ATSResponse();
    response.setAtsScore(0);
    response.setSummary(
      "We could not analyze your resume properly. Please try again with clearer content."
    );
    return response;
  }
}

