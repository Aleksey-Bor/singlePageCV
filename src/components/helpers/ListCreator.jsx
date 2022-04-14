import React from "react";

const ListCreator = (props) => {
  let data = props.arrayData;
  return (
    <ul>
      {data.map((el) => (
        <li>{el}</li>
      ))}
    </ul>
  );
};

export default ListCreator;
