@echo off
setlocal
set ROOT_DIR=%~dp0..\..\..\..
set VSROOT_DIR=%~dp0..\..
call "%ROOT_DIR%\node.exe" "%VSROOT_DIR%\out\server-cli.js" "code-server" "1.83.1" "d7a2b4936af1bfd80cb96f2567af68badc2325e3" "code-server.cmd" %*
endlocal
