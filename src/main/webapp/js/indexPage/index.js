const ajax = new Ajax();

$("#formCadastro").submit(function(event) {
	event.preventDefault();
			
	var loading = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
				   <span class="sr-only">Loading...</span>`;
						
	let name = $("#nomeCadastro").val()
	let email = $("#emailCadastro").val()
	let senha = $("#senhaCadastro").val()
				
	$('#buttonSalvarUsuario').empty()
	$('#buttonSalvarUsuario').append(loading);
	const data = ajax.create({name, email, password: senha})
	if(data !== null){
		$('#buttonSalvarUsuario').html( 'Cadastrado')
		$('#buttonSalvarUsuario').addClass('btn-success')
		$('#buttonSalvarUsuario').attr("disabled", true)	
				
		$("#nomeCadastro").attr("disabled", true)
		$("#emailCadastro").attr("disabled", true)
		$("#senhaCadastro").attr("disabled", true)
				
		$("#dddCadastro").attr("disabled", false)
		$("#numeroCadastro").attr("disabled", false)
		idUser = data.id
		sessionStorage.idUser= data.id
			}		
});

$("#cadastroTelefone").submit(function(event) {
	event.preventDefault();
						
	let ddd = $("#dddCadastro").val()
	let num = $("#numeroCadastro").val()
	let type = $("input[name ='tipo']:checked").val()
	var id = sessionStorage.idUser
	const data = ajax.addPhone({id, ddd, num, type})
	if(data !== null){
		$('#buttonAddTelefone').html( 'Adicionado')
		$('#buttonAddTelefone').addClass('btn-success')
		$("#dddCadastro").val('')
		$("#numeroCadastro").val('')
		$("input[name ='tipo']:checked").val()
		$("#buttonFinalizarCadastro").attr("disabled", false)
		setTimeout(() =>{
		$('#buttonAddTelefone').removeClass('btn-success').addClass('btn-primary')
			$('#buttonAddTelefone').html( 'Adicionar')
			}, 1200)
		}		
});
		
$("#buttonFinalizarCadastro").click(function(){
	let email = $("#emailCadastro").val()
	let password = $("#senhaCadastro").val()
				
	$.ajax({
		url : "UserController",
		type : 'POST',
		data : {
			email,
			password,
			command : "login"	
		},
		success : function(data) {
			if(data){
				window.location.href = data
			} else{
				alert("Email ou senha não incorretos ou não existem");	
			}
				
		}
	});
})


$("#formLogin").submit(function(e){
	e.preventDefault(e)
	
	let email = $("#emailLogin").val()
	let password = $("#senhaLogin").val()
				
	$.ajax({
		url : "UserController",
		type : 'POST',
		data : {
			email,
			password,
			command : "login"	
		},
		success : function(data) {
			if(data){
				console.log("entrou")
				window.location = data
			} else{
				console.log("data: ", data)
				alert("Email ou senha não incorretos ou não existem");	
			}
				
		}
	});
	
})