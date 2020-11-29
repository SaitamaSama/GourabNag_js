import * as React from 'react';

export interface InteractiveComponentProps {}

export const InteractiveComponent: React.FunctionComponent<InteractiveComponentProps> = (props): JSX.Element => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  return (
    <article className="interactive-component"></article>
  );
}