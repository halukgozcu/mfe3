# Micro Frontend Application

## Prerequisites

Before running the application, make sure you have [Node.js](https://nodejs.org/) installed on your system.

## Installation

1. Install the project dependencies:
```bash
npm install
```

2. Install concurrently package globally (if not already installed):
```bash
npm install -g concurrently
```

## Development

To run the application in development mode:

```bash
npm run dev
```

This command uses `concurrently` to run multiple npm scripts simultaneously. Make sure you have properly configured your package.json scripts section for concurrent execution.

### Note

If you encounter any issues with concurrently, you can also install it as a dev dependency:

```bash
npm install --save-dev concurrently
```

Then update your package.json scripts accordingly:

```json
{
  "scripts": {
    "dev": "concurrently \"npm run dev:app1\" \"npm run dev:app2\""
  }
}
```

## License

[MIT](LICENSE)
