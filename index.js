
exports.onApp = (app) => {

  let cfg = app.plugins.getDecoratedConfig();

  if ( cfg.initialWindows > 1 ) {

    for (let i = 1; i < cfg.initialWindows; i++) {

      app.createWindow(function(win){

        win.setTitle(win.getTitle() + ' ' + (i+1));

        let currentPosition = win.getPosition();

        currentPosition[0] = currentPosition[0] + (34 * i);
        currentPosition[1] = currentPosition[1] + (34 * i);

        win.setPosition(currentPosition[0], currentPosition[1]);

      });

    };

  }

}
