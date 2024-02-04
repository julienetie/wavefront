// Image container
export const containerView = ({images}) => `<div class="grid-container">${images}</div>`

// Image
export const imageView = ({type, url}) => `<div class="grid-item ${type}" style="background-image: url('${url}')"></div>`