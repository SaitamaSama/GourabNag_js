import * as React from 'react';
import "../scss/icon-input.scss";

export interface IconInputProps {
  icon: React.ReactElement<HTMLButtonElement>;
  placeholder: string;
}

export const IconInput: React.FunctionComponent<IconInputProps> = (props): JSX.Element => {
  return (
    <section className="icon-input-container">
      {React.cloneElement(props.icon, { className: "adornment-icon" })}
      <input className="input-element" placeholder={props.placeholder} />
    </section>
  )
}