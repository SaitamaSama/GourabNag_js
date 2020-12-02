import * as React from 'react';
import "../scss/button.scss";

export interface ButtonProps {
  children: React.ReactNode;
  type: "primary" | "secondary" | "alternate" | "normal" | "outlined";
  size?: "normal" | "large";
  onClick?: () => any;
  className?: string;
  disabled?: boolean;
}

export const Button: React.FunctionComponent<ButtonProps> = (props): JSX.Element => {
  return (
    <button className={`button v-${props.type} s-${props.size} ${props.className} ${props.disabled && 'disabled'}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
}