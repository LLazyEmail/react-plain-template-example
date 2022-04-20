function reactFullTemplate(headComponent, bodyComponent, parsedContent) {

    if (!headComponent) {
        throw new Error('no headComponent was passed');
    }

    if (!bodyComponent) {
        throw new Error('bodyComponent logo');
    }


    return `
    import React from "react";

    const Content = () => {
        return (
        <Template>
            ${headComponent()}
            ${bodyComponent(parsedContent)}
        </Template>
        );
    };
    
    export default Content;
    
    `;
}



export { reactFullTemplate };

