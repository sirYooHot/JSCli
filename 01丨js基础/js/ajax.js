// 创建xhr
function createXHR(){
		if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	}
	return new ActiveXObject("Microsoft.XMLHTTP");
}


// params: 对象的属性 转成 &拼接的键值对字符串
function params(data){
	var arr = [];
	for(var i in data){
		var str = i + "=" + data[i];// type=send
		arr.push(str);
	}
	return arr.join("&");
}


// ajax封装
function ajax(obj){
	// 1. 创建XHR；
	var xhr = createXHR();
	
	
	// 2. http请求配置
	obj.dataStr = params(obj.data);// 参数预处理
	if(/get/i.test(obj.method)){// 是否为GET请求;
		obj.url += obj.dataStr.length>0 ? ("?"+ obj.dataStr) : "";// 参数拼接到url后面			
	}
	// http请求配置
	xhr.open(obj.method, obj.url, obj.async);
	
	
	// 3. 调用send()方法
	if(/get/i.test(obj.method)){// 是否为GET请求;
		xhr.send(null);
	}else{//如果是post请求
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoder");
		xhr.send(obj.dataStr);
	}
	
	
	// 4. 监听状态
	if(obj.async){// 异步请求
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				callBack();
			}
		}
	}else{// 同步请求
		callBack();
	}
	// 5. 结果处理
	function callBack(){
		if(xhr.status == 200 || xhr.status == 304){
			// success函数
			var res = xhr.responseText
			obj.success(res);
		}else{
			// failure函数
			var err = "xhr.status="+ xhr.status +",xhr.readyState="+ xhr.readyState
			obj.failure(err);
		}
	}
}


// 使用demo
/*
ajax({
	method: "GET",
	url: "requireUrl",
	data: {
		regname: "jack",
		age: 18
	},
	async: true,
	
	success: function(responseText){
		console.log("服务器返回数据: "+responseText);
	},
	failure: function(code){
		console.log("请求失败: " + code);
	}
});
*/