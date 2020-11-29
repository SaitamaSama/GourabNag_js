import * as React from 'react';
import logoImg from '../images/pitchar-logo-screenshot.png';

export interface PitcharLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const PitcharLogo: React.FunctionComponent<PitcharLogoProps> = ({ width, height, className }): JSX.Element => {
  return (
    <img className={className} width={width} height={height} src={logoImg} />
  );
}