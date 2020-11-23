// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers.registerTilemapFactory(function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level": return tiles.createTilemap(hex`0a0008000101010101010101010104020202020202020204020102010202010201020202020203030202020202020202030302020202020102010202010201020402020202020202020401010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . 
. 2 . 2 . . 2 . 2 . 
. . . . 2 2 . . . . 
. . . . 2 2 . . . . 
. 2 . 2 . . 2 . 2 . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.castle.tilePath5,myTiles.tile2,myTiles.tile1], TileScale.Sixteen)
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
