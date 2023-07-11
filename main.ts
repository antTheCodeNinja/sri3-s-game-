namespace SpriteKind {
    export const org = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level0`)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    spawnOrg()
    tiles.placeOnRandomTile(sprite, assets.tile`myTile5`)
    sprite.setPosition(sprite.x + 16, sprite.y)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.org, function (sprite, otherSprite) {
    remorg += -1
    sprites.destroy(otherSprite)
})
function spawnOrg () {
    orglist = [
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . f f f . . . . 
        . . . . f 3 3 3 f 3 3 3 f . . . 
        . . . . f 3 3 3 3 3 1 3 f . . . 
        . . . . f 3 3 3 3 3 3 3 f . . . 
        . . . . . f 3 b b b 3 f . . . . 
        . . . . . f f b b b f f . . . . 
        . . . . . . f f b f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 5 5 5 4 b 4 4 b . . 
        . . . . b 3 2 3 5 5 4 e 4 4 b . 
        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
        . . . b 5 3 2 3 5 5 5 5 e e e e 
        . . b d 7 5 5 5 3 2 3 5 5 e e e 
        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
        b d 3 2 d 5 5 5 d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `,
    img`
        . . . . . . b b b b a a . . . . 
        . . . . b b d d d 3 3 3 a a . . 
        . . . b d d d 3 3 3 3 3 3 a a . 
        . . b d d 3 3 3 3 3 3 3 3 3 a . 
        . b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
        . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
        b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
        b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
        b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
        a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
        a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
        a a 3 3 3 d d d a a 4 4 4 e e . 
        . e a a a a a a 4 4 4 4 e e . . 
        . . e e b b 4 4 4 4 b e e . . . 
        . . . e e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . 2 2 b b b b b . . . . . . . 
        . 2 b 4 4 4 4 4 4 b . . . . . . 
        2 2 4 4 4 4 d d 4 4 b . . . . . 
        2 b 4 4 4 4 4 4 d 4 b . . . . . 
        2 b 4 4 4 4 4 4 4 d 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 e . . . . 
        2 2 b 4 4 4 4 4 4 4 b e . . . . 
        . 2 b b b 4 4 4 b b b e . . . . 
        . . e b b b b b b b e e . . . . 
        . . . e e b 4 4 b e e e b . . . 
        . . . . . e e e e e e b d b b . 
        . . . . . . . . . . . b 1 1 1 b 
        . . . . . . . . . . . c 1 d d b 
        . . . . . . . . . . . c 1 b c . 
        . . . . . . . . . . . . c c . . 
        `,
    img`
        . . . . . 3 3 b 3 3 d d 3 3 . . 
        . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
        . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
        . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
        . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
        . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
        . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
        . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
        . 4 4 d 1 1 1 1 1 1 d d d b b . 
        . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
        4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
        4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
        4 5 5 d 5 5 d b b b d d 3 . . . 
        4 5 5 5 d d d d 4 4 b 3 . . . . 
        . 4 5 5 5 4 4 4 . . . . . . . . 
        . . 4 4 4 . . . . . . . . . . . 
        `,
    img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `
    ]
    orgcount = 0
    for (let index = 0; index < 6; index++) {
        orgs = sprites.create(orglist[orgcount], SpriteKind.org)
        tiles.placeOnRandomTile(orgs, assets.tile`myTile`)
        orgcount += 1
    }
}
sprites.onOverlap(SpriteKind.Food, SpriteKind.Food, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(otherSprite, sprites.castle.tilePath5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
    reorg = 5
    sprites.destroyAllSpritesOfKind(SpriteKind.org)
    spawnSkinPellets()
    tiles.placeOnRandomTile(sprite, assets.tile`myTile1`)
    sprite.setPosition(sprite.x - 16, sprite.y)
})
function spawnSkinPellets () {
    if (remainingSkinPellets > 0) {
        for (let index = 0; index < remainingSkinPellets; index++) {
            Skin_Pellets = sprites.create(img`
                . . . . . . . e . . . . . . . . 
                . . . . . . . e . . . . . . . . 
                . . . . . . e 3 . . . . . . . . 
                . . . . . e 3 d . . . . . . . . 
                . . . e e 3 1 3 . . . . . . . . 
                . . . e e 3 1 3 3 3 . . . . . . 
                . . . e e 3 d 1 3 3 . . . . . . 
                . . . e e 3 d d d d . . . . . . 
                . . . e e 3 1 d 3 3 3 . . . . . 
                . . . e e 3 1 3 3 3 3 . . . . . 
                . . . e e b 1 d 3 3 3 . . . . . 
                . . . e e e b 1 1 d 3 3 . . . . 
                . . . e e e b b 3 d 1 1 . . . . 
                . . . e e e e b b b b . . . . . 
                . . . . . e e e 4 . . . . . . . 
                . . . . . . e e b . . . . . . . 
                `, SpriteKind.Food)
            tiles.placeOnRandomTile(Skin_Pellets, sprites.castle.tilePath5)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    remainingSkinPellets += -1
    sprites.destroy(otherSprite)
})
let Skin_Pellets: Sprite = null
let orgs: Sprite = null
let orgcount = 0
let orglist: Image[] = []
let remorg = 0
let remainingSkinPellets = 0
let reorg = 0
tiles.setCurrentTilemap(tilemap`level1`)
let Hammy = sprites.create(img`
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . 2 2 3 3 3 3 2 e . . . . 
    . . . 2 3 d 1 1 d d 3 2 e . . . 
    . . 2 3 1 d 3 3 3 d d 3 e . . . 
    . 2 3 1 3 3 3 3 3 d 1 3 b e . . 
    . 2 1 d 3 3 3 3 d 3 3 1 3 b b . 
    2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
    2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
    2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
    2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
    e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
    e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
    e 3 d 3 3 1 d d 3 d 1 b b e e . 
    . e 3 1 1 d d 1 1 1 b b e e e . 
    . . e 3 3 3 3 3 3 b e e e e . . 
    . . . e e e e e e e e e e . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(Hammy, sprites.castle.tilePath5)
reorg = 6
remainingSkinPellets = 6
spawnSkinPellets()
forever(function () {
    controller.moveSprite(Hammy)
    scene.cameraFollowSprite(Hammy)
})
