import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Rocket,
  Info,
  Pencil,
  Code2,
  Github,
  UsersRound,
  Heart,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      disable: "mobile",
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div id="particles-js"></div>
        <div className="hero-content container mx-auto px-4" data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-white leading-tight">
            Welcome to <span className="accent-gradient-text">CrayonSMP</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            The Minecraft server where{" "}
            <strong className="text-white font-semibold">
              your creativity
            </strong>{" "}
            directly shapes the world. Design, build, and integrate your own
            content!
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://discord.gg/M2M6m3j2Qf"
              className="cta-button primary w-full sm:w-auto"
            >
              <Rocket className="w-5 h-5" />
              <span>Join the Adventure</span>
            </a>
            <a href="#about" className="cta-button secondary w-full sm:w-auto">
              <Info className="w-5 h-5" />
              <span>Learn More</span>
            </a>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 mt-16 md:mt-24">
        {/* About Section */}
        <section id="about" className="feature-section" data-aos="fade-right">
          <div className="feature-text">
            <h3 className="accent-text">What is CrayonSMP?</h3>
            <p>
              CrayonSMP isn't just another Minecraft SMP. It's a collaborative
              canvas where the community holds the brush. We provide the tools,
              you provide the imagination. Build structures, embark on quests,
              and survive – all while adding your unique touch through custom
              items and blocks created via NexoMaker.
            </p>
            <p className="mt-4">
              Experience a truly dynamic and evolving world shaped by its
              players.
            </p>
          </div>
          <div
            className="feature-image"
            data-aos="zoom-in-left"
            data-aos-delay="200"
          >
            <img
              src="/media/CrayonBanner.png"
              alt="CrayonSMP World"
              className="rounded-lg shadow-xl"
            />
          </div>
        </section>

        {/* How it Works Section */}
        <section
          id="how-it-works"
          className="feature-section"
          data-aos="fade-left"
        >
          <div
            className="feature-image"
            data-aos="zoom-in-right"
            data-aos-delay="200"
          >
            <video
              src="/media/nexomaker.mp4"
              className="rounded-lg shadow-xl"
              controls
              playsInline
            />
          </div>
          <div className="feature-text">
            <h3 className="accent-text">Create with NexoMaker</h3>
            <p>
              Unleash your inner game designer! With{" "}
              <strong className="text-blue-400 hover:text-blue-300 transition">
                NexoMaker
              </strong>
              , our partner application, you can easily design 3D models,
              textures, and custom behaviors for items and blocks. No complex
              coding required.
            </p>
            <p className="mt-4">
              Submit your creations, and once approved, see them come alive in
              the CrayonSMP world. Access is{" "}
              <strong className="text-green-400">
                completely free for the project's lifetime
              </strong>{" "}
              (GitHub account needed for submissions).
            </p>
            <div className="mt-6">
              <a href="https://nexomaker.com/" className="cta-button secondary">
                <Pencil className="w-5 h-5" />
                <span>Start Creating</span>
              </a>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section
          id="plugins"
          className="section-card text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core <span className="accent-text">Technology</span>
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
            We leverage powerful plugins to make the magic happen. A GitHub
            account is needed for content and code contributions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span
              className="plugin-tag"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <a href="https://polymart.org/product/7624/craftengine">
                CraftEngine
              </a>
            </span>
            <span
              className="plugin-tag"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <a href="https://mythiccraft.io/index.php?resources/model-engine%E2%80%94ultimate-entity-model-manager-1-19-4-1-21-4.1213/">
                ModelEngine
              </a>
            </span>
            <span
              className="plugin-tag"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <a href="https://mythiccraft.io/index.php?resources/mythicmobs.1/">
                MythicMobs
              </a>
            </span>
            <span
              className="plugin-tag"
              data-aos="zoom-in"
              data-aos-delay="250"
            >
              <a href="https://mythiccraft.io/index.php?resources/crucible-custom-items-armor-furniture-blocks-more.2/">
                MythicCrucible
              </a>
            </span>
            <span
              className="plugin-tag"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <a href="https://polymart.org/product/2978/storagemechanic">
                StorageMechanic
              </a>
            </span>
            <span
              className="plugin-tag"
              data-aos="zoom-in"
              data-aos-delay="350"
            >
              <a href="https://github.com/CrayonSMP">
                <Github className="w-4 h-4" /> GitHub Integration
              </a>
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Minecraft Java Edition (Latest Recommended) required to play.
          </p>
        </section>

        {/* Developers Section */}
        <section
          id="developers"
          className="section-card bg-linear-to-br from-pink-900/20 via-transparent to-transparent border-pink-500/30 hover:border-pink-500/60"
          data-aos="fade-up"
        >
          <div className="text-center">
            <Code2 className="w-12 h-12 mx-auto mb-4 text-pink-400" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Calling All <span className="text-pink-400">Developers</span>!
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
              Passionate about Java and Minecraft? Help us shape the future of
              CrayonSMP! Contribute to our open-source{" "}
              <strong className="text-pink-300">CrayonDefault</strong> on GitHub.
              Build features, squash bugs, and optimize the experience.
            </p>
            <a
              href="https://github.com/CrayonSMP/CrayonSystem"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button secondary border-pink-500 text-pink-400 hover:bg-pink-500/10 hover:border-pink-400 hover:text-pink-300"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners" className="section-card" data-aos="fade-up">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="accent-text">Partners</span>
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
              We are proud to collaborate with leading services to bring you the
              best possible experience.
            </p>
            <div className="partner-grid">
              <a
                href="https://www.nexomaker.com/ref/CRAYONSMP"
                target="_blank"
                rel="noopener noreferrer"
                className="partner-card"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <img
                  src="/media/NexoMaker-Logo.png"
                  alt="NexoMaker Logo"
                  className="partner-logo"
                />
                <h3 className="partner-name">NexoMaker</h3>
                <p className="partner-description">
                  The official tool for creating custom content for CrayonSMP.
                </p>
              </a>

              <a
                href="https://bluenet-hosting.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="partner-card"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img
                  src="/media/BlueNetHostingLogo.png"
                  alt="BlueNet Hosting Logo"
                  className="partner-logo"
                />
                <h3 className="partner-name">BlueNet Hosting</h3>
                <p className="partner-description">
                  Providing reliable, low-latency, and powerful server
                  infrastructure.
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* The Team Section */}
        <section
          id="the-team"
          className="section-card bg-linear-to-br from-pink-900/20 via-transparent to-transparent border-pink-500/30 hover:border-pink-500/60"
        >
          <div className="text-center">
            <UsersRound className="w-12 h-12 mx-auto mb-4 text-pink-400" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Amazing <span className="text-pink-400">Team</span>
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
              Behind every great community is a dedicated team. Get to know the
              passionate staff and community managers who keep CrayonSMP running
              smoothly every day.
            </p>
            <Link
              to="/team"
              className="cta-button secondary border-pink-500 text-pink-400 hover:bg-pink-500/10 hover:border-pink-400 hover:text-pink-300"
            >
              <Heart className="w-5 h-5" />
              <span>View The Team</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
