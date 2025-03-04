import React from 'react';

const ColorBox = ({ name, hex, textColor = 'black' }) => (
  <div 
    className="p-4 flex flex-col justify-between rounded-lg shadow-md m-2"
    style={{ 
      backgroundColor: hex,
      color: textColor
    }}
  >
    <span className="font-bold">{name}</span>
    <span className="text-sm">{hex}</span>
  </div>
);

const ColorPaletteVisualizer = () => {
  const colorGroups = [
    {
      title: 'Fixed Colors',
      colors: [
        { name: 'light-100', hex: '#FFFAFA' },
        { name: 'light-200', hex: '#EEEEFF' },
        { name: 'background-100', hex: '#0c0c0c', textColor: 'white' }
      ]
    },
    {
      title: 'Primary Colors',
      colors: [
        { name: 'primary-100', hex: '#E6F2FF' },
        { name: 'primary-200', hex: '#B3D9FF' },
        { name: 'primary-300', hex: '#4A90E2' },
        { name: 'primary-400', hex: '#2C5282', textColor: 'white' }
      ]
    },
    {
      title: 'Secondary Colors',
      colors: [
        { name: 'secondary-100', hex: '#F5F3FF' },
        { name: 'secondary-200', hex: '#E6E6FA' },
        { name: 'secondary-300', hex: '#8A92B2' },
        { name: 'secondary-400', hex: '#5A6ACF', textColor: 'white' },
        { name: 'secondary-500', hex: '#4338CA', textColor: 'white' },
        { name: 'secondary-600', hex: '#312E81', textColor: 'white' },
        { name: 'secondary-700', hex: '#1E1B4B', textColor: 'white' }
      ]
    },
    {
      title: 'Accent Colors',
      colors: [
        { name: 'accent-100', hex: '#C7D2FE' },
        { name: 'accent-200', hex: '#A5B4FC' },
        { name: 'accent-300', hex: '#818CF8' },
        { name: 'accent-400', hex: '#6366F1', textColor: 'white' }
      ]
    },
    {
      title: 'Text Colors',
      colors: [
        { name: 'on-light', hex: '#1A202C' },
        { name: 'on-dark', hex: '#E2E8F0', textColor: 'black' },
        { name: 'primary', hex: '#2C5282', textColor: 'white' },
        { name: 'secondary', hex: '#4A5568', textColor: 'white' }
      ]
    }
  ];

  return (
    <div className="p-6 pt-32 bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Nayona Brand Color Palette Visualization</h1>
      {colorGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{group.title}</h2>
          <div className="flex flex-wrap">
            {group.colors.map((color, colorIndex) => (
              <ColorBox
                key={colorIndex}
                name={color.name}
                hex={color.hex}
                textColor={color.textColor}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPaletteVisualizer;

