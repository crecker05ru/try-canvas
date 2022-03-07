let startButton = document.querySelector('.start-button')
let reverseButton = document.querySelector('.reverse-button')
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
console.log('ctx',ctx)

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

let dataFrom2 = [200,150]
let dataTo2 = [300,150]

const drawLine = (point) => {
    ctx.beginPath();
    ctx.arc(point.currentX,point.currentY ,5,0,Math.PI+(Math.PI*1),false) 
    ctx.moveTo(point.fromX, point.fromY);
    ctx.lineTo(point.currentX,point.currentY);
    ctx.lineTo(point.toX,point.toY);

    ctx.stroke();
};
const drawGraph = () => {
    points.forEach(point => drawLine(point))
}
let points = [
    {
        fromX:50,
        fromY:200,
        toX: 50,
        toY: 200
    },{
        fromX:50,
        fromY:200,
        toX: 100,
        toY: 150
    },{
        fromX:100,
        fromY:150,
        toX: 150,
        toY: 200
    },{
        fromX:150,
        fromY:200,
        toX: 200,
        toY: 250
    },{
        fromX:200,
        fromY:250,
        toX: 250,
        toY: 200
    },{
        fromX:250,
        fromY:200,
        toX: 300,
        toY: 220
    },{
        fromX:300,
        fromY:220,
        toX: 350,
        toY: 280
    },{
        fromX:350,
        fromY:280,
        toX: 400,
        toY: 250
    },{
        fromX:400,
        fromY:250,
        toX: 450,
        toY: 280
    },{
        fromX:450,
        fromY:280,
        toX: 500,
        toY: 220
    },{
        fromX:500,
        fromY:220,
        toX: 550,
        toY: 280
    },{
        fromX:550,
        fromY:280,
        toX: 600,
        toY: 200
    },{
        fromX:600,
        fromY:200,
        toX: 650,
        toY: 200
    },{
        fromX:650,
        fromY:200,
        toX: 700,
        toY: 180
    },
]

drawGraph()
let mappedPoints = points.map((p) => ({...p, currentX:p.fromX,...p, currentY:p.fromY}));
console.log('mappedPoints',mappedPoints)
let start = Date.now()
let framesCount = 0
let moveToDone = false
let moveToReverseDone = false
console.log('framesCount',framesCount)
console.log('moveToDone',moveToDone)
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
    mappedPoints.forEach(point => {
       moveTo(point);
    });

    mappedPoints.forEach(point => {
            drawLine(point);
    })
    moveToDone = mappedPoints.every(point => Math.ceil(point.currentX) == point.toX )
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
    mappedPoints.forEach(point => {
        reverseMoveTo(point);
    });

    mappedPoints.forEach(point => {
            drawLine(point);
    })
}

startButton.addEventListener('click',loopForward)
reverseButton.addEventListener('click',loopReverse)