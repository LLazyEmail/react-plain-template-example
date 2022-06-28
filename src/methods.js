import { writeHTML, generateTemplateName } from 'markup-generator'
// //-----




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
  
//   const printFooter = () => {
//     return FooterString;
//   };
  
  const printBody = () => {
    return BodyString;
  };


  const writingFile = (content) => {
    if (!content) {
      throw new Error('no content was passed into writingFile method');
    }
  
    // const content  = generateEmptyTemplateComponent();
    const fileName = generateTemplateName('lit-empty');
  
    try {
      writeHTML(fileName, content);
    } catch (err) {
      //console.log(err);
      //console.log(content);
    }
  };


  
export { printMain, printBody, printHead, writingFile };