import { Link } from "react-router-dom";
import { Github, MessageCircle, Mail, Activity } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="flex justify-center space-x-8 mb-6">
          <a
            href="https://github.com/CrayonSMP"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link text-lg"
          >
            <Github className="footer-icon" /> GitHub
          </a>
          <a
            href="https://discord.gg/M2M6m3j2Qf"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link text-lg"
          >
            <MessageCircle className="footer-icon" /> Discord
          </a>
          <Link to="/imprint" className="footer-link text-lg">
            <Mail className="footer-icon" /> Impressum
          </Link>
          <Link to="/rules" className="footer-link text-lg">
            <Mail className="footer-icon" /> Rules
          </Link>
          <a
            href="https://stats.uptimerobot.com/kzouirisYX"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link text-lg"
          >
            <Activity className="footer-icon" /> uptime
          </a>
        </div>
        <p>© {currentYear} CrayonSMP. All rights reserved.</p>
        <p className="text-sm mt-2">Let's build something amazing, together.</p>
      </div>
    </footer>
  );
}

export default Footer;
