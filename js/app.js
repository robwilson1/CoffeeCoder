var codeInput = document.getElementById('codeInput');
var codeOutput = document.getElementById('codeOutput');

var myCodeMirror = CodeMirror(codeInput, {
  lineNumbers: true,
  autoCloseBrackets: true,
  matchBrackets: true,
  value: "(function welcome() {\n  return 'CoffeeCoder Rocks!';\n})();\n",
  mode:  "javascript"
});

function runCode() {
  event.preventDefault();
  var input = myCodeMirror.getValue();
  codeOutput.textContent = "";
  var result = evalCode(eval(input));
  if (result != undefined) codeOutput.innerHTML += result;
};

evalCode = function(input) {
    var result = "["
    if (typeof(input)=="object" && input.length) {
        for (var i=0; i < input.length; i++)
            if (typeof(input[i])=="object" && input[i].length) {
                result += (i==0?"":" ")+"["
                for (var j=0; j<input[i].length; j++)
                    result += input[i][j]+(j==input[i].length-1?
                            "]"+(i==input.length-1?"]":",")+"\n":", ");
            } else result += input[i]+(i==input.length-1?"]":", ");
    } else result = input;
    return result;
};

writeln = function(input) {
    if (!input) input="";
    codeOutput.innerHTML += evalCode(input);
    codeOutput.innerHTML += "<br>";
};
