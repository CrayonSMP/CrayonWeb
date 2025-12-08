import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Imprint() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      disable: "mobile",
    });
  }, []);

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8" data-aos="fade-up">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Imprint / Legal Notice
      </h1>

      <h2 className="text-2xl font-bold mt-8 mb-4 border-b border-gray-700 pb-2 text-red-400">
        Information according to § 5 DDG (German Digital Services Act)
      </h2>
      <p className="text-gray-400 mb-4">
        Gianni-Finn Grollius
        <br />
        Germany
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 border-b border-gray-700 pb-2 text-red-400">
        Contact Information
      </h2>
      <p className="text-gray-400 mb-2">
        PhoneNummber: +49 1512 3380931
        <br />
        Private-Email:{" "}
        <a
          href="mailto:tamashiimon@gmail.com"
          className="text-red-400 hover:text-red-300 underline"
        >
          TamashiiMon@gmail.com
        </a>
        <br />
        Organisatsion-Email:{" "}
        <a
          href="mailto:team@crayonsmp.com"
          className="text-red-400 hover:text-red-300 underline"
        >
          team@crayonsmp.com
        </a>
      </p>
      <p className="text-gray-500 text-sm mt-1 mb-4">
        Please note that contacting us by email or via the provided phone number
        is usually the fastest method.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 border-b border-gray-700 pb-2 text-red-400">
        Responsible for journalistic-editorial content according to § 18 Abs. 2
        MStV
      </h2>
      <p className="text-gray-400 mb-4">
        Gianni-Finn Grollius
        <br />
        Germany
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 border-b border-gray-700 pb-2 text-red-400">
        EU Dispute Resolution
      </h2>
      <p className="text-gray-400 mb-4">
        The European Commission provides a platform for online dispute
        resolution (ODR):{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 hover:text-red-300 underline"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        .
      </p>
      <p className="text-gray-400 mb-2">
        You can find our email address in the Imprint above.
      </p>
      <p className="text-gray-400 mb-4">
        We are not willing or obliged to participate in dispute resolution
        proceedings before a consumer arbitration board.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 border-b border-gray-700 pb-2 text-red-400">
        Liability for Content
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        As a service provider, we are responsible for our own content on these
        pages in accordance with general laws pursuant to Section 7 (1) DDG.
        However, pursuant to Sections 8 to 10 DDG, we as a service provider are
        not obliged to monitor transmitted or stored third-party information or
        to investigate circumstances that indicate illegal activity.
      </p>
      <p className="text-gray-500 text-sm mb-4">
        Obligations to remove or block the use of information according to
        general laws remain unaffected. However, liability in this regard is
        only possible from the time of knowledge of a specific legal violation.
        If we become aware of such legal violations, we will remove this content
        immediately.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 border-b border-gray-700 pb-2 text-red-400">
        Liability for Links
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        Our offering contains links to external third-party websites, the
        content of which we have no influence over. Therefore, we cannot assume
        any liability for these external contents. The respective provider or
        operator of the pages is always responsible for the content of the
        linked pages. The linked pages were checked for possible legal
        violations at the time of linking. Illegal content was not recognizable
        at the time of linking.
      </p>
      <p className="text-gray-500 text-sm mb-4">
        However, a permanent content check of the linked pages is not reasonable
        without concrete evidence of a legal violation. If we become aware of
        legal violations, we will remove such links immediately.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 border-b border-gray-700 pb-2 text-red-400">
        Copyright
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        The content and works created by the site operators on these pages are
        subject to German copyright law. Duplication, processing, distribution,
        and any form of commercialization of such material beyond the scope of
        copyright law shall require the prior written consent of its respective
        author or creator. Downloads and copies of this site are permitted only
        for private, non-commercial use.
      </p>
      <p className="text-gray-500 text-sm mb-8">
        Insofar as the content on this site was not created by the operator, the
        copyrights of third parties are respected. In particular, third-party
        content is marked as such. Should you nevertheless become aware of a
        copyright infringement, please notify us accordingly. If we become aware
        of legal violations, we will remove such content immediately.
      </p>

      <div className="text-center mt-12 mb-8">
        <Link to="/" className="footer-link text-lg">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}

export default Imprint;
