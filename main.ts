sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Tiyon.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(10)
})
let Tiyon: Sprite = null
scene.setBackgroundColor(7)
let mySprite = sprites.create(assets.image`Tiyon player`, SpriteKind.Player)
controller.moveSprite(mySprite)
Tiyon = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 2 2 2 2 2 f f f f f . . . 
    . . . 2 2 2 2 2 f f f f f . . . 
    . . . 2 2 2 2 2 f f f f f . . . 
    . . . f . . . . . . . . f . . . 
    . . . f . f . . . . f . f . . . 
    . . . f . . . . . . . . f . . . 
    . . . f . . . . . . . . f . . . 
    . . . f . f . . . . f . f . . . 
    . . . f . f f f f f f . f . . . 
    . . . f . . . . . . . . f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
