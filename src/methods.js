import { writingFile } from 'markup-generator'


import HeadString from './display/displayHead';

import BodyString from './display/displayBody';

// import FooterString from './display/displayFooter';

import MainString from './display/displayMain';

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


const _writingFile = (content) => {

  writingFile(content, 'lit-empty')

};


  
export { 
  printMain, printBody, printFooter,
  printHead, _writingFile 
};