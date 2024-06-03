/**
 * This code is responsible for copying table content on click.
 */

/**
 * Copies the provided text to the clipboard.
 * @param {*} text - The text to be copied to the clipboard.
 */
function copyTableCell(text) {
    navigator.clipboard.writeText(text);
}

/**
 * Adds click event listeners to all table cells (td) to copy their content to the clipboard.
 * When a cell is clicked, its text content is copied.
 */
document.querySelectorAll('table td').forEach(cell => {
    cell.addEventListener('click', function () {
        const text = this.textContent || this.innerText;
        copyTableCell(text);
    });
});

/**
 * Copies the entire content of a table to the clipboard.
 * The table is found by traversing from the provided button to the previous sibling element containing the table.
 * @param {*} copyButton - The button element that triggers the table copy action.
 */
function copyTable(copyButton) {
    let table = copyButton.previousElementSibling.querySelector("table");
    let tableText = '';

    for (let row of table.rows) {
        let rowText = '';
        for (let i = 0; i < row.cells.length; i++) {
            let cell = row.cells[i];
            rowText += cell.innerText + '\t';
        }
        tableText += rowText.trimEnd() + '\n';
    }

    navigator.clipboard.writeText(tableText);
}