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
		view.renderNewUserInTable(result, 'removeFunction', 'removePhoneUserFunction', 'view')
		alert("Adicionado!!")
		$('#nomeAdd').val(''),
		$('#emailAdd').val('');
		$('#senhaAdd').val('');
	}else{
		alert('Ocorreu um erro na solicitação')
	}
})


$('#formAddTelefone').submit(function(e){
	e.preventDefault()
	let ddd = $("#dddConsulta").val()
	let num = $("#numeroConsulta").val()
	let type = $("input[name ='tipo']:checked").val()
	let id = $('#idConsulta').val()
	
	console.log(ddd, num, type, id)
	const result = ajax.addPhone({id, ddd, num, type})
	if(result !== null){
		$('#buttonAddTelefone').html( 'Adicionado')
		$('#buttonAddTelefone').addClass('btn-success')
		$("#dddCosulta").val('')
		$("#numeroConsulta").val('')
		setTimeout(() =>{
		$('#buttonAddTelefone').removeClass('btn-success').addClass('btn-primary')
			$('#buttonAddTelefone').html( 'Adicionar')
			}, 1200)
		}
		view.addPhoneTableFindModal(result, 'removePhoneUserFunction')
		const list =  ajax.list();
  		if(result !== null)
 			view.renderAllUserInTable(list, 'removeFunction', 'view', 'removePhoneUserFunction')
			
})





//find user
$("#btnBusca").click(function() {
	let id = $("#idBusca").val();
	const result = ajax.find(id);
	if(result.id){
		view.openModalFind(result, removeFunction, 'removePhoneUserFunction')
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
		view.updateTableUser(result, 'removeFunction', 'removePhoneUserFunction', 'view')
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
		view.updateTableUser(result, 'removeFunction', 'removePhoneUserFunction', 'view')
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
	if(result !== null){
		$(`#phone${id}`).remove()
  		const result =  ajax.list();
  		if(result !== null)
 		view.renderAllUserInTable(result, 'removeFunction', 'view', 'removePhoneUserFunction')
	}		
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
