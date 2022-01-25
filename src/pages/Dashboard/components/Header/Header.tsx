import React, { FC } from 'react';
import './Header.scss';
import { Input } from '@components/atoms';
import { FiSearch } from 'react-icons/fi';
import { useAppSelector, useActions } from '@hooks';
import { selectCoinsState } from '@app/features/coins';

const Header: FC = () => {
  const coinsState = useAppSelector(selectCoinsState);
  const actions = useActions();

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    actions.setCoinsSearchKey(e.target.value);
  };

  return (
    <section className="Dashboard--header">
      <article className="Dashboard--welcome">
        <h1 className="Dashboard--welcome-title">Hello John Doe</h1>
        <caption className="Dashboard--welcome-caption">Welcome back!</caption>
      </article>
      <article className="Dashboard--search">
        <Input
          type="search"
          placeholder="Search"
          icon={<FiSearch />}
          value={coinsState.searchKey}
          onChange={onChange}
        />
      </article>
    </section>
  );
};

export default Header;
