const view = new View();
const ajax = new Ajax();

//list users
 $(document).ready(function () {
  const result =  ajax.list();
  if(result !== null)
 	view.renderAllUserInTable(result, 'removeFunction', 'view', 'removePhoneUserFunction')
});


//adduser
$('#addButton').click(function(){
	$('#addModal').modal();
})

$('#formAdd').submit(function(e) {
	e.preventDefault();
	let name = $('#nomeAdd').val(),
		email = $('#emailAdd').val();
		password = $('#senhaAdd').val();
	const result = ajax.create({name, email, password})
	if(result){
		$('#addModal').modal('hide');
		view.renderNewUserInTable(result, 'removeFunction', 'view')
		alert("Adicionado!!")
	}else{
		alert('Ocorreu um erro na solicitação')
	}
})





//find user
$("#btnBusca").click(function() {
	let id = $("#idBusca").val();
	const result = ajax.find(id);
	if(result.id){
		view.openModalFind(result, removeFunction)
	}else{
		alert(result)	
	}	
});

//openAlterModal
$("#btnAlterarConsulta").click(function() {
		view.enableModalFormUpdate();
	})
	
//update in list
$("#formAlterarLista").submit(function(e) {
	e.preventDefault();
	let id = $('#idAlterar').val(),
		name = $('#nomeAlterar').val(),
		email = $('#emailAlterar').val();
		password = $('#senhaAlterar').val();
	const result = ajax.update({name, email, password}, id)
	if(result){
		$('#alterarModal').modal('hide');
		view.updateTableUser(result, 'removeFunction','view')
		console.log(result)
		alert("Alterado!!")
	}else{
		alert('Ocorreu um erro na solicitação')
	}
})

//update in consult
$("#formAlterarConsulta").submit(function(e) {
	e.preventDefault();
	let id = $('#idConsulta').val(),
		name = $('#nomeConsulta').val(),
		email = $('#emailConsulta').val();
		password = $('#senhaConsulta').val();
	const result = ajax.update({name, email, password}, id)
	if(result){
		view.updateTableUser(result, 'removeFunction','view')
		alert("Alterado!!");
	}else{
		alert('Ocorreu um erro na solicitação')
	}

	
})


function removeFunction(id) {
	const result = ajax.remove(id)
	if(result !== null)
		$("#" + id).remove()
		alert("Excluido")
}

function removePhoneUserFunction(id) {
	const result = ajax.removePhone(id)
	if(result !== null)
		$(`#phone${id}`).remove()
		alert("Excluido")
		
}

$("#buttonSair").click(function(){		
	$.ajax({
		url : "UserController",
		type : 'POST',
		data : {
			command : "logout"	
		},
		success : function(data) {
			if(data)
				window.location = data	
		}
	});
	
})
