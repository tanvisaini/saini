import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import aboutIcon from '../assets/icons/me.svg';
import contactIcon from '../assets/icons/contact.svg';
import experienceIcon from '../assets/icons/experience.svg';
import homeIcon from '../assets/icons/home.svg';
import heartIcon from '../assets/icons/heart.svg';
import closeIcon from '../assets/icons/close.svg';
import openIcon from '../assets/icons/hamburger.svg';
import './MenuWrapper.css'; // Import your CSS for styling

const menuData = [
  {
    color: '#15280b',
    icon: heartIcon,
    path: '/passion',
  },
  {
    color: '#083d4c',
    icon: aboutIcon,
    path: '/about',
  },
  {
    color: '#b45f06',
    icon: contactIcon,
    path: '/',
  },
  {
    color: '#660000',
    icon: homeIcon,
    path: '/',
  },
  {
    color: '#4c1130',
    icon: experienceIcon,
    path: '/recentwork',
  },
];

const MenuWrapper = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    makeMenu(menuData);
  }, []);

  const makeMenu = (menuConfig) => {
    const angle = 360 / menuConfig.length;
    let rotation = 0;
    const menuItems = menuConfig.map(({ color, icon, path }) => {
      const item = {
        color,
        icon,
        path,
        rotation,
        angle,
        show: false,
      };
      rotation += angle;
      return item;
    });

    setMenuItems(menuItems);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const animateButtons = () => {
    const length = menuItems.length;

    const stagger = (i) => {
      if (i < length) {
        setTimeout(() => {
          const items = [...menuItems];
          items[i].show = !items[i].show;
          setMenuItems(items);
          stagger(i + 1);
        }, 60 * i);
      }
    };

    stagger(0);
  };
  const handleClick =(path) => {
    setMenuOpen(!menuOpen);
    animateButtons();
    navigate(path);
  };

  return (
    <div>
      <MenuToggle toggle={toggleMenu} open={menuOpen} animateButtons={animateButtons} />
      <Menu size={16} items={menuItems} open={menuOpen} handleClick={handleClick}/>
    </div>
  );
};

const Menu = ({ size, items, open, handleClick }) => (
  <div className={open ? 'menu-wrapper-open' : 'menu-wrapper-closed'}>
    <div className="menu-background">
      <MenuItems size={size} items={items} open={open} handleClick={handleClick}/>
    </div>
  </div>
);

const MenuItems = ({ size, items, open, handleClick }) => {
  
  const buttons = items.map((item, index) => {
    const styling = {
      transform: `rotate(${item.rotation}deg) translate(${size / 2}em) rotate(${-item.rotation}deg)`,
      backgroundColor: item.color,
    };

    return (
      <div
        key={index}
        className={item.show ? 'menu-item item-show' : 'menu-item item-hide'}
        style={styling}
        onClick={()=> handleClick(item.path)}
      >
        <i className={`fa ${item.icon}`} aria-hidden="true"></i>
        <img src={item.icon} className="menu-icon" />
      </div>
    );
  });

  return <div className={open ? 'button-bg animate-menu' : 'button-bg'}>{buttons}</div>;
};

const MenuToggle = ({ toggle, open, animateButtons }) => (
  <button
    className={open ? 'menu-toggle toggle-open' : 'menu-toggle toggle-closed'}
    onClick={() => {
      toggle();
      setTimeout(animateButtons, 120);
    }}
  >
    <i className={open ? 'fa fa-times' : 'fa fa-bars'} aria-hidden="true"></i>
    <img src={open ? closeIcon : openIcon} aria-hidden="true" />
  </button>
);

export default MenuWrapper;
