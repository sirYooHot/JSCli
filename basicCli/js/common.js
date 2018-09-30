// 创建xhr
function createXHR(){
		if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	}
	return new ActiveXObject("Microsoft.XMLHTTP");
}

// 获取(元素节点,属性)
function getStyleAttr(obj,attr){
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[attr];
	}
		return obj.currentStyle[attr];
}