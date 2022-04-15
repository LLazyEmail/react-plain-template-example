import { mailingAddress } from '../../config';

import config from '../../config';



const address = `<Address />
${config.mailingAddress}`;



const addressComponent = (mailingAddress) => {
    return `<Address />
    ${mailingAddress}`;
}


export { address, addressComponent };



