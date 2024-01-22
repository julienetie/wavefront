const SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;

const sanitizeUrl = url => {
    url = String(url);
    return url.match(SAFE_URL_PATTERN) ? url : 'unsafe:' + url;
};

function createFilteredDomTree(rootNode, allowedAttributes) {
    const walker = document.createTreeWalker(
        rootNode,
        NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
        {
            acceptNode: node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    // Filter script tags and process attributes
                    if (node.nodeName.toLowerCase() === 'script') {
                        return NodeFilter.FILTER_SKIP; // Ignore script tags
                    }

                    // Filter attributes
                    for (const attr of node.attributes) {
                        if (!allowedAttributes.includes(attr.name)) {
                            node.removeAttribute(attr.name);
                        } else if (attr.name === 'href' || attr.name === 'src') {
                            // Sanitize URL attributes
                            node.setAttribute(attr.name, sanitizeUrl(attr.value));
                        }
                    }
                }
                return NodeFilter.FILTER_ACCEPT;
            },
        }
    );

    // Create a new document fragment to hold the filtered content
    const fragment = document.createDocumentFragment();

    // Traverse the tree and clone nodes to the new fragment
    while (walker.nextNode()) {
        const currentNode = walker.currentNode;
        const clonedNode = currentNode.cloneNode(true);
        fragment.appendChild(clonedNode);
    }

    return fragment;
}

// Example usage:
const originalTree = document.getElementById('originalTree'); // Replace with your actual DOM element
const whitelist = ['class', 'id', 'href']; // Replace with your attribute whitelist
const newTree = createFilteredDomTree(originalTree, whitelist);

// Append the new tree to the document or do other actions as needed
document.body.appendChild(newTree);
