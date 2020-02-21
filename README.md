From The Odin Project's [curriculum](http://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project)

In this project I created a sketchpad/etch-a-sketch type app to practice my html, css, and javascript.

The project has been completed as per the listed requirements.

The RGBtoHSL javascript file is currently unused. I wanted to preserve "good" (read: working) code that I had written while working in a bad direction. For the optional color changing requirement, I first thought it would be easier to use HSL colors, because I would then only have to deal with one parameter to transition toward black.  After writing the working RGB to HSL converter, I realized it was completely unnecessary and over-cluttered my code.

Potential future follow ups:
* I would like to clean up a few of the arrow functions to make my code more readable.
* I would like to make my RGBtoHSL converter usable in the project since I went through the trouble of making it.
* ~~I would like to set some positioning logic for the button to prevent it from covering the draw area when the screen width is shorter than the height (a la mobile phones).~~ Implemented by moving the sketch area based on screen dimensions.
* I may come back and play with the colors some more, possibly allow color/palette picking.
* I may also look into adding some click functionality. Perhaps left click to draw, right click to erase.
