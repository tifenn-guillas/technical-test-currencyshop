#!/bin/bash
set -e

install() {
    cd my-project
    rm node_modules/ -Rf
    gosu docker yarn
}

init() {
    gosu ng new my-project
}

run() {
    cd my-project
    #ng serve --host 0.0.0.0
    nginx -g "daemon off;"
}

build() {
    cd my-project
    ng build --prod
}

case "$1" in
"install")
    echo "Install"
    install
    ;;
"run")
    echo "Run"
    run
    ;;
"init")
    echo "Initialization"
    init
    ;;
"build")
    echo "Initialization"
    build
    ;;
*)
    echo "Custom command : $@"
    exec "$@"
    ;;
esac
