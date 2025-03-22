# detect-overflow 💥

Ever had your beautiful layout go rogue and start scrolling when it shouldn't?  
Yeah. We've been there.

**`detect-overflow`** tells you instantly when some rogue element is breaking
your layout — and it even helps you find the culprit.

---

## ✨ Features

- Detects if the page is overflowing the viewport (horizontally or vertically)
- Finds the offending elements
- Warns you in the console (or alerts, if you're into that)
- Can run automatically or give you full manual control
- Works with ESM, bundlers, and even `<script>` tags like it's 1999

---

## 🚀 Quick Start (Auto-Watcher Style)

```js
import 'detect-overflow'
// Boom. Done.
```

This auto-starts the watcher with default settings:

- Console logging: ✅
- Alerts: ❌
- Listens to resize and DOM mutations

---

## 🧠 Full Control

```js
import {
  watchOverflow,
  stopWatching,
  detectOverflow,
} from 'detect-overflow/core'

watchOverflow(
  {
    showAlert: true,
    logToConsole: false,
    includeResize: true,
    includeMutations: false,
  },
  (result) => {
    console.log('Overflow status:', result.hasOverflow)
    console.log('Offending elements:', result.offendingElements)
  },
)
```

Call `stopWatching()` to remove listeners.

You can also run a one-off check:

```js
const { hasOverflow, offendingElements } = detectOverflow()
```

---

## 🧩 Browser Usage

### Option 1: Auto-Watcher

```html
<script src="https://unpkg.com/detect-overflow"></script>
<!-- Boom. Done. -->
```

This auto-starts with defaults.

### Option 2: Manual Control

```html
<script src="https://unpkg.com/detect-overflow/dist/detect-overflow.manual.js"></script>
<script>
  detectOverflow.watchOverflow({
    showAlert: true,
  })

  // Or:
  const res = detectOverflow.detectOverflow()
  console.log(res.hasOverflow, res.offendingElements)
</script>
```

---

## 🤘 Why?

Because hunting down layout overflows manually is for masochists.

---

## 📦 Install

```bash
npm install detect-overflow
```

Or just use it via CDN like the rebels do:

- Auto: `https://unpkg.com/detect-overflow`
- Manual: `https://unpkg.com/detect-overflow/dist/detect-overflow.manual.js`

---

## 🧪 Options for `watchOverflow`

| Option             | Type    | Default | Description                                 |
| ------------------ | ------- | ------- | ------------------------------------------- |
| `showAlert`        | Boolean | `false` | Alert with element list when overflow found |
| `logToConsole`     | Boolean | `true`  | Log to console when overflow found          |
| `includeResize`    | Boolean | `true`  | Watch for window resizes                    |
| `includeMutations` | Boolean | `true`  | Watch for DOM changes                       |

---

## 🧼 Auto Cleanup

No need to manage listeners manually — `watchOverflow()` will stop previous
listeners automatically. No callback stacking here.

---

## 🧙‍♂️ Author

**Klaus Karkia** — [github.com/schlaus](https://github.com/schlaus)  
He got tired of overflowing layouts and made this instead of screaming.

---

## 🪪 License

MIT. Overflow freely.
