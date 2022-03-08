let startButton = document.querySelector('.start-button')
let reverseButton = document.querySelector('.reverse-button')
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
console.log('ctx',ctx)

let start = Date.now()
let framesCount = 0
let moveToDone = false
let moveToReverseDone = false

let points = [
    { //1
        fromX:50,
        fromY:200,
        drawFromX:50,
        drawFromY:200,
        currentX: 50,
        currentY: 200,
        toX: 50,
        toY: 200,
        drawToX: 50,
        drawToY: 200
        
    },{ //2
        fromX:50,
        fromY:200,
        drawFromX:50,
        drawFromY:200,
        currentX: 100,
        currentY: 150,
        toX: 100,
        toY: 150,
        drawToX: 125,
        drawToY: 175
    },{ //3
        fromX:100,
        fromY:150,
        drawFromX:125,
        drawFromY:175,
        currentX: 150,
        currentY: 200,
        toX: 150,
        toY: 200,
        drawToX: 175,
        drawToY: 225
    },{ //4
        fromX:150,
        fromY:200,
        drawFromX:175,
        drawFromY:225,
        currentX: 200,
        currentY: 250,
        toX: 200,
        toY: 250,
        drawToX: 225,
        drawToY: 225
    },{ //5
        fromX:200,
        fromY:250,
        drawFromX:225,
        drawFromY:225,
        currentX: 250,
        currentY: 200,
        toX: 250,
        toY: 200,
        drawToX: 350,
        drawToY: 200
    },{ //6
        fromX:250,
        fromY:200,
        drawFromX:350,
        drawFromY:200,
        currentX: 300,
        currentY: 220,
        toX: 300,
        toY: 220,
        drawToX: 325,
        drawToY: 250
    },{ //7
        fromX:300,
        fromY:220,
        drawFromX:325,
        drawFromY:250,
        currentX: 350,
        currentY: 280,
        toX: 350,
        toY: 280,
        drawToX: 375,
        drawToY: 300
    },{ //8
        fromX:350,
        fromY:280,
        drawFromX:375,
        drawFromY:300,
        currentX: 400,
        currentY: 250,
        toX: 400,
        toY: 250,
        drawToX: 425,
        drawToY: 265
    },{ //9
        fromX:400,
        fromY:250,
        drawFromX:425,
        drawFromY:265,
        currentX: 450,
        currentY: 280,
        toX: 450,
        toY: 280,
        drawToX: 475,
        drawToY: 250
    },{ //10
        fromX:450,
        fromY:280,
        drawFromX:475,
        drawFromY:250,
        currentX: 500,
        currentY: 220,
        toX: 500,
        toY: 220,
        drawToX: 525,
        drawToY: 250
    },{ //11
        fromX:500,
        fromY:220,
        drawFromX:525,
        drawFromY:250,
        currentX: 550,
        currentY: 280,
        toX: 550,
        toY: 280,
        drawToX: 575,
        drawToY: 240
    },{ //12
        fromX:550,
        fromY:280,
        drawFromX:575,
        drawFromY:240,
        currentX: 600,
        currentY: 200,
        toX: 600,
        toY: 200,
        drawToX: 550,
        drawToY: 200
    },{ //13
        fromX:600,
        fromY:200,
        drawFromX:550,
        drawFromY:200,
        currentX: 650,
        currentY: 200,
        toX: 650,
        toY: 200,
        drawToX: 650,
        drawToY: 200
    },{ //14
        fromX:650,
        fromY:200,
        drawFromX:650,
        drawFromY:200,
        currentX: 700,
        currentY: 180,
        toX: 700,
        toY: 180,
        drawToX: 700,
        drawToY: 150
    },
]
console.log('points',points)

// let mappedPoints = points.map((p) => ({
//     ...p, fromY:  + 50,
//     ...p, currentY: + 50,
//     ...p, toY:  + 50,
// }));
let canvasBox = () => {
    for(i = 0;i < 20 ;i++){
        ctx.moveTo(50+i*50,0)
        ctx.lineTo(50 +i*50,800)
        // ctx.moveTo(100,0)
        // ctx.lineTo(100,800)
    }
    ctx.stroke()
}
canvasBox()
let mappedPoints = [
    {
        fromX:50,
        fromY:200,
        currentX: 50,
        currentY: 200,
        toX: 150,
        toY: 220
    },{
        fromX:150,
        fromY:220,
        currentX: 150,
        currentY: 220,
        toX: 250,
        toY: 220
    },{
        fromX:250,
        fromY:220,
        currentX: 250,
        currentY: 220,
        toX: 350,
        toY: 250
    },{
        fromX:350,
        fromY:250,
        currentX: 350,
        currentY: 250,
        toX: 450,
        toY: 200
    },{
        fromX:450,
        fromY:200,
        currentX: 450,
        currentY: 200,
        toX: 550,
        toY: 220
    },{
        fromX:550,
        fromY:220,
        currentX: 550,
        currentY: 220,
        toX: 650,
        toY: 280
    },{
        fromX:650,
        fromY:280,
        currentX: 650,
        currentY: 280,
        toX: 700,
        toY: 280
    }
]
console.log('mappedPoints',mappedPoints)

function moveTo(point){
    let cofX = point.currentX / point.drawToX
    let cofY = point.currentY / point.drawToY
    let moveCofX = point.fromX / point.toX
    let moveCofY = point.fromY / point.toY
    if(point.currentX < point.drawToX){
        point.currentX += 1 * cofX
    } if(point.currentX > point.drawToX ){
        point.currentX -= 1 * cofX
    }if(point.currentY < point.drawToY ){
        point.currentY += 1 * cofY
    } if(point.currentY > point.drawToY ){
        point.currentY -= 1 * cofY
    } 
    if(point.fromX < point.drawFromX){
        point.fromX += 1 * moveCofX
    } if(point.fromX > point.drawFromX ){
        point.fromX -= 1 * moveCofX
    }if(point.fromY < point.drawFromY ){
        point.fromY += 1 * moveCofY
    } if(point.fromY > point.drawFromY ){
        point.fromY -= 1 * moveCofY
    } 
};

function reverseMoveTo(point){
    let cofX = point.currentX / point.toX
    let cofY = point.currentY / point.toY
    let moveCofX = point.fromX / point.toX
    let moveCofY = point.fromY / point.toY
    if(point.currentX < point.fromX - 1){
        point.currentX += 1 * cofX
    } if(point.currentX > point.fromX + 1){
        point.currentX -= 1 * cofX
    } if(point.currentY < point.fromY - 1) {
        point.currentY += 1 * cofY
    } if(point.currentY > point.fromY + 1){
        point.currentY -= 1 * cofY
    }if(point.fromX < point.drawFromX){
        point.fromX += 1 * moveCofX
    } if(point.fromX > point.drawFromX ){
        point.fromX -= 1 * moveCofX
    }if(point.fromY < point.drawFromY ){
        point.fromY += 1 * moveCofY
    } if(point.fromY > point.drawFromY ){
        point.fromY -= 1 * moveCofY
    } 
};
const drawPoint = (point) => {
    // point.currentX ? point.currentX : point.fromX
    // point.currentY ? point.currentY : point.fromY
    ctx.beginPath();
    // ctx.moveTo(point.fromX,point.fromY)
    // ctx.arc(point.fromX,point.fromY ,5,0,Math.PI+(Math.PI*1),false) 
    ctx.moveTo(point.fromX,point.fromY)
    // ctx.arc(point.currentX,point.currentY ,5,0,Math.PI+(Math.PI*1),false)
    ctx.arc(point.currentX,point.currentY ,5,0,Math.PI+(Math.PI*1),false)
    // ctx.closePath()
    ctx.stroke();
}

const drawToPoint = (point) => {
    // point.currentX ? point.currentX : point.fromX
    // point.currentY ? point.currentY : point.fromY
    ctx.beginPath();
    ctx.strokeStyle = "rgba(0,255,0,1)"
    
    // ctx.moveTo(point.fromX,point.fromY)
    // ctx.arc(point.fromX,point.fromY ,5,0,Math.PI+(Math.PI*1),false) 
    ctx.moveTo(point.drawFromX,point.drawFromY)
    // ctx.arc(point.currentX,point.currentY ,5,0,Math.PI+(Math.PI*1),false)
    ctx.arc(point.drawToX,point.drawToY ,5,0,Math.PI+(Math.PI*1),false)
    // ctx.closePath()
    ctx.stroke();
}

const drawLine = (point) => {
    ctx.beginPath();
    // ctx.arc(point.currentX,point.currentY ,5,0,Math.PI+(Math.PI*1),false) 
    ctx.moveTo(point.fromX, point.fromY);
    ctx.lineTo(point.currentX,point.currentY);
    ctx.lineTo(point.toX,point.toY);

    ctx.stroke();
};
const drawPoints = () => {
    points.forEach(point => drawPoint(point))
    // mappedPoints.forEach(point => drawPoint(point))
}
const drawToPoints = () => {
    points.forEach(point => drawToPoint(point))
    // mappedPoints.forEach(point => drawPoint(point))
}
const drawGraph = () => {
    points.forEach(point => drawLine(point))
    // mappedPoints.forEach(point => drawLine(point))
}
drawPoints()
// drawToPoints()
// drawGraph()




function loopForward(){ 
    if(moveToDone){
        moveToReverseDone = false
        return
    }
    // window.requestAnimationFrame(loopForward);
    setTimeout(loopForward,1000/240)
    
    framesCount++
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // points.forEach(point => {
    //     moveGraph(point);
    //   });
    points.forEach(point => {
    //    mappedPoints.forEach( map => {
        
    //    })
       moveTo(point);
    });
    // for(let i =0 ;i < mappedPoints.length; i++){

    // }
    
    points.forEach(point => {
            drawPoint(point)
            // drawLine(point);
    })
    
    moveToDone = points.every(point => Math.ceil(point.currentX) == point.toX )
}

function loopReverse(){
    if(framesCount == 0){
        moveToDone = false
        moveToReverseDone = true
        return
    }
    framesCount--
    setTimeout(loopReverse,1000/240)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    points.forEach(point => {
        reverseMoveTo(point);
    });

    points.forEach(point => {

         drawLine(point);
         drawPoint(point)
    })

}

startButton.addEventListener('click',loopForward)
reverseButton.addEventListener('click',loopReverse)