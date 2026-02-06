package com.careerly.backend.ai;

import com.careerly.backend.dto.ATSResponse;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;

@Component
public class AIResponseParser {

  private final ObjectMapper objectMapper = new ObjectMapper();

  public ATSResponse parseATSResponse(String rawAIResponse) {
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

      return objectMapper.readValue(cleanedContent, ATSResponse.class);
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

  private ATSResponse fallbackResponse() {
    ATSResponse response = new ATSResponse();
    response.setAtsScore(0);
    response.setSummary(
      "We could not analyze your resume properly. Please try again with clearer content."
    );
    return response;
  }
}

