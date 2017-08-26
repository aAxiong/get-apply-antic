

function fnAjax(url1,type,data,fn,fnErr){
	$.ajax({
		url: 'http://192.168.31.230/battery/admin/index.php/' + url1,
		type: type,
		data:data,
		success:function(re){
			// console.log("re" + re);
			fn.apply(fn, [re]);
		},
		error:function(err){
			fnErr.apply(fnErr, [err,err.status]);
		}
	})

}