import React from "react";

const Objective = ({t}) => {
  return (
    <section>
      <h3 className="header">{t("objective")}</h3>
      <p className="content">{t("objective.text")}</p>
    </section>
  );
};

export default Objective;
