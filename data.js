const gameList = new Map([
    [
        'Ports', new Map([
            [152742032, {
                name: 'Tyrian',
                overview: 'Tyrian is a vertically-scrolling shoot \'em up set in the distant future.<br>It features multiple levels/zones in a variety of settings, a whole host of different aliens to defend yourself against and a myriad of power-ups and weapon upgrades to collect.<br>This Scratch version contains the complete first episode of the game.<br>There are a few elements of the game which weren\'t ported across due to Scratch restrictions. These include two-player and linked modes as well as the story mode, high score tables and musical scripts.',
                credits: 'The game was originally developed by World Tree Games and published in 1995 by Epic MegaGames.<br>It was officially released as freeware in 2004 and the graphics were made available under an open license in April 2007.<br>This is a port of <a href="https://github.com/opentyrian/opentyrian">OpenTyrian</a> so massive credit to the guys who shared this to the community!',
                instructions: 'Shoot everything to earn points!<br>Collect upgrades to add new front, rear and side weapons. Collect power-ups (grey balls) to improve your weapons. When you lose a life you are respawned with one less power. If you have no power left then your game is over.<br> Side weapons often have two modes which change the direction of fire so don\'t forget that you can toggle modes.<br>There are also six secret levels to find in the game!',
                controls: 'Move: Arrows or WASD<br>Fire front and rear weapons: Space bar<br>Fire side-kicks: Z or M<br>Rear-weapon mode: Enter'
            }],
            [339207237, {
                name: 'Beneath a Steel Sky',
                overview: 'Beneath a Steel Sky is a classic "point \'n\' click" adventure.<br>You play the character of Robert Foster after he escapes a helicopter crash and finds himself alone save for the circuit board of his best friend, Joey, the AI he built as a child. Strangers in a strange land, Foster and Joey must survive long enough to discover the sinister truth behind his abduction - why they specifically came for him - and defeat the evil before it\'s too late.',
                credits: 'All credit for the game goes to Revolution Software.<br>Credit to the ScummVM team for their work in reverse engineering the assembly code.<br>Credit to James Woodcock for his enhanced soundtrack which I\'ve used.',
                notes: 'This is a rather ambitious port of a brilliant game that is supported by SCUMMVM (and that the developer has kindly made freeware and released the assembly language code for).<br>This project is fully playable but isn\'t a complete port of the original game. The remaining tasks are<ul><li>Try to squeeze the rest of the game into the project</li><li>Restarting after game-over takes too long</li><li>Text colours are awful\</li><li>Polish and bug fixes</li></ul>I did have the full front end animation sequence that leads into the initial cut scene but it caused most computers to crash due to the insane amount of costumes and animations involved. Such a shame as it was fully working on this computer, too...',
                instructions: 'Tap the \'?\' icon for in-game instructions. They include a clue to get you started!<br>You can also <a href="https://youtu.be/kLUSilsCQUc">watch a play-through</a> of the initial stages on my YouTube channel.',
                controls: 'All control is done with the mouse (or touch screen).'
            }],
            [329352910, {
                name: 'Z-Code Text Adventures',
                overview: 'This project allows you to play any of the classic (or modern) z-code text adventures. These include -<ul><li>The Hitchhiker\'s Guide to the Galaxy</li><li>Zork</li><li>Planetfall</li><li>Adventureland</li><li>Lost Pig</li><li>Spider and Web</li></ul>',
                credits: 'Game images are from Infocom, Adventure International and general interactive fiction sources.<br>The code is based on WinFrotz but with a lot of changes, modifications, enhancements and Scratchification by RokCoder.',
                notes: 'This is a z-code interpreter which works for all versions of z-code up to and including v8.<br>It\'s packaged with a number of text adventures as well as the ability to load and play any z-code files of your own!<br>It makes use of RokCoder\'s Save-Game Toolkit and RokCoder\'s image-to-data decompression kit. The compression kit means that hundreds of games can be stored in the project.<br>Some features are not yet fully implemented and others (such as graphics) are unlikely to ever be implemented.',
                instructions: 'Use commands such as north, east, south, west (or n, s, w, e, nw, ne, sw, se) to move, "inventory" (or "inv") to see what you\'re carrying, "look" to look around and "save" (or "save game") and "load" (or "restore") so you don\'t have to start from the beginning each time!<br>Other examples of commands are "open mailbox", "read leaflet", "climb tree", "open window", "what is a grue?".<br>These adventures accept a lot of different commands!<br>You can adjust the number of lines of text being displayed by using the slider at the left of the screen. You can check through the history by using the scroll bar at the right side of the screen.',
            }],
            [541103158, {
                name: 'The Manhole',
                overview: 'Welcome to the world in and around The Manhole. Remember this is not a race, and you don\'t win or lose. The idea behind The Manhole is exploration. Take your time, look around, click on everything, and enjoy the journey. Every time you play, you\'ll probably find something new.',
                credits: 'The Manhole was first released by Cyan Worlds in 1988. In 1989 it was updated by Activision and was the first PC game ever to be released on CD. This is the "new and enhanced" version which was released in 1992. If you enjoy this you might want to consider purchasing the "masterpiece edition" which is available through Steam.<br>This is a port of the ScummVM\'s Made engine. It is capable of running several other wonderful games in addition to The Manhole and I may look into bringing those across at a later date.',
                instructions: 'To move around you simply click where you want to go. Clicking at the sides of the screen will sometimes turn you that direction. In some places you can look up or down as well. Even clicking a second time on a creature or object sometimes produces a different response!'
            }],
            [216192064, {
                name: 'Scott Adams Text Adventures',
                overview: 'This is the full compendium of Adventure International\'s awesome text adventures released between 1979 and 1984. <ul><li>Adventureland</li><li>Pirate Adventure</li><li>Mission Impossible</li><li>Voodoo Castle</li><li>The Count</li><li>Strange Odyssey</li><li>Mystery Fun House</li><li>Pyramid of Doom</li><li>Ghost Town</li><li>Savage Island (parts 1 and 2)</li><li>Golden Voyage</li><li>Sorcerer of Claymorgue Castle</li><li>Return to Pirate\'s Isle</li><li>Buckaroo</li><li>The Hulk</li><li>Spiderman</li></ul>',
                credits: 'Absolute credit to Scott Adams for creating these wonderful text adventures in the 1970\'s and 1980\'s.<br>Scott Free Driver for Scratch, revision 1.00 Derived from Alan Cox\'s "Scott Free" revision 1.14 (c) 1993,1994,1995 Swansea University Computer Society With some modifications from Robert Schneck\'s driver (also based upon the above).<br>All work on this driver by RokCoder, 2018.',
                notes: 'This is a port to Scratch of "Scott Free" which allows the Scott Adams games\' data files to run on this platform.<br>I\'ve added quite a few new features including a nice front end menu, the ability to load and save games and much more.',
                instructions: 'These early adventures used a very limited vocabulary. To play, enter simple commands such as "look", "go east", "get axe", "help", "save game", "quit", "score".',
            }]
        ])
    ],
    [
        'Arcade', new Map([
            [268499692, {
                name: 'Galaga'
            }],
            [277180598, {
                name: 'Donkey Kong'
            }],
            [156708703, {
                name: 'Scramble'
            }],
            [152837762, {
                name: 'New Rally X'
            }],
            [253610111, {
                name: 'Space Invaders'
            }],
            [320754774, {
                name: 'Mr. Do!'
            }],
            [360544527, {
                name: 'Racy Brum Brum'
            }],
            [620555674, {
                name: 'Shape Smasher'
            }],
            [306019914, {
                name: 'Sewer Snarks'
            }],
            [398402800, {
                name: 'Batty Ball Bouncer'
            }]
        ])
    ],
    [
        'Games', new Map([
            [211261132, {
                name: 'Labyrinth'
            }],
            [594970041, {
                name: 'Snake'
            }],
            [292631647, {
                name: 'Band Hero'
            }],
            [406809799, {
                name: 'Cardinal Chains'
            }]
        ])
    ],
    [
        'Multiplayer', new Map([
            [432268401, {
                name: 'Battleships'
            }],
            [450312661, {
                name: 'Uno'
            }],
            [475832391, {
                name: 'Uno Flip'
            }],
            [457883039, {
                name: 'Uno Stack'
            }]
        ])
    ],
    [
        'Other', new Map([
            [364502191, {
                name: 'Roller Coaster Builder'
            }],
            [531881458, {
                name: 'BBC Micro Emulator'
            }],
            [464083132, {
                name: 'MIDI Piano Guy'
            }],
            [238269913, {
                name: 'Stickman Player'
            }]
        ])
    ]
]);

