import misc from 'atherdon-newsletter-react-layouts-miscellaneous';

import { displayFactoryTwo } from 'email-template-object';

import footerComponent from '../components/footerComponent';

let mailingAddress = 'PO Box 2206, Edwards CO, 81632, U.S.A.';
let contact =
  'https://sponsor.hackernoon.com/newsletter?ref=noonifications.tech';


const {

} = misc;  

const addon1 = {
    address: '',
    sponsor: ''
}

const settings = {
    component: footerComponent,
    params: addon1,

    subcomponents: {}
}

const FooterFactory = new displayFactoryTwo();
// console.log(FooterFactory.create(settings));

export default FooterFactory.create(settings);