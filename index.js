let initialWindows;
let initialWindowPositions;

exports.decorateConfig = (config) => {

  initialWindows          = config.initialWindows || 0;
  initialWindowPositions  = config.initialWindowsPosition || [];

  return config;

}

exports.onApp = (app) => {

  if ( initialWindows > 1 ) {

    for (let i = 1; i < initialWindows; i++) {

      app.createWindow(function(win){

        win.setTitle(win.getTitle() + ' ' + (i+1));

        let currentPosition = win.getPosition();

        if ( initialWindowPositions[i] ) {

          currentPosition[0] = initialWindowPositions[i].x;
          currentPosition[1] = initialWindowPositions[i].y;

        } else {

          currentPosition[0] = currentPosition[0] + (34 * i);
          currentPosition[1] = currentPosition[1] + (34 * i);

        }

        win.setPosition( currentPosition[0], currentPosition[1] );
        win.setSize( initialWindowPositions[i].width, initialWindowPositions[i].height );

      });

    };

  }

}

exports.onWindow = (win) => {

  if ( initialWindowPositions ) {

    // XXX: Yep, identifying the first window using the title sucks
    if ( win.getTitle() === 'HyperTerm' && initialWindowPositions[0] ) {

      win.setPosition( initialWindowPositions[0].x,  initialWindowPositions[0].y );

      win.setSize( initialWindowPositions[0].width, initialWindowPositions[0].height );

    }

  }

}
