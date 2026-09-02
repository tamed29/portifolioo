import abbayImg from '../assets/abbay.png';
import wuberImg from '../assets/wuber.png';
import aethelgardImg from '../assets/aethelgrad.png';
import amuImg from '../assets/amu.png';
import menuImg from '../assets/menu.png';

export const projectImageMap = {
  abbay: abbayImg,
  wuber: wuberImg,
  aethelgrad: aethelgardImg,
  amu: amuImg,
  menu: menuImg
};

export const getProjectImage = (key) => {
  return projectImageMap[key] || abbayImg;
};
