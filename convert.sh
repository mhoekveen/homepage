#!/bin/sh
# Uses imagemagick to convert a wallpaper to various formats
file="$HOME/.cache/wallpaper"
[ ! -z "$1"] && file=$1
convert $file img/bg/high.jpg
convert $file -quality 50 img/bg/med.jpg
convert $file -quality 25 img/bg/low.jpg
convert $file -blur 0x8 -quality 20 img/bg/shit.jpg
