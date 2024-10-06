import  { useState } from "react";
import "./Submissions.css";

const Submissions = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mocking the submission process and showing a confirmation message
    setSubmitted(true);
  };

  return (
    <section className="submission-form">
      <h1>Submit Your Paper</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label htmlFor="title">Paper Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter your paper title"
            required
          />

          <label htmlFor="abstract">Abstract:</label>
          <textarea
            id="abstract"
            name="abstract"
            rows="4"
            placeholder="Enter a brief abstract"
            required></textarea>

          <label htmlFor="file">Upload Paper (PDF/DOCX):</label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".pdf,.docx"
            required
          />

          <label htmlFor="keywords">Keywords:</label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            placeholder="Enter relevant keywords"
            required
          />

          <button type="submit" className="cta-button">
            Submit Paper
          </button>
        </form>
      ) : (
        <div className="confirmation">
          <h2>Thank you for your submission!</h2>
          <p>You will receive a confirmation email shortly.</p>
        </div>
      )}
    </section>
  );
};

export default Submissions;
