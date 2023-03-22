//задаем первый индекс для отсчета
let index = -1;
//увеличивает индекс на 1 шаг и отрисовывает его (становится 0 индексом/Бэтмен)
slideNext();

// создаю события онклик с привязкой по id к каждой стрелке
// superArrowLeft.onclick = slidePrev;
// superArrowRight.onclick = slideNext;

function slideNext() {
        //зацикливание слайдов 
        //когда текущий индекс (переменная index) доходит до конца массива, то текущий индекс (переменная index) становится нулевым (index = 0)
        if (index == superArr.length-1) {
            index = 0;
        // в других случаях текущий индекс (переменная index) станет следующим слайдом (index+1)
        } else (index = index+1);
        showSlide()
}

function slidePrev() {
    //обратная прокрутка слайдов
    //когда текущий индекс (переменная index) становится на исходную точку (index == 0), то текущий индекс (переменная index) перелистывается в обратную сторону/с первого слайда на последний (index = superArr.length-1)
    if (index == 0) {
    index = superArr.length-1
    //в других случаях текущий индекс (переменная index) станет предыдущим слайдом (index-1)
    } else (index = index-1);
    showSlide()
}

export function slideNext() {}
export function slidePrev() {}