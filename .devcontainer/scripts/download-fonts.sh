#!/bin/bash

npm install -g google-font-installer

gfi download Source Sans 3 -d ./docs/fonts
gfi download JetBrains Mono -d ./docs/fonts
gfi download Fira Sans -d ./docs/fonts
gfi download Fira Mono -d ./docs/fonts

# git clone https://github.com/githubnext/monaspace.git /home/vscode/monaspace --depth=1
# cp /home/vscode/monaspace/fonts/otf/* ./docs/fonts
# rm -rf /home/vscode/monaspace
