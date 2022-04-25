// import { headStyles } from './misc/head-styles';
// import { fonts } from './misc/fonts';


// const head = `<Head/>`;


const headComponent = (title, headStyles, fonts) => {

    if (!title) throw new Error('no title was passed');
    if (!headStyles) throw new Error('invalid headStyles');
    if (!fonts)     throw new Error('invalid fonts');

    return `<Head title={title} styles={headStyles} fonts={fonts} />`

}

export default headComponent;
