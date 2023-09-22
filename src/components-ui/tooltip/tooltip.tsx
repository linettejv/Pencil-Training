import React, { FC, ReactNode } from 'react';
import { QuestionInverse } from '../icons';
import { Popper } from '../popper.tsx/popper';


export interface TooltipProps {
  PopComponent: ReactNode;
  RefComponent?: ReactNode;
}

export const Tooltip: FC<TooltipProps> = ({
  PopComponent,
  RefComponent = <QuestionInverse className="h-6 w-6 text-gray-5" />,
}) => {
  return (
    <Popper
      placement="bottom"
      popComponent={() => PopComponent}
      refComponent={() => RefComponent}
      trigger="hover"
    />
  );
};
