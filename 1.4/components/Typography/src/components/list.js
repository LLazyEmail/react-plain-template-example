const listComponent = (params) => {
    const {type, content} = params;
    return `<List type="${type}">${content}</List>`;
}


export {  listComponent };

