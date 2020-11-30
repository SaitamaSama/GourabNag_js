import * as React from 'react';
import "../scss/icon-input.scss";

export interface IconInputProps {
  icon: React.ReactElement<HTMLButtonElement>;
  placeholder: string;
  iconPos: "front" | "end";
  className?: string;
  disabled?: boolean;
  value?: any;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => any;
  onIconClick?: () => any;
  ref?: React.RefObject<HTMLInputElement>;
  inputClass?: string;
}

export const IconInput = React.forwardRef<
  HTMLInputElement,
  IconInputProps
>((props, fRef): JSX.Element => {
  return (
    <section className={`icon-input-container ${props.className}`}>
      {props.iconPos === "front" && React.cloneElement(props.icon, {
        className: `adornment-icon ${props.onIconClick && 'clickable'}`,
        onclick: () => props.onIconClick && props.onIconClick()
      })}
      <input
        className={`input-element icon-${props.iconPos} ${props.inputClass}`}
        placeholder={props.placeholder}
        disabled={props.disabled}
        value={props.value}
        onChange={(ev) => props.onChange && props.onChange(ev)}
        ref={fRef}
      />
      {props.iconPos === "end" && React.cloneElement(props.icon, {
        className: `adornment-icon ${props.onIconClick && 'clickable'}`
      })}
    </section>
  )
})