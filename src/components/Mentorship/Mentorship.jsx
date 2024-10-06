import "./Mentorship.css";
import Joe from "../../assets/joe.jpeg";
import Jane from "../../assets/jane.jpeg";
const Mentorship = () => {
  return (
    <section className="mentorship-section">
      <h1 className="mentorship-title">Find a Mentor</h1>
      <p className="mentorship-description">
        Connect with experienced professionals in your field for personalized
        mentorship and guidance.
      </p>

      <div className="mentor-container">
        <div className="mentor-profile">
          <img src={Joe} alt="Mentor Profile" className="mentor-image" />
          <h2 className="mentor-name">Dr. John Doe</h2>
          <p className="mentor-description">
            Expert in Data Science and AI. Available for career advice, research
            guidance, and professional development.
          </p>
          <a href="#" className="mentor-button">
            Request Mentorship
          </a>
        </div>

        <div className="mentor-profile">
          <img src={Jane} alt="Mentor Profile" className="mentor-image" />
          <h2 className="mentor-name">Dr. Jane Smith</h2>
          <p className="mentor-description">
            Specialist in Healthcare Technology and Bioinformatics. Available
            for mentorship and academic advice.
          </p>
          <a href="#" className="mentor-button">
            Request Mentorship
          </a>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;
