import React from 'react';

type OverlayProps = {
  searching: string;
  clickHandler: () => void;
};

const Overlay: React.FC<OverlayProps> = ({ searching, clickHandler }) => {
  const classes = searching === '' ? 'hidden' : '';
  return (
    <div
      className={`overlay-container ${classes}`}
      onClick={clickHandler}
    ></div>
  );
};

export default Overlay;
