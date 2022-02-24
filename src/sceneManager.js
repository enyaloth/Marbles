class SceneManager {
    constructor(game) {
        this.game = game;
        this.level = 1;
        this.loadLevel(this.level);
    }

    loadLevel(level) {
        if (level==1) {
            let tilemap = levelOne.terrain;
            for (let i=levelOne.terrain.length-1; i>=0; i--) {
                let tile = new Terrain(this.game, tilemap[i].x, tilemap[i].y, "grass");
                this.game.addEntity(tile);
                console.log('adding ' + tile);
            }
        }
    }
}