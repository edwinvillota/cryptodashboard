import React, { FC, useEffect } from 'react';
import { SidemenuTemplateComposition } from './SidemenuTemplate.props';
import { SideMenu } from '@components/organisms';
import { useActions, useAppSelector } from '@hooks';
import { selectCoinsState } from '@app/features/coins';
import { SplashScreen } from '@pages';
import './SidemenuTemplate.scss';

const Aside: FC = ({ children = <SideMenu /> }) => (
  <aside className="SidemenuTemplate--sidemenuWrapper">{children}</aside>
);

const Content: FC = ({ children }) => <section className="SidemenuTemplate--contentWrapper">{children}</section>;

const SidemenuTemplate: FC & SidemenuTemplateComposition = ({ children }) => {
  const actions = useActions();
  const coinsState = useAppSelector(selectCoinsState);

  useEffect(() => {
    actions.coinsRequest();
  }, []);

  if (coinsState.isLoading) return <SplashScreen />;

  return <main className="SidemenuTemplate--main">{children}</main>;
};

SidemenuTemplate.Aside = Aside;
SidemenuTemplate.Content = Content;

export default SidemenuTemplate;
