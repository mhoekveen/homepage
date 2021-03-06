#!/bin/sh
# Uses imagemagick to convert a wallpaper to various formats
cd "${0%/*}"
file="$HOME/.cache/wallpaper"
[ ! -z "$1"] && file=$1
convert $file img/bg/high.jpg
convert $file -quality 50 img/bg/med.jpg
convert $file -quality 25 img/bg/low.jpg
convert $file -blur 0x8 -resize 25% -quality 10 img/bg/shit.jpg
