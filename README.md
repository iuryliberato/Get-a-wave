# General Assembly

Get’a Wave is a game based on the game Frogger. You must travel from home to the beach without hitting the obstacles, drowning in the river or getting hit by the cleaguels. Once the first surfer arrives on the beach, the second is able to start. After each round the game runs faster until all of the 3 surfers arrive on the beach.

## Game’s Link

[Get’a Wave]([https://iuryliberato.github.io/project-1/](https://iuryliberato.github.io/Get-a-wave/))

## Overview and Concept

I had one week to build a grid-based game using JavaScript, HTML and CSS. My own version of frogger has three different characters, who must navigate the course using the keyboard arrow buttons while avoiding obstacles. The game increases in difficulty after each round.

## Technologies used

### HTML

- Header with logo.
- Grid with Cells including 8 rows and 11 columns in a total of 88 cells.
- Intro, game over and Win overlays with 'start' buttons.
- Audio element for my background music and sounds effects.
- Favicon to display in the browser tab.

### CSS

- Grid using flex-box.
- CSS transitions for the overlay.
- CSS Animation for active character, start and restart buttons and "you win" text.
- `position: fixed` the overlay with a transparent background.

### **JavaScript**

- keyUp event to move the characters.
- `setInterval` to move obstacles.
- Play and pause sounds.
- Hide and show overlays.
- Click events to start the game.

## The approach taken:

Day 1 - As this was my first project, I didn’t have much planned, I knew what I wanted, but I didn’t know yet how to plan or design a wireframe.

I decided to start from searching for surfer's images, sound effects, background images, videos and Gifs for the game-over and win pop-ups.

Day 2 - I built the grid using flex-box and added the first surfer to the grid, a starting position, and keyUp function to move the surfer around.

![carbon (2)](https://user-images.githubusercontent.com/86430160/143264529-33abf726-3201-47fb-8ba1-a12d53cbfd76.png)

Day 3 - I added the obstacles and made them move at one specific speed using `setInterval`. I added the other non-moving obstacles where it was blocked for the surfer to enter and also the water obstacle where the surfer would drown and the game would be over.

Day 4 - I added the sound effects for when the surfer moves, when the game is over caused by car traffic, seagulls or water, and gifs for game over and win. On the same day, I started building the pop-up pages for when you land on the page, when you get a game over and when you win.

![carbon (3)](https://user-images.githubusercontent.com/86430160/143264806-76ded6c0-e579-452a-a401-755c407f7ea8.png)

Day 5 - I finished building the pop-up pages and decided to add another two surfers to get the game going for longer and implemented faster speed after each round.

### When load the page:

- Initially there is a start overlay with some instructions and the start button.

<img width="1572" alt="getAWave" src="https://user-images.githubusercontent.com/86430160/143265057-83f9abd9-745c-4e9e-a8b3-d83822ce0df1.png">

### When the game starts:

![Screenshot 2021-10-10 at 14 22 21](https://user-images.githubusercontent.com/86430160/143265112-6073b9c5-7708-42a2-860d-07263565df7a.png)

- The background music starts to play.
- The first surfer gets activated.
- The obstacles start running at a slow speed.
- Counter starts to be incremented which is used to control the movements of the obstacles, the faster you increment the counter, the faster the obstacles move.
- As the obstacles move, they compare with the character position to check if they have been hit.

### When the character moves:

- The keyUp event is used to move the character up, down, left and right.
- It checks which direction the characters are going and doesn't let them go out of the grid.
- With `class="no-entry"` checks if the character is allowed to move into the new position, if not then the character does not move.
- Checks if the new position is an obstacle like water, car, truck or seagull, and if it is, then makes it Game Over.
- Once the character arrives in the first row, the character is safe and the next character gets activated.
- The traffic speeds up after each round by changing the interval time in the set interval function.
- Once all of the characters arrive on the beach (first row) is a win.
- When the user loses, a Game Over screen is displayed or if it is a win, a win screen is played.

  ![Screenshot 2021-11-22 at 14 23 11](https://user-images.githubusercontent.com/86430160/143265403-a327f986-5583-41e6-b609-a737c15ae787.png)

![Screenshot 2021-11-22 at 14 23 24](https://user-images.githubusercontent.com/86430160/143265429-3420f7b3-a018-4064-828b-ca0874123212.png)

- The last step was designing a logo to display nicely.

![logo](https://user-images.githubusercontent.com/86430160/143265551-2a4eac13-d63d-4349-af13-c358b4306c13.png)

## Key learnings:

- Learned how to use Flex-box.
- Learned how to use CSS animation.
- Learned how to create a pop-up using JavaScript, HTML and CSS.
- Learned how to use play() and pause() functions to control the audio.

## Challenges:

- Disabling the other two surfers while the first one was active.
- Getting the right sound effect to stop playing after 4 seconds when winning or game over.
- Making the obstacles move at a higher speed after each round.

## Future improvements:

- Create a pop-up after each of the surfers arrives on the beach, so the payer knows to move their attention to the next surfer.

## Bugs:

- There aren’t any obvious bugs, but it would be nice to rewrite using React to see the difference between codes.
