const API_BASE_URL = "http://localhost:8081";

export async function analyzeATS(resumeText, jobDescription) {
  const response = await fetch(`${API_BASE_URL}/api/ats/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jobDescription,
      resumeText,
    }),
  });

  if (!response.ok) {
    throw new Error(
      "We could not analyze your resume for ATS match. Please check your inputs and try again."
    );
  }

  return response.json();
}

export async function analyzeATSWithFile(resumeFile, jobDescription) {
  const formData = new FormData();
  formData.append("resume", resumeFile);
  formData.append("jobDescription", jobDescription);

  const response = await fetch(
    `${API_BASE_URL}/api/ats/analyze/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error(
      "We could not analyze your resume for ATS match. Please check your PDF and try again."
    );
  }

  return response.json();
}

export async function generateResumeBullets(resumeText, jobDescription) {
  const response = await fetch(
    `${API_BASE_URL}/api/tools/resume-bullets`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobDescription,
        resumeText,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      "We could not generate improved bullet points. Please refine your text and try again."
    );
  }

  return response.json();
}

export async function generateInterviewQuestions(
  resumeText,
  jobDescription,
  questionCount = 8
) {
  const response = await fetch(
    `${API_BASE_URL}/api/tools/interview-questions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobDescription,
        questionCount,
        resumeText,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      "We could not generate interview questions right now. Please try again in a moment."
    );
  }

  return response.json();
}

export async function generateCareerMatrix(
  currentRole,
  targetRole,
  interests
) {
  const response = await fetch(
    `${API_BASE_URL}/api/tools/career-matrix`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentRole,
        interests,
        targetRole,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      "We could not generate your career matrix right now. Please adjust your inputs and try again."
    );
  }

  return response.json();
}

