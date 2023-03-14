import { printMain,  printFooter, printBody, printHead } from '../src/methods'

import { writingFile } from 'markup-generator';
// console.log(printMain())
// console.log(printHead())



// var generateEmptyTemplateComponent = require('../src/t/emptyTemplate');

// var generateTemplateComponent = require('../src/t/generateTemplate');



describe('test helpers', () => {


    test('rendering head component', () => {

      const string1 = printHead();

      writingFile(string1, 'lit-empty');

    //   // console.log(string);
      expect(printHead()).toBeDefined();
      
      
    });


    test('rendering Footer Component', () => {

      const string2 = printFooter();

      writingFile(string2, 'lit-empty');

      // console.log(string);
      expect(printFooter()).toBeDefined();

      // writingFile(string2);
      
    });

    test('rendering Body Component', () => {

      const string3 = printBody();

      // console.log(string);
      expect(printBody()).toBeDefined();

      // writingFile(string3);
      writingFile(string3, 'lit-empty');
    });

    

  //  test('rendering Empty Template', () => {

    //  const string = generateEmptyTemplateComponent();
    //  console.log(string);
  //  });


   test('rendering Main Component', () => {


       const string4 = printMain();

      //  // console.log(string);

       expect(printMain()).toBeDefined();

      //  writingFile(string4);
       writingFile(string4, 'lit-empty');
       expect(typeof string4).toBe('string');

   });


});