// import factory from './factory';
import displayFactoryTwo from './factoryTwo';

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


// note that footer param here is a subcomponent, 
// so we passing footerDisplay instead of just a component

const DisplayBody = {
  component: bodyContent,
  params: { footer, logoTop, logoBottom, content }, // we need to add previewText
  display: () => {

    
  },
  checks: () => []
  
}

export default DisplayBody;
