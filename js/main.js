/**
 * Tworzy glowna tabele zycia.
 */
function createMainTable(rows, cells) {
    var table = $('<table>').addClass('mainTable');
    for (var i = 0; i < rows; i++) {
        var row = $('<tr>');
        for (var j = 0; j < cells; j++) {
            var cell = $('<td>');
            var div = $('<div>')
                .addClass('mainCell')
                .addClass("notSelected")
                .attr('id', 'mainCell_' + i + '_' + j)
                .click(onCellClick);
            cell.append(div);
            row.append(cell);
        }
        table.append(row);
    }
    $('#mainTableDiv').html(table);
}

/**
 * Wowylane po nacisnieciu jednej kratki zycia.
 */
function onCellClick() {
    $(this).toggleClass("selected notSelected")
}

/**
 * Przygtowuje wszystkie slidery.
 */
function prepareSliders() {
    $('#slider').slider({
        max: 100,
        min: 10,
        change: function (event, ui) {
            createMainTable(ui.value, ui.value * 1.5);
        }
    });


    $('#speed').slider({
        max: 100,
        min: 10,
        change: function (event, ui) {
        }
    });
}
/**
 * Rozpoczecie gry, przygotowanie planszy.
 */
$(document).ready(function () {
    prepareSliders();
    createMainTable(10, 30);
});