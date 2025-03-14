// Unique storage key for this page's data
const STORAGE_KEY = 'memorizationKanbanData';

// Our data structure – an array of passage objects.
// Each object: { id, reference, text, version, status }
let passages = [];

// When the page loads, try to load stored data.
function loadData() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
    try {
        passages = JSON.parse(stored);
    } catch(e) {
        console.error("Error parsing stored data:", e);
        passages = [];
    }
    }
    renderBoard();
}

// Save our passages array to local storage.
function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(passages));
}

// Create a card element for a passage.
function createCard(passage) {
    const card = document.createElement('div');
    card.className = 'card kanban-card';
    card.setAttribute('draggable', 'true');
    card.dataset.id = passage.id;
    card.innerHTML = `
    <div class="card-header d-flex justify-content-between align-items-center">
        <span>${passage.reference}</span>
        <button class="btn btn-sm btn-outline-danger btn-delete">&times;</button>
    </div>
    <div class="card-body">
        <p class="card-text">${passage.text}</p>
        <small class="text-muted">${passage.version}</small>
    </div>
    `;
    // Add drag event listeners
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('dragend', handleDragEnd);
    // Delete button functionality
    card.querySelector('.btn-delete').addEventListener('click', () => {
    deletePassage(passage.id);
    });
    return card;
}

// Render board columns based on passages data.
function renderBoard() {
    ['todoList', 'inProgressList', 'doneList'].forEach(id => {
    document.getElementById(id).innerHTML = '';
    });
    passages.forEach(passage => {
    const card = createCard(passage);
    if(passage.status === 'todo'){
        document.getElementById('todoList').appendChild(card);
    } else if(passage.status === 'inprogress'){
        document.getElementById('inProgressList').appendChild(card);
    } else if(passage.status === 'done'){
        document.getElementById('doneList').appendChild(card);
    }
    });
}

// Delete a passage from the data and re-render.
function deletePassage(id) {
    passages = passages.filter(p => p.id !== id);
    saveData();
    renderBoard();
}

// Drag and Drop Handlers
let draggedId = null;
function handleDragStart(e) {
    draggedId = this.dataset.id;
    this.classList.add('dragging');
}
function handleDragEnd(e) {
    this.classList.remove('dragging');
}
// Allow drop by preventing default
function handleDragOver(e) {
    e.preventDefault();
    this.classList.add('drop-target');
}
function handleDragLeave(e) {
    this.classList.remove('drop-target');
}
function handleDrop(e) {
    e.preventDefault();
    this.classList.remove('drop-target');
    const newStatus = this.dataset.status;
    // Update the passage status
    passages = passages.map(p => {
    if(p.id === draggedId) {
        return { ...p, status: newStatus };
    }
    return p;
    });
    saveData();
    renderBoard();
}

// Set up event listeners for each column.
function initDragDrop() {
    document.querySelectorAll('.kanban-col').forEach(col => {
    col.addEventListener('dragover', handleDragOver);
    col.addEventListener('dragleave', handleDragLeave);
    col.addEventListener('drop', handleDrop);
    });
}

// When adding a new passage (either from vault or custom), create an id and add it.
function addPassage(reference, text, version, status = 'todo') {
    const id = 'p_' + Date.now() + '_' + Math.floor(Math.random()*1000);
    passages.push({ id, reference, text, version, status });
    saveData();
    renderBoard();
}

// Get the selected bible version (check if “Other” is chosen)
function getSelectedVersion() {
    const select = document.getElementById('bibleVersionSelect');
    if(select.value === 'Other') {
    const custom = document.getElementById('customVersionInput').value;
    return custom || 'Other';
    }
    return select.value;
}

// Populate the Vault modal with passages from bibleData.
function populateVaultModal() {
    // We assume bibleData is structured with "Old" and "New" testaments.
    let html = '';
    for (const testament in bibleData) {
    html += `<h6>${testament} Testament</h6>`;
    for (const book in bibleData[testament]) {
        html += `<strong>${book}</strong><br>`;
        bibleData[testament][book].forEach((passage, index) => {
        // Use the reference as label.
        html += `<div class="form-check">
                    <input class="form-check-input vault-checkbox" type="checkbox" 
                        data-testament="${testament}" data-book="${book}" data-index="${index}" id="${testament}-${book}-${index}">
                    <label class="form-check-label" for="${testament}-${book}-${index}">
                        ${passage.reference}
                    </label>
                    </div>`;
        });
        html += `<hr>`;
    }
    }
    document.getElementById('vaultList').innerHTML = html;
}

// Handle adding selected passages from vault modal.
document.getElementById('vaultAddSelected').addEventListener('click', function(){
    const version = getSelectedVersion();
    const checkboxes = document.querySelectorAll('.vault-checkbox:checked');
    checkboxes.forEach(cb => {
    const testament = cb.dataset.testament;
    const book = cb.dataset.book;
    const index = cb.dataset.index;
    // Get passage text from bibleData using the selected version.
    const passageObj = bibleData[testament][book][index];
    const text = passageObj[version] || passageObj['ESV']; // Fallback to ESV if not found.
    addPassage(passageObj.reference, text, version);
    // Uncheck for next time.
    cb.checked = false;
    });
});

// Handle custom passage form submission.
document.getElementById('customForm').addEventListener('submit', function(e){
    e.preventDefault();
    const reference = document.getElementById('customReference').value;
    const text = document.getElementById('customText').value;
    const version = document.getElementById('customVersion').value || getSelectedVersion();
    addPassage(reference, text, version);
    this.reset();
    // Hide the modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('customModal'));
    modal.hide();
});

// Handle Export: simply download the JSON.
document.getElementById('exportBtn').addEventListener('click', function(){
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(passages, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "memorizationData.json");
    dlAnchorElem.click();
});

// Handle Import form submission.
document.getElementById('importForm').addEventListener('submit', function(e){
    e.preventDefault();
    try {
    const imported = JSON.parse(document.getElementById('importDataText').value);
    if(Array.isArray(imported)) {
        passages = imported;
        saveData();
        renderBoard();
        // Hide modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('importModal'));
        modal.hide();
    } else {
        alert("Invalid data format.");
    }
    } catch(err) {
    alert("Error parsing JSON: " + err);
    }
});

// Show/hide custom version input depending on selection.
document.getElementById('bibleVersionSelect').addEventListener('change', function(){
    document.getElementById('customVersionInput').style.display = (this.value === 'Other') ? 'block' : 'none';
});

// Initialize everything when the document is ready.
document.addEventListener('DOMContentLoaded', function(){
    loadData();
    initDragDrop();
    populateVaultModal();
});
