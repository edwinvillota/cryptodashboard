import React, { FC } from 'react';
import { ButtonProps } from './Button.props';
import clx from 'classnames';
import './Button.scss';

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={clx('Button--button', className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
