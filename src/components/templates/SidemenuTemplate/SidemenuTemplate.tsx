import React, { FC } from 'react';
import clx from 'classnames';
import { SidemenuTemplateComposition, ContentProps } from './SidemenuTemplate.props';
import { SideMenu } from '@components/organisms';
import { useAppSelector } from '@hooks';
import { selectCoinsState } from '@app/features/coins';
import { SplashScreen } from '@pages';
import './SidemenuTemplate.scss';

const Aside: FC = ({ children = <SideMenu /> }) => (
  <aside className="SidemenuTemplate--sidemenuWrapper">{children}</aside>
);

const Content: FC<ContentProps> = ({ children, fullPage }) => (
  <section
    className={clx('SidemenuTemplate--contentWrapper', { 'SidemenuTemplate--contentWrapper-fullPage': fullPage })}
  >
    {children}
  </section>
);

const SidemenuTemplate: FC & SidemenuTemplateComposition = ({ children }) => {
  const coinsState = useAppSelector(selectCoinsState);

  if (coinsState.isLoading) return <SplashScreen />;

  return <main className="SidemenuTemplate--main">{children}</main>;
};

SidemenuTemplate.Aside = Aside;
SidemenuTemplate.Content = Content;

export default SidemenuTemplate;
