/* Inspect dotenv files for invalid names and duplicate assignments. No runtime dependencies. */
'use strict';
function analyze(text) {

var names={},duplicates=[],bad=[];
String(text).split(/\r?\n/).forEach(function(line){
  var s=line.trim();if(!s||s[0]==='#')return;var index=s.indexOf('=');
  if(index<1||!/^[A-Za-z_][A-Za-z0-9_]*$/.test(s.slice(0,index))){bad.push(s);return;}
  var key=s.slice(0,index);if(Object.prototype.hasOwnProperty.call(names,key))duplicates.push(key);
  names[key]=true;
});return {keys:Object.keys(names).sort(),duplicateKeys:duplicates,invalidCount:bad.length};
}
module.exports = { analyze: analyze };
