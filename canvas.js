
let startButton = document.querySelector('.start-button')
let stopButton = document.querySelector('.stop-button')
let switchButton = document.querySelector('.switch-button')
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
console.log('ctx',ctx)
        // ctx.moveTo(50, 200);
        // ctx.lineTo(800, 400);
let timer
        // let count = 10
        // let startX = 60
        // let startY = 200
        // ctx.moveTo(startX,startY);
        // ctx.lineWidth = '3'
        // ctx.strokeStyle = 'orange'
        
function startDraw (){
        ctx.clearRect(0,0,800,400)
        ctx.beginPath()
        let count = 10
        let startX = 60
        let startY = 200
        
        ctx.moveTo(startX,startY);
        ctx.lineWidth = '3'
        ctx.strokeStyle = 'orange'
            for(i = 0;i <= count; i++){
            ctx.lineTo(startX += 60, startY = startY > 200 ? startY -= Math.random() * 50 
            : startY += Math.random() * 50 )  ;
            ctx.stroke()
            console.log('i',i)
            // ctx.beginPath()
             }
            //  count = 0
        timer = setTimeout(startDraw,1000/5)
        
    }
function fromTenToTwo () {
        ctx.clearRect(0,0,800,400)
        ctx.beginPath()
        let count = 10
        let startX = 60
        let startY = 200
        ctx.moveTo(startX,startY);
        ctx.lineWidth = '2'
        ctx.strokeStyle = 'orange'
            for(i = 0;i <= Math.random()*10 + 2; i++){
            ctx.lineTo(startX += 60, startY = startY > 200 ? startY -= Math.random() * 50 
            : startY += Math.random() * 50 )  ;
            ctx.stroke()
            // ctx.beginPath(startX+i*30,startY+i*30)
            // ctx.arc(startX+i*30,startY+i*30,10,0,Math.PI+(Math.PI*1),false)
            // ctx.fill()
            console.log('i',i)
             }
    }
// let drowedGraph = fromTenToTwo()

        // startDraw()
        // let timer = setTimeout(startDraw,1000/30)
        
        // setInterval(() => {
        //     startDraw()
        // },60)
        startButton.addEventListener('click',
            startDraw
        )
         function stopDraw () {
             startDraw = null
             startButton.removeEventListener('click',startDraw)
         }
        stopButton.addEventListener('click',stopDraw)
        // stopButton.removeEventListener('click',stopDraw)
        
        function switchLines () {
        ctx.clearRect(0,0,800,400)
        ctx.beginPath()
        let count = 10
        let startX = 60
        let startY = 200
        
        ctx.moveTo(startX,startY);
        ctx.lineWidth = '3'
        ctx.strokeStyle = 'orange'
            for(i = 0;i <= count; i++){
            ctx.lineTo(startX += 60, startY = startY > 200 ? startY -= Math.random() * 50 
            : startY += Math.random() * 50 )  ;
            ctx.stroke()
            console.log('i',i)
            // ctx.beginPath()
             }
        }

// switchButton.addEventListener('click',drowedGraph)

// function lineAndCircle (){
//     //Begin
//     ctx.beginPath()  //first circle
//     ctx.arc(50,200,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     ctx.beginPath() // line
//     ctx.moveTo(50,200)
//     ctx.lineTo(100,150)
//     ctx.stroke()
//     ctx.beginPath() // last circle
//     ctx.arc(100,150,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     //end
//     //Begin
//     ctx.beginPath()  //first circle
//     ctx.arc(50,200,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     ctx.beginPath() // line
//     ctx.moveTo(100,150)
//     ctx.lineTo(150,250)
//     ctx.stroke()
//     ctx.beginPath() // last circle
//     ctx.arc(150,250,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     //end
//     //Begin
//     ctx.beginPath()  //first circle
//     ctx.arc(50,200,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     ctx.beginPath() // line
//     ctx.moveTo(150,250)
//     ctx.lineTo(200,300)
//     ctx.stroke()
//     ctx.beginPath() // last circle
//     ctx.arc(200,300,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     //end
//     //Begin
//     ctx.beginPath()  //first circle
//     ctx.arc(50,200,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     ctx.beginPath() // line
//     ctx.moveTo(200,300)
//     ctx.lineTo(250,200)
//     ctx.stroke()
//     ctx.beginPath() // last circle
//     ctx.arc(250,200,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     //end
//     //Begin
//     ctx.beginPath()  //first circle
//     ctx.arc(50,200,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     ctx.beginPath() // line
//     ctx.moveTo(250,200)
//     ctx.lineTo(300,200)
//     ctx.stroke()
//     ctx.beginPath() // last circle
//     ctx.arc(300,200,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     //end
//     //Begin
//     ctx.beginPath()  //first circle
//     ctx.arc(50,200,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     ctx.beginPath() // line
//     ctx.moveTo(300,200)
//     ctx.lineTo(350,150)
//     ctx.stroke()
//     ctx.beginPath() // last circle
//     ctx.arc(350,150,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     //end
//     //Begin
//     ctx.beginPath()  //first circle
//     ctx.arc(50,200,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     ctx.beginPath() // line
//     ctx.moveTo(350,150)
//     ctx.lineTo(400,180)
//     ctx.stroke()
//     ctx.beginPath() // last circle
//     ctx.arc(400,180,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     //end
//     //Begin
//     ctx.beginPath()  //first circle
//     ctx.arc(50,200,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     ctx.beginPath() // line
//     ctx.moveTo(400,180)
//     ctx.lineTo(450,200)
//     ctx.stroke()
//     ctx.beginPath() // last circle
//     ctx.arc(450,200,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     //end
//     //Begin
//     ctx.beginPath()  //first circle
//     ctx.arc(50,200,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     ctx.beginPath() // line
//     ctx.moveTo(450,200)
//     ctx.lineTo(500,240)
//     ctx.stroke()
//     ctx.beginPath() // last circle
//     ctx.arc(500,240,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     //end
//     //Begin
//     ctx.beginPath()  //first circle
//     ctx.arc(50,200,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     ctx.beginPath() // line
//     ctx.moveTo(500,240)
//     ctx.lineTo(550,200)
//     ctx.stroke()
//     ctx.beginPath() // last circle
//     ctx.arc(550,200,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     //end
//     //Begin
//     ctx.beginPath()  //first circle
//     ctx.arc(50,200,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     ctx.beginPath() // line
//     ctx.moveTo(550,200)
//     ctx.lineTo(600,170)
//     ctx.stroke()
//     ctx.beginPath() // last circle
//     ctx.arc(600,170,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     //end
//     //Begin
//     ctx.beginPath()  //first circle
//     ctx.arc(50,200,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     ctx.beginPath() // line
//     ctx.moveTo(600,170)
//     ctx.lineTo(650,200)
//     ctx.stroke()
//     ctx.beginPath() // last circle
//     ctx.arc(650,200,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     //end
//     }
// lineAndCircle()

// function lineAndCircle (x = 1,y = 1,radius = 5,startAngle = 0,endAngle = Math.PI+Math.PI*1,ainticlockwise = false){
//     ctx.beginPath()
//     ctx.moveTo(x + 50*x,y + 200)
//     ctx.lineTo(x + 60*x, y = y > 200 ? y -= Math.random() * 50 
//     : y += Math.random() * 50 )
//     ctx.stroke()
//     ctx.beginPath()
//     ctx.arc(70+1*30,120+1*30,5,0,Math.PI+(Math.PI*1),false)
//     ctx.lineWidth = '1'
//     ctx.strokeStyle = "#000000"
//     // ctx.strokeStyle = "#ffffff"
//     ctx.stroke()
//     ctx.fillStyle = "#FFA500"
//     }

function lineAndCircle (coordinates,radius = 5,startAngle = 0,endAngle = Math.PI+Math.PI*1,ainticlockwise = false){
    //Begin
    ctx.beginPath()
    ctx.moveTo(50,200)
    ctx.arc(50,200,5,0,Math.PI+(Math.PI*1),false)
    ctx.lineWidth = '1'
    ctx.strokeStyle = "#000000"
    ctx.fillStyle = "#FFA500"
    for (const [x,y] of coordinates){
        ctx.lineTo(x,y)
        // ctx.beginPath()  //first circle
        ctx.arc(x,y,5,0,Math.PI+(Math.PI*1),false)
    }
    ctx.stroke()
    ctx.closePath()
    //end
}

// function drawGraphWithLines (){
//     for(i = 1;i <= 16;i++){
//         lineAndCircle(i)
//     }
// }
// drawGraphWithLines ()

// lineAndCircle([
//     [100,150],
//     [150,250],
//     [200,300],
//     [250,250],
//     [300,230],
//     [350,200],
//     [400,180],
//     [450,100],
//     [500,200],
//     [550,250],
//     [600,180],
//     [650,230],
//     [700,350],
//     [750,300]
// ])
// lineAndCircle([
//     [200,150],
//     [300,250],
//     [400,300],
//     [500,250],
//     [600,230],
//     [700,200],
//     [750,180],
// ])

// function lineFromTo(from,to){
//     //Begin
//     let [fromX,fromY] = from
//     let [toX, toY] = to
//     let current = [fromX,fromY] 
//     while(current[0] < toX || current[1] < toY){
//         ctx.beginPath()
//         ctx.clearRect(0,0,800,800)
//         // ctx.save()
//         ctx.moveTo(fromX, fromY)
//         ctx.lineTo(current[0],current[1])
//         current[0] += current[0] < toX ? 1 : 0
//         current[1] += current[1] < toY ? 1 : 0
//         ctx.stroke()
//         // ctx.restore()
//     }
//     // ctx.closePath()
//     //end
// }

function lineFromToAnimation(from,to){
    //Begin
    let [fromX,fromY] = from
    let [toX, toY] = to
    let current = [fromX,fromY]
    // current[0] +=1
    // current[1] += 1
    function draw (){
        if(current[0] < toX || current[1] < toY){
        ctx.clearRect(0,0,800,800)   
        current[0] += current[0] < toX ? 1 : 0
        current[1] += current[1] < toY ? 1 : 0
        ctx.arc(current[0],current[1],5,0,Math.PI+(Math.PI*1),false)
        ctx.stroke()
        }
        
        ctx.beginPath()
        // ctx.clearRect(0,0,800,800)
        // ctx.save()
        ctx.moveTo(fromX, fromY)
        ctx.lineTo(current[0],current[1])
        // current[0] += current[0] < toX ? 1 : 0
        // current[1] += current[1] < toY ? 1 : 0
        // ctx.stroke()
        // ctx.restore() 
        setTimeout(draw,1000/60)
}
draw()
    // ctx.closePath()
    //end
}
// lineFromToAnimation([50,150],[300,200])

// function DrawGraphFromTo(from = [[0,0]], to = [[100,100]]){
//     //Begin
//     let [fromX,fromY] = from
//     let [toX, toY] = to
//     // let current = [fromX,fromY]
//     console.log('from',from)
//     console.log('fromX',fromX)

//     // function drawGraph(){
//     //     ctx.beginPath()
//     //     ctx.moveTo(50,200)
//     //     ctx.arc(50,200,5,0,Math.PI+(Math.PI*1),false)
//     //     for (const [x,y] of from){
//     //         ctx.lineTo(x,y)
//     //         // ctx.beginPath()  //first circle
//     //         ctx.arc(x,y,5,0,Math.PI+(Math.PI*1),false)
//     //     }
//     //     ctx.moveTo(50,200)
//     //     for (const [x,y] of to){
//     //         ctx.lineTo(x,y)
//     //         // ctx.beginPath()  //first circle
//     //         ctx.arc(x,y,5,0,Math.PI+(Math.PI*1),false)
//     //     }
//     // }
    
//     function drawAnimation (){
//         ctx.beginPath()
//         ctx.moveTo(50,200)
//         ctx.arc(50,200,5,0,Math.PI+(Math.PI*1),false)
//         ctx.stroke()
//         for (const [toX,toY] of to){
//             // console.log('to',to)
//             // console.log('toX',toX)
//             for(const [fromX,fromY] of from){
//                 let currentX = fromX
//                 let currentY = fromY
//                 // console.log('currentX',currentX)
//                 // console.log('currentY',currentY)
//                 if(currentX < toX || currentY < toY){
//                     console.log('to',to)
//                     console.log('current[0]',currentY)
//                     console.log('current[1]',currentY)
//                     ctx.clearRect(0,0,800,800)   
//                     currentX += currentX < toX ? 1 : 0
//                     currentY += currentY < toY ? 1 : 0
//                     ctx.arc(currentX,currentY,5,0,Math.PI+(Math.PI*1),false)
//                     ctx.stroke()
//                     // ctx.beginPath()
//                     // ctx.moveTo(fromX, fromY)
//                     ctx.lineTo(currentX,currentY)
//                     ctx.stroke()
//                     }
//             }
//         ctx.lineTo(toX,toY)
//         ctx.beginPath()
//         // ctx.arc(toX,toY,5,0,Math.PI+(Math.PI*1),false)
//         }
//         // drawGraph()

//         setTimeout(drawAnimation,1000/5)
//     }
//     drawAnimation()
//     //end
// }

// DrawGraphFromTo(
//     [
//         [100,150],
//         [150,250],
//         [200,300],
//         [250,250],
//         [300,230],
//         [350,200],
//         [400,180],
//         [450,100],
//         [500,200],
//         [550,250],
//         [600,180],
//         [650,230],
//         [700,350],
//         [750,300]
//     ],
//     [
//     [200,150],
//     [300,250],
//     [400,300],
//     [500,250],
//     [600,230],
//     [700,200],
//     [750,180],
//     ]
//     )
let inputArr = [
        [
        [100,150],
        [150,250],
        [200,300],
        [250,250],
        [300,230],
        [350,200],
        [400,180],
        [450,100],
        [500,200],
        [550,250],
        [600,180],
        [650,230],
        [700,350],
        [750,300]
    ],
    [
    [200,150],
    [300,250],
    [400,300],
    [500,250],
    [600,230],
    [700,200],
    [750,180],
    ]
]
let inputData = {
        from: [
        [100,150],
        [150,250],
        [200,300],
        [250,250],
        [300,230],
        [350,200],
        [400,180],
        [450,100],
        [500,200],
        [550,250],
        [600,180],
        [650,230],
        [700,350],
        [750,300]
        ],
        to: [
        [200,150],
        [300,250],
        [400,300],
        [500,250],
        [600,230],
        [700,200],
        [750,180],    
        ]
}

function drawLineAndCircle([x,y]){
        ctx.clearRect(0,0,800,400)
        ctx.lineTo(x,y)
        ctx.arc(x,y,5,0,Math.PI+(Math.PI*1),false)
        ctx.stroke()
}
function drawLineAndCircleFromTo([fromX,fromY],[toX,toY]){
    let currentX = fromX
    let currentY = fromY
    console.log('currentX',currentX)
    function lineAnimation(){
        if(currentX < toX || currentY < toY){
            // ctx.clearRect(0,0,800,400)
            ctx.beginPath()
            ctx.moveTo(fromX,fromY)
            currentX += currentX < toX ? 1 : 0
            currentY += currentY < toY ? 1 : 0
            ctx.lineTo(currentX ,currentY)
            ctx.arc(currentX,currentY ,5,0,Math.PI+(Math.PI*1),false)   
            ctx.stroke()
        }
        // ctx.stroke()
        // setTimeout(lineAnimation,1000/40)
        window.requestAnimationFrame(lineAnimation)
    }
    lineAnimation()
}
// drawLineAndCircleFromTo([100,220],[250,320])
// drawLineAndCircleFromTo([150,220],[250,320])


function moveFromTo([fromX,fromY],[toX,toY]) {
    let currentX = fromX
    let currentY = fromY
    currentX += currentX < toX ? 1 : 0
    currentY += currentY < toY ? 1 : 0
  };
function moveFrom([fromX,fromY]){
    let currentX = fromX
    let currentY = fromY
    currentX += currentX < ctx.canvas.width ? 1 : 0
    currentY += currentY < ctx.canvas.width ? 1 : 0
}
function moveGraph(point){
    point.fromX += point.fromX < ctx.canvas.width ? 1 : 0
    point.fromY += point.fromY < ctx.canvas.width ? 1 : 0
};
// function moveTo(point){
//     if(point.fromX < point.toX){
//         point.fromX += 1
//     } if(point.fromX > point.toX){
//         point.fromX -= 1
//     } if(point.fromY < point.toY){
//         point.fromY += 1
//     } if(point.fromY > point.toY){
//         point.fromY -= 1
//     } 
//     // point.fromX += point.fromX < point.toX ? 1 : 0
//     // point.fromY += point.fromY < point.toY ? 1 : 0
// };

function moveTo(point){
    if(point.currentX <= point.toX - 1){
        point.currentX += 1
    } if(point.currentX >= point.toX + 1){
        point.currentX -= 1
    } if(point.currentY <= point.toY - 1){
        point.currentY += 1
    } if(point.currentY >= point.toY + 1){
        point.currentY -= 1
    } 
    // point.fromX += point.fromX < point.toX ? 1 : 0
    // point.fromY += point.fromY < point.toY ? 1 : 0
};
let dataFrom2 = [200,150]
let dataTo2 = [300,150]

// const drawLine = (point) => {
//     let currentX = point.fromX
//     let currentY = point.fromY
//     ctx.beginPath();
//     ctx.moveTo(point.fromX, point.fromY);
//     ctx.lineTo(point.toX,point.toY);
//     // ctx.beginPath();
//     ctx.moveTo(point.fromX, point.fromY);
//     ctx.arc(currentX,currentY ,5,0,Math.PI+(Math.PI*1),false) 
//     ctx.stroke();
// };

// const drawLine = (point) => {
//     ctx.beginPath();
//     ctx.moveTo(point.fromX, point.fromY);
//     ctx.lineTo(point.toX,point.toY);
//     // ctx.beginPath();
//     ctx.moveTo(point.fromX, point.fromY);
//     ctx.arc(point.currentX,point.currentY ,5,0,Math.PI+(Math.PI*1),false) 
//     ctx.stroke();
// };
const drawLine = (point) => {
    ctx.beginPath();
    // ctx.moveTo(point.fromX, point.fromY);
    
    
    ctx.arc(point.currentX,point.currentY ,5,0,Math.PI+(Math.PI*1),false) 
    ctx.moveTo(point.fromX, point.fromY);
    // ctx.lineTo(point.toX,point.toY);
    
    ctx.lineTo(point.currentX,point.currentY);
    ctx.lineTo(point.toX,point.toY);
    // ctx.stroke();
   
    ctx.stroke();
};
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
let mappedPoints = points.map((p) => ({...p, currentX:p.fromX,...p, currentY:p.fromY}));
function loop(){
    // window.requestAnimationFrame(loop);
    setTimeout(loop,1000/60)
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
}

switchButton.addEventListener('click',loop)
// drawLineAndCircle(100,300)
// drawLineAndCircle(150,330)
// drawLineAndCircle(200,330)
function drawGraph(){
    // window.requestAnimationFrame(drawGraph)
    ctx.moveTo(50,200)
    // inputData.from.forEach(drawLineAndCircle)
    inputData.to.forEach(moveTo)

    // ctx.moveTo(50,200)
    // inputData.from.forEach(moveTo)
}
let dataFrom = [200,150]
let dataTo = [300,150]
function example(){
    // window.requestAnimationFrame(drawGraph)
    ctx.moveTo(50,200)
    // drawLineAndCircle(dataFrom)
    // drawLineAndCircleFromTo(dataFrom,dataTo)
    // moveTo(dataFrom[0],dataFrom[1])
    // for([from,to] of inputArr){
    //     console.log('from,to',from,to)
    //     drawLineAndCircleFromTo(from,to)
    // }
    
}
example()
drawGraph()
function lineAnimation(){
    let [fromX,fromY] = from
    let [toX, toY] = to
    let current = [fromX,fromY]
    function draw (){
        if(current[0] < toX || current[1] < toY){
            ctx.clearRect(0,0,800,800)   
            current[0] += current[0] < toX ? 1 : 0
            current[1] += current[1] < toY ? 1 : 0
            ctx.arc(current[0],current[1],5,0,Math.PI+(Math.PI*1),false)
            ctx.stroke()
        }
        ctx.beginPath()
        ctx.moveTo(fromX, fromY)
        ctx.lineTo(current[0],current[1])
        setTimeout(draw,1000/20)
    }

}