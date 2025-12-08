import { useEffect } from "react";
import { MessageCircle, Twitch, Youtube, Globe, Gamepad2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function Pioneers() {
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
      <div className="pioneer-grid">
        <div className="pioneer-card" data-aos="zoom-in" data-aos-delay="100">
          <img
            src="/media/team-pf/karma.png"
            alt="Profile Picture of Karma"
            className="pioneer-card-profile"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/100x100/f05689/ffffff?text=P";
            }}
          />
          <span className="pioneer-rank" style={{ backgroundColor: "#9735f2" }}>
            Streamer
          </span>
          <span className="pioneer-card-name">Karma</span>
          <span className="pioneer-card-nickname">@karma2121</span>
          <p className="pioneer-card-quote">"Open for collabs"</p>
          <div className="social-links flex justify-center">
            <a
              href="https://www.twitch.tv/karma2121"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitch"
              title="Twitch Channel"
            >
              <Twitch className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="pioneer-card" data-aos="zoom-in" data-aos-delay="100">
          <img
            src="/media/streamer-pf/GianniCrafter.png"
            alt="Profile Picture of Giannicraft"
            className="pioneer-card-profile"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/100x100/f05689/ffffff?text=P";
            }}
          />
          <span className="pioneer-rank" style={{ backgroundColor: "#9735f2" }}>
            Streamer
          </span>
          <span className="pioneer-card-name">Giannicraft</span>
          <span className="pioneer-card-nickname">@Giannicrafter</span>
          <p className="pioneer-card-quote">"I am a femboy who likes trains"</p>
          <div className="social-links flex justify-center">
            <a
              href="https://www.twitch.tv/giannicrafter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitch"
              title="Twitch Channel"
            >
              <Twitch className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/@Giannicrafter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              title="YouTube Channel"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="pioneer-card" data-aos="zoom-in" data-aos-delay="100">
          <img
            src="/media/streamer-pf/Ahmed.gif"
            alt="Profile Picture of Ahmed"
            className="pioneer-card-profile"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/100x100/f05689/ffffff?text=P";
            }}
          />
          <span className="pioneer-rank" style={{ backgroundColor: "#4d4848" }}>
            Member
          </span>
          <span className="pioneer-card-name">Ahmed</span>
          <span className="pioneer-card-nickname">@theahmedhd</span>
          <p className="pioneer-card-quote">"Burns like fire"</p>
          <div className="social-links flex justify-center">
            <a
              href="https://twitch.com/theahmedhd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitch"
              title="Twitch Channel"
            >
              <Twitch className="w-6 h-6" />
            </a>
            <a
              href="https://youtube.com/@theahmedhd.?si=rv5ZFxgBb0oHb44o"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              title="YouTube Channel"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="pioneer-card" data-aos="zoom-in" data-aos-delay="100">
          <img
            src="/media/streamer-pf/Ynujasha.png"
            alt="Profile Picture of Tikomatura"
            className="pioneer-card-profile"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/100x100/f05689/ffffff?text=P";
            }}
          />
          <span className="pioneer-rank" style={{ backgroundColor: "#3498db" }}>
            Former Sponsor
          </span>
          <span className="pioneer-card-name">Tikomatura</span>
          <span className="pioneer-card-nickname">@Ynujasha</span>
          <p className="pioneer-card-quote">
            "Day 2 Supporter"
            <br />
            "HMU for cheap server hosting"
          </p>
          <div className="social-links flex justify-center">
            <a
              href="https://cops.bio/1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Crops"
              title="crops bio"
            >
              <Globe className="w-6 h-6" />
            </a>
            <a
              href="https://steamcommunity.com/id/Tikomatura"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Steam"
              title="Steam User"
            >
              <Gamepad2 className="w-6 h-6" />
            </a>
            <a
              href="https://rustymain.eu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="rustymain"
              title="RustyMain"
            >
              <Globe className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="pioneer-card" data-aos="zoom-in" data-aos-delay="100">
          <img
            src="/media/team-pf/tamashii.png"
            alt="Profile Picture of Tamashii"
            className="pioneer-card-profile"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/100x100/f05689/ffffff?text=P";
            }}
          />
          <span className="pioneer-rank" style={{ backgroundColor: "#FF0040" }}>
            Founder
          </span>
          <span className="pioneer-card-name">Tamashii</span>
          <span className="pioneer-card-nickname">@tamashiimon</span>
          <p className="pioneer-card-quote">
            "I am not only a Staff but also a Player."
          </p>
          <div className="social-links flex justify-center">
            <a
              href="https://www.twitch.tv/tamashiimon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitch"
              title="Twitch Channel"
            >
              <Twitch className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/@TamashiiMon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              title="YouTube Channel"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="pioneer-card" data-aos="zoom-in" data-aos-delay="100">
          <img
            src="/media/team-pf/ezTxmMC.png"
            alt="Profile Picture of ezTxmMC"
            className="pioneer-card-profile"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/100x100/f05689/ffffff?text=P";
            }}
          />
          <span className="pioneer-rank" style={{ backgroundColor: "#75ebee" }}>
            Developer
          </span>
          <span className="pioneer-card-name">ezTxmMC</span>
          <span className="pioneer-card-nickname">@eztxmmc</span>
          <p className="pioneer-card-quote">"Developing and also playing..."</p>
          <div className="social-links flex justify-center">
            <a
              href="https://www.twitch.tv/eztxmmc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitch"
              title="Twitch Channel"
            >
              <Twitch className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/@ezTxmMC"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              title="YouTube Channel"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <section className="section-card mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Become Part of the Project!</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Interested to join CrayonSMP? Then send us an application on our
          Discord server!
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

export default Pioneers;
