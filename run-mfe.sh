#!/bin/bash

case "$1" in
  "build")
    echo "Building MFE services..."
    docker-compose build
    ;;
  "start")
    echo "Starting MFE services..."
    docker-compose up -d
    echo "Services started on:"
    echo "Root:   http://localhost:18000"
    echo "Apple:  http://localhost:18001"
    echo "Banana: http://localhost:18002"
    echo "Camel:  http://localhost:18003"
    ;;
  "stop")
    echo "Stopping MFE services..."
    docker-compose down
    ;;
  "restart")
    echo "Restarting MFE services..."
    docker-compose restart
    ;;
  "logs")
    echo "Showing logs..."
    docker-compose logs -f
    ;;
  *)
    echo "Usage: $0 {build|start|stop|restart|logs}"
    exit 1
    ;;
esac
