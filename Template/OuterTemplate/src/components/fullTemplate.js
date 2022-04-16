
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