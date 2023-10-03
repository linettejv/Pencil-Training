import React, { FC } from 'react';

export interface SpinnerProps {
  colour?: string;
  height?: string;
}

export const Spinner: FC<SpinnerProps> = ({
  colour = 'bg-purple-5',
  height = '',
}) => {
  return (
    <div
      className={`flex-grow w-full ${height} flex flex-row justify-center items-center`}
    >
      <div className="spinner">
        <div className={`bounce1 ${colour}`} />
        <div className={`bounce2 ${colour}`} />
        <div className={`bounce3 ${colour}`} />
      </div>
    </div>
  );
};
