import "./CareerDevelopment.css";
import Career from "../../assets/article.jpeg";
import Webinar from "../../assets/webinars.jpeg";
import Jobs from "../../assets/jobs.jpeg";
const CareerDevelopment = () => {
  return (
    <section className="career-development-section">
      <h1 className="career-development-title">Career Development Resources</h1>
      <p className="career-development-description">
        Explore resources to advance your career in academia or industry. Check
        out our articles, workshops, webinars, and job boards.
      </p>

      <div className="resource">
        <h2 className="resource-title">Articles</h2>
        <img src={Career} alt="Career Articles" className="resource-image" />
        <p className="resource-description">
          Read the latest insights on career growth, academic advancement, and
          industry trends.
        </p>
        <a href="#" className="resource-button">
          Read More
        </a>
      </div>

      <div className="resource">
        <h2 className="resource-title">Workshops & Webinars</h2>
        <img
          src={Webinar}
          alt="Workshops and Webinars"
          className="resource-image"
        />
        <p className="resource-description">
          Join our interactive workshops and webinars with industry experts.
        </p>
        <a href="#" className="resource-button">
          View Schedule
        </a>
      </div>

      <div className="resource">
        <h2 className="resource-title">Job Board</h2>
        <img src={Jobs} alt="Job Board" className="resource-image" />
        <p className="resource-description">
          Find academic and industry job opportunities relevant to your field.
        </p>
        <a href="#" className="resource-button">
          Browse Jobs
        </a>
      </div>
    </section>
  );
};

export default CareerDevelopment;
