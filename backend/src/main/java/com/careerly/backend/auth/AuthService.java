package com.careerly.backend.auth;

import com.careerly.backend.auth.AuthDtos.AuthResponse;
import com.careerly.backend.auth.AuthDtos.LoginRequest;
import com.careerly.backend.auth.AuthDtos.SignupRequest;
import com.careerly.backend.user.User;
import com.careerly.backend.user.UserRepository;
import java.util.Optional;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AuthService {

  private final UserRepository userRepository;
  private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

  public AuthService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Transactional
  public AuthResponse signup(SignupRequest request) {
    Optional<User> existing = userRepository.findByEmail(request.getEmail());
    if (existing.isPresent()) {
      throw new IllegalStateException("An account with this email already exists.");
    }

    User user = new User();
    user.setName(request.getName());
    user.setEmail(request.getEmail());
    user.setPasswordHash(passwordEncoder.encode(request.getPassword()));

    User saved = userRepository.save(user);
    return new AuthResponse(saved.getId(), saved.getName(), saved.getEmail());
  }

  @Transactional(readOnly = true)
  public AuthResponse login(LoginRequest request) {
    User user = userRepository
      .findByEmail(request.getEmail())
      .orElseThrow(() ->
        new IllegalStateException("Invalid email or password. Please try again.")
      );

    if (!passwordEncoder.matches(request.getPassword(), user.getPasswordHash())) {
      throw new IllegalStateException("Invalid email or password. Please try again.");
    }

    return new AuthResponse(user.getId(), user.getName(), user.getEmail());
  }
}

