# Repository guide

## Current state and scope

This is an early scaffold for the Odin library project rebuild described in README.md.
index.html contains a basic HTML document linking style.css and loading main.js with defer.
main.js and style.css are currently empty on disk.
Do not assume library features, persistence or book management exist.
The temporary browser-test.html and browser-test.css smoke-test files were removed
at the user's request after the user confirmed the browser preview worked.

## Working agreement

Check Git status and preserve unrelated work before editing. Neovim can hold unsaved
buffers; check those before replacing files. An empty file on disk does not establish
that the corresponding editor buffer has no user work.

Use plain HTML, CSS and JavaScript unless the user requests another approach.
No package manifest, build scripts, CI or automated test suite exists here.
Do not invent package-manager commands or claim checks were run when they were not.

## Local browser preview

Mobile Workstation uses an ignored profile in the sibling phone-workstation project.
Its local static server serves this repository on 127.0.0.1:8766, with the Browser
page configured for /index.html. Reopen the project to load updated preview settings.
The server also supplies /__workstation_changes, but automatic reload requires an
EventSource listener in the served HTML; index.html does not yet contain one.
The Browser page displays the My Library heading; no book management UI exists yet.
Keep machine-specific profiles and runtime state outside this repository.

## Verification

Inspect changes and test the requested HTML/CSS/JS behavior in the local preview.
Distinguish server response checks from actual on-device browser confirmation.
Update this guide when implemented application behavior or development commands change.
