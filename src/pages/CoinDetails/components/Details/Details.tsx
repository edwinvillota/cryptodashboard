import React, { FC } from 'react';
import { CoinProps } from '@components/organisms';
import { DetailsProps } from './Details.props';

const Details: FC<DetailsProps> = ({ coin }) => {
  return (
    <section>
      <CoinProps coin={coin} />
    </section>
  );
};

export default Details;
