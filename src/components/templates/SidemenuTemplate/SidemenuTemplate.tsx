import React, { FC } from 'react';
import { SidemenuTemplateComposition } from './SidemenuTemplate.props';
import { SideMenu } from '@components/organisms';
import './SidemenuTemplate.scss';

const Aside: FC = ({ children = <SideMenu /> }) => (
  <aside className="SidemenuTemplate--sidemenuWrapper">{children}</aside>
);

const Content: FC = ({ children }) => <section className="SidemenuTemplate--contentWrapper">{children}</section>;

const SidemenuTemplate: FC & SidemenuTemplateComposition = ({ children }) => {
  return <main className="SidemenuTemplate--main">{children}</main>;
};

SidemenuTemplate.Aside = Aside;
SidemenuTemplate.Content = Content;

export default SidemenuTemplate;
