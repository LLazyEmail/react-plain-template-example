// partials
import bodyContent from '../components/bodyComponent'


// const ERROR_BODY = '`bodyContent` is a required option for `renderTemplate`';

const checkingBodyContent = (bodyContent) => {
    if (!bodyContent) {
        throw new Error('`bodyContent` is a required option for `renderTemplate`');
    }
}

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