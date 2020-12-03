import React from "react";

const Link = (data, key) => {
  return (
    <li>
      <a href={data.href}>{data.name}</a>
    </li>
  );
};

export default Link;
