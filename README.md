# `hyperterm-initial-windows`

Adds support to open a predefined number of windows with a predefined position and size on init.

![](https://raw.githubusercontent.com/wiki/pekastel/hyperterm-initial-windows/hyperterm-initial-windows.gif)

# usage

- Open `~/.hyperterm.js`
- Add `hyperterm-initial-windows` to the list of `plugins`
- Change `config.initialWindows` to the desired number of windows to open on init, by default opens just one.
- Set `config.initialWindowsPosition` to specify the position and size for each of the windows to create on init.

# sample options

```
  config: {
    ...
    initialWindows: '3', 

    initialWindowsPosition: [
      {x: 0, y: 0, width: 800, height: 500},
      {x: 0, y: 550, width: 900, height: 400},
      {x: 800, y: 0, width: 700, height: 500}
    ],
    ...
  }
```

NOTE: Remember to place the options under `config` section.

# license

mit
