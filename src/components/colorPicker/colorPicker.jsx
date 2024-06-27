import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import './colorPicker.scss';

const colorOptions = [
  { id: 1, colors: ['#151a2c', '#3d445a', '#262c3f', '#fff', '#8884d8'] },
  { id: 2, colors: ['#f3f3f3', '#efefef', '#e3e3e3', '#000000', '#000000'] },
  { id: 3, colors: ['#ffe5b4', '#e5c397', '#d2b48c', '#000000', '#000000'] }
];

const ColorPicker = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const activeColors = colorOptions[activeIndex].colors;
    root.style.setProperty('--background', activeColors[0]);
    root.style.setProperty('--middleground', activeColors[1]);
    root.style.setProperty('--foreground', activeColors[2]);
    root.style.setProperty('--text-color', activeColors[3]);
    root.style.setProperty('--active-hover-color', activeColors[4]);
  }, [activeIndex]);

  const handleOptionClick = (index) => {
    setActiveIndex(index);
  };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className='color-picker-wrapper'>
      {colorOptions.map((optionSet, index) => (
        <div
          key={optionSet.id}
          className={`color-picker-option ${visible ? 'visible' : ''} ${index === activeIndex ? 'active' : ''}`}
          onClick={() => handleOptionClick(index)}
        >
          {optionSet.colors.map((color, colorIndex) => (
            <div 
              key={colorIndex} 
              className="color-picker-color" 
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      ))}
      <button className='color-picker-button' onClick={toggleVisibility}><FontAwesomeIcon icon={faPalette} title='Pick Color' size='xl'/></button>
    </div>
  );
};

export default ColorPicker;
