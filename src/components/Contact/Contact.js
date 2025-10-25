import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useLanguage } from "../../context/LanguageContext";
import "../GlobalFuturistic.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { language } = useLanguage();

  const copy = {
    en: {
      heading: {
        lead: "Contact",
        highlight: "Me",
      },
      nameLabel: "Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email",
      emailPlaceholder: "Enter your email",
      messageLabel: "Message",
      messagePlaceholder: "Enter your message",
      submit: "Send",
    },
    fr: {
      heading: {
        lead: "Contactez",
        highlight: "Moi",
      },
      nameLabel: "Nom",
      namePlaceholder: "Entrez votre nom",
      emailLabel: "Email",
      emailPlaceholder: "Entrez votre email",
      messageLabel: "Message",
      messagePlaceholder: "Entrez votre message",
      submit: "Envoyer",
    },
  };

  const text = copy[language] || copy.en;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_a091azb', 'template_hq93ohv', e.target, 'w6zAF_jeZxe0ft_gA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="section-futuristic" id="contact">
      {/* Effets de fond */}
      <div className="floating-light floating-light-1" />
      <div className="floating-light floating-light-2" />
      <div className="cyber-grid-bg" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        <div className="glass-card-futuristic p-10 animate-fade-in">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl mb-8">
            {text.heading.lead} <span className="text-gradient-futuristic">{text.heading.highlight}</span>
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-brand-text/80">
                <span>{text.nameLabel}</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={text.namePlaceholder}
                  required
                  className="input-futuristic"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-brand-text/80">
                <span>{text.emailLabel}</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={text.emailPlaceholder}
                  required
                  className="input-futuristic"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm font-medium text-brand-text/80">
              <span>{text.messageLabel}</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder={text.messagePlaceholder}
                required
                className="input-futuristic textarea-futuristic"
              />
            </label>
            <button type="submit" className="btn-futuristic-global text-sm uppercase tracking-wider">
              {text.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
