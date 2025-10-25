import React, { useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/CV.pdf";
import { useLanguage } from "../../context/LanguageContext";
import "../GlobalFuturistic.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const { language } = useLanguage();

  const buttonLabel = language === "fr" ? "Télécharger le CV" : "Download CV";

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <section className="section-futuristic" id="resume">
      {/* Effets de fond */}
      <div className="floating-light floating-light-1" />
      <div className="floating-light floating-light-2" />
      <div className="cyber-grid-bg" />
      
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 text-center lg:px-8">
        <a 
          href={pdf} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-futuristic-global animate-fade-in"
        >
          <AiOutlineDownload className="text-lg" /> {buttonLabel}
        </a>
        
        <div className="glass-card-futuristic w-full overflow-hidden p-6 animate-fade-in-delay">
          <Document file={pdf} className="flex justify-center" loading={null}>
            <Page 
              pageNumber={1} 
              scale={width > 786 ? 1.5 : 0.55} 
              renderTextLayer={false} 
              renderAnnotationLayer={false} 
            />
          </Document>
        </div>
        
        <a 
          href={pdf} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-futuristic-global animate-fade-in-delay"
        >
          <AiOutlineDownload className="text-lg" /> {buttonLabel}
        </a>
      </div>
    </section>
  );
}

export default ResumeNew;
