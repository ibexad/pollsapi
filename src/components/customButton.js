import React from "react";

const CustomButton = (className, ...buttonProps) => {
  return (
    <button className={className} {...buttonProps}>
      Vote!
    </button>
  );
};

export default CustomButton;
