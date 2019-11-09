# My personal homepage

A simple webpage that displays links to all my hosted services and displays the status of some other services. Still in a definite WIP/Proof of concept stage.

Uses only vanilla JS and should work in most modern browsers and mobile devices. Uses [netdata](https://github.com/netdata/netdata) to determine service status.

Uses [pywal](https://github.com/dylanaraps/pywal) and [Sass](https://sass-lang.com/) and some local shell scripting to synchronize my desktop wallpaper and theme to the website.

I use a simple script to retrieve a random wallpaper from [Unsplash](https://unsplash.com/) every now and then, and automatically update this website.

## Compilation
Uses SASS syntax to dynamically get the colors from my desktop. Compiling the style-sheet can be done with any implementation of Sass, for example with sassc:
```
sassc style.scss > style.css
```

You can use the images and color scheme included in this repo as an example.

It expects four background images of the same size (but different quality); high.jpg, med.jpg, low.jpg and shit.jpg.
It passes these to a responsive image tag based on viewport dimensions and screen dpi. These images can be generated with the included `convert.sh` shell script.