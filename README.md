# Technical test Currency Shop

## Requierements: 
- Docker 1.9
- Docker Compose 1.4

## Folders
- docker    // Docker image
- server    // Symfony3 - Project source code
- client    // Angular4 - Project source code

## How to install 

Create images for Docker
```console
chmod +x create-images.sh
./create-images.sh
```

Define permissions in folders & conf files
```console
chmod +x install.sh
./install.sh
```

Install application
```console
docker-compose run app install
docker-compose run app build
docker-compose run app php server/bin/console doctrine:schema:update --force
```

Run the cluster
```console
docker-compose up
```

In another terminal
```console
docker exec -ti app bash
```

## Author

**Tifenn Guillas**
- <http://tifenn-guillas.fr>
- <https://github.com/tifenn-guillas>

## Technologies
- PHP7 - Symfony3 - Composer
- Angular4 - Bootstrap
- MySql
- Nginx
- Docker
