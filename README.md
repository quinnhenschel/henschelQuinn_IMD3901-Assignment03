# Assignment 3

For this assignment I decided to create a maze game, where one user in an a-frame scene and the other is playing on a regular html document with a topdown version of the maze in an svg graphic. The player in the 3D maze will request that the second player open doors for them and direct them through the maze. The second player may also block the first from exiting the maze at the end if they do not finish within the alloted time limit (40 seconds).

The most challenging aspect of this assignment for me was syncing the position of the player in the A-frame scene to an svg x,y coordinate system in 2D. In the end I was able to overcome this through normalizing the X and Z values from the a-frame player within the width/height 
parameters of my svg. 

This allowed everything to scale uniformly. Another challenge I faced was lighting. I could not seem to get it right. I decided to try out the physically based rendering system and use some roughness along with normal maps to create a realistic look in my scene with the minimap lighting tools available.

Github URL: https://github.com/quinnhenschel/henschelQuinn_IMD3901-Assignment03
