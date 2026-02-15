// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "house_garden":
            case "house_garden1":return tiles.createTilemap(hex`1000100001020102010201020102010201020102020102010201020102010201020102010102010201020102010201020102010202010201020a0a0a0a0a0a010201020101020102010a090909090a020102010202010201020a090909090a010201020101020102010a090909090a020102010202010201020a0a09090a0a01020102010102010201020102010201020102010202010201020102010201020102010201010201020102010201020102010201020201020102010304040502010201020101020102010206080807010201020102020102010201060808070201020102010102010201020608080701020102010202010201020106080807020102010201`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . 2 . . . . 2 . . . . . 
. . . . . 2 . . . . 2 . . . . . 
. . . . . 2 . . . . 2 . . . . . 
. . . . . 2 2 . . 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath5,myTiles.tile1,sprites.builtin.brick], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
