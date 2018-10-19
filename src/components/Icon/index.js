import React from 'react';

function Icon({ svg, size, className, onClick }) {
  const style = size ? {
    width: `${size}px`,
    height: `${size}px`
  } : {};
  return (
    <svg className={className} style={style} onClick={onClick}>
      <use xlinkHref={`#${svg.id}`} />
    </svg>
  );
}

export default Icon;
