import head from './head';

import getBody from './body';





function reactFullTemplate(parsedContent) {
  return `
  import React from "react";

  const Content = () => {
    return (
      <Template>
        ${head}
        ${getBody(parsedContent)}
      </Template>
    );
  };
  
  export default Content;
  
  `;
}



export { reactFullTemplate };


//---

const reactFullTemplateComponent = (head, content='') => {
  if(!head){
    throw new Error('no head was passed');
  }

  return `
  import React from "react";

  const Content = () => {
    return (
      <Template>
        ${head}
        ${getBody(content)}
      </Template>
    );
  };
  
  export default Content;
  
  `;

}

export { reactFullTemplateComponent }