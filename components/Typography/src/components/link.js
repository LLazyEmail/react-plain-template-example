const linkComponent = (params) => {
    const {href, content} = params;
    return `<Link href="${href}">${content}</Link>`;
}

export {  linkComponent };

