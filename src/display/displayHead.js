// import factory from './factory';
import displayFactoryTwo from 'email-template-object';

// partials
import Miscellaneous from 'atherdon-newsletter-react-layouts-miscellaneous';
import { headComponent } from '../components/head';


const { fontsComponent, headStylesComponent } = Miscellaneous;
const title = `The Secrets of High-Performing DevOps teams`;

// ----
// const ERROR_TITLE = '`title` is a required option for `renderTemplate`'


const checkingTitle = (title) => {
    if (!title) {
        throw new Error('`title` is a required option for `renderTemplate`');
    }
}
// ---


fonts, headStyles

let addon1 = {
    title,
    headStyles: headStylesComponent(),
    fonts: fontsComponent()

//     footer: footerString,

//     logoTop:logoTopComponent(), 
//     logoBottom: logoBottomComponent(), 
//     content:'[[THIS IS PLACE FOR A CONTENT INSIDE]',
//     previewText:previewTextComponent('[AMA PREVIEW TEXT]')
}

//variant one
const settings = {
    component: headComponent,
    params: addon1,
//     // params: { footerComponent, logoTop, logoBottom, content },
//     subcomponents: {  }
}

const Factory = new displayFactoryTwo();

export default Factory.create(settings);



