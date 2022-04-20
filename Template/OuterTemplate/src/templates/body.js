// import { logoTop, logoBottom, footer } from "./body";


// I DONT THINK IT WILL WORK SUCH EASILY
function bodyComponent(parsedContent) {

  if (!parsedContent) {
    throw new Error('no parsed content was passed');
  }

  return `<Body>${parsedContent}</Body>`;
}

export default bodyComponent;



