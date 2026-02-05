package com.careerly.backend.controller;

import com.careerly.backend.dto.ATSRequest;
import com.careerly.backend.dto.ATSResponse;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ats")
@CrossOrigin(origins = "*")
public class ATSController {

  @PostMapping("/analyze")
  public ATSResponse analyzeATS(@Valid @RequestBody ATSRequest request) {
    ATSResponse response = new ATSResponse();

    response.setMatchScore(60);
    response.setSummary("Your resume partially matches the job description.");

    response.setMatchedKeywords(List.of("Java", "Spring Boot", "REST APIs"));
    response.setMissingKeywords(List.of("Docker", "CI/CD", "Spring Security"));

    response.setImprovementSuggestions(
      List.of(
        "Add missing skills only if you truly have experience.",
        "Rewrite project descriptions using job-specific keywords.",
        "Quantify your achievements."
      )
    );

    response.setWarnings(
      List.of(
        "Avoid keyword stuffing.",
        "Do not add skills you cannot explain in interviews."
      )
    );

    return response;
  }
}

