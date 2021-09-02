# project-1

## Technologies used
### HTML 
- Header with logo
- Grid with Cells including 8 rows and 11 columns in a total of 88 cells.
- Intro, game over and Win overlays with 'start' buttons.
- Audio elemnet for my background music and sounds effects.
- Favicon to display in the browser tab.

### CSS
- Grid using flex-box.
- CSS transitions for the overlay
- CSS Animation for active character, start and restart buttons and "you win" text.
- `position: fixed` the overlay with transparent background.

### JavaScript
- keyUp event to move the characters.
- `setInterval` to move obstacles.
- Play and pause sounds.
- Hide and show overlays.
- Click events to start the game

## The approach taken:
### When load the page:
- Initially there is a start overlay with some instructions and the start button.

### When the game starts:
- Start playing background music
- Set the first character to be active and it gets an active animation.
- The obstacles start running in a slow speed
- Counter starts to be incremented which is used to control the movements of the obstacles, the faster you increment the counter, faster the obstacles move.
- As the obstacles move, they compare with the character position to check if they have been hit.

### When the character moves:
- The keyUp event is used to move the character up, down, left and right.
- It checks which direction the characters are going and don't let them go out of the grid.
- With `class="no-entry"` checks if the character is allowed to move into the new position, if not then the character does not move.
- Checks if the new position is an obstacle like water, car, truck or seagull, and if is, then makes it Game Over.
- Once the character arrives in the first row, the character is safe and the next character gets activated. 
- The traffic speeds up after each round by changing the interval time in the set interval function.
- Once all of the characters arrive on the beach(first row) is a win.
- When the user lose, a Game Over screen is displayed or if is a win, a win screen is played.

## Installation instructions:
- Click in the following link from your computer.


## Wins:
- Flex-box feels easy now.
- I understand CSS animation a bit more.
