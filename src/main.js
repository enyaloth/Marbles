const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./assets/spritesheet_nature-blocks.png");
ASSET_MANAGER.queueDownload("./assets/spritesheet2.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.init(ctx);
	new SceneManager(gameEngine);
	gameEngine.start();
});
