var readLineSync = require ('readline-sync')
var inputValue= readLineSync.question('Please enter the numeric value b/w 0-9 to make an * design?');
 
 console.log('Thanks for the Input !!!! , Just one more thing to trouble you  ........');
 var designInput = readLineSync.question('Let me know which way you want your design ??   Normal or Inverted . Press N for normal and I for inverted ');

if(designInput== 'I' || designInput == 'i'){
  designInverted(inputValue);
}
else{
  designNormal(inputValue)
}

function designNormal(inputValue) {
var str = ' '

for (var i=0 ; i<inputValue ; i++)
{
  for (var j=0 ; j<=i ; j++)
  {
    str+= '* ';
      }
  console.log(str);
  str=' ';
}
}

function designInverted(inputValue) {
var str = ' '

for (var i=inputValue ; i>0 ; i--)
{
  for (var j=0 ; j<i ; j++)
  {
    str+= '* ';
      }
  console.log(str);
  str=' ';
}
}
