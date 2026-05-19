const toggleBtn = document.getElementById('sortToggle');
const contentBlock = document.getElementById('contentBlock');

function isLineElement(el) {
    return el.id && /^line\d+$/.test(el.id);
}

function initOriginalOrder() {
    const lines = Array.from(contentBlock.children).filter(isLineElement);
    lines.forEach((line, idx) => {
        line.dataset.original = idx + 1;
    });
}

function splitIntoBlocks() {
    const children = Array.from(contentBlock.children);
    const preamble = [];
    const blocks = [];
    let currentBlock = null;

    for (const child of children) {
        if (isLineElement(child)) {
            currentBlock = { line: child, followingNonLines: [] };
            blocks.push(currentBlock);
        } else {
            if (currentBlock === null) {
                preamble.push(child);
            } else {
                currentBlock.followingNonLines.push(child);
            }
        }
    }
    return { preamble, blocks };
}

function sortLines(order) {
    const { preamble, blocks } = splitIntoBlocks();
    if (blocks.length === 0) return;

    blocks.sort((a, b) => {
        const origA = parseInt(a.line.dataset.original, 10);
        const origB = parseInt(b.line.dataset.original, 10);
        return order === 'oldest' ? origA - origB : origB - origA;
    });

    blocks.forEach((block, idx) => {
        block.line.id = `line${idx + 1}`;
    });

    while (contentBlock.firstChild) {
        contentBlock.removeChild(contentBlock.firstChild);
    }
    for (const el of preamble) {
        contentBlock.appendChild(el);
    }
    for (const block of blocks) {
        contentBlock.appendChild(block.line);
        for (const nonLine of block.followingNonLines) {
            contentBlock.appendChild(nonLine);
        }
    }
}

initOriginalOrder();

let isNewest = false; 

toggleBtn.addEventListener('click', () => {
    isNewest = !isNewest;
    sortLines(isNewest ? 'newest' : 'oldest');
    toggleBtn.textContent = isNewest ? 'Newest' : 'Oldest';
});

toggleBtn.addEventListener('mousedown', () => toggleBtn.classList.add('clicked'));
toggleBtn.addEventListener('mouseup', () => toggleBtn.classList.remove('clicked'));
toggleBtn.addEventListener('touchstart', () => toggleBtn.classList.add('clicked'));
toggleBtn.addEventListener('touchend', () => toggleBtn.classList.remove('clicked'));
toggleBtn.addEventListener('mouseleave', () => toggleBtn.classList.remove('clicked'));