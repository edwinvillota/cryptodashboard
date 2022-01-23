import React, { FC } from 'react';
import clx from 'classnames';
import { ChangeIndicatorProps } from './ChangeIndicator.props';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import './ChangeIndicator.scss';

const ChangeIndicator: FC<ChangeIndicatorProps> = ({ value, frequency }) => {
  const isDown = value.includes('-');
  const icon = isDown ? (
    <MdKeyboardArrowDown className={clx('ChangeIndicator--icon', 'ChangeIndicator--icon-down')} />
  ) : (
    <MdKeyboardArrowUp className={clx('ChangeIndicator--icon', 'ChangeIndicator--icon-up')} />
  );

  return (
    <div className="ChangeIndicator--container">
      {icon}
      <span
        className={clx('ChangeIndicator--value', isDown ? 'ChangeIndicator--value-down' : 'ChangeIndicator--value-up')}
      >
        {value}
      </span>
      <span className="ChangeIndicator--frequency">{`(${frequency})`}</span>
    </div>
  );
};

export default ChangeIndicator;
