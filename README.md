# Micro Frontend Application

This project demonstrates a micro frontend architecture using Vue 3, Vite, and Module Federation.

## Applications

- Root App (Port 18000) - Container application
- Apple App (Port 18001) - Micro frontend #1
- Banana App (Port 18002) - Micro frontend #2
- Camel App (Port 18003) - Micro frontend #3

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Development

### Local Development (Without Docker)

1. Install dependencies:
```bash
npm install
```

2. Start all applications:
```bash
npm run dev
```

### Docker Development

1. Build the Docker images:
```bash
docker-compose build
```

2. Start the containers:
```bash
docker-compose up
```

3. Start in detached mode (optional):
```bash
docker-compose up -d
```

4. View logs:
```bash
docker-compose logs -f
```

5. Stop the containers:
```bash
docker-compose down
```

## Accessing the Applications

After starting the applications, you can access them at:

- Root App: http://localhost:18000
- Apple App: http://localhost:18001
- Banana App: http://localhost:18002
- Camel App: http://localhost:18003

## Testing

### Local Testing
```bash
npm test
```

### Docker Testing
1. Build test images:
```bash
docker-compose -f docker-compose.yml build
```

2. Run tests in containers:
```bash
docker-compose -f docker-compose.yml run root npm test
docker-compose -f docker-compose.yml run apple npm test
docker-compose -f docker-compose.yml run banana npm test
docker-compose -f docker-compose.yml run camel npm test
```

## Troubleshooting

### Common Docker Issues

1. Port conflicts:
```bash
docker-compose down
docker container prune
```

2. Clean Docker cache:
```bash
docker-compose build --no-cache
```

3. Reset Docker environment:
```bash
docker-compose down -v
docker-compose up --build
```

## License

[MIT](LICENSE)
