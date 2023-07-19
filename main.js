var mouseEvent = "empty";

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 2;

    /*Retire a linha de comentário errada*/
    canvas.addEventListener("mousedown", my_mousedown);
    

    function my_mousedown(e)
    {
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        radius = document.getElementById("radius").value;
        mouseEvent = "mouseDown";
    }

    /*
    Crie um event listener para "mousemove"
    e chame a função my_mousemove
    */
    canvas.addEventListener("mousemove", my_mousemove);

    function my_mousemove(e)
    {
        /*Retire a linha de comentário errada*/
        currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
        currentPositionOfMouseX = e.clientX - canvas.offsetRight;
        

        /*
        crie currentPositionOfMouseY and
        assign it e.clientY - canvas.offsetTop;
        */
       currentPositionOfMouseY = e.clientY - canvas.offsetTop;
       

        if (mouseEvent == "mouseDown") {
        console.log("Posição atual das coordenadas x e y= ");
        console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        ctx.arc(currentPositionOfMouseX, currentPositionOfMouseY, radius ,0 , 2 * Math.PI);
        ctx.stroke();
        }

    }

    /*Crie um event listener para "mouseup"
    e chame a função my_mouseup*/
    canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //pegando cor da caixa de entrada
    //início da atividade adicional
    color = document.getElementById("color").value;
    console.log(color);
    //fim da atividade adicional
    
    currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
    currentPositionOfMouseY = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);    
}
    
/*
    Crie uma função chamada my_mouseup com o evento como parâmetro.*/

    /*
    Atribua "mouseUP" ao mouseEvent
    dentro da função
    */
  canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseup";
    }
    
    /*Crie uma event listener para "mouseleave"
    e chame a função my_mouseleave

    Crie uma função chamada my_mouseleave com event de parâmetro.
    
    Atribua "mouseleave" ao mouseEvent
    dentro da função
    */
    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
        currentPositionOfMouseY = e.clientY - canvas.offsetTop;
    }
    color = "black";
    widthOfLine = 1;
    canvas.addEventListener("mousedown", my_mousedown);
    function my_mousedown(e)
    {
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;

        mouseEvent = "mousedown";

    }
    if (mouseEvent == "mousedown") {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = widthOfLine;

            console.log("Ultima posicao das coordenadas x e y = ");
        console.log("x = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
        ctx.moveTo(currentPositionOfMouseX, currentPositionOfMouseY);

            console.log("Posicao atual das coordenadas x e y = ");
            console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
            ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
            ctx.stroke();

        }
    

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
