import React, { FC } from 'react';
import { HeaderProps } from './Header.props';
import { MdArrowBack } from 'react-icons/md';
import './Header.scss';
import { useNavigate } from 'react-router-dom';

const Header: FC<HeaderProps> = ({ coinName, symbol }) => {
  const navigate = useNavigate();

  return (
    <header className="CoinDetails--header">
      <div className="CoinDetails--buttonWrapper">
        <MdArrowBack className="CoinDetails--backButton" onClick={() => navigate(-1)} />
      </div>
      <div className="CoinDetails--titleWrapper">
        <h1 className="CoinDetails--title">{coinName}</h1>
        <span className="CoinDetails--symbol">{symbol}</span>
      </div>
    </header>
  );
};

export default Header;
