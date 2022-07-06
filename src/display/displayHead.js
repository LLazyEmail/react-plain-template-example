// import factory from './factory';
import displayFactoryTwo from 'email-template-object';

// partials
import misc from 'atherdon-newsletter-react-layouts-miscellaneous';

import { headStyles } from '.../templates/head-styles';
import { headComponent } from '../templates/head';


const { fonts } = misc;
const title = `The Secrets of High-Performing DevOps teams`;


// ----
// const ERROR_TITLE = '`title` is a required option for `renderTemplate`'


const checkingTitle = (title) => {
    if (!title) {
        throw new Error('`title` is a required option for `renderTemplate`');
    }
}
// ---



// let addon1 = {
//     footer: footerString,

//     logoTop:logoTopComponent(), 
//     logoBottom: logoBottomComponent(), 
//     content:'[[THIS IS PLACE FOR A CONTENT INSIDE]',
//     previewText:previewTextComponent('[AMA PREVIEW TEXT]')

// }

//variant one
// const settings = {
//     component: EmailTemplateBodyComponent,
//     // params: { footerComponent, logoTop, logoBottom, content },
//     params: addon1,
//     subcomponents: {  }
    
// }

// const BodyFactory = new displayFactoryTwo();

// export default BodyFactory.create(settings);



