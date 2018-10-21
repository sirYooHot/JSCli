function setCookie(valkey,value,expires,path,domain,secure){
	var cookieText = encodeURIComponent(valkey) + "=" + encodeURIComponent(value);
	// 失效日期: [stanceof: 判断是否属于什么类型]
	if(expires instanceof Date){// expires
		cookieText += "; expires=" + expires;
	}
	if(path){// path
		cookieText += "; path=" + path;
	}
	if(domain){// damain
		cookieText += "; domian=" + damain;
	}
	if(secure){// secure
		cookieText += "; secure=" + secure;
	}
	document.cookie = cookieText;//设置cookie；
	return document.cookie;
}
// 取出cookie
function getCookie(valkey){
	var cookie = decodeURIComponent(document.cookie);
	// cookie这是是字符串的形式
	var arr = cookie.split("; ");
	for(var i=0;i<arr.length;i++){
		//valkey= value;
		var arr_de = arr[i].split("=");
		if(arr_de.length >= 2){
			if(arr_de[0] == valkey){
				return arr_de[1];
			}
		}
	}
	return "";
}
// 删除cookie
function removeCookie(valkey){
	var date_lose = new Date();
	document.cookie = decodeURIComponent(valkey) + "=; expires=" + date_lose;
	return document.cookie;
}