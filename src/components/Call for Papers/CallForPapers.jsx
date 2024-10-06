
import "./CallForPapers.css";

const CallForPapers = () => {
  return (
    <section className="call-for-papers">
      <h1>Call for Papers</h1>
      <p className="intro">
        We are now accepting paper submissions for the 2024 International
        Research Conference. Submit your research on various topics, including
        AI, Data Science, Healthcare, and more.
      </p>

      {/* Submission Guidelines */}
      <h2>Submission Guidelines</h2>
      <ul className="guidelines">
        <li>Word Limit: 3000 - 6000 words</li>
        <li>Format: PDF or DOCX</li>
        <li>Submission Deadline: April 30, 2025</li>
      </ul>

      {/* Important Dates */}
      <h2>Important Dates</h2>
      <ul className="dates">
        <li>Submission Deadline: April 30, 2024</li>
        <li>Review Period: May 1 - May 30, 2024</li>
        <li>Acceptance Notification: June 15, 2024</li>
      </ul>

      {/* FAQs */}
      <h2>FAQs</h2>
      <ul className="faqs">
        <li>
          <strong>How do I submit my paper?</strong> You can submit your paper
          via the <a href="/submissions">Submissions Portal</a>.
        </li>
        <li>
          <strong>What topics are accepted?</strong> We accept papers on AI,
          Data Science, Healthcare, and related fields.
        </li>
      </ul>

      {/* CTA Button */}
      <a href="/submissions" className="cta-buttonp">
        Submit Your Paper
      </a>
    </section>
  );
};

export default CallForPapers;
