import React from 'react';

interface Props {
  color?: string;
};
export const NextIcon = (props: Props) => {

  const { color } = Object.assign(
    {
      color: "#6F767E",
    },
    props ,
  );

  return <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M4.79289 8.54289C5.18342 8.15237 5.81658 8.15237 6.20711 8.54289L12 14.3358L17.7929 8.54289C18.1834 8.15237 18.8166 8.15237 19.2071 8.54289C19.5976 8.93341 19.5976 9.56658 19.2071 9.9571L13.4142 15.75C12.6332 16.531 11.3668 16.531 10.5858 15.75L4.79289 9.95711C4.40237 9.56658 4.40237 8.93342 4.79289 8.54289Z" fill={color} />

  </svg>;
};
