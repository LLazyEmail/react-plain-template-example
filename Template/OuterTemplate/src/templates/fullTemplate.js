import { headComponent } from '../templates/head'

import bodyComponent from './body';


function reactFullTemplate(parsedContent) {
  return `
  import React from "react";

  const Content = () => {
    return (
      <Template>
        ${head}
        ${bodyComponent(parsedContent)}
      </Template>
    );
  };
  
  export default Content;
  
  `;
}



export { reactFullTemplate };

