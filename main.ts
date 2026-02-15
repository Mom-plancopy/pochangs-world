namespace SpriteKind {
    export const GUI = SpriteKind.create()
}
function mainMenu () {
    displaymenu1()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    vy = -100
    character.rotationDegrees = 180
    character.scale = 1
    character.setImage(assets.image`character2`)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    vy = 0
    character.setImage(assets.image`character`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    vx = -100
    character.rotationDegrees = 90
    character.scale = 1
    character.setImage(assets.image`character2`)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    vx = 0
    character.setImage(assets.image`character`)
})
function displaymenu1 () {
    Menu = miniMenu.createMenu(
    miniMenu.createMenuItem("Play", assets.image`play`),
    miniMenu.createMenuItem("Options", assets.image`settings`),
    miniMenu.createMenuItem("How to play", assets.image`question`)
    )
    miniMenu.setFrame(Menu, assets.image`menuframe`)
    miniMenu.setTitle(Menu, "Menu")
    miniMenu.setDimensions(Menu, 105, 75)
    miniMenu.setStyleProperty(Menu, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Border, 1)
    miniMenu.onSelectionChanged(Menu, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            miniMenu.setStyleProperty(Menu, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 7)
            scene.setBackgroundColor(7)
        } else if (selectedIndex == 1) {
            miniMenu.setStyleProperty(Menu, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 11)
            scene.setBackgroundColor(11)
        } else if (selectedIndex == 2) {
            miniMenu.setStyleProperty(Menu, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 10)
            scene.setBackgroundColor(10)
        }
    })
    miniMenu.onButtonPressed(Menu, miniMenu.Button.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            miniMenu.close(Menu)
            startgame()
        } else if (selectedIndex == 1) {
            game.splash("nothing to see here")
        } else if (selectedIndex == 2) {
            miniMenu.close(Menu)
            displaymenu2()
        }
    })
}
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    vx = 0
    character.setImage(assets.image`character`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    vx = 100
    character.rotationDegrees = -90
    character.scale = 1
    character.setImage(assets.image`character2`)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    vy = 0
    character.setImage(assets.image`character`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    vy = 100
    character.rotationDegrees = 0
    character.scale = 1
    character.setImage(assets.image`character2`)
})
function startgame () {
    sprites.destroy(textSprite)
    music.stopAllSounds()
    switchmap("house")
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.positionDirection(CollisionDirection.Top)
    statusbar.setLabel("Health", 15)
    statusbar.setBarBorder(1, 15)
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    pause(50)
    game.showLongText("It's a very sunny day. This is your very first home. Why not go in the house? There are no furniture in your house.", DialogLayout.Bottom)
}
function displaymenu2 () {
    game.showLongText("Use joystick to move.", DialogLayout.Center)
    game.showLongText("Use A to interact with objects.", DialogLayout.Center)
    game.showLongText("If you are holding an object, A will be used to interact with the object.", DialogLayout.Center)
    game.showLongText("Use B to toggle inventory.", DialogLayout.Center)
    displaymenu1()
    for (let index = 0; index < 2; index++) {
        miniMenu.moveSelection(Menu, miniMenu.MoveDirection.Down)
    }
}
function switchmap (map: string) {
    canmove = 0
    scene.setBackgroundColor(15)
    character.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(500)
    canmove = 1
    if (map == "house") {
        tiles.setCurrentTilemap(tilemap`house_garden`)
        tiles.placeOnTile(character, tiles.getTileLocation(7, 12))
        music.play(music.createSong(assets.song`backgroundmusic`), music.PlaybackMode.LoopingInBackground)
    } else {
    	
    }
    character.setImage(assets.image`character1`)
}
let statusbar: StatusBarSprite = null
let Menu: Sprite = null
let vx = 0
let vy = 0
let textSprite: TextSprite = null
let character: Sprite = null
let canmove = 0
canmove = 0
character = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
music.play(music.createSong(assets.song`backgroundmusic`), music.PlaybackMode.LoopingInBackground)
mainMenu()
textSprite = textsprite.create("Pochang's world")
textSprite.setPosition(80, 20)
forever(function () {
    if (canmove == 1) {
        scene.cameraFollowSprite(character)
        character.setVelocity(vx, vy)
    }
})
