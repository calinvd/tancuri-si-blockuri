namespace SpriteKind {
    export const wall = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.wall, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
})
function tankOrientation (tank: Sprite, orientation: string) {
    if (orientation == "up") {
        tank.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . f f f . . . f f . . . f f f . 
            . f . f f f f f f f f f f . f . 
            . f f f f 1 1 f f 1 1 f f f f . 
            . f . f 1 1 1 f f 1 1 1 f . f . 
            . f f f 1 1 f f f f 1 1 f f f . 
            . f . f 1 1 f f f f 1 1 f . f . 
            . f f f 1 1 1 f f 1 1 1 f f f . 
            . f . f 1 1 1 1 1 1 1 1 f . f . 
            . f f f f 1 1 1 1 1 1 f f f f . 
            . f . f f f f f f f f f f . f . 
            . f f f . . . . . . . . f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (orientation == "down") {
        tank.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f . . . . . . . . f f f . 
            . f . f f f f f f f f f f . f . 
            . f f f f 1 1 1 1 1 1 f f f f . 
            . f . f 1 1 1 f f 1 1 1 f . f . 
            . f f f 1 1 f f f f 1 1 f f f . 
            . f . f 1 1 f f f f 1 1 f . f . 
            . f f f 1 1 1 f f 1 1 1 f f f . 
            . f . f 1 1 1 f f 1 1 1 f . f . 
            . f f f f 1 1 f f 1 1 f f f f . 
            . f . f f f f f f f f f f . f . 
            . f f f . . . f f . . . f f f . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            `)
    } else if (orientation == "right") {
        tank.setImage(img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . f 1 1 1 1 1 1 1 1 1 f . . . 
            . . f 1 1 1 f f f 1 1 1 f . . . 
            . . f 1 1 f f f f f f f f f f f 
            . . f 1 1 f f f f f f f f f f f 
            . . f 1 1 1 f f f 1 1 1 f . . . 
            . . f 1 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . f f f f f f f f f f f f f f . 
            . f f . f . f . f . f . f . f . 
            . . f f f f f f f f f f f . f . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (orientation == "left") {
        tank.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f . f . f . f . f . f . f . 
            . . f f f f f f f f f f f f f . 
            . . . . f 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 1 f . . 
            . . . f 1 1 1 f f f 1 1 1 f . . 
            f f f f f f f f f f f 1 1 f . . 
            f f f f f f f f f f f 1 1 f . . 
            . . . f 1 1 1 f f f 1 1 1 f . . 
            . . . f 1 1 1 1 1 1 1 1 1 f . . 
            . . . . f 1 1 1 1 1 1 1 f . . . 
            . . f f f f f f f f f f f f f . 
            . . f . f . f . f . f . f . f . 
            . . f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    sprites.setDataString(tank, "orientation", orientation)
    tankColorise(tank, sprites.readDataNumber(tank, "tankID"))
}
function tankChangeScore (tank: Sprite, score: number) {
    if (sprites.readDataNumber(tank, "tankID") == 1) {
        info.player1.changeScoreBy(score)
    } else if (sprites.readDataNumber(tank, "tankID") == 2) {
        info.player2.changeScoreBy(score)
    } else if (sprites.readDataNumber(tank, "tankID") == 3) {
        info.player3.changeScoreBy(score)
    } else if (sprites.readDataNumber(tank, "tankID") == 4) {
        info.player4.changeScoreBy(score)
    }
}
function tankRandomDecision (tank: Sprite, _type: string) {
    leastPosibilities = []
    if (_type == "shoot") {
        tile_01 = myTiles.tile4
        tile02 = myTiles.tile2
    } else if (_type == "walk") {
        tile_01 = sprites.castle.tilePath5
        tile02 = myTiles.tile1
    }
    if (tank.tileKindAt(TileDirection.Top, tile_01) || tank.tileKindAt(TileDirection.Top, tile02)) {
        leastPosibilities.push("top")
    }
    if (tank.tileKindAt(TileDirection.Bottom, tile_01) || tank.tileKindAt(TileDirection.Bottom, tile02)) {
        leastPosibilities.push("bottom")
    }
    if (tank.tileKindAt(TileDirection.Left, tile_01) || tank.tileKindAt(TileDirection.Left, tile02)) {
        leastPosibilities.push("left")
    }
    if (tank.tileKindAt(TileDirection.Right, tile_01) || tank.tileKindAt(TileDirection.Right, tile02)) {
        leastPosibilities.push("right")
    }
    if (leastPosibilities.length == 0) {
        leastPosibilities.push("clear")
    }
    return leastPosibilities[randint(0, leastPosibilities.length - 1)]
}
function tankMove (tank: Sprite, orientation: string) {
    if (orientation == "up") {
        tank.vy += -20
    } else if (orientation == "down") {
        tank.vy += 20
    } else if (orientation == "left") {
        tank.vx += -20
    } else if (orientation == "right") {
        tank.vx += 20
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tankShot(tank_01)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprites.readDataNumber(sprite, "tankID") != sprites.readDataNumber(otherSprite, "tankID")) {
        tankChangeLife(otherSprite, -1)
        tankChangeScore(sprite, 40)
        if (sprites.readDataNumber(otherSprite, "tankID") == 1 && info.player1.life() == 0) {
            otherSprite.destroy(effects.fire, 500)
            tankChangeScore(sprite, 10)
        }
        sprite.destroy(effects.fire, 500)
    }
})
function tankColorise (tank: Sprite, tankID: number) {
    if (tankID == 1) {
        tank.image.replace(1, 2)
    } else if (tankID == 2) {
        tank.image.replace(1, 8)
    } else if (tankID == 3) {
        tank.image.replace(1, 4)
    } else if (tankID == 4) {
        tank.image.replace(1, 7)
    }
}
function tankCreate (tank: Sprite, tankID: number) {
    tank.setFlag(SpriteFlag.StayInScreen, true)
    sprites.setDataNumber(tank, "speed", 45)
    sprites.setDataNumber(tank, "tankID", tankID)
    sprites.setDataNumber(tank, "munitionMax", 3)
    sprites.setDataNumber(tank, "munitionActive", 0)
    sprites.setDataString(tank, "orientation", "up")
    if (tank.kind() == SpriteKind.Player) {
        controller.moveSprite(tank, sprites.readDataNumber(tank, "speed"), sprites.readDataNumber(tank, "speed"))
    }
    tankPlance(tank)
    tankColorise(tank, tankID)
    tankChangeLife(tank, 0)
}
function createRandomWorld (tile: Image, difficulty: number) {
    wallLocationList = tiles.getTilesByType(sprites.castle.tilePath5)
    for (let index = 0; index < difficulty; index++) {
        randomLocation = wallLocationList[randint(0, wallLocationList.length - 1)]
        tiles.setTileAt(randomLocation, myTiles.tile4)
        tiles.setWallAt(randomLocation, true)
    }
}
function tankPlance (tank: Sprite) {
    startLocations = tiles.getTilesByType(myTiles.tile1)
    randomStartLocation = startLocations[randint(0, startLocations.length - 1)]
    tiles.placeOnTile(tank, randomStartLocation)
    tiles.setTileAt(randomStartLocation, sprites.castle.tilePath5)
}
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, myTiles.tile4)) {
        tiles.setWallAt(location, false)
        tiles.setTileAt(location, sprites.castle.tilePath5)
        tankChangeScore(sprite, 5)
    }
    sprite.destroy()
})
function tankShot (tank: Sprite) {
    if (sprites.readDataNumber(tank, "munitionActive") < sprites.readDataNumber(tank, "munitionMax")) {
        music.pewPew.play()
        sprProjectile = sprites.create(img`
            2 f 
            f 2 
            `, SpriteKind.Projectile)
        sprProjectile.setPosition(tank.x, tank.y)
        sprites.setDataNumber(sprProjectile, "tankID", sprites.readDataNumber(tank, "tankID"))
    }
    console.log("" + sprites.readDataNumber(tank, "tankID") + "-" + sprites.readDataString(tank, "orientation"))
    if (sprites.readDataString(tank, "orientation") == "up") {
        sprProjectile.setPosition(tank.x, tank.y - 7)
        sprProjectile.setVelocity(0, projectileSpeed * -1)
    } else if (sprites.readDataString(tank, "orientation") == "down") {
        sprProjectile.setPosition(tank.x, tank.y + 7)
        sprProjectile.setVelocity(0, projectileSpeed)
    } else if (sprites.readDataString(tank, "orientation") == "right") {
        sprProjectile.setPosition(tank.x + 5, tank.y)
        sprProjectile.setVelocity(projectileSpeed, 0)
    } else if (sprites.readDataString(tank, "orientation") == "left") {
        sprProjectile.setPosition(tank.x - 5, tank.y)
        sprProjectile.setVelocity(projectileSpeed * -1, 0)
    }
}
function initLevel (level: number) {
    if (level == 1) {
        tiles.setTilemap(tilemap`level`)
    }
    createRandomWorld(sprites.castle.tilePath5, 15)
}
function tankChangeLife (tank: Sprite, life: number) {
    if (sprites.readDataNumber(tank, "tankID") == 1) {
        info.player1.changeLifeBy(life)
    } else if (sprites.readDataNumber(tank, "tankID") == 2) {
        info.player2.changeLifeBy(life)
    } else if (sprites.readDataNumber(tank, "tankID") == 3) {
        info.player3.changeLifeBy(life)
    } else if (sprites.readDataNumber(tank, "tankID") == 4) {
        info.player4.changeLifeBy(life)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprites.readDataNumber(sprite, "tankID") != sprites.readDataNumber(otherSprite, "tankID")) {
        console.log("" + sprites.readDataNumber(sprite, "tankID") + "-" + sprites.readDataNumber(otherSprite, "tankID"))
        tankChangeLife(otherSprite, -1)
        tankChangeScore(sprite, 40)
        if (sprites.readDataNumber(otherSprite, "tankID") == 2 && info.player2.life() == 0) {
            otherSprite.destroy(effects.fire, 500)
            tankChangeScore(sprite, 10)
        }
        if (sprites.readDataNumber(otherSprite, "tankID") == 3 && info.player3.life() == 0) {
            otherSprite.destroy(effects.fire, 500)
            tankChangeScore(sprite, 10)
        }
        if (sprites.readDataNumber(otherSprite, "tankID") == 4 && info.player4.life() == 0) {
            otherSprite.destroy(effects.fire, 500)
            tankChangeScore(sprite, 10)
        }
        sprite.destroy(effects.fire, 500)
    }
})
let setRandomOrientation = ""
let setRandomShoot = ""
let tanks: Sprite[] = []
let sprProjectile: Sprite = null
let randomStartLocation: tiles.Location = null
let startLocations: tiles.Location[] = []
let randomLocation: tiles.Location = null
let wallLocationList: tiles.Location[] = []
let tile02: Image = null
let tile_01: Image = null
let leastPosibilities: string[] = []
let tank_01: Sprite = null
let projectileSpeed = 0
projectileSpeed = 80
initLevel(1)
tank_01 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . f f f . . . f f . . . f f f . 
    . f . f f f f f f f f f f . f . 
    . f f f f 1 1 f f 1 1 f f f f . 
    . f . f 1 1 1 f f 1 1 1 f . f . 
    . f f f 1 1 f f f f 1 1 f f f . 
    . f . f 1 1 f f f f 1 1 f . f . 
    . f f f 1 1 1 f f 1 1 1 f f f . 
    . f . f 1 1 1 1 1 1 1 1 f . f . 
    . f f f f 1 1 1 1 1 1 f f f f . 
    . f . f f f f f f f f f f . f . 
    . f f f . . . . . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let tank_02 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . f f f . . . f f . . . f f f . 
    . f . f f f f f f f f f f . f . 
    . f f f f 1 1 f f 1 1 f f f f . 
    . f . f 1 1 1 f f 1 1 1 f . f . 
    . f f f 1 1 f f f f 1 1 f f f . 
    . f . f 1 1 f f f f 1 1 f . f . 
    . f f f 1 1 1 f f 1 1 1 f f f . 
    . f . f 1 1 1 1 1 1 1 1 f . f . 
    . f f f f 1 1 1 1 1 1 f f f f . 
    . f . f f f f f f f f f f . f . 
    . f f f . . . . . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let tank_03 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . f f f . . . f f . . . f f f . 
    . f . f f f f f f f f f f . f . 
    . f f f f 1 1 f f 1 1 f f f f . 
    . f . f 1 1 1 f f 1 1 1 f . f . 
    . f f f 1 1 f f f f 1 1 f f f . 
    . f . f 1 1 f f f f 1 1 f . f . 
    . f f f 1 1 1 f f 1 1 1 f f f . 
    . f . f 1 1 1 1 1 1 1 1 f . f . 
    . f f f f 1 1 1 1 1 1 f f f f . 
    . f . f f f f f f f f f f . f . 
    . f f f . . . . . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let tank_04 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . f f f . . . f f . . . f f f . 
    . f . f f f f f f f f f f . f . 
    . f f f f 1 1 f f 1 1 f f f f . 
    . f . f 1 1 1 f f 1 1 1 f . f . 
    . f f f 1 1 f f f f 1 1 f f f . 
    . f . f 1 1 f f f f 1 1 f . f . 
    . f f f 1 1 1 f f 1 1 1 f f f . 
    . f . f 1 1 1 1 1 1 1 1 f . f . 
    . f f f f 1 1 1 1 1 1 f f f f . 
    . f . f f f f f f f f f f . f . 
    . f f f . . . . . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
tankCreate(tank_01, 1)
tankCreate(tank_02, 2)
tankCreate(tank_03, 3)
tankCreate(tank_04, 4)
game.onUpdate(function () {
    if (controller.player1.isPressed(ControllerButton.Up)) {
        tankOrientation(tank_01, "up")
    } else if (controller.player1.isPressed(ControllerButton.Down)) {
        tankOrientation(tank_01, "down")
    } else if (controller.player1.isPressed(ControllerButton.Right)) {
        tankOrientation(tank_01, "right")
    } else if (controller.player1.isPressed(ControllerButton.Left)) {
        tankOrientation(tank_01, "left")
    }
})
game.onUpdateInterval(randint(400, 600), function () {
    tanks = sprites.allOfKind(SpriteKind.Enemy)
    for (let value of tanks) {
        setRandomShoot = tankRandomDecision(value, "shoot")
        if (setRandomShoot == "clear") {
            setRandomOrientation = tankRandomDecision(value, "walk")
            tankOrientation(value, setRandomOrientation)
            tankMove(value, setRandomOrientation)
            console.log(setRandomOrientation)
            if (Math.percentChance(50)) {
                tankShot(value)
            }
        } else {
            tankOrientation(value, setRandomShoot)
            tankShot(value)
        }
    }
})
