
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var div1,div2,div3,div4,div5,div6,div7,div8;
var plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8;
var plinko9,plinko10,plinko11,plinko12,plinko13,plinko14,plinko15,plinko16,plinko17,plinko18;
var plinko19,plinko20,plinko21,plinko22,plinko23,plinko24,plinko25,plinko26;
var plinko27,plinko28,plinko29,plinko30,plinko31,plinko32,plinko33,plinko34,plinko35,plinko36;
var particle1;
var particles = [];
var score = 0;





function setup() {
		createCanvas(480,800);

		

		engine = Engine.create();
		world = engine.world;

		ground = new Ground(250,750,500,10);

		div1 = new Division(10,600,5,300)
		div2 = new Division(80,600,5,300);
		div3 = new Division(160,600,5,300);
		div4 = new Division(240,600,5,300);
		div5 = new Division(320,600,5,300);
		div6 = new Division(400,600,5,300);
		div7 = new Division(478,600,5,300);

		plinko1 = new Plinko(50,50,10,10);
		plinko2 = new Plinko(100,50,10,10);
		plinko3 = new Plinko(150,50,10,10);
		plinko4 = new Plinko(200,50,10,10);
		plinko5 = new Plinko(250,50,10,10);
		plinko6 = new Plinko(300,50,10,10);
		plinko7 = new Plinko(350,50,10,10);
		plinko8 = new Plinko(400,50,10,10);

		plinko9 = new Plinko(10,150,10,10);
		plinko10 = new Plinko(60,150,10,10);
		plinko11 = new Plinko(110,150,10,10);
		plinko12 = new Plinko(160,150,10,10);
		plinko13 = new Plinko(210,150,10,10);
		plinko14 = new Plinko(260,150,10,10);
		plinko15 = new Plinko(310,150,10,10);
		plinko16 = new Plinko(360,150,10,10);
		plinko17 = new Plinko(410,150,10,10);
		plinko18 = new Plinko(460,150,10,10);

		plinko19 = new Plinko(50,250,10,10);
		plinko20 = new Plinko(100,250,10,10);
		plinko21 = new Plinko(150,250,10,10);
		plinko22 = new Plinko(200,250,10,10);
		plinko23 = new Plinko(250,250,10,10);
		plinko24 = new Plinko(300,250,10,10);
		plinko25 = new Plinko(350,250,10,10);
		plinko26 = new Plinko(400,250,10,10);

		plinko27 = new Plinko(10,350,10,10);
		plinko28 = new Plinko(60,350,10,10);
		plinko29 = new Plinko(110,350,10,10);
		plinko30 = new Plinko(160,350,10,10);
		plinko31 = new Plinko(210,350,10,10);
		plinko32 = new Plinko(260,350,10,10);
		plinko33 = new Plinko(310,350,10,10);
		plinko34 = new Plinko(360,350,10,10);
		plinko35 = new Plinko(410,350,10,10);
		plinko36 = new Plinko(460,350,10,10);

		

		
		

		Engine.run(engine); 


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 fill("white");
  textSize(18);
  text("500        500          500         200           200        100",30,480);

  fill("white");
  textSize(20);
  text("Score:  " + score,20,18);

  ground.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();

  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();


  for (j = 0; j < particles.length;j++){
	  particles[j].display();
  }
  


  if(frameCount % 10 === 0){
    particles.push(new Particle(random(100,200),10,10));
  }


}





