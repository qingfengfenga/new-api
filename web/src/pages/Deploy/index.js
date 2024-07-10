import React from 'react';

const Deploy = () => {
  const deployLink = localStorage.getItem('deploy_link');

  return (
    <iframe
      src={deployLink}
      style={{ width: '100%', height: '85vh', border: 'none' }}
    />
  );
};

export default Deploy;
