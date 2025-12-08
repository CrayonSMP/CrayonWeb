import { useEffect } from "react";
import { MessageCircle } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function Team() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      disable: "mobile",
    });
  }, []);

  return (
    <main className="container mx-auto px-4 pt-16 md:pt-24 min-h-screen">
      <div className="team-grid">
        <div className="team-card" data-aos="zoom-in" data-aos-delay="100">
          <img
            src="/media/team-pf/tamashii.png"
            alt="Profile Picture of Tamashii"
            className="team-card-profile"
            style={{ borderColor: "#ff0040" }}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/100x100/ff0040/ffffff?text=D";
            }}
          />
          <span className="team-card-rank">Founder & Dev</span>
          <span className="team-card-name">Tamashii</span>
          <span className="team-card-nickname">@tamashiimon</span>
          <p className="team-card-quote">
            "I love making things that do not exist."
          </p>
        </div>

        <div className="team-card" data-aos="zoom-in" data-aos-delay="100">
          <img
            src="/media/team-pf/jonathan.png"
            alt="Profile Picture of Qeonix"
            className="team-card-profile"
            style={{ borderColor: "#ff0040" }}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/100x100/ff0040/ffffff?text=D";
            }}
          />
          <span className="team-card-rank">Founder & Designer</span>
          <span className="team-card-name">Qeonix</span>
          <span className="team-card-nickname">@qeonix__</span>
          <p className="team-card-quote">"n/a"</p>
        </div>

        <div className="team-card" data-aos="zoom-in" data-aos-delay="100">
          <img
            src="/media/team-pf/fotrapsy.png"
            alt="Profile Picture of Fotrapsy"
            className="team-card-profile"
            style={{ borderColor: "#f05689" }}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/100x100/ff0040/ffffff?text=D";
            }}
          />
          <span
            className="team-card-rank"
            style={{ backgroundColor: "#f05689" }}
          >
            Hidden Admin
          </span>
          <span className="team-card-name">Fotrapsy</span>
          <span className="team-card-nickname">@fotrapsy</span>
          <p className="team-card-quote">
            "There is not enough stupid in the world to describe me."
          </p>
        </div>

        <div className="team-card" data-aos="zoom-in" data-aos-delay="100">
          <img
            src="/media/team-pf/karma.png"
            alt="Profile Picture of Karma"
            className="team-card-profile"
            style={{ borderColor: "#f05689" }}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/100x100/ff0040/ffffff?text=D";
            }}
          />
          <span
            className="team-card-rank"
            style={{ backgroundColor: "#f05689" }}
          >
            Hidden Admin
          </span>
          <span className="team-card-name">Karma (Keramik)</span>
          <span className="team-card-nickname">@karma_2121</span>
          <p className="team-card-quote">"I'd be eely surprised to see you"</p>
        </div>

        <div className="team-card" data-aos="zoom-in" data-aos-delay="100">
          <img
            src="/media/team-pf/ezTxmMC.png"
            alt="Profile Picture of ezTxmMC"
            className="team-card-profile"
            style={{ borderColor: "#75ebee" }}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/100x100/ff0040/ffffff?text=D";
            }}
          />
          <span
            className="team-card-rank"
            style={{ backgroundColor: "#75ebee" }}
          >
            Developer
          </span>
          <span className="team-card-name">ezTxmMC</span>
          <span className="team-card-nickname">@eztxmmc</span>
          <p className="team-card-quote">"Developing..."</p>
        </div>

        <div className="team-card" data-aos="zoom-in" data-aos-delay="100">
          <img
            src="/media/team-pf/SyntaxJson.png"
            alt="Profile Picture of Syntaxjason"
            className="team-card-profile"
            style={{ borderColor: "#3498db" }}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/100x100/ff0040/ffffff?text=D";
            }}
          />
          <span
            className="team-card-rank"
            style={{ backgroundColor: "#3498db" }}
          >
            Partner
          </span>
          <span className="team-card-name">Syntaxjason</span>
          <span className="team-card-nickname">@syntaxjason</span>
          <p className="team-card-quote">"n/a"</p>
        </div>
      </div>

      <section className="section-card mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Become Part of the Team!</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Interested in supporting CrayonSMP? Visit our Discord server to apply
          or share your ideas with us!
        </p>
        <a
          href="https://discord.gg/M2M6m3j2Qf"
          className="cta-button primary mt-6"
        >
          <MessageCircle className="w-5 h-5" />
          <span>To Discord</span>
        </a>
      </section>
    </main>
  );
}

export default Team;
