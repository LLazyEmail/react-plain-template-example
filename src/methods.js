import HeadString from './display/displayHead';

import BodyString from './display/displayBody';

import FooterString from './display/displayFooter';

import MainString from './display/displayMain';

console.log(MainString);

const printHead = () => {
    return HeadString;
};
  
const printMain = () => {
  return MainString;
};
  
const printFooter = () => {
  return FooterString;
};
  
const printBody = () => {
  return BodyString;
};

  
export { 
  printMain, printBody, printFooter,
  printHead,  
};