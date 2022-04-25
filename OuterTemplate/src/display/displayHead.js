// partials
import misc from 'atherdon-newsletter-js-layouts-misc';
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

const DisplayHead = {
  component: headComponent,
  params: { title, headStyles, fonts },


  display: () => {



    // return this.component(....)

    //const displayHead = (title) => {
    //  return headComponent(title, headStyles, fonts);
    //}


  },
  checks: () => []
  
}

export default DisplayHead;
