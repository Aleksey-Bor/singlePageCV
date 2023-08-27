import React from "react";
import { useTranslation } from "react-i18next";
import customTranslator from "./customTranslator";

const ListCreator = (props) => {
  let data = props.arrayData;

  const { t, i18n } = useTranslation();

  return (
    <ul>
      {data.map((el) => (
        <li key={data.indexOf(el)}>{customTranslator(el, t, i18n)}</li>
      ))}
    </ul>
  );
};

export default ListCreator;
