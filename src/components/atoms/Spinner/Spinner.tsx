import React, { FC } from 'react';
import clx from 'classnames';
import { SpinnerProps } from './Spinner.props';
import './Spinner.scss';

const Spinner: FC<SpinnerProps> = ({ size = 50, borderWidth = 4, spinning = true, className }) => {
  const spinnerStyle = {
    '--component-spinner-size': `${size}px`,
    '--component-spinner-border-width': `${borderWidth}px`,
    '--component-spinner-state': spinning ? 'running' : 'paused',
  } as React.CSSProperties;

  return <div className={clx('Spinner--container', className)} style={spinnerStyle} />;
};

export default Spinner;
