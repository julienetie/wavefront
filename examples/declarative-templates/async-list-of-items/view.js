export const wrapperView = ({ pendingListView }) => `
    <div>
        <h3>Async List</h3>
        <ul id="async-list" class="async-list">
            ${pendingListView}
        </ul>
    </div>
`
export const liView = ({ href, title, state }) => `
    <li>
        <a class="${state}" href="${href}">
            ${title}
        </a>
    </li>
`
