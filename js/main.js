/**
 * Tworzy głównaą tabelę życia.
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
 * Wowyłane po naciśnieciu jednej kratki życia.
 */
function onCellClick() {
    $(this).toggleClass("selected notSelected")
}

/**
 * Przygtowuje wszystkie slidery.
 */
function prepareSliders() {
    $('#sizeSlider').slider({
        max: 100,
        min: 10,
        value: 10,
        change: function (event, ui) {
            createMainTable(ui.value, ui.value * 1.5);
        }
    });


    $('#speedSlider').slider({
        max: 2,
        min: 0.05,
        step: 0.05,
        change: function (event, ui) {
            //odswiezenie czasu trwania pokolenia
            $('#stopTheGame').click();
            $('#startTheGame').click();
        }
    });

    $('#sizeSlider').slider("value", 20);
    $('#speedSlider').slider("value", 0.7);
}

/**
 * Przygotowuje menu z przykładowymi układami.
 */
function prepareExamplesMenu() {
    var elementsList = [
        //0
        [
            [0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 0, 1, 1]
        ],
        //1
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        //2
        [
            [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
            [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
            [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
        ],
        //3
        [
            [0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
            [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0]
        ]
    ];

    $("#examplesMenu").on("change", function () {
        var exampleId = this.value;
        if (exampleId == "") {
            return;
        }

        //wyczyszczenie planszy
        //hack na programowe wywolanie akcji na sliderze rozmiaru
        var $slider = $('#sizeSlider');
        $slider.slider('option', 'change')(null, {value: $slider.slider('value')})

        //ustawienie elementow na planszy
        var element = elementsList[exampleId];
        var width = element[0].length;
        var height = element.length;

        for (var i = 0; i < height; i++) {
            for (var j = 0; j < width; j++) {
                //policzenie przesuniecia w zaleznosci od aktualnego rozmiaru planszy
                var new_i = ~~(i + $slider.slider('value') / 2 - height / 2);
                var new_j = ~~(j + $slider.slider('value') * 3 / 4 - width / 2);

                if (element[i][j] == 1) {
                    $('#mainCell_' + new_i + '_' + new_j).click();
                }
            }
        }
    });
}

/**
 * Przygotowuje komórki do jednej pętli życia.
 */
function lifeCycleProcess() {
    var cellsToClick = [];

    for (var i = 0; ; i++) {
        for (var j = 0; ; j++) {
            var center = $('#mainCell_' + i + '_' + j);
            if (center.length) {
                var liveCells = 0;
                var deadCells = 0;
                //komorka istnieje, sprawdzenie sasiadow
                for (var x = -1; x < 2; x++) {
                    for (var y = -1; y < 2; y++) {
                        if (x == 0 && y == 0) {
                            continue;
                        }
                        var cell = $('#mainCell_' + (i + x) + '_' + (j + y));
                        if (cell.length && cell.hasClass('selected')) {
                            liveCells++;
                        } else if (cell.length && cell.hasClass('notSelected')) {
                            deadCells++;
                        }
                    }
                }
                if (center.hasClass('selected')
                    && (liveCells < 2 || liveCells > 3)) {
                    cellsToClick.push(center);
                } else if (center.hasClass('notSelected') && liveCells == 3) {
                    cellsToClick.push(center);
                }
            } else if (j == 0) {
                //ostatni wiersz
                return cellsToClick;
            } else {
                //ostatnia komorka w wierszu
                break;
            }
        }
    }
}

/**
 * Jeden cykl życia komórek.
 */
function lifeCycle() {
    var cellsToClick = lifeCycleProcess();

    var arrayLength = cellsToClick.length;
    for (var i = 0; i < arrayLength; i++) {
        cellsToClick[i].click();
    }
}

/**
 * Pętla życia.
 */
function lifeLoop() {
    var intervalId = window.setInterval(function () {
        lifeCycle();
    }, $('#speedSlider').slider("value") * 1000);


    $('#stopTheGame').click(function () {
        clearInterval(intervalId);
    })
}

/**
 * Rozpoczęcie gry, przygotowanie planszy.
 */
$(document).ready(function () {
    prepareSliders();
    prepareExamplesMenu();
    $('#startTheGame').click(lifeLoop)
    $('#oneStepTheGame').click(lifeCycle)
});