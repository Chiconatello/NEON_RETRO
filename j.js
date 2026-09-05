const games = [{"cat": "arcade", "img": "pac.png", "title": "Pac-Man (1980)", "desc": "The yellow circle that ate the world. Navigate mazes while eating dots and avoiding ghosts.", "url": "https://www.crazygames.com/game/pacman"}, {"cat": "platform", "img": "1.png", "title": "Super Mario Bros. (1985)", "desc": "NES classic that defined platform gaming for generations to come.", "url": "https://arcadespot.com/game/super-mario-bros/"}, {"cat": "shooter", "img": "invaders.png", "title": "Space Invaders (1978)", "desc": "Defend Earth from descending aliens in this iconic arcade shooter.", "url": "https://www.retrogames.cz/play_016-NES.php"}, {"cat": "shooter", "img": "contra.png", "title": "Contra (1987)", "desc": "Run-and-gun through enemy territory in this challenging action-packed shooter.", "url": "https://www.retrogames.cz/play_022-NES.php"}, {"cat": "shooter", "img": "ms.png", "title": "Metal Slug (1996)", "desc": "Fast-paced run-and-gun with humor and explosive action against enemy forces.", "url": "https://oldgameshelf.com/games/neo-geo/metal-slug-neo-geo-7466"}, {"cat": "shooter", "img": "tc.jpg", "title": "Time Crisis (1995)", "desc": "Rail shooter with a unique cover system and time-limited missions.", "url": "https://www.ps1fun.com/play/time-crisis/1726"}, {"cat": "shooter", "img": "xevious.jpg", "title": "Xevious (1982)", "desc": "Classic vertical shooter where you blast alien ships and drop bombs on ground targets.", "url": "https://www.classicgamesarcade.com/game/21662/xevious.html"}, {"cat": "shooter", "img": "doom.png", "title": "DOOM (1993)", "desc": "Pioneering first-person shooter where you battle demons on Mars' moons with big guns and fast action.", "url": "https://dos.zone/doom-dec-1993/"}, {"cat": "shooter", "img": "area.png", "title": "Area 51 (1995)", "desc": "First-person shooter set in the infamous Area 51, battling aliens and mutants.", "url": "https://www.retrogames.me/psx/area-51.html"}, {"cat": "shooter", "img": "1942.png", "title": "1942 (1984)", "desc": "Fly your plane and shoot down enemy aircraft in this top-down WWII shooter by Capcom.", "url": "https://www.free80sarcade.com/1942-2.php"}, {"cat": "shooter", "img": "defender.png", "title": "Defender (1981)", "desc": "Side-scrolling shooter where you protect astronauts from alien abduction.", "url": "https://www.retrogames.cz/play_178-DOS.php"}, {"cat": "fighting", "img": "sf2.png", "title": "Street Fighter II (1991)", "desc": "The fighting game that revolutionized arcades with special moves and combos.", "url": "https://www.retrogames.cz/play_304-SNES.php"}, {"cat": "arcade", "img": "centipede.jpg", "title": "Centipede (1981)", "desc": "Shoot the centipede as it winds down the screen while avoiding mushrooms.", "url": "https://www.arkadium.com/games/atari-centipede/"}, {"cat": "arcade", "img": "asteroids.jpg", "title": "Asteroids (1979)", "desc": "Destroy asteroids and flying saucers with your triangular spaceship.", "url": "https://arcadespot.com/game/asteroids/"}, {"cat": "arcade", "img": "ms_pacman.jpg", "title": "Ms. Pac-Man (1982)", "desc": "Improved sequel with faster gameplay and more maze variations.", "url": "https://www.mspacman1.com/"}, {"cat": "arcade", "img": "4.png", "title": "Tetris (1984)", "desc": "The timeless tile-matching puzzle game that needs no introduction.", "url": "https://www.retrogames.cz/play_1030-NES.php"}, {"cat": "arcade", "img": "outrun.png", "title": "Out Run (1986)", "desc": "Classic arcade racing game with branching paths and great music.", "url": "https://www.retrogames.cz/play_171-Genesis.php"}, {"cat": "arcade", "img": "arkanoid.png", "title": "Arkanoid (1986)", "desc": "Breakout-style game with power-ups and challenging stages.", "url": "https://www.retrogames.cz/play_039-NES.php"}, {"cat": "arcade", "img": "tempest.png", "title": "Tempest (1981)", "desc": "Abstract tube shooter with vector graphics and fast-paced action.", "url": "https://flashmuseum.org/tempest/"}, {"cat": "arcade", "img": "robotron.jpg", "title": "Robotron 2084 (1982)", "desc": "Twin-stick shooter where you rescue humans from killer robots.", "url": "https://www.retrogames.cz/play_1124-Atari7800.php"}, {"cat": "arcade", "img": "mc.jpg", "title": "Missile Command (1980)", "desc": "Defend your cities from incoming missiles in this strategic shooter.", "url": "https://www.retrogames.cz/play_080-Atari2600.php"}, {"cat": "arcade", "img": "crystal_castles.jpg", "title": "Crystal Castles (1983)", "desc": "Guide Bentley Bear through isometric mazes collecting gems.", "url": "https://www.retrogames.cz/play_377-Atari2600.php"}, {"cat": "platform", "img": "dt.jpg", "title": "DuckTales (1989)", "desc": "Pogo-jump through levels as Scrooge McDuck hunting treasure.", "url": "https://oldgameshelf.com/games/nes/duck-tales-305"}, {"cat": "platform", "img": "gng.jpg", "title": "Ghosts 'n Goblins (1985)", "desc": "Challenging platformer where Arthur battles zombies in his underwear.", "url": "https://oldgameshelf.com/games/nes/ghosts-n-goblins-401"}, {"cat": "platform", "img": "ng.png", "title": "Ninja Gaiden (1988)", "desc": "Fast-paced ninja action with cinematic cutscenes.", "url": "https://oldgameshelf.com/games/nes/ninja-gaiden-729"}, {"cat": "platform", "img": "bghost.jpg", "title": "Bubble Ghost (1987)", "desc": "Unique puzzle-platformer where you guide a bubble through a haunted house.", "url": "https://oldgameshelf.com/games/gbc/bubble-ghost-gbc-5550"}, {"cat": "platform", "img": "km.jpg", "title": "Kid Chameleon (1992)", "desc": "Platformer with masks that give different powers and abilities.", "url": "https://oldgameshelf.com/games/sega-genesis/kid-chameleon-sega-genesis-7923"}, {"cat": "platform", "img": "tje.jpg", "title": "ToeJam & Earl (1991)", "desc": "Funkadelic alien platformer with roguelike elements.", "url": "https://megadrive-emulator.com/platform-game/toejam-and-earl"}, {"cat": "platform", "img": "vpd.jpg", "title": "Vice: Project Doom (1991)", "desc": "Underrated NES platformer mixing driving, shooting and swordplay.", "url": "https://oldgameshelf.com/games/nes/vice-project-doom-1134"}, {"cat": "platform", "img": "ls.jpg", "title": "Little Samson (1992)", "desc": "Rare NES platformer where you switch between four characters.", "url": "https://oldgameshelf.com/games/nes/little-samson-591"}, {"cat": "platform", "img": "rka.png", "title": "Rocket Knight Adventures (1993)", "desc": "Sparkster the opossum rockets through creative levels.", "url": "https://oldgameshelf.com/games/sega-genesis/rocket-knight-adventures-sega-genesis-8147"}, {"cat": "platform", "img": "dh.png", "title": "Dynamite Headdy (1994)", "desc": "Surreal platformer where you throw your head at enemies.", "url": "https://oldgameshelf.com/games/sega-genesis/dynamite-headdy-sega-genesis-7760"}, {"cat": "shooter", "img": "gradius.png", "title": "Gradius (1985)", "desc": "Classic horizontal shooter with the iconic power-up system.", "url": "https://oldgameshelf.com/games/nes/gradius-420"}, {"cat": "shooter", "img": "rtype.jpg", "title": "R-Type (1987)", "desc": "Challenging horizontal shooter with the Force power-up.", "url": "https://www.retrogames.cc/arcade-games/r-type-us.html"}, {"cat": "shooter", "img": "twinbee.jpg", "title": "TwinBee (1985)", "desc": "Colorful vertical shooter where you collect bells for power-ups.", "url": "https://www.retrogames.cz/play_009-NES.php"}, {"cat": "shooter", "img": "1943.jpg", "title": "1943: The Battle of Midway (1987)", "desc": "Classic Capcom WWII aerial shooter with power-ups and special attacks.", "url": "https://www.retrogames.cz/play_027-NES.php"}, {"cat": "shooter", "img": "parodius.jpg", "title": "Parodius (1988)", "desc": "Wacky Gradius parody with penguins, cats, and other odd ships.", "url": "https://oldgameshelf.com/games/snes/parodius-non-sense-fantasy-2302"}, {"cat": "shooter", "img": "tf.png", "title": "Thunder Force III (1990)", "desc": "Fast-paced horizontal shooter with selectable weapons.", "url": "https://www.retrogames.cc/genesis-games/thunder-force-iii-japan-usa.html"}, {"cat": "shooter", "img": "darius.jpg", "title": "Darius (1987)", "desc": "Fish-themed shooter with branching paths and multiple endings.", "url": "https://www.retrogames.cc/arcade-games/darius-world.html"}, {"cat": "shooter", "img": "lifeforce.png", "title": "Life Force (1986)", "desc": "Gradius spin-off set inside a giant alien organism.", "url": "https://www.retrogames.cz/play_750-NES.php"}, {"cat": "shooter", "img": "salamander.jpg", "title": "Salamander (1986)", "desc": "Another Gradius variant with alternating horizontal/vertical stages.", "url": "https://oldgameshelf.com/games/nes/salamander-jap-877"}, {"cat": "shooter", "img": "zw.jpg", "title": "Zero Wing (1989)", "desc": "\"All your base are belong to us\" meme originated here.", "url": "https://oldgameshelf.com/games/sega-genesis/zero-wing-sega-genesis-8421"}, {"cat": "fighting", "img": "aof.png", "title": "Art of Fighting (1992)", "desc": "SNK fighter with zooming camera and special moves.", "url": "https://www.retrogames.cz/play_1367-SNES.php"}, {"cat": "fighting", "img": "wh.jpg", "title": "World Heroes (1992)", "desc": "Historical figures battle it out in this SNK fighter.", "url": "https://www.retrogames.cz/play_1435-SNES.php"}, {"cat": "fighting", "img": "pi.jpg", "title": "Power Instinct (1993)", "desc": "Quirky fighter with eccentric characters and transformations.", "url": "https://www.retrogames.cc/arcade-games/power-instinct-usa.html"}, {"cat": "fighting", "img": "lb.jpg", "title": "The Last Blade (1997)", "desc": "Weapon-based fighter with beautiful visuals and deep mechanics.", "url": "https://www.retrogames.cc/arcade-games/the-last-blade-bakumatsu-roman-gekka-no-kenshi-ngm-2340.html"}, {"cat": "fighting", "img": "garou.jpg", "title": "Garou: Mark of the Wolves (1999)", "desc": "Final Fatal Fury game with gorgeous sprite work.", "url": "https://www.retrogames.cc/arcade-games/garou-mark-of-the-wolves-ngm-2530.html"}, {"cat": "fighting", "img": "broar.png", "title": "Bloody Roar (1997)", "desc": "Fighters transform into beasts during battles.", "url": "https://www.retrogames.cc/arcade-games/bloody-roar-japan-jun-21-1997.html"}, {"cat": "fighting", "img": "blade.jpg", "title": "Bushido Blade (1997)", "desc": "Realistic sword fighting where one hit can end the match.", "url": "https://gam.onl/psx/bushido-blade.html#game"}, {"cat": "fighting", "img": "weaponlord.jpg", "title": "Weaponlord (1995)", "desc": "Weapon-based fighter with complex mechanics and fatalities.", "url": "https://arcadespot.com/game/weaponlord/"}, {"cat": "fighting", "img": "prage.jpg", "title": "Primal Rage (1994)", "desc": "Control giant monsters battling in a post-apocalyptic world.", "url": "https://classicreload.com/dosx-primal-rage.html"}, {"cat": "fighting", "img": "echamp.jpg", "title": "Eternal Champions (1993)", "desc": "Time-traveling fighters with brutal finishing moves.", "url": "https://www.retrogames.cc/genesis-games/eternal-champions-usa.html"}, {"cat": "arcade", "img": "2.png", "title": "Donkey Kong (1981)", "desc": "Jumpman (Mario) must rescue Pauline from the giant ape Donkey Kong.", "url": "https://freekong.org/"}, {"cat": "platform", "img": "3.png", "title": "Sonic the Hedgehog (1991)", "desc": "Sega's speedy blue mascot that challenged Mario's platform dominance.", "url": "https://www.allsonicgames.net/sonic-the-hedgehog.php"}, {"cat": "shooter", "img": "galaga.jpg", "title": "Galaga (1981)", "desc": "Fixed shooter with challenging enemy patterns and tractor beams.", "url": "https://www.free80sarcade.com/galaga.php"}, {"cat": "fighting", "img": "mk.png", "title": "Mortal Kombat (1992)", "desc": "Brutal fighter with fatalities that sparked video game content debates.", "url": "https://www.retrogames.cz/play_229-SNES.php"}, {"cat": "arcade", "img": "pong.jpg", "title": "Pong (1972)", "desc": "The game that started it all - simple tennis gameplay between two paddles.", "url": "https://www.ponggame.org/"}, {"cat": "arcade", "img": "fr.jpg", "title": "Frogger (1981)", "desc": "Guide your frog across a busy road and river without getting squashed.", "url": "https://online.oldgames.sk/play/arcade/frogger/10134"}, {"cat": "arcade", "img": "qbert.jpg", "title": "Q*bert (1982)", "desc": "Hop your way to puzzle success while avoiding weird enemies on a pyramid.", "url": "https://www.free80sarcade.com/qbert.php"}, {"cat": "arcade", "img": "joust.png", "title": "Joust (1982)", "desc": "Ride a flying ostrich in a medieval-themed jousting battle against buzzards.", "url": "https://www.free80sarcade.com/joust.php"}, {"cat": "arcade", "img": "bt.jpg", "title": "BurgerTime (1982)", "desc": "Create giant burgers while dodging evil pickles, eggs, and sausages.", "url": "https://www.retrogames.cz/play_020-NES.php"}, {"cat": "arcade", "img": "dd.png", "title": "Dig Dug (1982)", "desc": "Dig tunnels and pump enemies until they pop in this underground classic.", "url": "https://www.retrogames.cz/play_012-NES.php"}, {"cat": "arcade", "img": "mdo.jpg", "title": "Mr. Do! (1982)", "desc": "Harvest cherries and defeat enemies in this Dig Dug-style arcade gem.", "url": "https://www.retrogames.cz/play_273-SNES.php"}, {"cat": "arcade", "img": "bb.png", "title": "Bubble Bobble (1986)", "desc": "Trap enemies in bubbles and pop them to rescue your girlfriend!", "url": "https://www.retrogames.cc/arcade-games/bubble-bobble.html"}, {"cat": "platform", "img": "mm.png", "title": "Mega Man (1987)", "desc": "Blue bomber platformer with weapon-stealing mechanics from defeated bosses.", "url": "https://www.retrogames.cz/play_116-NES.php"}, {"cat": "platform", "img": "dkc.jpg", "title": "Donkey Kong Country (1994)", "desc": "Revolutionary graphics and fluid platforming on the SNES.", "url": "https://www.retrogames.cz/play_289-SNES.php"}, {"cat": "platform", "img": "ka.png", "title": "Kirby's Adventure (1993)", "desc": "Suck up enemies and steal their powers in this colorful platformer.", "url": "https://www.retrogames.cz/play_316-NES.php"}, {"cat": "platform", "img": "rayman.png", "title": "Rayman (1995)", "desc": "Whimsical platformer with a limbless hero and vibrant levels.", "url": "https://gam.onl/psx/rayman.html#rayman"}, {"cat": "platform", "img": "ejim.png", "title": "Earthworm Jim (1994)", "desc": "Surreal and funny platformer with a worm in a super suit.", "url": "https://oldgameshelf.com/games/snes/earthworm-jim-1588"}, {"cat": "platform", "img": "castlevania.jpg", "title": "Castlevania (1986)", "desc": "Classic horror-themed platformer featuring vampire hunter Simon Belmont.", "url": "https://oldgameshelf.com/games/n64/castlevania-n64-8470"}, {"cat": "platform", "img": "alex_kidd.png", "title": "Alex Kidd in Miracle World (1986)", "desc": "Sega's original mascot platformer with rock-paper-scissors boss battles.", "url": "https://www.retrogames.cz/play_170-SegaMS.php"}, {"cat": "platform", "img": "aladdin.jpg", "title": "Disney's Aladdin (1993)", "desc": "Sega Genesis platformer with stunning animation and fast-paced gameplay.", "url": "https://oldgameshelf.com/games/sega-genesis/aladdin-sega-genesis-7568"}, {"cat": "fighting", "img": "sf2a.jpg", "title": "Street Fighter Alpha 2 (1996)", "desc": "Refined anime-style fighter with new characters and super combos.", "url": "https://oldgameshelf.com/games/snes/street-fighter-alpha-2-2602"}, {"cat": "fighting", "img": "mk2.png", "title": "Mortal Kombat II (1993)", "desc": "Bigger, bloodier sequel with more fatalities and characters.", "url": "https://arcadespot.com/game/mortal-kombat-2/"}, {"cat": "fighting", "img": "tk3.jpg", "title": "Tekken 3 (1997)", "desc": "3D fighter that perfected the series' gameplay mechanics.", "url": "https://www.miniplay.com/game/tekken-3"}, {"cat": "fighting", "img": "ki.png", "title": "Killer Instinct (1994)", "desc": "Combo-heavy fighter with digitized graphics and announcer.", "url": "https://www.retrogames.cz/play_875-SNES.php"}, {"cat": "fighting", "img": "ss2.png", "title": "Samurai Shodown II (1994)", "desc": "Weapon-based fighter with feudal Japan setting and rage meter.", "url": "https://www.retrogames.me/arcade/samurai-shodown-ii-shin-samurai-spirits-haohmaru-jigokuhen-ngm-063ngh-063.html"}, {"cat": "fighting", "img": "ffs.jpg", "title": "Fatal Fury Special (1993)", "desc": "SNK's answer to Street Fighter with plane-switching mechanic.", "url": "https://www.retrogames.me/arcade/fatal-fury-special-garou-densetsu-special-set-1ngm-058ngh-058.html"}, {"cat": "fighting", "img": "vf.png", "title": "Virtua Fighter 2 (1995)", "desc": "3D fighter with realistic martial arts and defensive gameplay.", "url": "https://www.retrogames.me/arcade/virtua-fighter.html"}, {"cat": "fighting", "img": "ds.jpg", "title": "Darkstalkers (1994)", "desc": "Gothic horror fighter with unique characters and animations.", "url": "https://www.retrogames.me/psx/darkstalkers-the-night-warriors.html"}, {"cat": "arcade", "img": "pboy.jpg", "title": "Paperboy (1985)", "desc": "Deliver newspapers through suburban chaos while dodging dogs, cars, and tornadoes.", "url": "https://www.free80sarcade.com/paperboy.php"}, {"cat": "arcade", "img": "t&f.jpg", "title": "Track & Field (1983)", "desc": "Compete in Olympic-style events with furious button-mashing speed.", "url": "https://www.retrogames.cz/play_247-NES.php"}, {"cat": "arcade", "img": "zaxxon.jpg", "title": "Zaxxon (1982)", "desc": "Fly your ship in isometric 3D and blast your way through enemy defenses.", "url": "https://www.free80sarcade.com/zaxxon.php"}, {"cat": "arcade", "img": "shunter.jpg", "title": "Spy Hunter (1983)", "desc": "Drive and destroy enemy cars using spy gadgets in this top-down classic.", "url": "https://www.retrogames.cz/play_581-NES.php"}, {"cat": "arcade", "img": "mpatrol.jpg", "title": "Moon Patrol (1982)", "desc": "Jump over craters and blast aliens while cruising the lunar surface.", "url": "https://www.lexaloffle.com/bbs/?pid=moonpatrol"}, {"cat": "platform", "img": "badven.jpg", "title": "Bonk's Adventure (1989)", "desc": "Prehistoric platforming with a caveman who headbutts everything.", "url": "https://arcadespot.com/game/bonks-adventure/"}, {"cat": "platform", "img": "aisland.png", "title": "Adventure Island (1986)", "desc": "Survive island perils in this fruit-powered platform adventure.", "url": "https://www.retrogames.cz/play_253-NES.php"}, {"cat": "platform", "img": "ristar.jpg", "title": "Ristar (1995)", "desc": "Stretch and swing through colorful worlds in this hidden Sega gem.", "url": "https://www.retrogames.cz/play_1205-Genesis.php"}, {"cat": "platform", "img": "jpond.jpg", "title": "James Pond 2: RoboCod (1991)", "desc": "A fishy secret agent with extendable armor saves Santa's workshop!", "url": "https://www.retrogames.cc/mastersystem-games/james-pond-2-codename-robocod-europe.html"}, {"cat": "platform", "img": "plok.png", "title": "Plok! (1993)", "desc": "Throw your limbs to fight enemies in this zany, colorful platformer.", "url": "https://www.retrogames.cz/play_1546-SNES.php"}, {"cat": "shooter", "img": "blazer.jpg", "title": "Blazing Lazers (1989)", "desc": "Over-the-top vertical shooter with screen-filling explosions.", "url": "https://www.retrogames.cc/turbografx16-games/blazing-lazers-usa.html"}, {"cat": "shooter", "img": "raiden.jpg", "title": "Raiden (1990)", "desc": "Classic arcade shooter with intense bullet dodging and power-ups.", "url": "https://gam.onl/arcade/raiden.html#raiden"}, {"cat": "shooter", "img": "superc.jpg", "title": "Super C (1990)", "desc": "Sequel to Contra, with even more alien-blasting action.", "url": "https://www.retrogames.cz/play_217-NES.php"}, {"cat": "shooter", "img": "ikari.jpg", "title": "Ikari Warriors (1986)", "desc": "Co-op military shooter where you blast enemies top-down with grenades.", "url": "https://www.retrogames.cz/play_371-NES.php"}, {"cat": "shooter", "img": "gsmoke.jpg", "title": "Gun.Smoke (1985)", "desc": "Western shoot-'em-up with vertical scrolling and bounty targets.", "url": "https://www.free80sarcade.com/gunsmoke.php"}, {"cat": "fighting", "img": "tekken.jpg", "title": "Tekken (1994)", "desc": "The first 3D fighter in the Tekken series with iconic characters and combos.", "url": "https://www.retrogames.cc/psx-games/tekken.html"}, {"cat": "fighting", "img": "tekken2.jpg", "title": "Tekken 2 (1995)", "desc": "Enhanced sequel with deeper fighting mechanics and more characters.", "url": "https://www.retrogames.cc/psx-games/tekken-2.html"}, {"cat": "fighting", "img": "sf1.jpg", "title": "Street Fighter (1987)", "desc": "The original entry that started the iconic fighting series.", "url": "https://www.retrogames.cc/arcade-games/street-fighter-us-set-1.html"}, {"cat": "fighting", "img": "mk3.jpg", "title": "Mortal Kombat III (1995)", "desc": "New characters, brutal combos, and faster gameplay.", "url": "https://www.retrogames.cc/genesis-games/mortal-kombat-3-usa.html"}, {"cat": "fighting", "img": "mshvsf.png", "title": "Marvel Super Heroes vs Street Fighter (1997)", "desc": "Tag-team chaos featuring your favorite Marvel and Capcom characters.", "url": "https://gam.onl/arcade/marvel-super-heroes-vs-street-fighter.html#game"}];
  const credits = [{"url": "https://crazygames.com", "name": "CrazyGames.com"}, {"url": "https://arcadespot.com", "name": "ArcadeSpot.com"}, {"url": "https://retrogames.cz", "name": "RetroGames.cz"}, {"url": "https://oldgameshelf.com", "name": "OldGameShelf.com"}, {"url": "https://classicgamesarcade.com", "name": "ClassicGamesArcade.com"}, {"url": "https://archive.org", "name": "Archive.org"}, {"url": "https://arkadium.com", "name": "Arkadium.com"}, {"url": "https://mspacman1.com", "name": "MsPacman1.com"}, {"url": "https://flashmuseum.org", "name": "FlashMuseum.org"}, {"url": "https://retrogames.cc", "name": "RetroGames.cc"}, {"url": "https://megadrive-emulator.com", "name": "MegaDrive-Emulator.com"}, {"url": "https://gam.onl", "name": "Gam.onl"}, {"url": "https://classicreload.com", "name": "ClassicReload.com"}, {"url": "https://freekong.org", "name": "FreeKong.org"}, {"url": "https://allsonicgames.net", "name": "AllSonicGames.net"}, {"url": "https://free80sarcade.com", "name": "Free80sArcade.com"}, {"url": "https://ponggame.org", "name": "PongGame.org"}, {"url": "https://online.oldgames.sk", "name": "Online.OldGames.sk"}, {"url": "https://miniplay.com", "name": "MiniPlay.com"}, {"url": "https://retrogames.me", "name": "RetroGames.me"}];

  // ---------- Reliable video autoplay/loop ----------
  // Autoplaying <video loop> elements sometimes stop and never resume:
  // the tab gets backgrounded, the OS pauses media to save power, or the
  // browser just drops the "loop" restart when the file finishes at an
  // awkward moment. Keep them honestly looping instead of hoping the
  // autoplay/loop attributes alone hold up.
  (function keepVideosLooping(){
    const videos = Array.from(document.querySelectorAll('video[autoplay]'));
    if(!videos.length) return;

    function tryPlay(v){
      const p = v.play();
      if(p && typeof p.catch === 'function') p.catch(() => {});
    }

    videos.forEach(v => {
      // Belt-and-braces restart in case "loop" doesn't fire cleanly.
      v.addEventListener('ended', () => {
        v.currentTime = 0;
        tryPlay(v);
      });
      // Some browsers pause a playing video right as metadata finishes
      // loading; nudge it once we know it's ready.
      v.addEventListener('loadedmetadata', () => tryPlay(v));
      tryPlay(v);
    });

    // Coming back to the tab/app is the main way playback gets stuck —
    // resume anything that silently paused while hidden.
    document.addEventListener('visibilitychange', () => {
      if(document.visibilityState === 'visible'){
        videos.forEach(v => { if(v.paused) tryPlay(v); });
      }
    });
    window.addEventListener('pageshow', () => {
      videos.forEach(v => { if(v.paused) tryPlay(v); });
    });
  })();

  // Force our own easing everywhere instead of the browser's smooth scroll.
  document.documentElement.style.scrollBehavior = 'auto';

  // ---------- Scroll lock during auto-play ----------
  // While a nav-triggered crossing or the "Start Game" playback is driving
  // the scroll position automatically, block manual wheel/touch/keyboard
  // scrolling so it can't fight or cut short the timed animation. Once
  // nothing is auto-playing, manual scrolling works completely normally —
  // that's the only way to scrub through the frames by hand.
  (function lockScrollDuringAutoPlay(){
    function isLocked(){
      return !!(window.__navScrolling || window.__sceneAutoPlaying);
    }
    window.addEventListener('wheel', (e) => {
      if(isLocked()) e.preventDefault();
    }, { passive: false });
    window.addEventListener('touchmove', (e) => {
      if(isLocked()) e.preventDefault();
    }, { passive: false });
    window.addEventListener('keydown', (e) => {
      if(isLocked() && ['ArrowDown','ArrowUp','PageDown','PageUp',' ','Home','End'].includes(e.key)){
        e.preventDefault();
      }
    }, { passive: false });
  })();

  const catLabels = { all:'All Games', arcade:'Arcade', platform:'Platform', shooter:'Shooter', fighting:'Fighting' };
  const catOrder = ['all','arcade','platform','shooter','fighting'];

  let activeCategory = 'all';

  const grid = document.getElementById('gameGrid');
  const filterBar = document.getElementById('filterBar');
  const resultCount = document.getElementById('resultCount');
  const creditsGrid = document.getElementById('creditsGrid');

  document.getElementById('gameCountHud').textContent = games.length;
  document.getElementById('year').textContent = new Date().getFullYear();

  // Build filter pills
  catOrder.forEach(cat => {
    const count = cat === 'all' ? games.length : games.filter(g => g.cat === cat).length;
    const btn = document.createElement('button');
    btn.className = 'pill' + (cat === 'all' ? ' active' : '');
    btn.dataset.cat = cat;
    btn.textContent = `${catLabels[cat]} (${count})`;
    btn.addEventListener('click', () => {
      activeCategory = cat;
      document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      renderGames();
    });
    filterBar.appendChild(btn);
  });

  function escapeHtml(str){
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function renderGames(){
    const filtered = games.filter(g => activeCategory === 'all' || g.cat === activeCategory);

    resultCount.innerHTML = `Showing <b>${filtered.length}</b> of <b>${games.length}</b> cartridges`;

    grid.innerHTML = '';
    if(filtered.length === 0){
      grid.innerHTML = '<div class="no-results">NO CARTRIDGE FOUND — TRY ANOTHER SEARCH</div>';
      return;
    }

    filtered.forEach((g, i) => {
      const card = document.createElement('div');
      card.className = 'game-card';
      card.style.animationDelay = `${Math.min(i,24) * 0.03}s`;
      card.innerHTML = `
        <div class="card-inner">
          <div class="card-face card-front">
            <img src="${g.img}" alt="${escapeHtml(g.title)}" loading="lazy">
            <span class="chip">${catLabels[g.cat]}</span>
            <div class="card-title-front">${escapeHtml(g.title)}</div>
          </div>
          <div class="card-face card-back">
            <span class="tag">${catLabels[g.cat]}</span>
            <h3>${escapeHtml(g.title)}</h3>
            <p>${escapeHtml(g.desc)}</p>
            <a class="play-btn" href="${g.url}" target="_blank" rel="noopener">Play Now</a>
          </div>
        </div>
      `;
      card.addEventListener('click', (e) => {
        if (window.matchMedia('(hover: none)').matches && e.target.tagName !== 'A') {
          card.classList.toggle('flipped');
        }
      });
      grid.appendChild(card);
    });
  }

  // Credits
  credits.forEach(c => {
    const a = document.createElement('a');
    a.className = 'credit-chip';
    a.href = c.url;
    a.target = '_blank';
    a.rel = 'noopener';
    a.innerHTML = `${escapeHtml(c.name)} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M7 7h10v10"/></svg>`;
    creditsGrid.appendChild(a);
  });

  renderGames();

  // Nav active state on scroll
  const sections = ['hero','games','about'].map(id => document.getElementById(id)).filter(Boolean);
  const navLinks = document.querySelectorAll('.nav-link');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        navLinks.forEach(l => l.classList.toggle('active', l.dataset.target === entry.target.id));
      }
    });
  }, { threshold: 0, rootMargin: '-45% 0px -45% 0px' });
  sections.forEach(s => io.observe(s));

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const revealIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        revealIo.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealIo.observe(el));

  // VHS clock
  function tick(){
    const now = new Date();
    const h = String(now.getHours()).padStart(2,'0');
    const m = String(now.getMinutes()).padStart(2,'0');
    const s = String(now.getSeconds()).padStart(2,'0');
    document.getElementById('recClock').textContent = `${h}:${m}:${s}`;
  }
  tick();
  setInterval(tick, 1000);

  // Navbar shrink on scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.style.padding = window.scrollY > 40 ? '10px clamp(18px,4vw,48px)' : '14px clamp(18px,4vw,48px)';
  });

  // ---------- Smart section navigation ----------
  // Nav/anchor clicks jump quickly through any part of the page that has no
  // frames to show, but the moment the path actually crosses the frame
  // sequence (.scene-wrap), that stretch is played at a fixed, constant
  // pace: 6s scrolling down through it, 3.3s scrolling back up, scaled down
  // proportionally if only part of it is crossed. While that automatic
  // scroll is running (nav-triggered or the "Start Game" playback) manual
  // scroll input is locked out — wheel/touch/arrow keys can't move the page
  // until the animation finishes. The frames can only be scrubbed by hand
  // when the user is scrolling on their own, outside of one of these
  // auto-play passes.
  (function initSmoothNav(){
    const FRAME_ZONE_DURATION_DOWN = 6000; // ms to cross the full frame sequence, scrolling down
    const FRAME_ZONE_DURATION_UP   = 3300; // ms to cross the full frame sequence, scrolling up
    const QUICK_PX_PER_MS = 3;        // speed for the non-frame filler jumps
    let navRaf = null;
    let navScrolling = false;

    function setNavScrolling(v){
      navScrolling = v;
      window.__navScrolling = v;
    }

    function easeInOutCubic(t){
      return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;
    }

    function cancelNavScroll(){
      if(navScrolling){
        setNavScrolling(false);
        if(navRaf) cancelAnimationFrame(navRaf);
        navRaf = null;
      }
    }

    // Returns the frame-sequence's scrollable range in document coordinates:
    // scrollY===zoneStart is frame 0, scrollY===zoneEnd is the last frame.
    function getFrameZone(){
      const wrap = document.querySelector('.scene-wrap');
      if(!wrap) return null;
      const zoneStart = wrap.getBoundingClientRect().top + window.pageYOffset;
      const total = wrap.offsetHeight - window.innerHeight;
      if(total <= 0) return null;
      return { start: zoneStart, end: zoneStart + total };
    }

    function runSegments(segments){
      setNavScrolling(true);
      let i = 0;

      function finish(){
        setNavScrolling(false);
        navRaf = null;
      }

      function startSegment(){
        if(!navScrolling) return;
        if(i >= segments.length){ finish(); return; }
        const seg = segments[i];
        const dist = seg.to - seg.from;
        if(Math.abs(dist) < 1 || seg.duration <= 0){ i++; startSegment(); return; }
        const startTime = performance.now();
        function step(now){
          if(!navScrolling) return;
          const t = Math.min(1, (now - startTime) / seg.duration);
          const eased = seg.linear ? t : easeInOutCubic(t);
          window.scrollTo(0, seg.from + dist * eased);
          if(t < 1){
            navRaf = requestAnimationFrame(step);
          } else {
            i++;
            startSegment();
          }
        }
        navRaf = requestAnimationFrame(step);
      }
      startSegment();
    }

    function smoothScrollTo(targetY){
      // Let a running "Start Game" auto-play yield to a nav click, and vice versa.
      if(window.__cancelSceneAutoPlay) window.__cancelSceneAutoPlay();
      cancelNavScroll();

      const startY = window.pageYOffset;
      if(Math.abs(targetY - startY) < 1) return;

      const zone = getFrameZone();
      const lo = Math.min(startY, targetY);
      const hi = Math.max(startY, targetY);
      const overlapStart = zone ? Math.max(lo, zone.start) : lo;
      const overlapEnd = zone ? Math.min(hi, zone.end) : lo;
      const crossesFrames = zone && overlapEnd > overlapStart;

      if(!crossesFrames){
        // No frames on this path — one quick eased jump straight there.
        const dur = Math.min(900, Math.max(280, Math.abs(targetY - startY) / QUICK_PX_PER_MS));
        runSegments([{ from: startY, to: targetY, duration: dur }]);
        return;
      }

      const goingDown = targetY > startY;
      const zoneFrac = (overlapEnd - overlapStart) / (zone.end - zone.start);
      const zoneDuration = (goingDown ? FRAME_ZONE_DURATION_DOWN : FRAME_ZONE_DURATION_UP) * zoneFrac;
      const segments = [];

      if(goingDown){
        if(startY < overlapStart){
          segments.push({ from: startY, to: overlapStart, duration: Math.min(900, Math.max(280, (overlapStart - startY) / QUICK_PX_PER_MS)) });
        }
        segments.push({ from: Math.max(startY, overlapStart), to: Math.min(targetY, overlapEnd), duration: zoneDuration, linear: true });
        if(targetY > overlapEnd){
          segments.push({ from: overlapEnd, to: targetY, duration: Math.min(900, Math.max(280, (targetY - overlapEnd) / QUICK_PX_PER_MS)) });
        }
      } else {
        if(startY > overlapEnd){
          segments.push({ from: startY, to: overlapEnd, duration: Math.min(900, Math.max(280, (startY - overlapEnd) / QUICK_PX_PER_MS)) });
        }
        segments.push({ from: Math.min(startY, overlapEnd), to: Math.max(targetY, overlapStart), duration: zoneDuration, linear: true });
        if(targetY < overlapStart){
          segments.push({ from: overlapStart, to: targetY, duration: Math.min(900, Math.max(280, (overlapStart - targetY) / QUICK_PX_PER_MS)) });
        }
      }

      runSegments(segments);
    }

    // Manual scroll/keyboard input is locked out while an automatic nav
    // scroll is running (see the global lock listeners below) — it no
    // longer cancels the animation.

    document.querySelectorAll('a[href^="#"]').forEach(link => {
      if(link.id === 'btnStartGame') return; // handled separately, frame-tied
      const id = link.getAttribute('href').slice(1);
      link.addEventListener('click', (e) => {
        const target = document.getElementById(id);
        if(!target) return;
        e.preventDefault();
        // Sections use scroll-margin-top:80px to clear the fixed navbar on
        // native jumps; replicate that offset here since we scroll manually.
        const targetY = id === 'hero'
          ? 0
          : (target.getBoundingClientRect().top + window.pageYOffset - 80);
        smoothScrollTo(targetY);
      });
    });

    // Exposed so the scene sequence's own auto-play can cancel us too.
    window.__cancelNavScroll = cancelNavScroll;
  })();

  // ---------- 3D Scroll-Scrubbed Frame Sequence ----------
  // Drop your sequential render images into a folder named "frames" next
  // to index.html (e.g. frames/0001.jpg, frames/0002.jpg, ... frames/0120.jpg)
  // and adjust the five settings below to match your files.
  (function initSceneSequence(){
    const FRAME_FOLDER = 'frames/';
    const FRAME_PREFIX = 'ezgif-frame-';
    const FRAME_COUNT  = 180;
    const FRAME_PAD    = 3;
    const FRAME_EXT    = 'jpg';

    const wrap = document.querySelector('.scene-wrap');
    const canvas = document.getElementById('sceneCanvas');
    if(!wrap || !canvas) return;

    const ctx = canvas.getContext('2d');
    const caption = document.getElementById('sceneCaption');
    const progressBar = document.getElementById('sceneProgressBar');
    const loading = document.getElementById('sceneLoading');
    const btnStartGame = document.getElementById('btnStartGame');
    const sideStatus = document.getElementById('sceneSideStatus');
    const sideStatusText = document.getElementById('sceneSideText');

    function frameSrc(i){
      return `${FRAME_FOLDER}${FRAME_PREFIX}${String(i).padStart(FRAME_PAD,'0')}.${FRAME_EXT}`;
    }

    const images = new Array(FRAME_COUNT);
    let loadedCount = 0;
    let currentFrame = -1;
    let targetProgress = 0;
    let currentProgress = 0;
    let autoPlayRaf = null;
    let isAutoPlaying = false;
    let lastScrollY = window.pageYOffset;
    let scrollDir = null; // 'down' | 'up' | null

    // Get loaded image or nearest available frame to prevent flickering
    function getLoadedImage(index){
      const safeIdx = Math.max(0, Math.min(FRAME_COUNT - 1, index));
      if(images[safeIdx] && images[safeIdx].complete && images[safeIdx].naturalWidth > 0){
        return images[safeIdx];
      }
      for(let d = 1; d < FRAME_COUNT; d++){
        const p = safeIdx - d;
        if(p >= 0 && images[p] && images[p].complete && images[p].naturalWidth > 0) return images[p];
        const n = safeIdx + d;
        if(n < FRAME_COUNT && images[n] && images[n].complete && images[n].naturalWidth > 0) return images[n];
      }
      return null;
    }

    function drawFrame(index){
      const img = getLoadedImage(index);
      if(!img) return;
      const cw = canvas.width, ch = canvas.height;
      ctx.clearRect(0, 0, cw, ch);
      const ir = img.naturalWidth / img.naturalHeight;
      const cr = cw / ch;
      let dw, dh, dx, dy;
      if(ir > cr){ dh = ch; dw = ch * ir; dx = (cw - dw) / 2; dy = 0; }
      else { dw = cw; dh = cw / ir; dx = 0; dy = (ch - dh) / 2; }
      ctx.drawImage(img, dx, dy, dw, dh);
    }

    function resizeCanvas(){
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(canvas.clientWidth * dpr);
      canvas.height = Math.round(canvas.clientHeight * dpr);
      drawFrame(currentFrame < 0 ? 0 : currentFrame);
    }

    function preload(){
      for(let i = 1; i <= FRAME_COUNT; i++){
        const img = new Image();
        img.src = frameSrc(i);
        img.onload = () => {
          loadedCount++;
          if(i === 1){ currentFrame = 0; drawFrame(0); }
          if(loadedCount >= 10 && loading){
            loading.classList.add('done');
          }
        };
        img.onerror = () => {
          loadedCount++;
          if(loadedCount >= 10 && loading){
            loading.classList.add('done');
          }
        };
        images[i - 1] = img;
      }
    }

    // Top-left text only shows while scrolling down, and disappears once frame reaches 74
    function updateCaptions(frame){
      if(!caption) return;
      if(scrollDir === 'up'){
        // Scrolling back up toward the top — keep it out of the way entirely
        caption.style.opacity = '0';
        caption.style.transform = 'translateY(-18px)';
        caption.style.pointerEvents = 'none';
        return;
      }
      if(frame >= 74){
        // Completely disappeared once 74 frame is reached
        caption.style.opacity = '0';
        caption.style.transform = 'translateY(-18px)';
        caption.style.pointerEvents = 'none';
      } else if(frame >= 48){
        // Smoothly fades out leading up to frame 74
        const fade = Math.max(0, (74 - frame) / 26);
        caption.style.opacity = fade.toFixed(3);
        caption.style.transform = `translateY(${-((1 - fade) * 16).toFixed(1)}px)`;
        caption.style.pointerEvents = fade > 0.05 ? 'auto' : 'none';
      } else {
        caption.style.opacity = '1';
        caption.style.transform = 'translateY(0)';
        caption.style.pointerEvents = 'auto';
      }
    }

    // Vertical HUD readout on the side: shows POWERING UP while scrolling
    // down through the sequence, and flips to POWERING DOWN while scrolling
    // back up toward the top — hidden entirely outside the scene.
    function updateSideStatus(){
      if(!sideStatus) return;
      const inScene = targetProgress > 0.001 && targetProgress < 0.999;
      if(!inScene){
        sideStatus.classList.remove('visible');
        return;
      }
      sideStatus.classList.add('visible');
      if(scrollDir === 'up'){
        sideStatus.classList.add('powering-down');
        if(sideStatusText) sideStatusText.textContent = 'POWERING DOWN';
      } else {
        sideStatus.classList.remove('powering-down');
        if(sideStatusText) sideStatusText.textContent = 'POWERING UP';
      }
    }

    function updateScrollTarget(){
      const scrollY = window.pageYOffset;
      if(scrollY > lastScrollY + 0.5) scrollDir = 'down';
      else if(scrollY < lastScrollY - 0.5) scrollDir = 'up';
      lastScrollY = scrollY;

      const rect = wrap.getBoundingClientRect();
      const total = wrap.offsetHeight - window.innerHeight;
      if(total > 0){
        const scrolled = -rect.top;
        targetProgress = Math.max(0, Math.min(1, scrolled / total));
      } else {
        targetProgress = 0;
      }

      updateSideStatus();
    }

    // 3D Website Smooth Lerp Loop (Fluid physics)
    function animLoop(){
      const diff = targetProgress - currentProgress;
      if(Math.abs(diff) > 0.0001){
        currentProgress += diff * 0.14; // Silky responsive lerp
      } else {
        currentProgress = targetProgress;
      }

      const index = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(currentProgress * (FRAME_COUNT - 1))));
      if(index !== currentFrame){
        currentFrame = index;
        drawFrame(currentFrame);
      }

      updateCaptions(index);

      if(progressBar){
        progressBar.style.width = `${(currentProgress * 100).toFixed(2)}%`;
      }

      requestAnimationFrame(animLoop);
    }

    // Cancel auto-scroll if a click/nav navigation interrupts it
    function setAutoPlaying(v){
      isAutoPlaying = v;
      window.__sceneAutoPlaying = v;
    }
    function cancelAutoPlay(){
      if(isAutoPlaying){
        setAutoPlaying(false);
        if(autoPlayRaf) cancelAnimationFrame(autoPlayRaf);
        autoPlayRaf = null;
      }
    }
    window.__cancelSceneAutoPlay = cancelAutoPlay;

    // Smoothly play the 180-frame animation across ~6 seconds, then continue
    // straight on into the Games section instead of parking on the last frame.
    function playSceneVideo(durationMs = 6000){
      if(window.__cancelNavScroll) window.__cancelNavScroll();
      cancelAutoPlay();

      const sceneStart = wrap.getBoundingClientRect().top + window.pageYOffset;
      const trackDistance = wrap.offsetHeight - window.innerHeight;

      // Scroll smoothly to start of the scene
      window.scrollTo({ top: sceneStart, behavior: 'smooth' });

      // Begin continuous video scroll
      setTimeout(() => {
        setAutoPlaying(true);
        const startTime = performance.now();

        function step(now){
          if(!isAutoPlaying) return;
          const elapsed = now - startTime;
          const t = Math.min(1, elapsed / durationMs);

          // Linear progression matching video playback speed
          const currentY = sceneStart + (t * trackDistance);
          window.scrollTo(0, currentY);

          if(t < 1){
            autoPlayRaf = requestAnimationFrame(step);
          } else {
            continueIntoGames(sceneStart + trackDistance);
          }
        }

        autoPlayRaf = requestAnimationFrame(step);
      }, 400);

      // After the frame sequence finishes, keep going (quickly) so the user
      // actually lands in the Games section rather than stopping mid-scene.
      function continueIntoGames(finishY){
        const gamesEl = document.getElementById('games');
        if(!gamesEl){
          setAutoPlaying(false);
          autoPlayRaf = null;
          return;
        }
        const targetY = gamesEl.getBoundingClientRect().top + window.pageYOffset - 80;
        const dist = targetY - finishY;
        if(Math.abs(dist) < 1){
          setAutoPlaying(false);
          autoPlayRaf = null;
          return;
        }
        const dur = Math.min(900, Math.max(280, Math.abs(dist) / 3));
        const startTime = performance.now();
        function step(now){
          if(!isAutoPlaying) return;
          const t = Math.min(1, (now - startTime) / dur);
          const eased = t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;
          window.scrollTo(0, finishY + dist * eased);
          if(t < 1){
            autoPlayRaf = requestAnimationFrame(step);
          } else {
            setAutoPlaying(false);
            autoPlayRaf = null;
          }
        }
        autoPlayRaf = requestAnimationFrame(step);
      }
    }

    if(btnStartGame){
      btnStartGame.addEventListener('click', (e) => {
        e.preventDefault();
        playSceneVideo(6000);
      });
    }

    // Manual scroll/keyboard input is locked out while this auto-play is
    // running (see the global lock listeners below) instead of cancelling it.

    window.addEventListener('scroll', updateScrollTarget, { passive: true });
    window.addEventListener('resize', resizeCanvas);

    preload();
    resizeCanvas();
    updateScrollTarget();
    requestAnimationFrame(animLoop);
  })();
