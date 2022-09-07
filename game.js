document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        var game = new PixelJS.Engine();
        game.init({
            container: 'game_container',
            width: 300,
            height: 200
        });
        
        var backgroundLayer = game.createLayer('background');
        var grass = backgroundLayer.createEntity();
        backgroundLayer.static = true;
        grass.pos = { x: 0, y: 0 };
        grass.asset = new PixelJS.Tile();
        grass.asset.prepare({
            name: 'grass.png',
            size: { 
                width: 300, 
                height: 200 
            }
        });
        
        var playerLayer = game.createLayer('players');
        var player = new PixelJS.Player();
        player.addToLayer(playerLayer);
        player.pos = { x: 75, y: 120 };
        player.size = { width: 32, height: 32 };
        player.velocity = { x: 100, y: 100 };
        player.asset = new PixelJS.AnimatedSprite();
        player.asset.prepare({ 
            name: 'char.png', 
            frames: 3, 
            rows: 4,
            speed: 100,
            defaultFrame: 1
        });
        
        var itemLayer = game.createLayer('items');
        var coin = itemLayer.createEntity();
        coin.pos = { x: 200, y: 80 };
        coin.size = { width: 12, height: 16 };
        coin.asset = new PixelJS.AnimatedSprite();
        coin.asset.prepare({
            name: 'coin.png',
            frames: 8,
            rows: 1,
            speed: 80,
            defaultFrame: 0
        });
        
        var collectSound = game.createSound('collect');
        collectSound.prepare({ name: 'coin.mp3' });
        
        player.onCollide(function (entity) {
            if (entity === coin) {
                collectSound.play();
                coin.pos = {
                    x: Math.floor(Math.random() * (300 - 30 + 1) + 10),
                    y: Math.floor(Math.random() * (200 - 30 + 1) + 10)
                };
                
                score += 1;
                scoreLayer.redraw = true;
                scoreLayer.drawText(
                    'Coins: ' + score, 
                    20, 
                    30, 
                    '14pt "Trebuchet MS", Helvetica, sans-serif', 
                    '#FFFFFF',
                    'left'
                );
            }
        });
        
        playerLayer.registerCollidable(player);
        itemLayer.registerCollidable(coin);
        
        var score = 0;
        var scoreLayer = game.createLayer("score");
        scoreLayer.static = true;
        
        game.loadAndRun(function (elapsedTime, dt) {
        });
    }
}