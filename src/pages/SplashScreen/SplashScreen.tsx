import React, { FC } from 'react';
import { Spinner } from '@components/atoms';
import './SplashScreen.scss';

const SplashScreen: FC = () => {
  return (
    <div className="SplashScreen--container">
      <article className="SplashScreen--wrapper">
        <h1 className="SplashScreen--logo">
          Crypto<em className="SplashScreen--logo-emphasys">App</em>
        </h1>
        <Spinner size={60} borderWidth={8} />
      </article>
    </div>
  );
};

export default SplashScreen;
