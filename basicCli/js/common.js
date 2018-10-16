// 封装一个 创建节点 的函数
function createELe(eleName, txt){
	var ele  = document.createElement(eleName);// 创建元素节点
	var Txt = document.createTextNode(txt);// 创建文本节点
	ele.appendChild(Txt);
	return ele;
}

// 原生DOM操作没有直接插入节点之后：封装一个 插入目标节点之后 的函数
function insertAfter(eNew, eTarget){
	var eParent = eTarget.parentNode;// 获取父节点
	if(eParent.lastChild == eTarget){// target是否为父节点中last-child
		eParent.appendChild(eNew);						
	}else{
		eParent.insertBefore(eNew, eTarget.nextSibling);
	}
}


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