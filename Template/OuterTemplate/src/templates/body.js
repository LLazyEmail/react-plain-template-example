// import { logoTop, logoBottom, footer } from "./body";


// I DONT THINK IT WILL WORK SUCH EASILY
function getBody(parsedContent) {
  return `<Body>${parsedContent}</Body>`;
}

export default getBody;



//---

const EmailTemplateBodyComponent = (footer, logoTop, logoBottom, content='') => {
  if(!footer){
    throw new Error('no footer was passed');
  }
  if(!logoTop || !logoBottom){
    throw new Error('invalid logo');
  }

  return `<Body>${content}</Body>`;

}

export { EmailTemplateBodyComponent }