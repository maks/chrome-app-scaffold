/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.window.html
 */
 chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
  	id: "scaffoldID",
    innerBounds: {
      height: 240,
      width: 320,
      top: 100
    }
  });
});
