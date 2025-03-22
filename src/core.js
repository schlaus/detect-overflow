function detectOverflow() {
  const doc = document.documentElement
  const hasHorizontalOverflow = doc.scrollWidth > doc.clientWidth
  const hasVerticalOverflow = doc.scrollHeight > doc.clientHeight

  const offendingElements = []

  if (hasHorizontalOverflow || hasVerticalOverflow) {
    const checkElement = (el) => {
      const rect = el.getBoundingClientRect()
      if (
        rect.width > window.innerWidth ||
        rect.height > window.innerHeight ||
        rect.right > window.innerWidth ||
        rect.bottom > window.innerHeight
      ) {
        offendingElements.push(el)
      }
    }

    document.querySelectorAll('body *').forEach((el) => {
      if (el.offsetParent !== null) checkElement(el) // skips hidden ones
    })
  }

  return {
    hasOverflow: hasHorizontalOverflow || hasVerticalOverflow,
    offendingElements,
  }
}

let observer = null
let resizeHandler = null

function stopWatching() {
  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler)
    resizeHandler = null
  }
  if (observer) {
    observer.disconnect()
    observer = null
  }
}

function watchOverflow(options = {}, callback = null) {
  stopWatching() // 🚨 Ensure only one active watcher

  const {
    includeResize = true,
    includeMutations = true,
    showAlert = false,
    logToConsole = true,
  } = options

  const trigger = () => {
    const result = detectOverflow()

    if (result.hasOverflow) {
      if (logToConsole) {
        console.warn(
          'Overflow detected. Offending elements:',
          result.offendingElements,
        )
      }

      if (showAlert) {
        const elementList = result.offendingElements
          .map((el) => {
            const tag = el.tagName.toLowerCase()
            const id = el.id ? `#${el.id}` : ''
            const classes = el.className
              ? `.${el.className.toString().replace(/\s+/g, '.')}`
              : ''
            return `${tag}${id}${classes}`
          })
          .join('\n')

        alert(`Overflow detected.\nOffending elements:\n${elementList}`)
      }
    }

    if (typeof callback === 'function') {
      callback(result)
    }
  }

  if (includeResize) {
    resizeHandler = trigger
    window.addEventListener('resize', resizeHandler)
  }

  if (includeMutations) {
    observer = new MutationObserver(trigger)
    observer.observe(document.body, {
      childList: true,
      attributes: true,
      subtree: true,
    })
  }

  trigger()
}

export { detectOverflow, watchOverflow, stopWatching }
