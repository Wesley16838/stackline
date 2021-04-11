import React from "react";
import "./style.scss";

const Tag = (props: { name: string }) => {
  return <div className="tag-container">{props.name}</div>;
};

export default Tag;
