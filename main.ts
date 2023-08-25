namespace SpriteKind {
    export const org = SpriteKind.create()
    export const background = SpriteKind.create()
    export const blood = SpriteKind.create()
    export const portal = SpriteKind.create()
    export const bones = SpriteKind.create()
    export const playerHit = SpriteKind.create()
    export const PIGLY = SpriteKind.create()
    export const COWW = SpriteKind.create()
    export const Home = SpriteKind.create()
    export const table = SpriteKind.create()
    export const FarmMan = SpriteKind.create()
    export const FarmRunMan = SpriteKind.create()
    export const FarmPrincesss = SpriteKind.create()
    export const Satan = SpriteKind.create()
    export const Vegan = SpriteKind.create()
    export const Boy = SpriteKind.create()
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boy, function (sprite, otherSprite) {
    game.showLongText("I hate my dad. I don't wanna be a farmer and why can't I love Sarah! She is the prettiest girl here.", DialogLayout.Bottom)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inBossFight) {
        boom = sprites.create(img`
            .........................
            .3333..........333.......
            .333...........333.......
            ..33.........3333........
            ..33........333..........
            ..33..3....33.....4......
            .333..33.........44......
            .33...3d3..44..44d4......
            .33....35345544dd44....33
            .......3d5d11d55d44...333
            .......455111151154...33.
            ......45555115111d44..33.
            ......4d511555111554..33.
            ......4451155555d554..33.
            ..33...43d555d55ddd4..33.
            .333..455d555ddd554.3333.
            .3333.455d35dd3d554.33...
            .33...44dd4ddd43dd4......
            .33....45444444444.......
            .33...454..444...44......
            333...44..........44.....
            333......................
            .............3333..333333
            ...............33333333..
            .........................
            `, SpriteKind.playerHit)
        boom.changeScale(1, ScaleAnchor.Middle)
        boom.setPosition(Hammy.x, Hammy.y)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        pause(100)
        sprites.destroy(boom)
    }
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.FarmRunMan, function (sprite, otherSprite) {
    game.showLongText("Now yoe done for", DialogLayout.Bottom)
    First_Ending()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PIGLY, function (sprite, otherSprite) {
    game.showLongText("WOW! She is so Beautiful! I think I just fell in love!", DialogLayout.Bottom)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Vegan, function (sprite, otherSprite) {
    game.showLongText("Ugh! These filthy farm freak! How can they eat animals! Animals are people too. I need to move away from here...", DialogLayout.Bottom)
    game.showLongText("I can't sleep at night... My brother and sister fight all night!", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.bones, SpriteKind.bones, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(otherSprite, assets.tile`myTile10`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    inBossFight = true
    Bossivul = true
    round = 1
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
    SatanCutScene.sayText(Boss_Hp)
    tiles.placeOnRandomTile(SatanCutScene, assets.tile`myTile15`)
    SatanCutScene.follow(Hammy, 10)
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
function First_Ending () {
    tiles.setCurrentTilemap(tilemap`level15`)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff455fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ee5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11f1fffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ff1fffffffffffffffff1fffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffff1ffffffffff11ffffff1fffffffffffffffffffffff1ffffffff11111fffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffff1ffffffffff11fffff1ffff11111fffffffffffffff1fffffff1fffff1ffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffff1ffffffffff1f1ffff1ffff1ffff1fffff1fffffff1ffffff11fffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff1fffffffff1ff1fff1ffff1ffff1fffff1ff11fff1ffffff1ffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff111111ffff1ff1fff1ffff1fffff1ffff1ff1f1ff1ffffff1ffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff1fffffffff1fff1ff1ffff1ffffff1fff1ff1ff1f1ffffff1ffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff1fffffffff1fff1f1fffff1ffffff1fff1ff1fff11ffffff1fffffffff11fffffffffffffff1fffffffffffffffff1ffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff1fffffffff1ffff11fffff1ffffff1fff1ff1fff11ffffff1ffffff111f1fffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff11111111111ffff11fffff1fffff11fff1ff1fff11ffffff1ffffff11ff1ffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1111fffff1ff1ffffffffffff1ffffff1ff1ffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffff1fffff1ff1ffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111ff1ffffffffffff1fff1fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111ffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff11fffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff1fffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff111111ffffffffffffffffff1ffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff1fffff1fffffffffffffffffffffffffffffffffffffffffffffff11fff1fffff11fff111111fffffff1ffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff1fffff1fffffffff111fffffffffffffff5cfffcffff1ff11111f111fff1ffffff1fff1fffff1ffffff1ffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff1fffff1ff11fffff1f1ffffffffffffe5557cccccfff1ff1fff1f1ff1ff1ffffff1fff1fffff1ffffff1ffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff1fffff1ff1f1ffff11fffffffffffe5555cccccfffff1f1ffff11fff1ff1fff111ffff1fffff1ffffff1ffffffffffffffffffffffffff
        fffffffff5ffffffffffffffffffffffffffffffffffffffff1fffff1ff1ff1fff1ffffffffffe5557cccccffffcfff11ffff1ffff1ff1ffffffffff1fffff1ffffff1fffff5ffffffffffffffffffff
        fffffffff55fefffffffffffffffffffffffffffffffffffff1fffff1f1fff1fff1ffffffffff557cccccccffcccfff1fffff1ffff1ff1ffffffffff1ffff11ffffff1ffff45ffffffffffffffffffff
        fffffff555555fffffffffffffffffffffffffffffffffffff1fffff11ffff111f1111111ffff55ccccccccffffffff1fffff1ffff1ff1ffffffffff1ffff1f1ffff11ff5555554fffffffffffffffff
        fffffff55555ffffffffffffffffffffffffffffffffffffff1fffff11ffffffffffffffffffff5ccccccccffffccff1fffffffffffff1ffffffffff1ffff1ff1111f1ff555554ffffffffffffffffff
        fffffffff5555fffffffffffffffffffffffffffffffffffff1fffff11fffffffffffffffffffffcccccccccfffccffffffffffffffff1fffffff11f1ffff1ffffffffffff555fffffffffffffffffff
        fffffffff55555ffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffcccccccccccffffffffffffffffffffff11111111fff1111ffffffffffff55555efffffffffffffffff
        ffffffff55ff5efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffff555ff55fffffffffffffffff
        ffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe444eccccccceccecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeee444444eeee4cceceeceeec4efeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5554444eeee444ee44eee4eee44444eefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444ee4eeeeee4444ee4444ee44eee44444eeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe444444eeeeee44444eee4444eee444ee44444ee4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444eeeeeee4444ee444444ee444eeee44eee4444fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee444eee44ee4444444ee4444eeeeeee4444444fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee444444eeeee4444eeeeeeeee4eeee44444444444fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee44444444eeeeeeeeeee4eeeeeeeeee444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee44444444444eeeeeee44444ee44444eee444444444444fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee44444444444ee44444444444ee444444ee4444444444444ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee444444444444ee444444444444ee444444ee444444444444ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444444ee4444444444444ee4444444ee444444444444fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff44444444ee4444444444444ee4444444444444ee4444444ee444444444444effffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffe4444444eee444444444444eee44444444444444ee4444444ee444444444444ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444411d44444444444444d1d4444444ee444444444444efffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444444111dd444444444444d11ddb444444ee444444444444fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444d115ddd444444444441155ddb44444ee4444444444444ffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444411555dd4444444444115555dd444444ee444444444444efffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444441155555dd4444444431555555dd44444ee4444444444444effffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff4444444ee4444444444445555555dd4444444445554e45dd444444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444555ee455dd4444444455554ee55dd44444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff4444444ee444444444444454ee44ddd44444444545544eeddb44444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444444ee44444444444444444444ee444444444ee44444444444eefffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444444ee44444444444444444444ee444444444ee44444444444eefffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff444444ee444444444444444ee44444444444444444444ee4444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff444444ee44444444444444ee444444444411d444444444e4444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff444444ee44444444444444ee444444444111dd44444444ee444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff44444ee444444444444444ee444444444115dd44444444ee444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff44444ee444444444444444e44444444411555dd4444444ee4444444444ee444444444eefffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff44444ee44444444444444ee4444444441d555dd4444444ee4444444444ee44444444eeefffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff44444ee44444444444444ee444444445dddddddd444444eed444444444ee44444444eeecccccccccccccc88888888888888888888888888888
        888888888888888888888888888888888888888888888844444e444444444444444e51d4444445dddddddd444444edd4444444444e4444444eeee8888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888c444ee444444444444444e511144444444444444444444ddd4444444444e4444444eeec8888888888888888888888888888888888888888888
        888888866b9999999999999999999999999999999988888444ee44444444444444ee55111d444444444444444454dd44444444444ee444444eee88888888888888888888888888888888888888888888
        99999999999999999999999999999999999999999968888444ee44444444444444ee4555111d444444444444455ddb44444444444ee44444eeee88888888888888888888888888888888888888888888
        99996666688888888888888888888888888888888888888844ee44444444444444ee4455551144444444444445ddde44444444444ee44444eeec88888888888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888844ee44444444444444ee4445555544455551114445ddee44444444444ee4444eeee888888888888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888884ee44444444444444ee444555555555555555555dddee44444444444ee4444eeec888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888888844ee4444444444444e4444455555555555555555dd4ee44444444444ee444eee88888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888888884ee4444444444444e444444555555511115555dd44ee44444444444ee44eeeffff88888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888888888ee4444444444444ee44444455dddd511dddddd444ee4444444444ee4eeeeffffffffc8888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888888888ce4444444444444ee44444445dd444ddddbdd4444ee4444444444eeeeeeffffffffff8888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888ee444444444444ee44444444bd44455444db4444ee4444444444eeeecfffffffffffff88888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888888888e444444444444ee444444444444444444444444ee444444444eeeefffffffffffffffc8888888888888888888888888888888888888
        888888888888888888888888888888888888888888888888888888884444444444ee444444444444444444444444ee4444444eeeeeffffffffffffffffff888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888884444444444ee44444444444444444444444ee44444eeeeefffffffffffffffffff8888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888888888888888e4444444ee4444444444444444444444ee444eeeeeefffffffffffffffffffff8888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888888888888888888e4444ee4444444444444444444444eeeeeeeefffffffffffffffffffffff88888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888feeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffc888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888fffffffffeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffff8888888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888cffffffffffffffffffffffffffffffffffffffffffc888888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888888888888888888888888888888cffcffffffffffffffffffffcc88888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886866666666666b9999888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886999999999999999999999999999999999999999999888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889999999999999999999999966666666666666688888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.COWW)
    sprites.destroyAllSpritesOfKind(SpriteKind.FarmRunMan)
    sprites.destroyAllSpritesOfKind(SpriteKind.PIGLY)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.FarmPrincesss, function (sprite, otherSprite) {
    game.showLongText("Where is James? I wanna go back to my room before Dad calls us for lunch.", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Home, function (sprite, otherSprite) {
    game.showLongText("I can't go in there! I don't have thumbs :(", DialogLayout.Bottom)
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
function Level_1 () {
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(Hammy, sprites.castle.tilePath5)
    info.setLife(3)
    spawnSkinPellets()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FarmMan, function (sprite, otherSprite) {
    game.showLongText("HEY! WAT YA DOON OOF THE TABL! CATH DAT HAM!", DialogLayout.Bottom)
    if (!(ChaseScene)) {
        ChaseScene = true
        pause(1000)
        FarmChaseScene()
    }
})
function FarmChaseScene () {
    Farmist.follow(Hammy, 50)
    Farmist.setKind(SpriteKind.FarmRunMan)
}
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.table, function (sprite, otherSprite) {
    game.showLongText("That's a huge table!", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Satan, function (sprite, otherSprite) {
    game.showLongText("What do you seek young... Ham?? Wait... what?", DialogLayout.Bottom)
    game.showLongText("You want to what? Be a pig again? but...", DialogLayout.Bottom)
    game.showLongText("You want to what? Be a pig again? but...", DialogLayout.Bottom)
    game.showLongText("A deal with the devil can not be undone. ", DialogLayout.Bottom)
    game.showLongText("Are you sure y9ou want to do this?", DialogLayout.Bottom)
    game.showLongText(game.askForString("Yes"), DialogLayout.Bottom)
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
sprites.onOverlap(SpriteKind.playerHit, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Bossivul) {
        Boss_Hp += -1
        music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
        Bossivul = false
        SatanCutScene.sayText(Boss_Hp)
        SatanCutScene.follow(Hammy, 50 / Boss_Hp * round)
    }
})
function cut_scene_1 () {
    tiles.setCurrentTilemap(tilemap`level13`)
    tiles.placeOnRandomTile(Hammy, sprites.builtin.forestTiles10)
    FarmHouse = sprites.create(img`
        ..........................................ee22ee2222ee222ee.........................................
        ..........................................ee22ee2222ee222ee.........................................
        ....................................222222eeeeee2222ee222ee222222...................................
        ....................................222222eeeeee2222ee222ee222222...................................
        ..............................222222ee2222ee22ee2222eeeeeee2222ee222222.............................
        ..............................222222ee2222ee22ee2222eeeeeee2222ee222222.............................
        ........................ee2222ee2222eeeeeeee22ee2222ee222eeeeeeee2222ee2222ee.......................
        ........................ee2222ee2222eeeeeeee22ee2222ee222eeeeeeee2222ee2222ee.......................
        ..................eeeeeeee2222ee2222ee2222ee22ee2222ee222ee2222ee2222ee2222eeeeeeee.................
        ..................eeeeeeee2222ee2222ee2222ee22ee2222ee222ee2222ee2222ee2222eeeeeeee.................
        ............222222ee2222ee2222eeeeeeee2222ee22ee2222ee222ee2222eeeeeeee2222ee2222ee222222...........
        ............222222ee2222ee2222eeeeeeee2222ee22ee2222ee222ee2222eeeeeeee2222ee2222ee222222...........
        ........2222eeeeeeee2222ee2222ee2222ee2222eeeeee2222eeeeeee2222ee2222ee2222ee2222eeeeeeee2222.......
        ........2222eeeeeeee2222ee2222ee2222ee2222eeeeee2222eeeeeee2222ee2222ee2222ee2222eeeeeeee2222.......
        .444cccc2222ee2222ee2222eeeeeeee2222ee2222ee22ee2222ee222ee2222ee2222eeeeeeee2222ee2222ee2222cccc44.
        .444cccc2222ee2222ee2222eeeeeeee2222ee2222ee22ee2222ee222ee2222ee2222eeeeeeee2222ee2222ee2222cccc44.
        .666cc66eeeeee2222ee2222ee2222ee2222ee2222ee22ee2222ee222ee2222ee2222ee2222ee2222ee2222eeeeee66cc66.
        .666cc66eeeeee2222ee2222ee2222ee2222ee2222ee22ee2222ee222ee2222ee2222ee2222ee2222ee2222eeeeee66cc66.
        .44466662222ee2222eeeeeeee2222ee2222eeeeeeee22ee2222ee222eeeeeeee2222ee2222eeeeeeee2222ee2222666644.
        .44466662222ee2222eeeeeeee2222ee2222eeeeeeee22ee2222ee222eeeeeeee2222ee2222eeeeeeee2222ee2222666644.
        .44466662222ee2222ee2222ee2222eeeeeeee2222ee22ee2222ee222ee2222eeeeeeee2222ee2222ee2222ee2222666644.
        .44466662222ee2222ee2222ee2222eeeeeeee2222ee22ee2222ee222ee2222eeeeeeee2222ee2222ee2222ee2222666644.
        .444cccc2222eeeeeeee2222ee2222ee2222ee2222eeeeee2222eeeeeee2222ee2222ee2222ee2222eeeeeeee2222cccc44.
        .444cccc2222eeeeeeee2222ee2222ee2222ee2222eeeeee2222eeeeeee2222ee2222ee2222ee2222eeeeeeee2222cccc44.
        .666cc662222ee2222ee2222eeeeeeee2222ee2222ee22ee2222ee222ee2222ee2222eeeeeeee2222ee2222ee222266cc66.
        .666cc662222ee2222ee2222eeeeeeee2222ee2222ee22ee2222ee222ee2222ee2222eeeeeeee2222ee2222ee222266cc66.
        .4446666eeeeee2222ee2222ee2222ee2222ee2222ee22ee2222ee222ee2222ee2222ee2222ee2222ee2222eeeeee666644.
        .4446666eeeeee2222ee2222ee2222ee2222ee2222ee22ee2222ee222ee2222ee2222ee2222ee2222ee2222eeeeee666644.
        .44466662222ee2222eeeeeeee2222ee2222ee2222ee22ee2222ee222ee2222ee2222ee2222eeeeeeee2222ee2222666644.
        .44466662222ee2222eeeeeeee2222ee2222ee2222ee22ee2222ee222ee2222ee2222ee2222eeeeeeee2222ee2222666644.
        .444cccc2222ee2222ee2222ee2222ee2222eeeeeeee22ee2222ee222eeeeeeee2222ee2222ee2222ee2222ee2222cccc44.
        .444cccc2222ee2222ee2222ee2222ee2222eeeeeeee22ee2222ee222eeeeeeee2222ee2222ee2222ee2222ee2222cccc44.
        .666cc662222eeeeeeee2222ee2222eeeeeeee2222eeeeee2222eeeeeee2222eeeeeeee2222ee2222eeeeeeee222266cc66.
        .666cc662222eeeeeeee2222ee2222eeeeeeee2222eeeeee2222eeeeeee2222eeeeeeee2222ee2222eeeeeeee222266cc66.
        .44466662222ee2222ee2222eeeeeeee2222ee2222ee22ee2222ee222ee2222ee2222eeeeeeee2222ee2222ee2222666644.
        .44466662222ee2222ee2222eeeeeeee2222ee2222ee22ee2222ee222ee2222ee2222eeeeeeee2222ee2222ee2222666644.
        .4446666eeeeee2222ee2222ee2222ee2222ee2222ee22ee2222ee222ee2222ee2222ee2222ee2222ee2222eeeeee666644.
        .4446666eeeeee2222ee2222ee2222ee2222ee2222ee22ee2222ee222ee2222ee2222ee2222ee2222ee2222eeeeee666644.
        .444cccc2222ee2222eeeeeeee2222ee2222ee2222ee22ee2222ee222ee2222ee2222ee2222eeeeeeee2222ee2222cccc44.
        .444cccc2222ee2222eeeeeeee2222ee2222ee2222ee22ee2222ee222ee2222ee2222ee2222eeeeeeee2222ee2222cccc44.
        .666cc662222ee2222ee2222ee2222ee2222ee2222eeeeee2222eeeeeee2222ee2222ee2222ee2222ee2222ee222266cc66.
        .666cc662222ee2222ee2222ee2222ee2222ee2222eeeeee2222eeeeeee2222ee2222ee2222ee2222ee2222ee222266cc66.
        .44466662222eeeeeeee2222ee2222ee2222eeeeeecccc66666666ccccceeeeee2222ee2222ee2222eeeeeeee2222666644.
        .44466662222eeeeeeee2222ee2222ee2222eeeeeecccc66666666ccccceeeeee2222ee2222ee2222eeeeeeee2222666644.
        .44466662222ee2222ee2222ee2222eeeeeecccc666666666666666666666cccceeeeee2222ee2222ee2222ee2222666644.
        .44466662222ee2222ee2222ee2222eeeeeecccc666666666666666666666cccceeeeee2222ee2222ee2222ee2222666644.
        .444cccceeeeee2222ee2222eeeeeecccc6666666666ccccccccccccc6666666666cccceeeeee2222ee2222eeeeeecccc44.
        .444cccceeeeee2222ee2222eeeeeecccc6666666666ccccccccccccc6666666666cccceeeeee2222ee2222eeeeeecccc44.
        .666cc662222ee2222eeeeeecccc6666666666cccc66444444444444466cccc6666666666cccceeeeee2222ee222266cc66.
        .666cc662222ee2222eeeeeecccc6666666666cccc66444444444444466cccc6666666666cccceeeeee2222ee222266cc66.
        .44466662222ee2222cccc6666666666cccc66444444444444444444444444466cccc6666666666cccc2222ee2222666644.
        .44466662222ee2222cccc6666666666cccc66444444444444444444444444466cccc6666666666cccc2222ee2222666644.
        .44466662222cccc66666666cccccc66444444444444444444444444444444444444466cccccc66666666cccc2222666644.
        .44466662222cccc66666666cccccc66444444444444444444444444444444444444466cccccc66666666cccc2222666644.
        .444cccccc66666666cccccc66444444bbcccc6666666666666666666666666ccccbb44444466cccccc66666666cccccc44.
        .444cccccc66666666cccccc66444444bbcccc6666666666666666666666666ccccbb44444466cccccc66666666cccccc44.
        .ccccccccccccccccc66666666666666ccbb44444444444444444444444444444bbcc66666666666666cccccccccccccccc.
        .ccccccccccccccccc66666666666666ccbb44444444444444444444444444444bbcc66666666666666cccccccccccccccc.
        .66644444444444444444444444466cc4444444444444444444444444444444444444cc6644444444444444444444444466.
        .66644444444444444444444444466cc4444444444444444444444444444444444444cc6644444444444444444444444466.
        .66666ccbb444444444444444444ccbb4411111111111111111111111111111111144bbcc444444444444444444bbcc6666.
        .66666ccbb444444444444444444ccbb4411111111111111111111111111111111144bbcc444444444444444444bbcc6666.
        .6666666ccccccccccccccccccccccdd1166666666666666666666666666666666611ddcccccccccccccccccccccc666666.
        .6666666ccccccccccccccccccccccdd1166666666666666666666666666666666611ddcccccccccccccccccccccc666666.
        .666666666444444444444444444cc111166eeeeeeeeeeeeeeeeeeeeeeeeeeeee661111cc44444444444444444466666666.
        .666666666444444444444444444cc111166eeeeeeeeeeeeeeeeeeeeeeeeeeeee661111cc44444444444444444466666666.
        .6666666ee22222222222222ee44cc1166ee44ee4444ee4444ee44444ee4444eeee6611cc44ee22222222222222ee666666.
        .6666666ee22222222222222ee44cc1166ee44ee4444ee4444ee44444ee4444eeee6611cc44ee22222222222222ee666666.
        .6666666eeeeeeeeeeeeeeeeee44cc1166ee44ee4444ee4444ee44444ee4444eeee6611cc44eeeeeeeeeeeeeeeeee666666.
        .6666666eeeeeeeeeeeeeeeeee44cc1166ee44ee4444ee4444ee44444ee4444eeee6611cc44eeeeeeeeeeeeeeeeee666666.
        .6666666eeddddddddddddddee44cc6666ff44ee44eefffffffffffffee4444eeee6666cc44eeddddddddddddddee666666.
        .6666666eeddddddddddddddee44cc6666ff44ee44eefffffffffffffee4444eeee6666cc44eeddddddddddddddee666666.
        .6666666eeddffffddffffddee44cc6666ff44eefffffffffffffffffffff44eeee6666cc44eeddffffddffffddee666666.
        .6666666eeddffffddffffddee44cc6666ff44eefffffffffffffffffffff44eeee6666cc44eeddffffddffffddee666666.
        .6666666eeddccccddccccddee44cc6666ff44eefffffffffffffffffffffeeeeee6666cc44eeddccccddccccddee666666.
        .6666666eeddccccddccccddee44cc6666ff44eefffffffffffffffffffffeeeeee6666cc44eeddccccddccccddee666666.
        .6666666eeddddddddddddddee44cc6666ff44eeeeeeeeeeeeeeeeeeeeeeeeeeeee6666cc44eeddddddddddddddee666666.
        .6666666eeddddddddddddddee44cc6666ff44eeeeeeeeeeeeeeeeeeeeeeeeeeeee6666cc44eeddddddddddddddee666666.
        .ccc6666eeddffffddffffddee44cc6666ee44ee4444ee4444ee44444ee4444eeee6666cc44eeddffffddffffddee6666cc.
        .ccc6666eeddffffddffffddee44cc6666ee44ee4444ee4444ee44444ee4444eeee6666cc44eeddffffddffffddee6666cc.
        .ccc6666eeddccccddccccddee44cc6666ee44ee4444ee4444ee44444ee4444eeee6666cc44eeddccccddccccddee6666cc.
        .ccc6666eeddccccddccccddee44cc6666ee44ee4444ee4444ee44444ee4444eeee6666cc44eeddccccddccccddee6666cc.
        .ccccc6666666666666666666644cc6666ee44ee4444ee4444ee44444ffeeeeeeee6666cc4466666666666666666666cccc.
        .ccccc6666666666666666666644cc6666ee44ee4444ee4444ee44444ffeeeeeeee6666cc4466666666666666666666cccc.
        ....cc6666444444444444444444cc6666ee44ee4444ee4444ee44444ffffffffee6666cc4444444444444444446666cc...
        ....cc6666444444444444444444cc6666ee44ee4444ee4444ee44444ffffffffee6666cc4444444444444444446666cc...
        ......cc6644eeeeee44eeeeee44cc6666ff44ee4444ee4444ee44444ff4444ffee6666cc44eeeeee44eeeeee4466cc.....
        ......cc6644eeeeee44eeeeee44cc6666ff44ee4444ee4444ee44444ff4444ffee6666cc44eeeeee44eeeeee4466cc.....
        ........cc44eeeeee44eeeeee44cc6666ff44ee4444ee4444ee44444eeffffeeee6666cc44eeeeee44eeeeee44cc.......
        ........cc44eeeeee44eeeeee44cc6666ff44ee4444ee4444ee44444eeffffeeee6666cc44eeeeee44eeeeee44cc.......
        ..........664444444444444444cc6666ff44ee4444ee4444ee44444ee4444eeee6666cc444444444444444466.........
        ..........664444444444444444cc6666ff44ee4444ee4444ee44444ee4444eeee6666cc444444444444444466.........
        ............6644eeeeee444444cc6666ff44ee4444ee4444ee44444ee4444eeee6666cc444444eeeeee4466...........
        ............6644eeeeee444444cc6666ff44ee4444ee4444ee44444ee4444eeee6666cc444444eeeeee4466...........
        ..............66cccccc666666cc6666ee44ee4444ee4444ee44444ee4444eeee6666cc666666cccccc66.............
        ..............66cccccc666666cc6666ee44ee4444ee4444ee44444ee4444eeee6666cc666666cccccc66.............
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        `, SpriteKind.Home)
    tiles.placeOnRandomTile(FarmHouse, sprites.builtin.forestTiles0)
    Table = sprites.create(img`
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..............fffffffffffffffff...................
        ........ffffffffeeeeeeffffeeffffffffffffffffff....
        ........ffffffffeeeeeeffffeeffffffffffffffffff....
        ....fffffffffffeeeeefffeeeeeeefffeeeeeeeeefffff...
        ...ffffffeeeeeeeeeffffeeeeefffeeeeeeeeccccffefff..
        ..ffffeeeeeeeeeefffeeeeeeefceeeeeeeeeeffffeeeeff..
        ..ffffeeeeeeeeeefffeeeeeeefceeeeeeeeeeffffeeeeeff.
        fffeeeeeeeeeefffcceeeeeeefceeeeeeeefffceeeeeeeefff
        ffeeeeeeeccfffcceeeeeefffceeeeeeeffffeeeeeeeeffeef
        feeeeeeffffeeeeeeeeefffeeeeeeeefffeeeeeeeeffffeeef
        feeeeeeffffeeeeeeeeefffeeeeeeeefffeeeeeeeeffffeeef
        fcffffffeeeeeeeeffffffeeeeeefffeeeeeeeffffffeeeeef
        fccfcceeefffffeeeeeeeeffffeeeeeeeefffeeeeeeeeeccff
        fccfcceeefffffeeeeeeeeffffeeeeeeeefffeeeeeeeeecccf
        fccfcccffffccccffffffffeeeeeeefffffeeeeeeeeeccccff
        .ccfcccfcccccccfccccccccccccccfccccccccceeccccccf.
        ..cfcccfcccccccfccccccccccccccfcccccccccccccccfff.
        ..cfcccfcccccccfccccccccccccccfcccccccccccccccff..
        ....fffffffffccfccccccccccccccfcccccccccfffffff...
        ...........ffffffffffffffffffffffffffcccfffff.....
        .......................ffcff......................
        .......................ffcff......................
        .......................fffff......................
        .......................fffff......................
        .......................fffcf......................
        .......................fffcf......................
        .......................fffcf......................
        .......................ffceffff...................
        .......................ffceffff...................
        .......................ccccfccf...................
        ......................fccfcfcceff.................
        ....................fffccfcccccccff...............
        ....................fffccfcccccccff...............
        ...................fffcccfeffffcccfff.............
        ..................ffcccfffeeffffffeffff...........
        ...............ffffcccf..ffefff..ffffeefff........
        ...............ffffcccf..ffefff..ffffeefff........
        ..............ffeeecff....feeef...ffffff..........
        ...........ffffeeecc......feeef...fffff...........
        .........ffffeeeeecf......ffeefff.................
        .........ffffeeeeecf......ffeefff.................
        .........fffffffffc........feeffff................
        ..................................................
        ..................................................
        ..................................................
        `, SpriteKind.table)
    tiles.placeOnRandomTile(Table, sprites.castle.tilePath2)
    for (let index = 0; index < 7; index++) {
        COW = sprites.create(img`
            ccccc.........ccc........
            fc.............ccc.......
            fc.............ccc.......
            fc.............ccc.......
            ccffffffff1111fccc.......
            ce111111ee1111111f.......
            ce111111ee1111111f.......
            c1111e111111111eec.......
            c1fffe111111fffeec.......
            c1fff1111111fff11c.......
            c1fff1111111fff11c......f
            fe111333333333111f.....ff
            fe111333333333111f.....ff
            fe1113ff333ff3111f.....fe
            fe1113ff333ff3111f.....ff
            fb1113ff333ff31bbf.....ef
            .fbbbbbbbbbbbbebbefff11ff
            .fbbbe111111111eebfffff..
            .fbbbe111111111eebfffff..
            .fbbbe111111111eebfffff..
            .f111111ee1111b111fff....
            .f111fffff1111fff1fff....
            .f111fffff1111fff1fff....
            .f111fffff1111fff1fff....
            .ffff...ffffff...ffff....
            `, SpriteKind.COWW)
        tiles.placeOnRandomTile(COW, assets.tile`myTile42`)
        if (Math.percentChance(50)) {
            COW.setVelocity(10, 10)
            COW.setBounceOnWall(true)
        }
    }
    PIGLADY = sprites.create(img`
        . . . . . 2 2 2 2 . . . . . 
        f f f f . 2 1 2 2 f f . . . 
        3 3 3 f . 2 2 1 2 3 f . . . 
        3 f 3 f . 2 2 2 4 2 2 2 . . 
        f f f f f f f f 2 1 2 2 . . 
        f b 3 3 3 3 3 3 2 2 1 2 . . 
        f 3 1 3 3 3 3 1 2 2 2 2 . . 
        f 3 f 3 3 3 3 f 3 f . b f b 
        f 3 b b b b b 3 3 f . f 3 f 
        f 3 b f b f b 3 2 f f f 3 f 
        . f 2 2 2 2 2 2 b b f f 3 f 
        . f b 3 3 3 3 3 3 b f 3 b f 
        . f 3 3 3 3 3 b 3 3 f f f . 
        . f 3 f f f 3 f f 3 f . . . 
        . f f . . f f . . f f . . . 
        `, SpriteKind.PIGLY)
    tiles.placeOnRandomTile(PIGLADY, assets.tile`myTile43`)
    Farmist = sprites.create(img`
        .....fffffffffffffffffffffffffffff......
        .....fffffffffffffffffffffffffffff......
        .....fffffffffffffffffffffffffffff......
        .fffffffffffffffffffffffffffffffffffff..
        .fffffffffffffffffffffffffffffffffffff..
        ffffffffffffffff444444ffffffffffffffffff
        ffffffffffffffff444444ffffffffffffffffff
        fffffffffffff444444444444fffffffffffffff
        fffffffffffff444444444444fffffffffffffff
        fffffffffffff444444444444fffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff
        f4444eee4444444444444444444444eeee4444ff
        f4444eee4444444444444444444444eeee4444ff
        f4444eee4444444444444444444444eeee4444ff
        f44444441111ffff44444441111fff44444444ff
        f44444441111ffff44444441111fff44444444ff
        f44444441111ffff44444441111fff44444444ff
        feeee44444444444444444444444444444eeeeff
        feeee44444444444444444444444444444eeeeff
        .ffffeee44444444fffffff4444444eeeeffff..
        .ffffeee44444444fffffff4444444eeeeffff..
        .ffffeee44444444fffffff4444444eeeeffff..
        .fffffffeeee444444444444444eeeffffffff..
        .fffffffeeee444444444444444eeeffffffff..
        .fffffffeeee444444444444444eeeffffffff..
        e4444fffbbbb111111111111111bbbffff4444ee
        e4444fffbbbb111111111111111bbbffff4444ee
        4ddddfff1111111111111111111111ffffdddd44
        4ddddfff1111111111111111111111ffffdddd44
        4ddddfff1111111111111111111111ffffdddd44
        44444fff6666666666666666666666ffff444444
        44444fff6666666666666666666666ffff444444
        44444fff6666666666666666666666ffff444444
        ........ffffffffffffffffffffff..........
        ........ffffffffffffffffffffff..........
        ........ffffffff.......fffffff..........
        ........ffffffff.......fffffff..........
        ........ffffffff.......fffffff..........
        `, SpriteKind.FarmMan)
    tiles.placeOnRandomTile(Farmist, assets.tile`myTile54`)
    ChaseScene = false
    FarmPrincess = sprites.create(img`
        ...........455555555554............
        ..........44555555555544...........
        .........e44555555555544e..........
        ......feee44555555555544eee........
        .....ffeee44555555555544eeef.......
        ....fbb333ee4444444444ee333bb......
        ...ffbb333ee4444444444ee333bbff....
        ...ff333333333333333333333333ff....
        ...ff333333333333333333333333ff....
        ...3333eeebb333eeee333bbeee3333....
        ..33333eeebb333eeee333bbeee3333....
        ..33333eeebb333eeee333bbeee3333....
        ...3333fffffeeeeeeeeeefffff3333....
        ...3333fffffeeeeeeeeeefffff3333....
        ...bbbbfffbbfffeeeefffbbfffbbbb....
        ...bbbbeee11fff4444fff11eeebbbb....
        ....bbbeee11fff4444fff11eeebbbb....
        ....bbbeee11fff4444fff11eeebbb.....
        ...bbbbeee11fff4444fff11eeebbb.....
        ...bbbbfff44444444444444fffbbbbb...
        ..bbbfffffffeeeeeeeeeefffffffbbb...
        ..bbbfffffffeeeeeeeeeefffffffbbb...
        ..bbbfffffffeeeeeeeeeefffffffbbb...
        ..bbbfffffffeeeeeeeeeefffffffbbb...
        ..eeeeefffbbddddddddddbbfffeeeee...
        ..eee44cccddddddddddddddccc44eee...
        ..eee44cccddddddddddddddccc44eee...
        ...eeffbbbddbbbddbbdddbbbbbffeee...
        ...eeffbbbddbbbddbbdddbbbbbffee....
        ....effbbbddbbbddbbdddbbbbbffee....
        .....fffff11ddd11dd111ddfffff......
        .....fffff11ddd11dd111ddfffff......
        .........ffffff....ffffff..........
        .........ffffff....ffffff..........
        .........ffffff....ffffff..........
        `, SpriteKind.FarmPrincesss)
    tiles.placeOnRandomTile(FarmPrincess, sprites.swamp.swampTile9)
    FarmVegan = sprites.create(img`
        ..ffffffffffffccccccccfffffffffff..
        ..ffffffffffffccccccccfffffffffff..
        ..fffffffffbbbccccccccbbbffffffff..
        ..fffffffffbbbccccccccbbbffffffff..
        ..fffffffffbbbccccccccbbbffffffff..
        ..fffffffcc333cccccccc333ccffffff..
        ..fffffffcc333cccccccc333ccffffff..
        .....ff3333cccccccccccccc3333ff....
        .....ff3333cccccccccccccc3333ff....
        .....ff3333cccccccccccccc3333ff....
        .....ffccccccccc4444cccccccccff....
        .....ffccccccccc4444cccccccccff....
        .....ffffccccc44444444cccccffff....
        .....ffffccccc44444444cccccffff....
        .....ffffccccc44444444cccccffff....
        .....ffffffbbbff4444ffbbbffffff....
        .....ffffffbbbff4444ffbbbffffff....
        .....ffff44111ffddddff11144ffff....
        .....ffff44111ffddddff11144ffff....
        .......ffffddddddddddddddffff......
        .......ffffddddddddddddddffff......
        .......ffffddddddddddddddffff......
        .......eeffeee44444444eeeffee......
        .......eeffeee44444444eeeffee......
        .....ee44ffbbb33333333bbbff44ee....
        .....ee44ffbbb33333333bbbff44ee....
        .....ee44ffbbb33333333bbbff44ee....
        .....44ddff33333333333333ccdd44....
        .....44ddff33333333333333ccdd44....
        .....4444ff66666666666666ff4444....
        .....4444ff66666666666666ff4444....
        .....4444ff66666666666666ff4444....
        ...........ffffffffffffff..........
        ...........ffffffffffffff..........
        ...........fffff....fffff..........
        `, SpriteKind.Vegan)
    tiles.placeOnRandomTile(FarmVegan, sprites.swamp.swampTile16)
    FarmBoy = sprites.create(img`
        ...............fffffffff............
        ......ffffffffffffffffffffffff......
        .....ffffffffffffffffccccffffff.....
        .....ffffffffffffffffccccfffffff....
        ...fffffffffffffffcccccccfffffff....
        ...fffffffffffffffcccccccffffffff...
        ..ffffffffffffffffcccccccfffffffff..
        ..fffffffcccffffffffffffffffffffff..
        ..fffffffcccffffffffffffffffffffff..
        .ccccccccfffffffffeeeeeeefffffffcc..
        .ccccccccfffffffffeeeeeeefffffffcc..
        .ccccccccfffffffffeeeeeeefffffffcc..
        .fffffffffffffffeeeeeffffffccccccc..
        .fffffffffffffffeeeeeffffffccccccc..
        ..fffffffbbbffffeeeeeffffbbfffffff..
        ..fffffffbbbffffeeeeeffffbbfffffff..
        ...ff4444111ffff44444ffff1144444ff..
        ...ff4444111ffff44444ffff1144444ff..
        ...ff4444111ffff44444ffff1144444ff..
        ...ff4444111ffff44444ffff1144444ff..
        ...ffeeee444444444444444444eeeeeff..
        ...ffeeee444444444444444444eeeeeff..
        ...fffffffffeeeeeeeeeeeeefffffffff..
        ...fffffffffeeeeeeeeeeeeefffffffff..
        ...fffffffffeeeeeeeeeeeeefffffffff..
        ..feeffffbbb7777777777777bbfffffeef.
        ..feeffffbbb7777777777777bbfffffeef.
        ..e44ffff777777777777777777fffff44e.
        .ee44ffff777777777777777777fffff44ee
        .eeeeffff666666666666666666fffffeeee
        ..eeeffff666666666666666666fffffee..
        ...eeffff666666666666666666fffffe...
        .........ffffffffffffffffff.........
        .........ffffffffffffffffff.........
        .........fffffff.....ffffff.........
        `, SpriteKind.Boy)
    tiles.placeOnRandomTile(FarmBoy, sprites.swamp.swampTile1)
    SatanCutScene = sprites.create(img`
        ...ddbbbddffffffffffffffffffffddbbbdd...
        ...ddbbbddffffffffffffffffffffddbbbdd...
        .....dddbbfff22222222222222fffbbddd.....
        .....dddbbfff22222222222222fffbbddd.....
        .....dddbbfff22222222222222fffbbddd.....
        ........ddfff22fff2222fff22fffdd........
        ........ddfff22fff2222fff22fffdd........
        ........ff22222222ff22222ff222ff........
        ........ff22222222ff22222ff222ff........
        ........ff22222222ff22222ff222ff........
        .....fff222225511122551112222222fff.....
        .....fff222225511122551112222222fff.....
        ...ff222222225511122551112222222222ff...
        ...ff222222225511122551112222222222ff...
        ...ff222222225511122551112222222222ff...
        .ff2222222222222222222222222222222222ff.
        .ff2222222222222222222222222222222222ff.
        .ffff2222222222fffffff2222222222222ffff.
        .ffff2222222222fffffff2222222222222ffff.
        .ffff2222222222fffffff2222222222222ffff.
        .fffffff22222ff2222222fff2222222fffffff.
        .fffffff22222ff2222222fff2222222fffffff.
        .fffffff22222ff2222222fff2222222fffffff.
        .ff22fffff22222222222222222222fffff22ff.
        .ff22fffff22222222222222222222fffff22ff.
        .ff22fffff22222222222222222222fffff22ff.
        .ff22fffff22222222222222222222fffff22ff.
        .ff22fffff22222222222222222222fffff22ff.
        .ff2222222222222222222222222222222222ff.
        .ff2222222222222222222222222222222222ff.
        .ff22ffffffff22ffffffffff22bbbfffff22ff.
        .ff22ffffffff22ffffffffff22bbbfffff22ff.
        .ff22ffffffff22ffffffffff22bbbfffff22ff.
        ...ffddddddddff..........ffddddddddff...
        ...ffddddddddff..........ffddddddddff...
        .....fffbbfff..............fffbbfff.....
        .....fffbbfff..............fffbbfff.....
        .....fffbbfff..............fffbbfff.....
        ........ff....................ff........
        ........ff....................ff........
        `, SpriteKind.Satan)
    tiles.placeOnRandomTile(SatanCutScene, sprites.swamp.swampTile13)
}
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
let FarmBoy: Sprite = null
let FarmVegan: Sprite = null
let FarmPrincess: Sprite = null
let PIGLADY: Sprite = null
let COW: Sprite = null
let Table: Sprite = null
let FarmHouse: Sprite = null
let Skin_Pellets: Sprite = null
let weed: Sprite = null
let weedcount = 0
let weedtype: Image[] = []
let Farmist: Sprite = null
let ChaseScene = false
let Shark: Sprite = null
let bones: Sprite = null
let orgs: Sprite = null
let orgcount = 0
let orglist: Image[] = []
let SatanCutScene: Sprite = null
let round = 0
let Bossivul = false
let jumping = false
let boom: Sprite = null
let remorg = 0
let BloodPackets: Sprite = null
let Portal: Sprite = null
let Boss_Hp = 0
let inBossFight = false
let invul = false
let underwater = false
let remainingSkinPellets = 0
let reorg = 0
let Hammy: Sprite = null
Hammy = sprites.create(assets.image`myImage1`, SpriteKind.Player)
reorg = 6
remainingSkinPellets = 6
underwater = false
invul = false
inBossFight = false
let satinHP = 3
Boss_Hp = 5
controller.moveSprite(Hammy)
scene.cameraFollowSprite(Hammy)
cut_scene_1()
game.onUpdate(function () {
    if (Hammy.isHittingTile(CollisionDirection.Bottom)) {
        jumping = false
    }
})
game.onUpdateInterval(2000, function () {
    if (underwater) {
        sharkStorm()
    }
})
game.onUpdateInterval(1000, function () {
    if (!(invul)) {
        invul = true
    }
    if (!(Bossivul)) {
        Bossivul = true
    }
})
forever(function () {
    if (Boss_Hp <= 0) {
        info.setLife(3)
        tiles.placeOnRandomTile(Hammy, assets.tile`myTile17`)
        round += 1
        tiles.placeOnRandomTile(SatanCutScene, assets.tile`myTile15`)
        Boss_Hp = 5
        SatanCutScene.follow(Hammy, 60 / Boss_Hp * round)
        SatanCutScene.sayText(Boss_Hp)
        if (3 < round) {
            game.gameOver(true)
        }
    }
})
