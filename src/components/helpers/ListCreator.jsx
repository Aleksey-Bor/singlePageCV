import React from "react";

const ListCreator = (props) => {
  let data = props.arrayData;
  return (
    <ul>
      {data.map((el) => (
        <li key={data.indexOf(el)}>{el}</li>
      ))}
    </ul>
  );
};

export default ListCreator;
