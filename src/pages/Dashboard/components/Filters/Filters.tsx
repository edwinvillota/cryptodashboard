import React, { FC } from 'react';
import { Button } from '@components/atoms';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdSort } from 'react-icons/md';
import './Filters.scss';

const Filters: FC = () => {
  return (
    <div className="Filters--wrapper">
      <Button>
        Add Filter <AiOutlinePlus />
      </Button>
      <Button>
        <MdSort />
      </Button>
    </div>
  );
};

export default Filters;
