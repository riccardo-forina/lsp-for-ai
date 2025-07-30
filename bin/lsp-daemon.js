#!/usr/bin/env node

const { Command } = require('commander');
const path = require('path');

// CLI setup
const program = new Command();
program
  .name('lsp-daemon')
  .description('LSP (Language Server Protocol) daemon for AI-powered code refactoring and semantic operations')
  .version('1.0.0')
  .option('-p, --port <port>', 'HTTP server port', '3007')
  .option('-w, --workspace <path>', 'workspace directory path', process.cwd())
  .option('-c, --config <path>', 'TypeScript configuration file', 'tsconfig.json')
  .option('--verbose', 'enable verbose logging', false)
  .parse();

const options = program.opts();

// Update configuration with CLI options
const CONFIG = {
  PORT: parseInt(options.port),
  WORKSPACE_PATH: path.resolve(options.workspace),
  TSCONFIG_PATH: options.config,
  VERBOSE: options.verbose
};

console.log('🚀 Starting LSP Daemon for AI');
console.log(`📁 Workspace: ${CONFIG.WORKSPACE_PATH}`);
console.log(`🌐 Port: ${CONFIG.PORT}`);
console.log(`⚙️  Config: ${CONFIG.TSCONFIG_PATH}`);

// Load and execute the main daemon
require('../lib/lsp-daemon-core')(CONFIG);
