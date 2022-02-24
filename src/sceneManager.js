class SceneManager {
    constructor(game) {
        this.game = game;
        this.level = 1;
        this.loadLevel(this.level);
    }

    loadLevel(level) {
        if (level==1) {
            levelOne.terrain.forEach(t => {
                let terrain = new Terrain(this.game, t.x, t.y, "grass");
                this.game.addEntity(terrain);
            });
        }
    }
}