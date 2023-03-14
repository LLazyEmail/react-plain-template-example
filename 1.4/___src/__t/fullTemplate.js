//---

const reactFullTemplateComponent = (
  headComponent,
  bodyComponent,
  content = ''
) => {
  if (!headComponent) {
    throw new Error('no head was passed');
  }

  return `
    import React from "react";
  
    const Content = () => {
      return (
        <Template>
          ${headComponent()}
          ${bodyComponent(content)}
        </Template>
      );
    };
    
    export default Content;
    
    `;
};

export { reactFullTemplateComponent };
