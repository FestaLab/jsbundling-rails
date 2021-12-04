#!/usr/bin/env node

const path = require('path')
const watch = process.argv.includes('--watch')
const esbuild = require('esbuild')
const config = {
  absWorkingDir: path.join(process.cwd(), 'app/javascript'),
  entryPoints: ['application.js'],
  outdir: path.join(process.cwd(), 'app/assets/builds'),

  bundle: true,
  minify: true,
  sourcemap: true,
  target: 'es6',

  watch: watch
}

esbuild.build(config).catch(() => process.exit(1))
