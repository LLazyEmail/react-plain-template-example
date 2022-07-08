// update it
function mainComponent(params) {
    
    if (!params) {
        throw new Error('no Params was passed');
    }   

    const { head, body, parsedContent } = params;


    if (!head) {
        throw new Error('no headComponent was passed'); // todo change it later
    }

    if (!body) {
        throw new Error('bodyComponent logo');
    }

    // const { headString, bodyString } = params;

    return `
    import React from "react";

    const Content = () => {
        return (
        <Template>
            ${head}
            ${body(parsedContent)}
        </Template>
        );
    };
    
    export default Content;
    
    `;
}



export default mainComponent;