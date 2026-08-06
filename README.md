# Hyprproxy

A proxy site that looks similar to Hyprland

Please join the Discord server: [https://discord.gg/5MkFhwnYqx](https://discord.gg/5MkFhwnYqx)

If you want to add something then please contribute and open a pull request, but **it must not be CSS-only commits and there shouldn't be AI.**

## An extended description

hyprproxy is a hyprland-inspired proxy site that has multitasking and can transform into a vertical-tabbed browser

no ai was used

to get started, open a window/tab using `ALT` + `T` or the `Add Window` button
you can open as many windows/tabs as you want
the window also appears at the bottom taskbar. click on the icon to minimize/maximize the window
close the window using `ALT` + `W` or the `Close` button
the buttons on the top bar + the omnibox correspond to the active window (the window highlighted green)

want to have a vertical tabbed browser experience? click on the `Switch Browser View` to... switch your browser view to have vertical tabs
the bottom bar transforms the vertical tabs section, and only one tab can be viewed at a time

the settings menu doesn't work

there are no built-in apps/shortcuts/bookmarks
there are no built-in games

## Hosting it locally

You need git, npm, and node installed

Run:

```bash
git clone https://github.com/havi11368/hyprproxy
cd hyprproxy
npm i
npm start
```

## Stuff you can do with it

* You can use `addWindowTab(url)` to inject a window/tab with a specified url as a string
* On `src/index.html`, you can change the default view of hyprproxy by changing the body's `browserView` attribute:
`<body browserView="1">` = multitasking view, `<body browserView="2">` = vertical tabs view
* Add `?q=url` (replace url with your specified url) to auto-open window/tab with a specified url right when it loads

## Hotkeys

* `ALT` + `T` = Open a new window/tab
* `ALT` + `W` = Close the active window/tab
* `ALT` + `Z` = Switch the browser view
