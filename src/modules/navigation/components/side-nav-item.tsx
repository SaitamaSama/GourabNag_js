import * as React from 'react';
import "../scss/side-nav-item.scss";

export interface SideNavItemProps {
  icon: React.ReactElement;
  label: string;
  active?: boolean;
}

export const SideNavItem: React.FunctionComponent<SideNavItemProps> = (props): JSX.Element => {
  return (
    <section className={`side-nav-item ${props.active && 'active'}`}>
      {React.cloneElement(props.icon, { className: 'icon' })}
      <div className="label">
        {props.label}
      </div>
    </section>
  )
}