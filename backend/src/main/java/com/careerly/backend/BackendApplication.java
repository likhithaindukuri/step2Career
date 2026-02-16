package com.careerly.backend;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

  public static void main(String[] args) {
    loadEnvFile();
    SpringApplication.run(BackendApplication.class, args);
  }

  /** Loads .env into System properties so application.properties placeholders (e.g. GROQ_API_KEY) resolve. */
  private static void loadEnvFile() {
    List<Path> candidates = List.of(Paths.get(".env"), Paths.get("backend", ".env"), Paths.get("..", ".env"));
    for (Path p : candidates) {
      Path absolute = p.toAbsolutePath().normalize();
      if (Files.isRegularFile(absolute)) {
        try {
          Files.readAllLines(absolute).stream()
            .map(String::trim)
            .filter(line -> !line.isEmpty() && !line.startsWith("#"))
            .filter(line -> line.contains("="))
            .forEach(line -> {
              int eq = line.indexOf('=');
              String key = line.substring(0, eq).trim();
              String value = line.substring(eq + 1).trim();
              if (value.startsWith("\"") && value.endsWith("\"")) value = value.substring(1, value.length() - 1);
              else if (value.startsWith("'") && value.endsWith("'")) value = value.substring(1, value.length() - 1);
              if (!key.isEmpty() && System.getProperty(key) == null) System.setProperty(key, value);
            });
        } catch (IOException ignored) { }
        break;
      }
    }
  }
}
