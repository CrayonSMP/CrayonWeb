import { Shield, ScrollText, Palette } from "lucide-react";

function Rules() {

  return (
      <>
        {/* Hero Section */}
        <section className="rules-hero">
          <div className="container mx-auto px-4 text-center">
            <div data-aos="fade-up">
              <Shield className="w-20 h-20 mx-auto mb-6 text-[#ff0040]" />
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-white leading-tight">
                Community <span className="accent-gradient-text">Guidelines</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Creating a safe, creative, and respectful environment for everyone
              </p>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 mt-8">
          {/* Server Rules Section */}
          <section className="content-section" data-aos="fade-up">
            <div className="content-section-header">
              <ScrollText className="w-12 h-12 mx-auto mb-4 text-[#ff0040]" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Server <span className="accent-text">Rules</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                Please follow these rules to ensure a positive experience for all players.
              </p>
            </div>

            <div className="rules-grid">
              {/* Rule 1: Content Quality */}
              <div className="rule-card" data-aos="fade-up" data-aos-delay="100">
                <div className="rule-number">1</div>
                <h3 className="rule-title">Content & AI</h3>
                <p className="rule-description">
                  Submissions must be original or created with AI that meets our quality standards.
                  Models and textures must show effort – rushed work or low-quality AI spam is not welcome.
                </p>
              </div>

              {/* Rule 2: Behavior */}
              <div className="rule-card" data-aos="fade-up" data-aos-delay="150">
                <div className="rule-number">2</div>
                <h3 className="rule-title">Behavior & Safety</h3>
                <p className="rule-description">
                  Hate speech, insults, NSFW, or extremist content are strictly prohibited.
                  All creations must be appropriate for all ages and comply with youth protection laws.
                </p>
              </div>

              {/* Rule 3: Style Guide */}
              <div className="rule-card" data-aos="fade-up" data-aos-delay="200">
                <div className="rule-number">3</div>
                <h3 className="rule-title">Visual Style</h3>
                <p className="rule-description">
                  Custom designs should follow the official Minecraft Style Guide.
                  Maintain the blocky, pixel-based aesthetic to ensure visual consistency.
                </p>
              </div>

              {/* Rule 4: Gameplay Balance */}
              <div className="rule-card" data-aos="fade-up" data-aos-delay="250">
                <div className="rule-number">4</div>
                <h3 className="rule-title">Gameplay Balance</h3>
                <p className="rule-description">
                  All custom mechanics or items must be survival-friendly.
                  Abilities should be proportional to the difficulty of obtaining the content. No unfair advantages.
                </p>
              </div>

              {/* Rule 5: NexoMaker & Credits */}
              <div className="rule-card" data-aos="fade-up" data-aos-delay="300">
                <div className="rule-number">5</div>
                <h3 className="rule-title">Technical Standards</h3>
                <p className="rule-description">
                  Content must function correctly without causing lag or crashes.
                  Use unique file names and reasonable texture sizes (16x/32x).
                </p>
              </div>

              {/* Rule 6: Minecraft EULA */}
              <div className="rule-card" data-aos="fade-up" data-aos-delay="350">
                <div className="rule-number">6</div>
                <h3 className="rule-title">Minecraft EULA</h3>
                <p className="rule-description">
                  The official Minecraft EULA fully applies. The admin team reserves the right
                  to modify or remove content for performance or policy reasons.
                </p>
              </div>
            </div>
          </section>

          {/* Participation Terms Section */}
          <section id="terms" className="content-section" data-aos="fade-up">
            <div className="content-section-header">
              <Shield className="w-12 h-12 mx-auto mb-4 text-[#3498db]" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Participation <span className="text-[#3498db]">Terms</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                Legal requirements and conditions for participating in CrayonSMP.
              </p>
            </div>

            <div className="rules-grid">
              <div className="rule-card highlight-card" data-aos="fade-up" data-aos-delay="100">
                <div className="rule-number" style={{ backgroundColor: "rgba(52, 152, 219, 0.2)", borderColor: "#3498db", color: "#3498db" }}>1</div>
                <h3 className="rule-title">Age & Knowledge</h3>
                <p className="rule-description">
                  Players must be at least 16 years old. A fundamental understanding of
                  non-vanilla Minecraft mechanics is expected.
                </p>
              </div>

              <div className="rule-card highlight-card" data-aos="fade-up" data-aos-delay="150">
                <div className="rule-number" style={{ backgroundColor: "rgba(52, 152, 219, 0.2)", borderColor: "#3498db", color: "#3498db" }}>2</div>
                <h3 className="rule-title">Content Rights Grant</h3>
                <p className="rule-description">
                  You retain ownership, but grant CrayonSMP a non-exclusive, royalty-free, and irrevocable
                  license to use, modify, and distribute your content (builds, models, textures)
                  within the project and official media.
                </p>
              </div>

              <div className="rule-card highlight-card" data-aos="fade-up" data-aos-delay="200">
                <div className="rule-number" style={{ backgroundColor: "rgba(52, 152, 219, 0.2)", borderColor: "#3498db", color: "#3498db" }}>3</div>
                <h3 className="rule-title">Recording & Voice Rights</h3>
                <p className="rule-description">
                  You grant CrayonSMP the irrevocable right to use audio and video recordings
                  of your voice and likeness created within the project for publication (YouTube, Twitch, etc.).
                </p>
              </div>

              <div className="rule-card highlight-card" data-aos="fade-up" data-aos-delay="250">
                <div className="rule-number" style={{ backgroundColor: "rgba(52, 152, 219, 0.2)", borderColor: "#3498db", color: "#3498db" }}>4</div>
                <h3 className="rule-title">Liability & Open Rules</h3>
                <p className="rule-description">
                  CrayonSMP is not liable for technical issues or data loss caused by custom content.
                  Players accept the server's open rules, including occasional griefing.
                </p>
              </div>
            </div>
          </section>
          {/* Full Documentation Link Section */}
          <section className="mt-16 mb-12 text-center" data-aos="fade-up">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
              <Palette className="w-10 h-10 mx-auto mb-4 text-[#ff0040]" />
              <h3 className="text-2xl font-bold mb-3 text-white">Detailed Content Documentation</h3>
              <p className="text-gray-400 mb-6">
                For a full breakdown of technical requirements, asset licensing, and
                submission guidelines, please refer to our official documentation.
              </p>
              <a
                  href="https://github.com/CrayonSMP/.github/blob/main/content-rules.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff0040] hover:bg-[#d00034] text-white font-bold rounded-lg transition-all transform hover:scale-105"
              >
                <ScrollText className="w-5 h-5" />
                View Full Content Rules on GitHub
              </a>
            </div>
          </section>
        </main>
      </>
  );
}

export default Rules;