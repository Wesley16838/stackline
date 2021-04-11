import React from "react";
import "./style.scss";

const Item = (props: { url: any; title: string; detail: string }) => {
  const { url, title, detail } = props;

  return (
    <div className="item-container">
      <img src={url} className="item-image" />
      <h2>{title}</h2>
      <p>{detail}</p>
    </div>
  );
};

export default Item;
