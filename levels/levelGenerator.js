class levelGenerator {

    static generateFloorTerrain(x, y, ctxWidth) {
        const tiles = [];
        let colCount=1;
        let placeX = ctxWidth/2 - params.blockSize/2;
        let placeY = 0;

        // place the upper half of the grid
        for (let i=0; i<x; i++) {
            placeX = (ctxWidth/2 - params.blockSize/2) - i*params.blockSize/2;
            for (let j=0; j<=colCount; j++) {
                tiles[j] = {x: placeX, y: placeY}
                placeX += params.blockSize;
            }
            placeY += (0.7*params.blockSize)/2;
            colCount++;
        }

        // place the lower half of the grid
        for (let i=x-1; i>0; i--) {
            placeX = (ctxWidth/2 - params.blockSize/2) - i*params.blockSize/2;
            for (let j=0; j<=colCount; j++) {
                tiles[j] = {x: placeX, y: placeY}
                placeX += params.blockSize;
            }
            placeY += (0.7*params.blockSize)/2;
            colCount--;
        }

        return tiles;
    }
  
};

const levelOne = {
    terrain: levelGenerator.generateFloorTerrain(3, 3, 500)
};