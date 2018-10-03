//var runoob1 = require('./js/runoob1.js');
//var jsonTest = require('./js/jsonTest.js'); // jsonTest.str
var funcOutPut = require('./js/func.js');


var $ = require('jquery')


var res = funcOutPut('xxx')
require('!style-loader!css-loader!./css/style.css')
document.write('<div class="box">'+ res +'</div>')
$('.box').css({'color':'white','background':'blue'});


/*"scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "test": "echo \"Error: no test specified\" && exit 1",
    
    // 旧版本
    "start": "webpack-dev-server --entry ./src/index.js --output-file",
    "build": "webpack --watch"
}*/