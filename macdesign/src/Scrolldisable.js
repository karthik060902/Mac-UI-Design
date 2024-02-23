import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsThreeDots } from "react-icons/bs";

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

export default function LongMenu() {
  const [dummy, setDummy] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleClick = (event) => {
    setDummy(event.currentTarget);
  };

  const handleClose = () => {
    setDummy(null);
    setShowAll(false);
  };

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div>
      <BsThreeDots onClick={handleClick}/>
      <Menu
        id="long-menu"
        anchorEl={dummy}
        open={Boolean(dummy)}
        onClose={handleClose}
      >
        {options.slice(0, showAll ? options.length : 6).map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
        {!showAll && (
          <MenuItem onClick={handleShowAll}>
            Show All
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}
