// update it
function mainComponent(params) {
    
    if (!params) {
        throw new Error('no Params was passed');
    }

     if (!headComponent) {
        throw new Error('no headComponent was passed');
    }

    if (!bodyComponent) {
        throw new Error('bodyComponent logo');
    }

    const { headComponent, bodyComponent, parsedContent } = params;


    // const { headString, bodyString } = params;

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



export default mainComponent;

