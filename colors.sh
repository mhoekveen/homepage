#!/bin/sh
# Sets wallpaper colors by using pywal
file="$HOME/.cache/wallpaper"
[ ! -z "$1"] && file=$1
wal -c
wal -i $file
cp "$HOME/.cache/wal/colors.scss" "css/_colors.scss"
sassc css/_style.scss css/style.css