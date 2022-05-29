import React from "react";
import { ButtonDefault } from "./styled";

const Button = ({
  children,
  onClick,
  value,
  key,
  title,
  buttonDefaultWidth,
  buttonDefaultBackground,
}) => {
  return (
    <ButtonDefault
      buttonDefaultWidth={buttonDefaultWidth}
      buttonDefaultBackground={buttonDefaultBackground}
      title={title}
      value={value}
      key={key}
      onClick={onClick}
      {...console.log(title)}
    >
      {children}
    </ButtonDefault>
  );
};

export default Button;
