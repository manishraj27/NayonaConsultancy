import React from 'react';

const MeshGradient = ({ className = '' }) => {
  return (
    <div 
      className={`absolute inset-0 z-[-1] bg-gradient-to-br from-blue-500/50 via-purple-500/50 to-white/50 
        opacity-80 blur-[100px] animate-gradient-x ${className}`}
      style={{
        background: `
          radial-gradient(circle at 30% 107%, rgba(143,210,238,0.6) 0%, rgba(143,210,238,0) 40%),
          radial-gradient(circle at 70% 20%, rgba(160,130,240,0.6) 0%, rgba(160,130,240,0) 50%),
          radial-gradient(circle at 20% 50%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)
        `,
        backgroundBlendMode: 'overlay',
        animation: 'gradientAnimation 15s ease infinite',
        backgroundSize: '200% 200%'
      }}
    />
  );
};

export default MeshGradient;