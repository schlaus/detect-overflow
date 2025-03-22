import { watchOverflow, stopWatching, detectOverflow } from './core.js'

// Don't auto-run anything
// Just attach to window
window.detectOverflow = {
  watchOverflow,
  stopWatching,
  detectOverflow,
}
