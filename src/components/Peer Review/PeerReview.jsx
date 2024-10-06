import  { useState } from "react";
import "./PeerReview.css";

const PeerReview = () => {
  // Simulated paper data
  const papers = [
    {
      id: 1,
      title: "AI in Healthcare",
      description: "A deep dive into AI applications in healthcare.",
    },
    {
      id: 2,
      title: "Data Science for Social Good",
      description: "Leveraging data science to solve social issues.",
    },
  ];

  // State to track selected paper and review submission
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [reviewData, setReviewData] = useState({ score: "", feedback: "" });

  // Handle paper assignment
  const handleAssign = (paper) => {
    setSelectedPaper(paper);
    setReviewSubmitted(false); // Reset review form if changing papers
    setReviewData({ score: "", feedback: "" }); // Reset review data
  };

  // Handle review form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setReviewSubmitted(true);
    // Simulate sending data to backend
    console.log(`Review Submitted for: ${selectedPaper.title}`);
    console.log(`Score: ${reviewData.score}`);
    console.log(`Feedback: ${reviewData.feedback}`);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  return (
    <section className="peer-review-section">
      <h1 className="peer-review-title">Peer Review Dashboard</h1>
      <p className="peer-review-intro">
        Reviewers can access their assigned papers and provide feedback through
        this portal.
      </p>

      {/* Reviewer Assignment Section */}
      <div className="reviewer-assignment">
        <h2 className="peer-review-subtitle">Select a Paper to Review</h2>
        <ul className="peer-review-list">
          {papers.map((paper) => (
            <li key={paper.id} className="peer-review-item">
              <div>
                <strong>{paper.title}:</strong> {paper.description}
              </div>
              <button
                className="assign-button"
                onClick={() => handleAssign(paper)}>
                {selectedPaper?.id === paper.id ? "Assigned" : "Assign to Me"}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Review Submission Form */}
      {selectedPaper && !reviewSubmitted && (
        <div className="review-form-section">
          <h2 className="peer-review-subtitle">
            Review: {selectedPaper.title}
          </h2>
          <form onSubmit={handleSubmit} className="peer-review-form">
            <label htmlFor="score">Score the Paper (1-10):</label>
            <input
              type="number"
              id="score"
              name="score"
              min="1"
              max="10"
              value={reviewData.score}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="feedback">Provide Feedback:</label>
            <textarea
              id="feedback"
              name="feedback"
              rows="4"
              placeholder="Enter your feedback here"
              value={reviewData.feedback}
              onChange={handleInputChange}
              required></textarea>

            <button type="submit" className="review-submit-button">
              Submit Review
            </button>
          </form>
        </div>
      )}

      {/* Review Confirmation */}
      {reviewSubmitted && (
        <div className="review-confirmation">
          <h3>Thank you for reviewing: {selectedPaper.title}</h3>
          <p>Your feedback has been submitted successfully.</p>
        </div>
      )}
    </section>
  );
};

export default PeerReview;
