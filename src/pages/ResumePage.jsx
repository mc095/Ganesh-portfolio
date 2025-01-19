import React, { useEffect } from "react";

const ResumePage = () => {
  useEffect(() => {
    const resumeUrl = "/resume/ganesh_resume.pdf";

    // Triggering the download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "ganesh_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.location.href = "/";
  }, []);

  return (
    <div>
      <h1>Downloading Resume...</h1>
    </div>
  );
};

export default ResumePage;