const independentPartsContent = `<div class="description">

                <div class="description__name">Самостоятельные<br>части речи</div>
                <div class="description__text">
                    Имеют грамматическое значение:<br>
                    обозначают предмет, признак предмета,<br>
                    действие предмета и т.п.<br>
                    К ним возможно поставить вопрос.<br>
                    Являются членами предложения.<br>
                    <br>
                    Определяются тремя критериями:<br>
                    1) обобщенное значение,<br>
                    2) морфологические признаки,<br>
                    3) синтаксическое поведение<br>
                    (синтаксические функции и<br> 
                    синтаксические связи).

                </div>

            </div>

            <div class="independentPartsContainer">
                <div class="independentParts">

                    <div class="independentPart"><div id="noun">Существительное</div></div>
                    <div class="line"></div>
                    <div class="independentPart"><div>Прилагательное</div></div>
                    <div class="line"></div>
                    <div class="independentPart"><div>Глагол</div></div>
                    <div class="line"></div>
                    <div class="independentPart"><div>Местоимение</div></div>
                    <div class="line"></div>
                    <div class="independentPart"><div>Числительное</div></div>
                    <div class="line"></div>
                    <div class="independentPart"><div>Наречие</div></div>

                </div>
            </div>

            <div class="rewind1">
                <div class="scrollRight"></div>
            </div>`;

const auxiliaryParts = `<div class="rewind2">
                    <div class="scrollLeft"></div>
                </div>

                <div class="devide"></div>

                <div class="description">

                    <div class="description__name">Служебные части речи</div>
                    <div class="description__text">
                        Неизменяемы и служат для передачи<br>
                        формально-смысловых отношений между<br>
                        самостоятельными словами.<br> 
                        Не могут формировать словосочетания и<br>
                        предложения без самостоятельных частей<br>
                        речи.

                    </div>

                </div>

                <div class="independentPartsContainer">
                    <div class="independentParts">

                        <div class="independentPart"><div>Предлог</div></div>
                        <div class="line"></div>
                        <div class="independentPart"><div>Союз</div></div>
                        <div class="line"></div>
                        <div class="independentPart"><div>Частица</div></div>

                    </div>
                </div>

                <div class="rewind3">
                    <div class="scrollRight"></div>
                </div>`;

const interjection = `<div class="rewind4">
                    <div class="scrollLeft"></div>
                </div>

                <div class="devide"></div>

                <div class="description">

                    <div class="description__name">Междометия</div>
                    <div class="description__text">
                        Это неизменяемые слова, обозначающие эмоции (ах, увы,<br>
                        черт побери), волеизъявления (стоп, баста) или<br>
                        являющиеся формулами речевого общения (спасибо,<br>
                        привет). Особенность междометий заключается в том, что<br>
                        они не вступают с другими словами в предложении ни в<br>
                        какие синтаксические связи, всегда обособлены<br>
                        интонационно и пунктуационно.

                    </div>

                </div>

                <div class="independentPartsContainer">
                    <div class="independentParts">

                        <div class="line" id="firstLine"></div>
                        <div class="independentPart"><div>
                            Материалы по данной<br>
                            теме вы сможете найти в<br>
                            разделе “Пунктуация”
                        </div></div>
                        <div class="line"></div>
                        
                    </div>
                </div>`;

var main = document.getElementsByTagName('main')[0];

function addNounClickHandler() {
    const noun = document.getElementById("noun");
    if (noun) { // Проверяем, существует ли элемент
        noun.onclick = function () {
            window.location.href = "../noun/nounTasksFiles/nounTasks.html";
        };
    }
}

document.addEventListener('click', function (event) {
    // Проверяем, является ли кликнутый элемент rewind1
    if (event.target.closest('.rewind1')) {
        main.innerHTML = auxiliaryParts;
        main.classList.toggle('newMain1');
        addNounClickHandler(); // Назначаем обработчик после обновления содержимого
    }
    // Проверяем, является ли кликнутый элемент rewind2
    if (event.target.closest('.rewind2')) {
        main.innerHTML = independentPartsContent;
        main.classList.remove('newMain1');
        addNounClickHandler(); // Назначаем обработчик после обновления содержимого
    }
    // Проверяем, является ли кликнутый элемент rewind3
    if (event.target.closest('.rewind3')) {
        main.innerHTML = interjection;
        main.classList.remove('newMain1');
        main.classList.toggle('newMain2');
        addNounClickHandler(); // Назначаем обработчик после обновления содержимого
    }
    // Проверяем, является ли кликнутый элемент rewind4
    if (event.target.closest('.rewind4')) {
        main.innerHTML = auxiliaryParts;
        main.classList.remove('newMain2');
        main.classList.toggle('newMain1');
        addNounClickHandler(); // Назначаем обработчик после обновления содержимого
    }
});

// Назначаем обработчик на начальном содержимом
addNounClickHandler();

