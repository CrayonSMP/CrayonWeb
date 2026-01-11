import { Shield, ScrollText, Palette } from "lucide-react";
import { serverRules, participationTerms } from "../data/rules";

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
              {serverRules.map((rule, index) => (
                  <div key={index} className="rule-card" data-aos="fade-up" data-aos-delay={100 + index * 50}>
                    <div className="rule-number">{rule.number}</div>
                    <h3 className="rule-title">{rule.title}</h3>
                    <p className="rule-description">{rule.description}</p>
                  </div>
              ))}
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
              {participationTerms.map((term, index) => (
                  <div key={index} className="rule-card highlight-card" data-aos="fade-up" data-aos-delay={100 + index * 50}>
                    <div
                        className="rule-number"
                        style={{ backgroundColor: "rgba(52, 152, 219, 0.2)", borderColor: "#3498db", color: "#3498db" }}
                    >
                      {term.number}
                    </div>
                    <h3 className="rule-title">{term.title}</h3>
                    <p className="rule-description">{term.description}</p>
                  </div>
              ))}
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