import React, { useContext } from "react";
import { CERTIFICATES } from "../constants";
import "./css/Certificates.css";
import { LanguageContext } from "../context/LanguageContext";

const Certificates = () => {
    const { language } = useContext(LanguageContext);

    return (
        <section className="certificates-section border-b border-neutral-800" id="certificates">
            <h2 className="certificates-title">
                {language === "PT" ? "Os Meus Certificados" : "My Certificates"}
            </h2>
            <div className="certificates-grid">
                {CERTIFICATES.map((certificate) => (
                    <div key={certificate.id} className="certificate-card">
                        <img
                            src={certificate.image}
                            alt={certificate.title}
                            className="certificate-image"
                        />
                        <div className="certificate-info">
                            <h3>{certificate.title}</h3>
                            <p>
                                {language === "PT"
                                    ? `Emitido por: ${certificate.issuer}`
                                    : `Issued by: ${certificate.issuer}`}
                            </p>
                            <p>
                                {language === "PT"
                                    ? `Data: ${certificate.date}`
                                    : `Date: ${certificate.date}`}
                            </p>
                            <a
                                href={certificate.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="view-certificate-btn"
                            >
                                {language === "PT" ? "Ver Certificado" : "View Certificate"}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
