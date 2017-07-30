#!/bin/bash
set -e
source ~/.bash_profile
export dir=`pwd`

install() {
    cd $dir/client/my-project
    rm node_modules/ -Rf
    gosu docker yarn

    cd $dir/server
    composer self-update
    gosu docker composer install
}

tests() {
    cd $dir
    gosu docker php bin/phpunit -c app/
}

run() {
    supervisord
}

build() {
    cd $dir/client/my-project
    ng build --prod
}

case "$1" in
"install")
    echo "Install"
    install
    ;;
"tests")
    echo "Tests"
    tests
    ;;
"run")
    echo "Run"
    run
    ;;
"build")
    echo "Build"
    build
    ;;
*)
    echo "Custom command : $@"
    exec "$@"
    ;;
esac
