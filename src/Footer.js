import React from "react";
import netlify from "./netlify-logo.png";
import linkedin from "./linkedin-logo.png";
import github from "./github-logo.png";
import logo from "./react-logo.jpg";
import "./Footer.css";

export default function Footer() {
  return (
    <section>
      <footer className="text-center mt-2 mb-4">
        <div className="Footer">
          <div className="footer-info">
            Want a personalized website and video for your next event?
            <div>
              Contact{" "}
              <a
                href="mailto:amelia.arku@icloud.com"
                rel="noopener noreferrer"
                alt="Contact Amelia @ amelia.arku@icloud.com"
              >
                Amelia Arku
              </a>
            </div>
            <div className="row">
              <div className="col-3">
                <img
                  src={logo}
                  alt="React"
                  width={50}
                  className="Footer-logos img-fluid"
                />
              </div>
              <div className="col-3">
                <a
                  href="https://www.linkedin.com/in/ameliaarku/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedin}
                    alt="Amelia Arku's LinkedIn"
                    className="Footer-logos img-fluid"
                  />
                </a>
              </div>
              <div className="col-3">
                <a
                  href="https://github.com/Anesiwa/elaines_birthday_site"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="Open Sourced on Github"
                >
                  <img
                    src={github}
                    alt="Amelia Arku's Github"
                    className="Footer-logos img-fluid"
                  />
                </a>
              </div>
              <div className="col-3">
                <img
                  src={netlify}
                  alt="Amelia Arku's Netlify"
                  width={30}
                  className="Footer-logos img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
