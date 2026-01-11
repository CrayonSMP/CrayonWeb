
import { Code2, Zap, Github, Cpu, Box, Layers } from "lucide-react";

function Technology() {
    const categories = [
        {
            title: "Core Infrastructure",
            icon: Cpu,
            description: "The backbone of the server, providing the framework for custom logic and automated deployment workflows.",
            plugins: [
                {
                    name: "CraftEngine",
                    url: "https://polymart.org/product/7624/craftengine",
                    icon: "https://images.polymart.org/product/7624/thumbnail.png?t=1745254035&v=3",
                    description: "A robust scripting API used to develop custom gameplay features and server-side logic with high performance.",
                    tag: "Core Framework"
                },
                {
                    name: "GitHub Integration",
                    url: "https://github.com/CrayonSMP",
                    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
                    description: "Enables version-controlled configuration management, allowing seamless updates and deployment from remote repositories.",
                    tag: "DevOps"
                }
            ]
        },
        {
            title: "Visuals & Immersion",
            icon: Layers,
            description: "Tools focused on bypassing vanilla limitations to deliver high-fidelity 3D assets and custom interfaces.",
            plugins: [
                {
                    name: "ModelEngine",
                    url: "https://mythiccraft.io/index.php?resources/model-engine",
                    icon: "https://mythiccraft.io/data/resource_icons/1/1213.jpg",
                    description: "Implements advanced 3D model rendering for entities, supporting complex animations and bone-based structures.",
                    tag: "Rendering"
                },
                {
                    name: "MythicCrucible",
                    url: "https://mythiccraft.io/index.php?resources/crucible-custom-items-armor-furniture-blocks-more.2/",
                    icon: "https://mythiccraft.io/data/resource_icons/0/2.jpg",
                    description: "A toolkit for designing custom items, placeable furniture, and interactive blocks with unique properties.",
                    tag: "Assets"
                }
            ]
        },
        {
            title: "Gameplay Mechanics",
            icon: Box,
            description: "Systems that define player interaction, entity behavior, and advanced utility functions.",
            plugins: [
                {
                    name: "MythicMobs",
                    url: "https://mythiccraft.io/index.php?resources/mythicmobs.1/",
                    icon: "https://mythiccraft.io/data/resource_icons/0/1.jpg",
                    description: "A powerful mob-creation engine using a scripted skill system to create unique boss fights and custom AI.",
                    tag: "AI Systems"
                },
                {
                    name: "StorageMechanic",
                    url: "https://polymart.org/product/2978/storagemechanic",
                    icon: "https://images.polymart.org/product/2978/thumbnail.png?t=1693450155&v=3",
                    description: "Provides advanced inventory systems, including specialized containers, portable storage, and GUI-driven sorting.",
                    tag: "Utility"
                }
            ]
        }
    ];

    return (
        <main className="min-h-screen">
            <section className="hero-section" style={{ minHeight: '40vh' }}>
                <div className="hero-content container mx-auto px-4">
                    <div data-aos="fade-up">
                        <Code2 className="w-20 h-20 mx-auto mb-6 text-[#ff0040]" />
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight">
                            Our <span className="accent-gradient-text">Tech Stack</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Discover the innovation powering CrayonSMP. We leverage the most advanced
                            plugins to deliver a modded experience on a vanilla client.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                {categories.map((category, idx) => (
                    <section key={idx} className="mb-24" data-aos="fade-up">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-[#ff0040]/10">
                                <category.icon className="w-8 h-8 text-[#ff0040]" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                                <p className="text-gray-400">{category.description}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {category.plugins.map((plugin, pIdx) => (
                                <div key={pIdx} className="tech-card text-left items-start p-10 bg-gradient-to-br from-[#1e1e1e] to-[#161616] border-white/5 hover:border-[#ff0040]/30 transition-all duration-500 shadow-2xl">
                                        <div className="flex justify-between items-center w-full mb-6">
                                            <div className="w-16 h-16 rounded-2xl bg-white/5 p-2 border border-white/10 overflow-hidden shadow-inner">
                                                <img 
                                                    src={plugin.icon} 
                                                    alt={plugin.name} 
                                                    className="w-full h-full object-contain"
                                                    onError={(e) => {
                                                        e.currentTarget.src = "https://placehold.co/64x64/1e1e1e/white?text=P";
                                                    }}
                                                />
                                            </div>
                                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff0040]/80 bg-[#ff0040]/5 border border-[#ff0040]/20 px-4 py-1.5 rounded-full">
                                              {plugin.tag}
                                            </span>
                                        </div>
                                    <h3 className="text-3xl font-bold mb-4 tracking-tight">
                                        <a href={plugin.url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff0040] transition-colors duration-300">
                                            {plugin.name}
                                        </a>
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-8 font-medium opacity-80">
                                        {plugin.description}
                                    </p>
                                    <a href={plugin.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm font-bold text-[#ff0040] uppercase tracking-wider">
                                        Documentation
                                        <Zap className="w-4 h-4 group-hover:scale-125 transition-transform" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}

                <section id="developers" className="content-section" data-aos="fade-up">
                    <div className="content-section-header">
                        <Code2 className="w-12 h-12 mx-auto mb-4 text-[#e91e63]" />
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Calling All <span className="text-[#e91e63]">Developers</span>!
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                            Join our open-source community and help shape the future of
                            CrayonSMP
                        </p>
                    </div>
                    <div className="developer-section-content">
                        <div
                            className="developer-card highlight-card"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                            <Github className="w-16 h-16 mx-auto mb-6 text-[#e91e63]" />
                            <h3 className="text-2xl font-bold mb-4 text-white">
                                Contribute to the CrayonSMP Systems
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Passionate about Java and Minecraft? Help us build amazing
                                features, squash bugs, and optimize the experience. Our{" "}
                                <strong className="text-[#e91e63]">CrayonDefault</strong>{" "}
                                repository is open for contributions!
                            </p>
                            <div className="developer-stats mb-6">
                                <div className="stat-item">
                                    <div className="stat-value">Open Source</div>
                                    <div className="stat-label">100% Free</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-value">Java</div>
                                    <div className="stat-label">Language</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-value">Active</div>
                                    <div className="stat-label">Development</div>
                                </div>
                            </div>
                            <a
                                href="https://github.com/CrayonSMP"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button primary"
                            >
                                <Github className="w-5 h-5" />
                                <span>View on GitHub</span>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Technology;