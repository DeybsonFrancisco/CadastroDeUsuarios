class Ajax{
	constructor(){
		
	}
	
 create(user){
		let result;
		$.ajax({
				url : "UserController",
				type : 'POST',
				data : {
					name : user.name,
					email : user.email,
					password : user.password,
					command : "create"
				},
				async: false,
				success : function(data) {
					result = data
				}
			});
			return result;
	}
	
 update(user, id){
		let result;
		$.ajax({
				url : "UserController",
				type : 'POST',
				data : {
					id: id,
					name : user.name,
					email : user.email,
					password : user.password,
					command : "update"
				},
				async: false,
				success : function(data) {
					result = data
				}
			});
			return result;
	}
	list(){
		let result;
		$.ajax({
				url : "UserController",
				type : 'GET',
				data : {
					command : "list"
				},
				async: false,
				success : function(data) {
					result = data
				}
			});
		return result;
	}
	
 find(id){
		let result;
		$.ajax({
				url : "UserController",
				type : 'GET',
				data : {
					id: id,
					command : "find"
				},
				async: false,
				success : function(data) {
					result = data
				}
			});
			return result;
	}
	
remove(id){
		let result;
		$.ajax({
				url : "UserController",
				type : 'POST',
				data : {
					id: id,
					command : "remove"
				},
				async: false,
				success : function(data) {
					result = data
				}
			});
			return result;
	}
	
	removePhone(id){
		let result;
		$.ajax({
				url : "UserController",
				type : 'POST',
				data : {
					id: id,
					command : "removePhone"
				},
				async: false,
				success : function(data) {
					result = data
				}
			});
			return result;
	}
	
	addPhone(phone){
		let result;
		$.ajax({
			url : "UserController",
			type : 'POST',
			data : {
				id: phone.id,
				ddd: phone.ddd,
				num: phone.num,
				type: phone.type,
				command : "addPhone"
			},
			async: false,
			success : function(data) {
				result = data;
			}
		})
		return result
	}
}