import { displayFactoryTwo } from 'email-template-object';

import MainComponent from '../components/mainComponent';

import HeadString from './displayHead';

// TODO we need to be able to pass content variable from this
// file and
import BodyString from './displayBody';

// import EmailTemplateBodyComponent from '../components/bodyComponent';

// const title = `The Secrets of High-Performing DevOps teams`;
const content = '[THIS IS PLACE FOR A CONTENT INSIDE]';
// const content2 = ContentComponent;

let addon1 = {
  head: HeadString,
  body: BodyString,
  // body: EmailTemplateBodyComponent()
  parsedContent: content,
};

//variant one
const settings = {
  component: MainComponent,

  params: addon1,
};

const Factory = new displayFactoryTwo();

export default Factory.create(settings);
