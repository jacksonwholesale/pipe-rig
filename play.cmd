@echo off
rem Pipe Rig launcher: serves this folder on localhost and opens the rig.
rem Every .mid in test-midi\ shows up in the Songs list. Web MIDI works here too.
cd /d "%~dp0"
set PORT=8765
start "Pipe Rig server (close to stop)" /min python -m http.server %PORT% --bind 127.0.0.1
timeout /t 1 /nobreak >nul
start "" "http://localhost:%PORT%/pipe-rig.html"
