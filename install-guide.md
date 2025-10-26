# Installation Guide

## Prerequisites

- A userscript manager browser extension
- Basic knowledge of browser extensions

## Step-by-Step Installation

### Method 1: One-Click Install (Recommended)

1. **Install Tampermonkey**:
   - Chrome: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
   - Firefox: https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/
   - Edge: https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendneeafp

2. **Install the Script**:
   - Click this link: [Install Universal Dark Mode](script.user.js)
   - Tampermonkey will open with the installation dialog
   - Click "Install"

3. **Verify Installation**:
   - Open Tampermonkey dashboard
   - Ensure the script is enabled
   - Visit ClassPlus or Testbook to see the dark mode

### Method 2: Manual Installation

1. Open Tampermonkey dashboard
2. Click "Create a new script"
3. Delete the default template
4. Copy the entire code from `script.user.js`
5. Press Ctrl+S (Cmd+S on Mac) to save
6. The script will automatically enable

## Troubleshooting

### Script Not Working

1. **Check Script Status**:
   - Open Tampermonkey dashboard
   - Ensure the script is enabled (toggle switch is green)
   - Check if the domains match your visited sites

2. **Check Browser Console**:
   - Press F12 → Console tab
   - Look for errors related to the script
   - You should see: "🎨 Universal Dark Mode activated for ClassPlus & Testbook!"

3. **Refresh the Page**:
   - Some sites require a hard refresh (Ctrl+F5)

### White Elements Still Visible

1. **Wait a Few Seconds**: Dynamic content might take a moment to apply
2. **Refresh the Page**: Forces re-application of styles
3. **Report the Issue**: Open a GitHub issue with:
   - URL of the page
   - Screenshot of the white element
   - Browser and Tampermonkey version

### Performance Issues

- The script is optimized, but on very old computers it might cause slight slowdown
- If experiencing issues, try disabling other userscripts

## Uninstallation

1. Open Tampermonkey dashboard
2. Find "Universal Dark Mode - ClassPlus & Testbook"
3. Click the toggle switch to disable, or trash icon to remove

## Updating

The script will auto-update if you have Tampermonkey's update check enabled. Manual update:

1. Open Tampermonkey dashboard
2. Click "Check for userscript updates"
3. Or reinstall from the script URL

## Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Edge
- ✅ Safari (with Tampermonkey)
- ✅ Opera
