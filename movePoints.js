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
    {
        fromX:50,
        fromY:200,
        currentX: 50,
        currentY: 200,
        toX: 50,
        toY: 200
    },{
        fromX:50,
        fromY:200,
        currentX: 50,
        currentY: 200,
        toX: 100,
        toY: 150
    },{
        fromX:100,
        fromY:150,
        currentX: 100,
        currentY: 150,
        toX: 150,
        toY: 200
    },{
        fromX:150,
        fromY:200,
        currentX: 150,
        currentY: 200,
        toX: 200,
        toY: 250
    },{
        fromX:200,
        fromY:250,
        currentX: 200,
        currentY: 250,
        toX: 250,
        toY: 200
    },{
        fromX:250,
        fromY:200,
        currentX: 250,
        currentY: 200,
        toX: 300,
        toY: 220
    },{
        fromX:300,
        fromY:220,
        currentX: 300,
        currentY: 220,
        toX: 350,
        toY: 280
    },{
        fromX:350,
        fromY:280,
        currentX: 350,
        currentY: 280,
        toX: 400,
        toY: 250
    },{
        fromX:400,
        fromY:250,
        currentX: 400,
        currentY: 250,
        toX: 450,
        toY: 280
    },{
        fromX:450,
        fromY:280,
        currentX: 450,
        currentY: 280,
        toX: 500,
        toY: 220
    },{
        fromX:500,
        fromY:220,
        currentX: 500,
        currentY: 220,
        toX: 550,
        toY: 280
    },{
        fromX:550,
        fromY:280,
        currentX: 550,
        currentY: 280,
        toX: 600,
        toY: 200
    },{
        fromX:600,
        fromY:200,
        currentX: 600,
        currentY: 200,
        toX: 650,
        toY: 200
    },{
        fromX:650,
        fromY:200,
        currentX: 650,
        currentY: 200,
        toX: 700,
        toY: 180
    },
]

// let mappedPoints = points.map((p) => ({...p, currentX:p.fromX,...p, currentY:p.fromY}));
// console.log('mappedPoints',mappedPoints)

function moveTo(point){
    let cofX = point.currentX / point.toX
    let cofY = point.currentY / point.toY
    if(point.currentX < point.toX){
        point.currentX += 1 * cofX
    } if(point.currentX > point.toX ){
        point.currentX -= 1 * cofX
    }if(point.currentY < point.toY ){
        point.currentY += 1 * cofY
    } if(point.currentY > point.toY ){
        point.currentY -= 1 * cofY
    } 
};

function reverseMoveTo(point){
    let cofX = point.currentX / point.toX
    let cofY = point.currentY / point.toY
    if(point.currentX < point.fromX - 1){
        point.currentX += 1 * cofX
    } if(point.currentX > point.fromX + 1){
        point.currentX -= 1 * cofX
    } if(point.currentY < point.fromY - 1) {
        point.currentY += 1 * cofY
    } if(point.currentY > point.fromY + 1){
        point.currentY -= 1 * cofY
    }
};
const drawPoint = (point) => {
    // point.currentX ? point.currentX : point.fromX
    // point.currentY ? point.currentY : point.fromY
    ctx.beginPath();
    // ctx.moveTo(point.fromX,point.fromY)
    // ctx.arc(point.fromX,point.fromY ,5,0,Math.PI+(Math.PI*1),false) 
    // ctx.moveTo(point.fromX,point.fromY)
    ctx.arc(point.currentX,point.currentY ,5,0,Math.PI+(Math.PI*1),false)
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
}
const drawGraph = () => {
    points.forEach(point => drawLine(point))
}
drawPoints()
drawGraph()



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
       moveTo(point);
    });
    
    points.forEach(point => {
            drawPoint(point)
            drawLine(point);
    })
//     mappedPoints.forEach(point => {
//         drawPoint(point)
// })
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