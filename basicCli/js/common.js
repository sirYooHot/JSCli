// 创建xhr
function createXHR(){
		if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	}
	return new ActiveXObject("Microsoft.XMLHTTP");
}

// 获取(元素节点,属性)
function getStyleAttr(obj, attr){
	if(window.getComputedStyle){
		return getComputedStyle(obj, null)[attr];
	}
		return obj.currentStyle[attr];
}

// 创建一个随机点
function randomPoint(){
	var x = parseInt(Math.random()*document.documentElement.clientWidth);
	var y = parseInt(Math.random()*document.documentElement.clientHeight);
	return {left: x,top: y};
}

// 判断形参name，是否只属于该对象的原型对象中
function isInPrototype(obj,name){
	return (name in obj) && (!obj.hasOwnProperty(name))
}