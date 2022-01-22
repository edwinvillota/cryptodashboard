import React, { FC } from 'react';
import { SpinnerProps } from './Spinner.props';
import './Spinner.scss';

const Spinner: FC<SpinnerProps> = ({ size = 50, borderWidth = 4, spinning = true }) => {
  const spinnerStyle = {
    '--component-spinner-size': `${size}px`,
    '--component-spinner-border-width': `${borderWidth}px`,
    '--component-spinner-state': spinning ? 'running' : 'paused',
  } as React.CSSProperties;

  return <div className="Spinner--container" style={spinnerStyle}></div>;
};

export default Spinner;
