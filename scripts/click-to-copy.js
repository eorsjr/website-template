/* This code is responsible for copying table content on click. */

function copyTableCell(text) {
    navigator.clipboard.writeText(text);
}

document.querySelectorAll('table td').forEach(cell => {
    cell.addEventListener('click', function () {
        const text = this.textContent || this.innerText;
        copyTableCell(text);
    });
});

function copyTable(copyButton) {
    let table = copyButton.previousElementSibling.querySelector("table");
    let columnWidths = [];

    for (let row of table.rows) {
        for (let i = 0; i < row.cells.length; i++) {
            let cell = row.cells[i];
            columnWidths[i] = Math.max(columnWidths[i] || 0, cell.innerText.length);
        }
    }

    let tableText = '';

    for (let row of table.rows) {
        for (let i = 0; i < row.cells.length; i++) {
            let cell = row.cells[i];
            tableText += cell.innerText.padEnd(columnWidths[i] + 1, ' ');
        }
        tableText += '\n';
    }

    navigator.clipboard.writeText(tableText);
}