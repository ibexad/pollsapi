import React, { useState } from "react";

const Button = props => {
  const [color, setColors] = useState("light");
  const [active, setActive] = useState(false);
  const handleClickButton = url => {
    setActive(true);
    setColors("success");
    if (active === true) {
      setActive(false);
      setColors("light");
    }
    console.log(url);
  };

  console.log(active);

  return (
    <button
      className={`btn btn-sm btn-${color}`}
      onClick={() => handleClickButton(props.url)}
    >
      {props.title}
    </button>
  );
};

export default Button;
