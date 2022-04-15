// import Misc from '../../misc';

// const {
//     address,
//     copyrights,
//     fonts,
//     headStyles,
//     newsletterSponsorshipLink,
//     unsubscribe,
// } = Misc;



const footer = `<Footer>{children}</Footer>`;


const footerComponent = (children) => {
    return `<Footer>${children}</Footer>`;
}


export { footer, footerComponent };
