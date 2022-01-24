import { FC } from 'react';

export type SidemenuTemplateComposition = {
  Aside: FC;
  Content: FC<ContentProps>;
};

export type ContentProps = {
  fullPage?: boolean;
};
