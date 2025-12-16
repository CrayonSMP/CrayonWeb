import React, { useEffect } from "react";
import {
  assetData,
  type AssetItem,
  type AssetType,
  type PreviewType,
} from "../data/assets";

import { FaDownload, FaFileArchive, FaFilePdf, FaImage } from "react-icons/fa";
import { FileIcon, FileText } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Assets = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      disable: "mobile",
    });
  }, []);

  const TypeBadge: React.FC<{ type: AssetType }> = ({ type }) => {
    const colorMap: Record<AssetType, string> = {
      png: "bg-green-500",
      svg: "bg-blue-500",
      zip: "bg-red-500",
      jpg: "bg-yellow-500",
      pdf: "bg-purple-500",
    };

    return (
      <span
        className={`px-2 py-0.5 rounded text-sm font-semibold text-white uppercase ${colorMap[type]}`}
      >
        {type}
      </span>
    );
  };

  const AssetPreview: React.FC<{ preview: PreviewType }> = ({ preview }) => {
    if (preview.type === "image") {
      return (
        <img
          src={preview.path}
          alt="Preview"
          className="w-full h-32 object-contain rounded-lg"
        />
      );
    } else if (preview.type === "icon") {
      let IconComponent;
      switch (preview.name) {
        case "FaFileArchive":
          IconComponent = FaFileArchive;
          break;
        case "FaFilePdf":
          IconComponent = FaFilePdf;
          break;
        default:
          IconComponent = FaImage;
      }

      return (
        <div className="w-full h-32 flex items-center justify-center bg-gray-800 rounded-lg">
          <IconComponent className="text-6xl text-gray-400" />
        </div>
      );
    }
    return null;
  };

  // Find the style guide asset (adjust the condition as needed)
  const styleGuideAsset = assetData.find((asset) =>
    asset.name.toLowerCase().includes("style guide")
  );

  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 md:px-8">
      <header className="py-16 md:py-24 text-center" data-aos="fade-up">
        <FileIcon className="w-12 h-12 mx-auto mb-4 text-(--accent-color)" />
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Official <span className="accent-gradient-text">Assets</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          All official Crayon logos, brand kits, and style guides for media and
          partners for direct download.
        </p>
      </header>

      <section className="mb-16">
        <div className="assets-grid">
          {assetData.map((asset: AssetItem, index) => (
            <div
              key={asset.id}
              className="pioneer-card-enhanced"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <AssetPreview preview={asset.preview} />

              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold text-white">
                    {asset.name}
                  </h2>
                  <TypeBadge type={asset.type} />
                </div>

                <p className="text-gray-400 mb-4 text-sm">
                  {asset.description}
                </p>

                <a
                  href={asset["download-path"]}
                  download
                  className="cta-button primary w-full"
                >
                  <FaDownload className="mr-2 h-4 w-4" />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card text-center mb-16" data-aos="fade-up">
        <FileText className="w-12 h-12 mx-auto mb-4 text-(--accent-color)" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Questions about Branding?
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          If you require detailed guidelines, please consult our Style Guide.
        </p>
        <a
          href={styleGuideAsset ? styleGuideAsset["download-path"] : "#"}
          className="cta-button primary"
        >
          <FileText className="w-5 h-5 mr-2" />
          <span>View Style Guide</span>
        </a>
      </section>
    </main>
  );
};

export default Assets;
