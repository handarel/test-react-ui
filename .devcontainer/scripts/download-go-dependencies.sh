#!/bin/bash

# Directory to start the search
search_dir="projects"

# Function to handle found go.mod files
download_go_dependencies() {
    local mod_dir
    mod_dir=$(dirname "$1")
    echo "Found go.mod in $mod_dir"
    cd "$mod_dir" || exit
    go mod download
    cd - > /dev/null || exit
}

# Export the function so it's available to the subprocess
export -f download_go_dependencies

# Check if no go.mod files were found
if find "$search_dir" -maxdepth 5 -type f -name go.mod -exec bash -c 'download_go_dependencies "$0"' {} \; | grep . ; then
    echo "########"
    echo "Downloaded Go dependencies."
    echo "########"
else
    echo "########"
    echo "No Go project was found."
    echo "########"
fi
