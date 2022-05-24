export const wrapperView = ({list}) => `
    <div>
        <h3>Static List</h3>
        <ul class="static-list">
            ${list}
        </ul>
    </div>
`

export const liView =  ({href,title}) => `<li><a href="${href}">${title}</a></li>`