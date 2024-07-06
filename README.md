# Pyramummy
My 31KB large entry for [GSGC2018](https://gynvael.coldwind.pl/?lang=en&id=686)

I made it to [second place](https://gynvael.coldwind.pl/?lang=en&id=687) out of 22

My entry for [GSGC2018](https://gynvael.coldwind.pl/?lang=en&id=686)

It can be played on itch: https://vassildador.itch.io/pyramummy

Introduction
----------------

After peacefully enjoying your eternal slumber for thousands of years, archeologists have stumbled upon your burial tomb.
You decide it is high time for you to leave, before these modern humans can rob you of your freedom and humiliate you by putting you on display in a museum.

Goal
------
Escape the pyramid through the secret exit at the top floor before the archeologists arrive to capture you.
By collecting the secret relics lingering around the pyramid you should be able to overcome any traps or ancient puzzles you encounter.

UI
----
The top-right corner contains a minimap. Grey rooms are unvisited, blue is the current room, yellow means visited.
Underneath the minimap is a progress bar showing you the archeologist's progress. You lose when it is empty.

Controls
------------
Move: S/D or left/right arrow keys.
Jump: Z, W or up arrow key.
R: Reset current room. Useful when fully locking up rooms
???: left click. Requires power-up.
???: right click, aim for 2 separate blocks. Space to reset. Requires power-up.
???: shift. Requires power-up.

Limitations
----------------

- Max 31337 bytes
- 360x400 pixels stretched to the whole screen (tested on 1920x1080)
- Max 32 colors per frame

Known bugs
----------------
- Collision separation is quite poor:
    - hitting any wall horizontally will stop your vertical momentum and "eat" your jump
    - landing often aligns your X position with a tile.
    - my sincerest apologies for all the unfair deaths due to slipping off of a block above a spike pit. I could not fix this within the given timeframe.
- The title screen is only clickable after a few seconds (unresponsive while music is generating)
- Very rarely the background layer does not show up. Refresh to fix.
- Very rarely linked block movement is not consistent. Reset the link (space) or reset the room (R) to fix.
- You can probably find some ways to sequence-break or really break the game by using its unique mechanic :)

Special thanks
-------------------
rpp0 (https://github.com/rpp0) for lending his musical talent!
My wife for creating the victory screen and being very supportive and patient
Gynvael for organising a game jam / dev challenge that I can actually participate in, being a father. We need more longer game jams! :)
