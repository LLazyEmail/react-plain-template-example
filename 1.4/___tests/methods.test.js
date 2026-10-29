import { printMain,  printFooter, printBody, printHead } from '../src/methods'

import { writeGeneratedFile } from 'markup-generator';
// console.log(printMain())
// console.log(printHead())



// var generateEmptyTemplateComponent = require('../src/t/emptyTemplate');

// var generateTemplateComponent = require('../src/t/generateTemplate');



describe('test helpers', () => {


    test('rendering head component', async () => {

      const string1 = printHead();

      await writeGeneratedFile({ content: string1, prefix: 'lit-empty' });

    //   // console.log(string);
      expect(printHead()).toBeDefined();
      
      
    });


    test('rendering Footer Component', async () => {

      const string2 = printFooter();

      await writeGeneratedFile({ content: string2, prefix: 'lit-empty' });

      // console.log(string);
      expect(printFooter()).toBeDefined();

      // writingFile(string2);
      
    });

    test('rendering Body Component', async () => {

      const string3 = printBody();

      // console.log(string);
      expect(printBody()).toBeDefined();

      // writingFile(string3);
      await writeGeneratedFile({ content: string3, prefix: 'lit-empty' });
    });

    

  //  test('rendering Empty Template', () => {

    //  const string = generateEmptyTemplateComponent();
    //  console.log(string);
  //  });


   test('rendering Main Component', async () => {


       const string4 = printMain();

      //  // console.log(string);

       expect(printMain()).toBeDefined();

      //  writingFile(string4);
       await writeGeneratedFile({ content: string4, prefix: 'lit-empty' });
       expect(typeof string4).toBe('string');

   });


});