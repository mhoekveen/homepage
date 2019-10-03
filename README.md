# My personal homepage

A simple webpage that displays links to all my hosted services and displays the status of some other services. Still in a definite WIP/Proof of concept stage.

Uses only vanilla JS and should work in most modern browsers and mobile devices. Uses netdata to determine service status.

## Compilation
Uses SASS syntax to dynamically get the colors from my desktop (uses wal). 

It expects four background images of the same size (but different quality); high.jpg, med.jpg, low.jpg and shit.jpg.
It passes these to a responsive image tag based on viewport dimensions and screen dpi. These images could for example be generated using imagemagick:
```convert $file -quality 100 high.jpg
convert $file -quality 50 med.jpg
convert $file -quality 25 low.jpg
convert $file -blur 0x8 -quality 20 shit.jpg
```
