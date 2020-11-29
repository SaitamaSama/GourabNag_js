import * as React from 'react';
import "../scss/button.scss";

export interface ButtonProps {
  children: React.ReactChild;
  type: "primary" | "secondary" | "alternate" | "normal";
  size?: "normal" | "large";
}

export const Button: React.FunctionComponent<ButtonProps> = (props): JSX.Element => {
  return (
    <button className={`button v-${props.type} s-${props.size}`}>
      {props.children}
    </button>
  );
}