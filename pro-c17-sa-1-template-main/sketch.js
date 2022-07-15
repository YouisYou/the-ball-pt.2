var box1 
function setup() 
{
  createCanvas(400, 400);

  box1 = new Box(300,70,60,60,70,-5)
}

function draw() 
{
  background(220);
 box1.show()
 box1.up_and_down()
}

