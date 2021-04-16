#!/usr/bin/env node
import { readJSONSync, writeFileSync, statSync, existsSync, mkdirpSync } from 'fs-extra';
import { resolve, join } from 'path';
import { generateLinkshelf } from './generate';

const [configPath, outputDirectory] = process.argv.slice(2);

if (!configPath || !outputDirectory) {
  console.error('Usage: linkshelf [config] [outDir]');
  process.exit(1);
}

const outputDirectoryPath = resolve(process.cwd(), outputDirectory);

if (!existsSync(outputDirectoryPath)) {
  console.log(`Creating output directory ${outputDirectoryPath}/...`);
  mkdirpSync(outputDirectoryPath);
} else if (!statSync(outputDirectoryPath).isDirectory) {
  console.error('outDir is not a directory');
  process.exit(1);
}

for (const { name, content } of generateLinkshelf(readJSONSync(configPath))) {
  const path = join(outputDirectoryPath, name);
  console.log(`Exporting ${path}...`);
  writeFileSync(path, content);
}
