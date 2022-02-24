class levelGenerator {

    static generateFloorTerrain(x, ctxWidth) {
        const tiles = [];
        let colCount = 1;
        let tileCount = 0;

        // intialize the center point
        let placeX = ctxWidth/2;
        let placeY = 0;

        // place the upper half of the grid
        for (let i=0; i<x; i++) {
            
            placeX = (ctxWidth/2 - params.blockSize/2) - i*params.blockSize/2;

            for (let j=1; j<=colCount; j++) {
                tiles[tileCount] = {x: placeX, y: placeY}
                placeX += params.blockSize;
                tileCount++;
            }

            placeY += (0.7*params.blockSize)/2;
            colCount++;
        }
        

        // place the lower half of the grid
        for (let k=x-1; k>0; k--) {
            colCount = k-1;
            placeX = (ctxWidth/2 - params.blockSize/2) - k*params.blockSize/2 + params.blockSize/2;
            for (let j=0; j<=colCount; j++) {
                tiles[tileCount] = {x: placeX, y: placeY}
                placeX += params.blockSize;
                tileCount++;
            }
            placeY += (0.7*params.blockSize)/2;
            colCount--;
        }

        return tiles;
    }
  
};

const levelOne = {
    terrain: levelGenerator.generateFloorTerrain(8, 1024)
};