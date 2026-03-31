#!/usr/bin/env node
/**
 * Starts dev-hono-proxy and `next dev` in one process tree.
 * Ctrl+C terminates both children.
 */
import { spawn } from 'node:child_process'
import process from 'node:process'

const children = []

const spawnChild = (command, args, extraEnv = {}) => {
  const child = spawn(command, args, {
    stdio: 'inherit',
    shell: false,
    env: { ...process.env, ...extraEnv },
  })
  children.push(child)
  return child
}

const proxy = spawnChild('pnpm', ['exec', 'tsx', './scripts/dev-hono-proxy.ts'])

const nextExtraEnv = {}
const nodeOpts = process.env.NODE_OPTIONS || ''
if (!nodeOpts.includes('max-old-space-size'))
  nextExtraEnv.NODE_OPTIONS = nodeOpts ? `--max-old-space-size=3072 ${nodeOpts}` : '--max-old-space-size=3072'

const next = spawnChild(
  'pnpm',
  ['exec', 'next', 'dev', '--hostname', '0.0.0.0'],
  nextExtraEnv,
)

const killAll = () => {
  for (const c of children) {
    if (!c.killed)
      c.kill('SIGTERM')
  }
}

const onSignal = () => {
  killAll()
  process.exit(0)
}

process.on('SIGINT', onSignal)
process.on('SIGTERM', onSignal)

proxy.on('exit', (code, signal) => {
  if (signal === 'SIGTERM')
    return
  if (code !== 0 && code !== null) {
    killAll()
    process.exit(code || 1)
  }
})

next.on('exit', (code, signal) => {
  killAll()
  if (signal === 'SIGTERM')
    process.exit(0)
  process.exit(code ?? 0)
})
