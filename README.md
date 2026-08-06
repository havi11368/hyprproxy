# Hyprproxy

A proxy site that looks similar to Hyprland

Please join the Discord server: [https://discord.gg/5MkFhwnYqx](https://discord.gg/5MkFhwnYqx)

If you want to add something then please contribute and open a pull request, but **it must not be CSS-only commits and there shouldn't be AI.**

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

## Hotkeys

* `ALT` + `T` = Open a new window/tab
* `ALT` + `W` = Close the active window/tab
