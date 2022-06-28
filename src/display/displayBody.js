// import factory from './factory';
import displayFactoryTwo from 'email-template-object';

// partials
import bodyContent from '../components/bodyComponent'

import footerComponent from '../components/footer';

// const ERROR_BODY = '`bodyContent` is a required option for `renderTemplate`';

const checkingBodyContent = (bodyContent) => {
    if (!bodyContent) {
        throw new Error('`bodyContent` is a required option for `renderTemplate`');
    }
}


// import { logoTop, logoBottom, footer } from "./body";


// footer, logoTop, logoBottom, content=''



// const ContentData = '';


let addon1 = {
    footer: footerString,

    logoTop:logoTopComponent(), 
    logoBottom: logoBottomComponent(), 
    content:'[[THIS IS PLACE FOR A CONTENT INSIDE]',
    previewText:previewTextComponent('[AMA PREVIEW TEXT]')

}


//variant one
const settings = {
    component: EmailTemplateBodyComponent,
    // params: { footerComponent, logoTop, logoBottom, content },
    params: addon1,
    subcomponents: {  }
    
}

const BodyFactory = new displayFactoryTwo();
console.log(BodyFactory.create(settings))
export default BodyFactory.create(settings);


// note that footer param here is a subcomponent, 
// so we passing footerDisplay instead of just a component

const DisplayBody = {
  component: bodyContent,
  params: { footer, logoTop, logoBottom, content }, // we need to add previewText
 
