package com.careerly.backend.controller;

import com.careerly.backend.dto.ATSRequest;
import com.careerly.backend.dto.ATSResponse;
import com.careerly.backend.service.ATSAnalysisService;
import jakarta.validation.Valid;
import java.io.IOException;
import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.core.io.buffer.DataBufferUtils;
import org.springframework.http.MediaType;
import org.springframework.http.codec.multipart.FilePart;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/ats")
@CrossOrigin(origins = "*")
public class ATSController {

  private final ATSAnalysisService atsAnalysisService;

  public ATSController(ATSAnalysisService atsAnalysisService) {
    this.atsAnalysisService = atsAnalysisService;
  }

  @PostMapping("/analyze")
  public Mono<ATSResponse> analyzeATS(@Valid @RequestBody ATSRequest request) {
    return atsAnalysisService.analyze(
      request.getResumeText(),
      request.getJobDescription()
    );
  }

  @PostMapping(
    value = "/analyze/upload",
    consumes = MediaType.MULTIPART_FORM_DATA_VALUE
  )
  public Mono<ATSResponse> analyzeATSUpload(
    @RequestPart("resume") FilePart resumeFile,
    @RequestPart("jobDescription") String jobDescription
  ) {
    return DataBufferUtils
      .join(resumeFile.content())
      .map(this::toBytes)
      .map(this::extractTextFromPdf)
      .flatMap(resumeText ->
        atsAnalysisService.analyze(resumeText, jobDescription)
      );
  }

  private byte[] toBytes(DataBuffer dataBuffer) {
    byte[] bytes = new byte[dataBuffer.readableByteCount()];
    dataBuffer.read(bytes);
    DataBufferUtils.release(dataBuffer);
    return bytes;
  }

  private String extractTextFromPdf(byte[] resumeBytes) {
    try (PDDocument document = Loader.loadPDF(resumeBytes)) {
      PDFTextStripper stripper = new PDFTextStripper();
      return stripper.getText(document);
    } catch (IOException exception) {
      return "";
    }
  }
}
