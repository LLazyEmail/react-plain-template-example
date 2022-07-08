function mainComponent(params) {
    
    if (!params) {
        throw new Error('no Params was passed');
    }   

    const { head, body } = params;


    if (!head) {
        throw new Error('no headComponent was passed'); // todo change it later
    }

    if (!body) {
        throw new Error('bodyComponent');
    }


    return `
    import React from "react";

    const Content = () => {
        return (
        <Template>
            ${head}
            ${body}
        </Template>
        );
    };
    
    export default Content;
    
    `;
}



export default mainComponent;