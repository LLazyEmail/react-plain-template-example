/* values of type UL, OL  */
export const list = `<List type="{type}">{content}</List>`;




const listComponent = (type, content) => {
    return `<List type="${type}">${content}</List>`;
}




export { list, listComponent };



