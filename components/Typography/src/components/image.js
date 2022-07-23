const imageComponent = (params) => {
    const {href, src, altText} = params;
    return `<Image href="${href}" src="${src}" alt="${altText}" />`;
}


export { imageComponent };
