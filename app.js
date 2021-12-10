(function() {
  
    var renderer = PIXI.autoDetectRenderer(660, 660, {backgroundColor: 0x34495e, antialias: true});
    document.body.appendChild(renderer.view);

    renderer.backgroundColor = '0x9BC415';

    renderer.resize(window.innerWidth, window.innerHeight);

    renderer.view.style.position = 'absolute';

    document.body.appendChild(renderer.view);

    
    var stage = new PIXI.Container();

   
    var boxWidth = renderer.width / 10;
    var boxHeight = renderer.height / 10;


    var chickenPlayer = PIXI.Sprite.from('node_modules/assets/Con_Chick.png');
    chickenPlayer.width = renderer.width /10;
    chickenPlayer.height = renderer.height /10;


    var coinGoal = PIXI.Sprite.from('node_modules/assets/coin.png');
    coinGoal.width = renderer.width /10;
    coinGoal.height = renderer.height /10;
    
    

    stage.addChild(chickenPlayer);
    stage.addChild(coinGoal);


    //pisteiden lasku
    const style = new PIXI.TextStyle({
        fontFamily: 'Montserrat',
        fontSize: 48,
        fill: '0xCC0000',
        stroke: '#ffffff',
        strokeThickness: 4,
        dropShadow: true,
        dropShadowDistance: 10,
        dropShadowAngle: Math.PI / 2,
        dropShadowBlur: 4,
        dropShadowColor: '#000000'
    });
    
    const myText = new PIXI.Text('Hello World!', style);
    
    stage.addChild(myText);
    
    let count = 0;
    
    document.addEventListener('keydown', onKeyDown);

    goalBoxSpawn();

    animate();

    function animate() {
        renderer.render(stage);
        let strCount = count.toString();
        myText.text ="Pisteeni: " + strCount;

        checkPosition();
        requestAnimationFrame(animate);
    }

    function goalBoxSpawn() {


        var randomX = Math.floor((Math.random() * 10) + 0);
        var randomY = Math.floor((Math.random() * 10) + 0);

        coinGoal.position.x = boxWidth * randomX;
        coinGoal.position.y = boxHeight * randomY;

    }

    
    function goalCounter() {
        count += 1;
    } 

    function checkPosition() {
        if (coinGoal.position.x === chickenPlayer.position.x && coinGoal.position.y === chickenPlayer.position.y) {
            goalBoxSpawn();
            goalCounter();
        }
    }

    function onKeyDown(key) {
        if (key.keyCode === 87 || key.keyCode === 38) {
                if (chickenPlayer.position.y != 0) {
                chickenPlayer.position.y -= boxHeight;
            }
        }


        if (key.keyCode === 83 || key.keyCode === 40) {
            if (chickenPlayer.position.y != renderer.height - boxHeight) {
                chickenPlayer.position.y += boxHeight;
            }
        }

        if (key.keyCode === 65 || key.keyCode === 37) {
             if (chickenPlayer.position.x != 0) {
                chickenPlayer.position.x -= boxWidth;
            }
        }

        if (key.keyCode === 68 || key.keyCode === 39) {
            if (chickenPlayer.position.x != renderer.width - boxWidth) {
                chickenPlayer.position.x += boxWidth;
            }
        }
    }
})();


var playButton = document.getElementById("play-button");
playButton.addEventListener('click', function() {
  var preview = document.getElementById("preview");
  
  preview.setAttribute("class", "hide");
});
