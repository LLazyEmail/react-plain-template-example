import HeadString from './display/displayHead';

import { BodyHTMLString } from './display/displayBody';

import FooterString from './display/displayFooter';

import { MainHTMLString } from './display/displayMain';

// console.log(MainHTMLString);

import displayTemplate from './t/displayTemplate';

const printTemplate = (string) => {
  displayTemplate(string);
}

const printHead = () => {
  return HeadString;
};

const printMain = () => {
  return MainHTMLString;
};

const printFooter = () => {
  return FooterString;
};

const printBody = () => {
  return BodyHTMLString;
};

export { printMain, printBody, printFooter, printHead, printTemplate };
