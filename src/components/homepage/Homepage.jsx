import "./Homepage.css";
import callforpaper from "../../assets/call-for-papers.jpeg";
import Registration from "../../assets/Registration.jpeg";
import schedule from "../../assets/schedule.jpeg";
import news from "../../assets/news.png";
const Homepage = () => {
  return (
    <div className="homepage1">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>2024 UTA International Research Conference</h1>
          <p>
            Welcome to the 2024 UTA International Research Conference! Join us
            as we explore cutting-edge research and innovation.
          </p>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links">
        <h2>Quick Links</h2>
        <div className="links">
          <div className="link-item">
            <img src={callforpaper} alt="Call for Papers" />
            <a href="/call-for-papers" className="cta-button1">
              Call for Papers
            </a>
          </div>
          <div className="link-item">
            <img src={Registration} alt="Registration" />
            <a href="/registration" className="cta-button1">
              Register Now
            </a>
          </div>
          <div className="link-item">
            <img src={schedule} alt="Conference Schedule" />
            <a href="/schedule" className="cta-button1">
              View Schedule
            </a>
          </div>
        </div>
      </section>

      {/* Latest News and Announcements Section */}
      <section className="news">
        <h2>Latest News and Announcements</h2>
        <div className="news-item">
          <img src={news} alt="Latest News" />
          <p>
            Stay updated with the latest news about the conference, keynote
            speakers, and much more.
          </p>
          <a href="/news" className="cta-button2">
            Read More
          </a>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
