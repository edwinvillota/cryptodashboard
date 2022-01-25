import React, { FC } from 'react';
import { InputProps } from './Input.props';
import clx from 'classnames';
import './Input.scss';

const Input: FC<InputProps> = ({ className, icon, ...props }) => {
  return (
    <div aria-label="input-wrapper" className={clx('Input--wrapper', className)}>
      <input {...props} className="Input--input" />
      {icon}
    </div>
  );
};

export default Input;
