#!/bin/bash

CONTAINER_NAME=frontend

{
    docker-compose up -d
} || {
    docker compose up -d
}

docker exec -it $CONTAINER_NAME cp .env.example .env
