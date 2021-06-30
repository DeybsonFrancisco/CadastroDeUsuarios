class View {
  constructor() {}

  renderAllUserInTable(dataUserList, nameRemoveFunction, nameObjView, removeFunctionPhone) {
	$(".d-flex").remove()
	

	$('#tabelaUsuarios').empty();
    for (var data of dataUserList) {
	var user = {
		id: data.id,
		name: data.name.replace(/\s/g, '%20'),
		email: data.email,
		password: data.password,
		phones: data.phones
	}
      var component = ` <tr id='${user.id}'>
								<td scope='row'>${user.id}</td>
								<td>${user.name.replace(/%20/g, ' ')}</td>
								<td>${user.email}</td>
								<td>${user.password}</td>
								<td>
									<button id="btnAlterarLista${user.id}" onclick=${nameObjView}.openModalFormUpdate(${JSON.stringify(user)}) type="button" class="btn btn-secondary btn-sm mr-2" data-toggle="tooltip" data-placement="top" title="Alterar usuário">
										<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
										</svg>
									</button>
									<button onclick=${nameRemoveFunction}(${user.id}) type="button" class="btn btn-danger btn-sm" data-toggle="tooltip" data-placement="top" title="Excluir usuário">
										<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
											<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
											<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
										</svg>
									</button> 
								</td>
								<td id="buttonPhonesTd${user.id}">
								${this.contatosExist(user, nameObjView, removeFunctionPhone)}
								</td>
							</tr>`;
							
	
      $('#tabelaUsuarios').append(component);
    }
  }


  openModalFind(user, removeFunction, removeFunctionPhone){
	$('#buscaModal').modal()
	$('#idConsulta').val(user.id).attr("disabled",true)
	$('#nomeConsulta').val(user.name).attr("disabled",true)
	$('#emailConsulta').val(user.email).attr("disabled", true)
	$('#senhaConsulta').val(user.password).attr("disabled", true)
	$('#btnSalvarFormConsulta').attr("disabled", true)
	$('#btnExcluirConsulta').click(
		function() {
			removeFunction(user.id)
			$('#buscaModal').modal('hide')
	})
	
	$('#tabelaTelefonesModalFind').empty();
	for( let phone of user.phones){
			console.log(phone)
			
		var componentPhone = ` <tr id='phone${phone.id}'>
						<td scope='row'>${phone.ddd}</td>
						<td>${phone.number}</td>
						<td>${phone.type}</td>
						<td>
							<button onclick=${removeFunctionPhone}(${phone.id}) type="button" class="btn btn-danger btn-sm" data-toggle="tooltip" data-placement="top" title="Excluir usuário">
								<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
								<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
								</svg>
							</button> 
						</td>
					</tr>`;
					
	
	$('#tabelaTelefonesModalFind').append(componentPhone);
	}
  }

  openModalFormUpdate({id, name, email, password}) {
    $('#alterarModal').modal();
    $('#idAlterar').val(id);
	$('#idAlterar').attr('disabled', true);
    $('#nomeAlterar').val(name.replace(/%20/g, ' '));
    $('#emailAlterar').val(email);
	$('#senhaAlterar').val(password);
  }

  openPhoneModal(phonesList, removeFunctionPhone) {
	$('#tabelaTelefones').empty();
	$('#telefoneModal').modal()
	for( let phone of phonesList){
			console.log(phone)
			
		var componentPhone = ` <tr id='phone${phone.id}'>
						<td scope='row'>${phone.ddd}</td>
						<td>${phone.number}</td>
						<td>${phone.type}</td>
						<td>
							<button onclick=${removeFunctionPhone}(${phone.id}) type="button" class="btn btn-danger btn-sm" data-toggle="tooltip" data-placement="top" title="Excluir usuário">
								<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
								<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
								</svg>
							</button> 
						</td>
					</tr>`;
					
	
	$('#tabelaTelefones').append(componentPhone);
	}

  }

 enableModalFormUpdate() {
    $('#nomeConsulta').attr('disabled', false);
    $('#emailConsulta').attr('disabled', false);
    $('#senhaConsulta').attr('disabled', false);
    $('#dddConsulta').attr('disabled', false);
    $('#numeroConsulta').attr('disabled', false);
    $('btnSalvarForm').attr('disabled', false);
	$('#btnSalvarFormConsulta').attr("disabled", false)
  }


renderNewUserInTable(dataUserList, nameRemoveFunction, namePhoneRemoveFunction, nameObjView) {
	var user = {
		id: dataUserList.id,
		name: dataUserList.name.replace(/\s/g, '%20'),
		email: dataUserList.email,
		password: dataUserList.password,
		phones : dataUserList.phones
	}
     var component = ` <tr id='${user.id}'>
								<td scope='row'>${user.id}</td>
								<td>${user.name.replace(/%20/g, ' ')}</td>
								<td>${user.email}</td>
								<td>${user.password}</td>
								<td>
									<button id="btnAlterarLista${user.id}" onclick=${nameObjView}.openModalFormUpdate(${JSON.stringify(user)}) type="button" class="btn btn-secondary btn-sm mr-2">
										<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
										</svg>
									</button>
									<button onclick=${nameRemoveFunction}(${user.id}) type="button" class="btn btn-danger btn-sm">
										<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
											<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
											<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
										</svg>
									</button> 
								</td>
								<td id="buttonPhonesTd${user.id}">
									${this.contatosExist(user, nameObjView, nameRemoveFunction)}
								</td>
							</tr>`;

      $('#tabelaUsuarios').append(component);
  }


	updateTableUser(user, nameRemoveFunction, namePhoneRemoveFunction, nameObjView){
		console.log(user)
		user.name = user.name.replace(/\s/g, '%20')
		var component = `<td scope='row'>${user.id}</td>
						 <td>${user.name.replace(/%20/g, ' ')}</td>
						 <td>${user.email}</td>
						 <td>${user.password}</td>
						 <td>
							<button id="btnAlterarLista${user.id}" onclick=${nameObjView}.openModalFormUpdate(${JSON.stringify(user)}) type="button" class="btn btn-secondary btn-sm mr-2">
								<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
								</svg>
							</button>
							<button onclick=${nameRemoveFunction}(${user.id}) type="button" class="btn btn-danger btn-sm">
								<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
								<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
							</svg>
							</button>
						 </td>
					     <td id="buttonPhonesTd${user.id}">
							${this.contatosExist(user, nameObjView, namePhoneRemoveFunction )}
						 </td>`;
	$(`#${user.id}`).empty();
	$(`#${user.id}`).append(component)
	}
	
	contatosExist(user, nameObjView, removePhoneFunction){
		var button;
		if(user.phones.length > 0){
			button =  `<Button class="btn btn-secondary" onclick=${nameObjView}.openPhoneModal(${JSON.stringify(user.phones)},'${removePhoneFunction}')>Ver contatos</button></td>`
		}else{
			button = `<Button class="btn btn-secondary" disabled data-toggle="tooltip" data-placement="top" title="Não ha contatos" >Ver contatos</button>`
		}
		return button
	}
}
