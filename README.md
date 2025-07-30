# LSP Daemon for AI

An LSP (Language Server Protocol) daemon designed for AI-powered code refactoring and semantic operations. This tool provides a lightweight HTTP server that interfaces with TypeScript Language Server to enable intelligent code analysis and transformations.

## Features

- 🔧 **Semantic Code Refactoring**: Intelligent function and file moving with automatic import updates
- 🔍 **Code Analysis**: Deep semantic analysis using TypeScript LSP
- 🚀 **AI-Ready**: Designed to work seamlessly with AI coding assistants
- 🛡️ **Security First**: Built-in path traversal protection and input validation
- 🌐 **HTTP API**: RESTful interface for easy integration
- ⚡ **Fast**: Lightweight and efficient operations

## Installation

### Global Installation

```bash
npm install -g lsp-for-ai
```

### Using with npx

```bash
npx lsp-for-ai --workspace /path/to/your/project
```

### Local Installation

```bash
npm install lsp-for-ai
```

## Usage

### Command Line

```bash
# Start with default settings (port 3007, current directory)
lsp-daemon

# Specify workspace and port
lsp-daemon --workspace /path/to/project --port 3008

# With custom TypeScript config
lsp-daemon --config tsconfig.custom.json --verbose
```

### Options

- `-p, --port <port>` - HTTP server port (default: 3007)
- `-w, --workspace <path>` - Workspace directory path (default: current directory)
- `-c, --config <path>` - TypeScript configuration file (default: tsconfig.json)
- `--verbose` - Enable verbose logging

### API Endpoints

Once running, the daemon exposes these HTTP endpoints:

#### File Operations
- `POST /sync` - Synchronize file with LSP
- `POST /move-file` - Move/rename files with import updates
- `POST /move-function` - Move functions between files

#### Analysis
- `POST /find-references` - Find all references to a symbol
- `POST /rename` - Rename symbols across the codebase
- `POST /organize-imports` - Organize and optimize imports

#### Refactoring
- `POST /extract-function` - Extract code into a new function
- `POST /inline-function` - Inline function calls

## Example Integration

```javascript
const response = await fetch('http://localhost:3007/move-function', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    sourceFile: 'src/utils/helper.ts',
    targetFile: 'src/lib/utilities.ts',
    functionName: 'formatDate',
    startLine: 15,
    endLine: 25
  })
});
```

## Development

```bash
git clone https://github.com/riccardo-forina/lsp-for-ai.git
cd lsp-for-ai
npm install
npm start
```

## Security

This tool includes built-in protection against path traversal attacks and validates all file operations to ensure they remain within the specified workspace directory.

## Requirements

- Node.js >= 16.0.0
- TypeScript project with valid tsconfig.json

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.