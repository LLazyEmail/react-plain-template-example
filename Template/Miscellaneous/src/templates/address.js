import { mailingAddress } from '../../config';

import config from '../../config';

export const address = `<Address />
${config.mailingAddress}`;






const addressComponent = (mailingAddress) => {
    return `<Address />
    ${config.mailingAddress}`;
}




export { address, addressComponent };



