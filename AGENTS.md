# Repository guide

## Current state and scope

This is an early scaffold for the Odin library project rebuild described in
README.md. index.html contains temporary test markup and links style.css and
main.js. main.js contains an early `Book` constructor and a `libary` array;
style.css contains a simple h1 color rule. Do not assume library features,
persistence or book management exist.
The temporary browser-test.html and browser-test.css smoke-test files were
removed at the user's request after the user confirmed the browser preview
worked.

## Working agreement

Check Git status and preserve unrelated work before editing. Neovim can hold
unsaved buffers; check those before replacing files. An empty file on disk does
not establish that the corresponding editor buffer has no user work.

Use plain HTML, CSS and JavaScript unless the user requests another approach.
No package manifest, build scripts, CI or automated test suite exists here.
Do not invent package-manager commands or claim checks were run when they were
not.

## Local browser preview

Mobile Workstation uses an ignored profile in the sibling phone-workstation
project. Its local static server serves this repository on 127.0.0.1:8766,
with the Browser page configured for /index.html. Reopen the project to load
updated preview settings. The phone preview server injects its reload helper
into served HTML without changing this repository's source. The page currently
displays test headings; no book management UI exists yet. Keep machine-specific
profiles and runtime state outside this repository.

## Verification

Inspect changes and test the requested HTML/CSS/JS behavior in the local
preview. Distinguish server response checks from actual on-device browser
confirmation. Update this guide when implemented application behavior or
development commands change.
