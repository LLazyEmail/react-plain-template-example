
import { displayFactoryTwo } from 'email-template-object';

import EmailTemplateBodyComponent from '../components/bodyComponent';
import footerString from '../display/displayFooter';

// const ERROR_BODY = '`bodyContent` is a required option for `renderTemplate`';

import { 
    logoTopComponent, logoBottomComponent 
} from 'atherdon-newsletter-react-layouts-innercomponents';


const checkingBodyContent = (bodyContent) => {
    if (!bodyContent) {
        throw new Error('`bodyContent` is a required option for `renderTemplate`');
    }
}

// const ContentData = '';


let addon1 = {
    footer: footerString,

    logoTop:logoTopComponent(), 
    logoBottom: logoBottomComponent(), 

    content: '[[THIS IS PLACE FOR A CONTENT INSIDE]'

    // previewText: previewTextComponent('[AMA PREVIEW TEXT]')

}


//variant one
const settings = {
    component: EmailTemplateBodyComponent,
    // params: { footerComponent, logoTop, logoBottom, content },
    params: addon1,
    // subcomponents: {  }
    
}

const BodyFactory = new displayFactoryTwo();
// console.log(BodyFactory.create(settings))
export default BodyFactory.create(settings);