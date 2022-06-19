// import factory from './factory';
import displayFactoryTwo from './factoryTwo';

// partials
// import headComponent from '../components/headComponent'

import MainComponent from '../components/mainComponent'


import DisplayBody from './displayBody';





// import bodyComponent from '../components/bodyComponent'

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

export default BodyFactory.create(settings);


// note that head and body params are actually `displayHead` & `displayBody` 
// methods for sub-components

const DisplayMain = {
  component: MainComponent,
  params: { headComponent, bodyComponent },
  display: () => {



  },
  checks: () => {

  }
  
}

export default DisplayMain;



// const {
//     address,
//     copyrights,
    
//     newsletterSponsorshipLink,
//     unsubscribe,

//     fonts
// } = misc;

// // import { headStyles } from '../templates/head-styles';

// const title = `The Secrets of High-Performing DevOps teams`;

// const displayMain = () => {
  
//     const head = displayHead(title);
//     const body = displayBody();
    
//     return mainComponent(head, body);
// }
