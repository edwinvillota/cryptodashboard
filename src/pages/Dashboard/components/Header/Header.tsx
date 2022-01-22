import React, { FC } from 'react';
import './Header.scss';
import { Input } from '@components/atoms';
import { FiSearch } from 'react-icons/fi';

const Header: FC = () => {
  return (
    <section className="Dashboard--header">
      <article className="Dashboard--welcome">
        <h1 className="Dashboard--welcome-title">Hello John Doe</h1>
        <caption className="Dashboard--welcome-caption">Welcome back!</caption>
      </article>
      <article className="Dashboard--search">
        <Input type="search" placeholder="Search" icon={<FiSearch />} />
      </article>
    </section>
  );
};

export default Header;
