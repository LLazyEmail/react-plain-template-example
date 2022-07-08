// add preview stuff
// we need to find footer component
const EmailTemplateBodyComponent = (params) => {

  const { footer, logoTop, logoBottom, content } = params;


  if(!footer){
    throw new Error('no footer was passed');
  }
  if(!logoTop || !logoBottom){
    throw new Error('invalid logo');
  }

  return `<Body>${content}</Body>`;  
}
  
export default EmailTemplateBodyComponent;