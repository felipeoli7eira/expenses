#!/bin/bash

CONTAINER_NAME=frontend

{
    docker-compose up -d
} || {
    docker compose up -d
}
