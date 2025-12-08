import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Rules() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      disable: "mobile",
    });
  }, []);

  return (
    <main className="container mx-auto px-4 mt-16 md:mt-24">
      <section className="section-card" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="accent-gradient-text">Server Rules</h1>

          <div id="rules-en" className="language-rules mt-8">
            <ol className="space-y-6 text-left">
              <li>
                <strong>Copyright & Content:</strong>
                <p className="mt-1 text-gray-300">
                  By joining, you confirm that all content you create (builds,
                  models, textures, scripts) is copyright-free. Uploading or
                  sharing copyrighted content is strictly forbidden. Models and
                  textures must show effort and creativity – rushed work is not
                  welcome.
                </p>
              </li>
              <li>
                <strong>Minecraft EULA:</strong>
                <p className="mt-1 text-gray-300">
                  The official Minecraft EULA fully applies on this server.
                </p>
              </li>
              <li>
                <strong>Age-Restricted Content:</strong>
                <p className="mt-1 text-gray-300">
                  Content rated 16+ or 18+ (violence, sexual themes, excessive
                  language) is not allowed.
                </p>
              </li>
              <li>
                <strong>Promotion of NexoMaker:</strong>
                <p className="mt-1 text-gray-300">
                  You agree to positively promote NexoMaker, e.g. through
                  credits, links or logos.
                </p>
              </li>
              <li>
                <strong>Behavior & Communication:</strong>
                <p className="mt-1 text-gray-300">
                  Hate speech, insults, discrimination or toxic behavior are
                  strictly prohibited. Conflicts should be resolved respectfully
                  between participants. If necessary, involve an admin. Do not
                  share server info (IP, Discord invite, etc.) publicly without
                  permission.
                </p>
              </li>
              <li>
                <strong>Team & Special Regulations:</strong>
                <p className="mt-1 text-gray-300">
                  The admin team may apply special rules on a case-by-case
                  basis. Follow all instructions given by staff at all times.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section-card" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="accent-gradient-text">Participation Terms</h1>

          <div id="terms-en" className="language-rules mt-8">
            <ol className="space-y-6 text-left">
              <li>
                <strong>Age Requirement:</strong>
                <p className="mt-1 text-gray-300">
                  Players must be at least 16 years old to participate.
                </p>
              </li>
              <li>
                <strong>Basic Minecraft Knowledge:</strong>
                <p className="mt-1 text-gray-300">
                  A fundamental understanding of Minecraft is expected, as
                  CrayonSMP is no longer vanilla Minecraft.
                </p>
              </li>
              <li>
                <strong>Acceptance of Open Rules:</strong>
                <p className="mt-1 text-gray-300">
                  Players should be able to handle the server's open rules and
                  accept if their base is occasionally griefed.
                </p>
              </li>
              <li>
                <strong>Content Rights Grant:</strong>
                <p className="mt-1 text-gray-300">
                  By creating and contributing any content (including but not
                  limited to builds, models, textures, or scripts) on CrayonSMP,
                  you grant CrayonSMP a non-exclusive, royalty-free, worldwide
                  license to use, reproduce, modify, adapt, publish, translate,
                  create derivative works from, distribute, and display such
                  content. This ensures CrayonSMP can operate without legal
                  exposure related to user-generated content.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Rules;
