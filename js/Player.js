class Player{
    constructor(){
      this.player = createSprite (820, 573, 50, 50);
      this.player.addAnimation ("plyIdle",  playeridleImg);
      this.player.scale = 3.1;
      this.player.setCollider("rectangle", 0, -3, 40, 42);
      this.test = createSprite (800, 640, 1199, 20);
  
      this.player.velocityY = this.player.velocityY + 0.5;
      this.player.collide(this.test); 
      //this.player.debug = true;
    }

    handleControls(){
      if(keyDown("space")){
        this.player.y = this.player.y -100; 
       
      }

      if(keyDown("LEFT_ARROW")){
        this.player.x = this.player.x -50; 
       
      }
    }
   

}