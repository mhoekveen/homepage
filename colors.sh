#!/bin/sh
# Sets wallpaper colors by using pywal
cd "${0%/*}"
file="$HOME/.cache/wallpaper"
[ ! -z "$1"] && file=$1
wal -c
wal -i $file
cp "$HOME/.cache/wal/colors.scss" "css/_colors.scss"
sassc css/style.scss > css/style.css