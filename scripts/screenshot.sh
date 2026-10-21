#!/usr/bin/env bash
# Capture a portfolio thumbnail in the house format: 1200x750 PNG, 1x scale, no browser chrome.
#
#   scripts/screenshot.sh <url> <slug>
#   scripts/screenshot.sh "https://daniel-beachy.github.io/time-tree-v1/#/relate/Balaenoptera%20musculus/Hippopotamus%20amphibius" deep-roots
#
# Writes src/img/<slug>-image.png. Always open the result and look at it before committing.
set -euo pipefail

url="${1:?usage: scripts/screenshot.sh <url> <slug>}"
slug="${2:?usage: scripts/screenshot.sh <url> <slug>}"
out="$(cd "$(dirname "$0")/.." && pwd)/src/img/${slug}-image.png"

browser=""
for b in \
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser" \
  "/Applications/Chromium.app/Contents/MacOS/Chromium" \
  "$(command -v google-chrome || true)" "$(command -v chromium || true)"; do
  if [ -n "$b" ] && [ -x "$b" ]; then browser="$b"; break; fi
done
[ -n "$browser" ] || { echo "No Chrome/Brave/Chromium found" >&2; exit 1; }

# --force-dark-mode makes apps that follow prefers-color-scheme render dark, like the other thumbnails.
# --virtual-time-budget gives the page time to fetch data and images before the capture.
"$browser" --headless=new --disable-gpu --hide-scrollbars --force-dark-mode \
  --force-device-scale-factor=1 --window-size=1200,750 --virtual-time-budget=12000 \
  --screenshot="$out" "$url" >/dev/null 2>&1

sips -g pixelWidth -g pixelHeight "$out" 2>/dev/null | tail -2 || true
echo "Saved $out ($(du -k "$out" | cut -f1) KB)"
