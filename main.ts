namespace SpriteKind {
    export const org = SpriteKind.create()
    export const background = SpriteKind.create()
    export const blood = SpriteKind.create()
    export const portal = SpriteKind.create()
    export const bones = SpriteKind.create()
    export const playerHit = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level0`)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    spawnOrg()
    tiles.placeOnRandomTile(sprite, assets.tile`myTile5`)
    sprite.setPosition(sprite.x + 16, sprite.y)
})
sprites.onOverlap(SpriteKind.blood, SpriteKind.blood, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(otherSprite, assets.tile`myTile28`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    makeWeed()
    underwater = true
    tiles.setCurrentTilemap(tilemap`level9`)
    Portal = sprites.create(assets.image`myImage0`, SpriteKind.portal)
    tiles.placeOnRandomTile(Portal, assets.tile`myTile29`)
    sprite.setPosition(7, 11)
    effects.bubbles.startScreenEffect()
    sprites.destroyAllSpritesOfKind(SpriteKind.org)
    for (let index = 0; index < 6; index++) {
        BloodPackets = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . b b b b c . . . . . . . . . 
            . b f f f 1 b c . . . . . . . . 
            b 1 f f 1 1 2 1 c . . . . . . . 
            b 1 1 1 1 1 1 2 c . . . . . . . 
            b 1 b b 1 1 1 1 b b b b c . . . 
            c 1 b b 1 1 2 2 b 1 f f 1 c . . 
            . c 1 2 b b 1 b 1 f f f 1 1 c . 
            . . c 1 2 1 b b 1 f f 1 1 1 1 b 
            . . . b c c b c 1 1 1 1 1 2 1 b 
            . . . . . . . c 1 b b b 1 b 2 c 
            . . . . . . . c 2 b b 2 b b b c 
            . . . . . . . . c 2 b b 2 b c . 
            . . . . . . . . . c c c c c . . 
            `, SpriteKind.blood)
        tiles.placeOnRandomTile(BloodPackets, assets.tile`myTile28`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.org, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    remorg += -1
    sprites.destroy(otherSprite)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    boom = sprites.create(img`
        .........................
        .2332..........222.......
        .2332..........233.......
        ..232........22332.......
        ..232......223322........
        ..232.3....3322...4......
        .2332.33...22....44......
        .232..3d3..44..44d4......
        .232...35345544dd44....23
        .......3d5d11d55d44...233
        .......455111151154...232
        ......45555115111d44..232
        ......4d511555111554..232
        ......4451155555d554..232
        ..232..43d555d55ddd4..232
        .2232.455d555ddd554.22332
        .2332.455d35dd3d554.3322.
        .2322.44dd4ddd43dd4.222..
        .232...45444444444.......
        .232..454..444...44......
        2332..44..........44.....
        322..........2222..222222
        22...........333322333333
        .............223333333322
        ...............22222222..
        `, SpriteKind.playerHit)
    boom.changeScale(1, ScaleAnchor.Middle)
    boom.setPosition(Hammy.x, Hammy.y)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    pause(100)
    sprites.destroy(boom)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hammy.isHittingTile(CollisionDirection.Bottom) || jumping) {
        Hammy.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    if (invul) {
        info.changeLifeBy(-1)
        invul = false
    }
})
sprites.onOverlap(SpriteKind.bones, SpriteKind.bones, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(otherSprite, assets.tile`myTile10`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
    sprites.destroyAllSpritesOfKind(SpriteKind.bones)
    controller.moveSprite(sprite)
    tiles.placeOnRandomTile(Hammy, assets.tile`myTile17`)
    Hammy.ay = 0
    controller.moveSprite(sprite, 100, 100)
    Satan = sprites.create(img`
        . . . f . . . . . . . f . . . . 
        . . f b f . . . . . f b f . . . 
        . . f d f f f f f f f d f . . . 
        . . . f e 2 2 2 2 2 2 f . . . . 
        . . . f f f 2 2 2 f f f . . . . 
        . . . f 1 5 f 2 f 5 1 f . . . . 
        . . . f e 2 f e 2 f 2 f . . . . 
        . . . f e 2 2 f f 2 2 f . 2 . 2 
        . f . f e f 2 2 2 2 2 f . 2 . 2 
        . f . f e e f f f f 2 f . 2 2 2 
        f . . . f f f f f f f . . . 2 . 
        . f . . f e 2 2 2 2 f f f f f . 
        . . f f f e 2 2 2 2 f . . . 2 . 
        . . . f e e e 2 2 2 2 f . . e . 
        . . . f e f f f f f 2 f . . e . 
        . . f f f f . . . f f f f . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(Satan, assets.tile`myTile15`)
    Satan.follow(Hammy, 40)
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
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f 2 2 2 f e f . . . . 
        . . . . f 2 2 2 2 f e 2 f . . . 
        . . . f 2 2 2 2 2 f e 2 f . . . 
        . . f 2 2 2 2 2 e f e e 2 f . . 
        . . f 2 2 2 2 e f f f f f f . . 
        . . f 2 2 2 e e f . . . . . . . 
        . . f 2 e e f f . . . . . . . . 
        . . f f f f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.portal, function (sprite, otherSprite) {
    underwater = false
    sprites.destroyAllSpritesOfKind(SpriteKind.background)
    effects.bubbles.endScreenEffect()
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.blood)
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.placeOnRandomTile(sprite, assets.tile`myTile9`)
    controller.moveSprite(sprite, 100, 0)
    Hammy.ay = 300
    for (let index = 0; index < 32; index++) {
        bones = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . 2 2 1 1 1 1 2 . . 
            . . . . 2 2 3 3 1 1 1 1 1 1 . . 
            . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
            . . . . . . 2 2 3 1 1 1 1 2 . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.bones)
        tiles.placeOnRandomTile(bones, assets.tile`myTile10`)
    }
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Food, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(otherSprite, sprites.castle.tilePath5)
})
function sharkStorm () {
    Shark = sprites.createProjectileFromSide(img`
        .............ccfff..............
        ...........ccddbcf..............
        ..........ccddbbf...............
        ..........fccbbcf...............
        .....fffffccccccff.........ccc..
        ...ffbbbbbbbcbbbbcfff....ccbbc..
        ..fbbbbbbbbcbcbbbbcccff.cdbbc...
        ffbbbbbbffbbcbcbbbcccccfcdbbf...
        fbcbbb11ff1bcbbbbbcccccffbbf....
        fbbb11111111bbbbbcccccccbbcf....
        .fb11133cc11bbbbcccccccccccf....
        ..fccc31c111bbbcccccbdbffbbcf...
        ...fc13c111cbbbfcddddcc..fbbf...
        ....fccc111fbdbbccdcc.....fbbf..
        ........ccccfcdbbcc........fff..
        .............fffff..............
        `, -30, 0)
    animation.runImageAnimation(
    Shark,
    [img`
        .............ccfff..................
        ...........ccddbcf..................
        ..........ccddbbf...................
        ..........fccbbcf...................
        .....fffffccccccff.........ccc......
        ...ffbbbbbbbcbbbbcfff....ccbbc......
        ..fbbbbbbbbcbcbbbbcccff.cdbbc.......
        ffbbbbbbffbbcbcbbbcccccfcdbbf.......
        fbcbbb11ff1bcbbbbbcccccffbbf........
        fbbb11111111bbbbbcccccccbbcf........
        .fb11133cc11bbbbcccccccccccf........
        ..fccc31c111bbbcccccbdbffbbcf.......
        ...fc13c111cbbbfcddddcc..fbbf.......
        ....fccc111fbdbbccdcc.....fbbf......
        ........ccccfcdbbcc........fff......
        .............fffff..................
        `,img`
        .............ccfff..................
        ............cddbbf..................
        ...........cddbbf...................
        ..........fccbbcf............ccc....
        ....ffffffccccccff.........ccbbc....
        ..ffbbbbbbbbbbbbbcfff.....cdbbc.....
        ffbbbbbbbbbcbcbbbbcccff..cddbbf.....
        fbcbbbbbffbbcbcbbbcccccfffdbbf......
        fbbb1111ff1bcbcbbbcccccccbbbcf......
        .fb11111111bbbbbbcccccccccbccf......
        ..fccc33cc11bbbbccccccccfffbbcf.....
        ...fc131c111bbbcccccbdbc...fbbf.....
        ....f33c111cbbbfdddddcc.....fbbf....
        .....ff1111fbdbbfddcc........fff....
        .......cccccfbdbbfc.................
        .............fffff..................
        `,img`
        ..................ccfff.............
        .................cddbbf.............
        ........fffffffffddbbf..............
        .......fbbbbbbbbbfcbcf..............
        .......fbbc111bffbbccffff...........
        .......fb111111ffbbbbbcccff....ccccc
        ........f1cc3311bbcbcbbccccf..cdbbbc
        ........fcc131c1bbbcbcbcccccfcddbbc.
        .........f111111bbbcbcbccccccbdbbf..
        .........f1111111bbbbbccccccccbbcf..
        ..........f111111bbbbcccccccffbccf..
        ...........c1111cbbbcccccbdbc.fbbcf.
        ............cc11cbbbfddddddc...fbbf.
        ..............cffbdbbfdddcc.....fbbf
        .................fbdbbfcc........fff
        ..................fffff.............
        `,img`
        ....................ccfff...........
        ..........fffffffffcbbbbf...........
        .........fbbbbbbbbbfffbf............
        .........fbb111bffbbbbff............
        .........fb11111ffbbbbbcff..........
        .........f1cccc11bbcbcbcccf.........
        ..........fc1c1c1bbbcbcbcccf...ccccc
        ............c3331bbbcbcbccccfccddbbc
        ...........c333c1bbbbbbbcccccbddbcc.
        ...........c331c11bbbbbcccccccbbcc..
        ..........cc13c111bbbbccccccffbccf..
        ..........c111111cbbbcccccbbc.fccf..
        ...........cc1111cbbbfdddddc..fbbcf.
        .............cccffbdbbfdddc....fbbf.
        ..................fbdbbfcc......fbbf
        ...................fffff.........fff
        `,img`
        ...........fffffff...ccfff..........
        ..........fbbbbbbbffcbbbbf..........
        ..........fbb111bbbbbffbf...........
        ..........fb11111ffbbbbff...........
        ..........f1cccc1ffbbbbbcff.........
        ..........ffc1c1c1bbcbcbcccf........
        ...........fcc3331bbbcbcbcccf..ccccc
        ............c333c1bbbcbcbccccfcddbbc
        ............c333c1bbbbbbbcccccddbcc.
        ............c333c11bbbbbccccccbbcc..
        ...........cc331c11bbbbccccccfbccf..
        ...........cc13c11cbbbcccccbbcfccf..
        ...........c111111cbbbfdddddc.fbbcf.
        ............cc1111fbdbbfdddc...fbbf.
        ..............cccfffbdbbfcc.....fbbf
        ....................fffff........fff
        `,img`
        .................ccfff..............
        ................cddbbf..............
        ...............cddbbf...............
        .........ffffffccbbcf...............
        ......fffbbbbbbbbcccff..............
        .....fbbbbbbbbbbbbbbbcfff......ccccc
        .....bcbbbbbffbcbcbbbbcccff...cdbbbc
        .....bbb1111ffbbcbcbbbcccccffcddbbc.
        .....fb11111111bcbcbbbcccccccbdbbf..
        ......fccc33c11bbbbbbcccccccccbbcf..
        .......fc131cc11bbbbccccccccffbccf..
        ........f33c1111bbbcccccbdbc..fbbcf.
        .........ff1111cbbbfdddddcc....fbbf.
        ...........ccc1fbdbbfddcc.......fbbf
        ..............ccfbdbbfc..........fff
        .................fffff..............
        `],
    100,
    true
    )
    Shark.setPosition(Shark.x, randint(0, 120))
    Shark.setFlag(SpriteFlag.AutoDestroy, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    if (invul) {
        info.changeLifeBy(-1)
        invul = false
    }
})
function makeWeed () {
    weedtype = [img`
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        .....88.........
        .....868........
        ......868.......
        .......868......
        .......866......
        .......8676.....
        ......67656.....
        .....656758.....
        ....65775868....
        ....65656868....
        ....87678868....
        ....87678668....
        ....87677668....
        ....8776768.....
        .....87678......
        ......8768......
        `, img`
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        .........888....
        .......88668....
        ......86688.....
        .....8768.......
        ....8778........
        ....8778........
        ...8778.........
        ...8578.........
        ...8558.........
        ...8758......88.
        ...87678....878.
        ...87678...878..
        ....87678.8768..
        ....876768678...
        .....87668778...
        ......8668766...
        .......8687678..
        ........8667678.
        ........8685756.
        ....88..86665756
        ...868..86685656
        ..8668..86687678
        .8668..868687678
        .868..8688667678
        8768.88886876778
        8768.8888877678.
        876688888676778.
        87676888668778..
        .876776868668...
        .87766778868....
        ..877667688.....
        ...86767788.....
        `, img`
        ....88..........
        ....868.........
        .....868........
        ......868.......
        .......868......
        .......868......
        ........868.....
        ........868.....
        ........8668....
        ........8668....
        ........8668....
        ........8768....
        ........8768....
        .......86768....
        .......87768....
        .......6778.....
        ......67676.....
        ......67676.....
        .....65656......
        ....655656......
        ....65656.......
        ...876756.......
        ..876776...8....
        ..67678....8....
        .876668...88....
        .67868....86....
        .86868...876....
        868668..8768....
        86868..87678....
        86868..8766.....
        86868.87678.....
        86878.8766......
        8787887678......
        876768768.88....
        876778668.678...
        876676668..678..
        .676778668..678.
        .8766778668.6778
        .877667688885678
        ..87667768885656
        ..86766778887856
        ...8776677876876
        ....877667768668
        .....87766768668
        ......877677668.
        .......87667668.
        ........876768..
        ........87688...
        `]
    weedcount = 0
    for (let index = 0; index < 50; index++) {
        weed = sprites.create(weedtype[randint(0, 2)], SpriteKind.background)
        weed.changeScale(randint(0.5, 1), ScaleAnchor.Middle)
        weed.setPosition(weedcount * 20, 95)
        weed.z = randint(-1, 1)
        weedcount += 1
    }
}
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.bones, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.blood, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (invul) {
        info.changeLifeBy(-1)
        invul = false
    }
})
let Skin_Pellets: Sprite = null
let weed: Sprite = null
let weedcount = 0
let weedtype: Image[] = []
let Shark: Sprite = null
let bones: Sprite = null
let orgs: Sprite = null
let orgcount = 0
let orglist: Image[] = []
let Satan: Sprite = null
let jumping = false
let boom: Sprite = null
let remorg = 0
let BloodPackets: Sprite = null
let Portal: Sprite = null
let invul = false
let underwater = false
let remainingSkinPellets = 0
let reorg = 0
let Hammy: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
Hammy = sprites.create(assets.image`myImage1`, SpriteKind.Player)
tiles.placeOnRandomTile(Hammy, sprites.castle.tilePath5)
reorg = 6
remainingSkinPellets = 6
underwater = false
invul = false
info.setLife(3)
controller.moveSprite(Hammy)
scene.cameraFollowSprite(Hammy)
spawnSkinPellets()
game.onUpdate(function () {
    if (Hammy.isHittingTile(CollisionDirection.Bottom)) {
        jumping = false
    }
})
game.onUpdateInterval(5000, function () {
    if (underwater) {
        sharkStorm()
    }
})
game.onUpdateInterval(1000, function () {
    if (!(invul)) {
        invul = true
    }
})
