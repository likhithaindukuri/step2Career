export async function analyzeATS(resumeText, jobDescription) {
  const response = await fetch("http://localhost:8081/api/ats/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      resumeText,
      jobDescription,
    }),
  });

  if (!response.ok) {
    throw new Error("ATS analysis failed");
  }

  return response.json();
}

export async function analyzeATSWithFile(resumeFile, jobDescription) {
  const formData = new FormData();
  formData.append("resume", resumeFile);
  formData.append("jobDescription", jobDescription);

  const response = await fetch(
    "http://localhost:8081/api/ats/analyze/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("ATS analysis failed");
  }

  return response.json();
}


