import { watchOverflow, stopWatching, detectOverflow } from './core.js'

watchOverflow()

window.detectOverflow = {
  watchOverflow,
  stopWatching,
  detectOverflow,
}
