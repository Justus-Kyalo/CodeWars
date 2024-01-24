// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).

function bouncingBall(h, bounce, window) {
  // Initialize the views variable
let views = 0;

  // Check if the height is positive and greater than the window, and if the bounced height is greater than or equal to the window
if (h > 0 && h > window && bounce * h >= window) {
    // Increment the views by 1  for the initial downward fall
views += 1;

    // If the bounce is 1, set the views to -1 to prevent an infinite loop
if (bounce === 1) {
      views = -1;
    } else {
      // Otherwise, multiply the height by the bounce and increment views by 2 (because its up and down) while the bounced height is greater than the window
while (bounce * h > window) {
        h = bounce * h;
        views += 2;
      }
    }

    // Return the views
return views;
  } else {
    // Otherwise, set views to -1 and return it
views = -1;
    return views;
  }
}
