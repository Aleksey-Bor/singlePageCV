import React from "react";
import avatar from "../assets/avatar.jpg";
import { useTranslation } from "react-i18next";
import cvRu from "../assets/CV-BARKOUSKI _ru.docx";
import cvEn from "../assets/CV-BARKOUSKI_en.docx";

const BusinessCard = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="businessCard">
      <div className="contacts">
        <h1 className="name">{t("name")}</h1>
        <p className="contact">
          Phone: <a href="tel:+375291471834">+37529 147-18-34</a>
        </p>
        <p className="contact">
          Email: <a href="mailto:aborki@gmail.com">aborki@gmail.com</a>
        </p>
        <p className="contact">
          Skype: <a href="skype:live:aborki_1">live:aborki_1</a>
        </p>
        <p className="contact">
          Linkedin:{" "}
          <a
            href="http://www.linkedin.com/in/aliaksei-barkouski-4972b2ba"
            target="_blank"
            rel="noreferrer"
          >
            Link to Linkedin
          </a>
        </p>
        <p>
          {i18n.language === "en" ? (
            <a href={cvEn} download>
              Download CV.docx(ENG)
            </a>
          ) : (
            <a href={cvRu} download>
              Скачать CV.docx(РУС)
            </a>
          )}
        </p>
      </div>
      <div className="avatarWrapper">
        <img
          className="avatar"
          src={avatar}
          alt="react developer: Aliaksey Barkouski"
        />
      </div>
    </div>
  );
};

export default BusinessCard;
