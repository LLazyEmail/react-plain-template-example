const link = `<Link href="{href}">{content}</Link>`;


const linkComponent = (href, content) => {
    return `<Link href="${href}">${content}</Link>`;
}

export { link, linkComponent };

