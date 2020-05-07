/*
Test.js
Debug the script
*/
function Debug(msg,win,type,DebugNumber){
if(!DebugNumber || DebugNumber === 0 )DebugNumber=1 // for loop
if(!win)win = window;
for ( i=0;i<DebugNumber;i++){
if(!win.console)return null;
win.console[type](msg
)}
return {DebugTypeAll:win.console,YourSelType:win.console[type]}
}

