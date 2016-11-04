/*! Mondrian | MIT License | https://github.com/Lucassssss/Mondrian.git */

/**
 * Composition A
 * About Mondrian https://en.wikipedia.org/wiki/Piet_Mondrian
 * Colors from Mondrian`s work Composition A
 */

function $(id) {
    return document.getElementById(id);
}

function pattern(el, width, height) {
    var canvas = el;
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext('2d');
    
    // Random color
    var color = ['#020200', '#130a08', '#c70000', '#afb6b1', '#d7d6d2', '#29255c', '#dbc10a']
    function getColor() {
        return color[getRandomNum(color.length)]
    }
    
    // Random num
    function getRandomNum(num) {
        var randomNum = parseInt(Math.random() * num);
        return randomNum
    }
    
    context.beginPath();
    context.rect(0, 0, width, height);
    context.fillStyle = getColor();
    context.fill();
    
    // point
    var randomX_0 = 0;
    var randomY_0 = 0;

    var randomX_1 = getRandomNum(width);
    var randomY_1 = getRandomNum(height);

    var randomX_2 = getRandomNum(width);
    var randomY_2 = getRandomNum(height);

    context.beginPath();
    context.moveTo(randomX_0, randomY_0);
    context.lineTo(randomX_1, randomY_0);
    context.lineTo(randomX_1, randomY_2);
    context.lineTo(randomX_0, randomY_2);
    context.lineTo(randomX_0, randomX_0);
    context.closePath();

    for (i = 0; i < 60; i++) {
        const frandomX_0 = getRandomNum(width);
        const frandomY_0 = getRandomNum(height);

        var frandomX_1 = getRandomNum(width);
        var frandomY_1 = getRandomNum(height);

        var frandomX_2 = getRandomNum(width);
        var frandomY_2 = getRandomNum(height);

        context.beginPath();
        context.moveTo(frandomX_0, frandomY_0);
        context.lineTo(frandomX_1, frandomY_0);
        context.lineTo(frandomX_1, frandomY_2);
        context.lineTo(frandomX_0, frandomY_2);
        context.lineTo(frandomX_0, frandomY_0);
        context.closePath();
        
        context.fillStyle = getColor();
        context.lineWidth = width / 100;
        context.strokeStyle = '#130a08';

        context.fill();
        context.stroke();
    }

    context.fillStyle = getColor();
    context.lineWidth = width / 100;
    context.strokeStyle = '#130a08';

    context.fill();
    context.stroke();


}