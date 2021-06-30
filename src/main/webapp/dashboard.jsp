<%@page import="model.User"%>
<jsp:include page="head.jsp"></jsp:include>
<style>
#conteiner {
	width: 95vw;
	margin: 0 auto;
	padding-top: 20px;
}

#buscarUsuario {
	height: 110px;
}
</style>

<%
User user = (User)session.getAttribute("user");
String name = user.getName();
%>
<body>
	<header>
		<nav class="navbar navbar-light bg-dark">
			<span class="navbar-brand mb-0 text-danger h1">Dashboard
				Usuarios</span>
			<span class="text-white"><% out.println("Bem vindo: "+ name+"    "); %>
				<span>
					<button type="button" class="btn btn-light" id="buttonSair">Sair</button>
				</span>
			</span>
			
		</nav>
	</header>

	<div id="conteiner" class="row justify-content-between">
		<div id="buscarUsuario" class="col-2 bg-dark .mr-1 rounded">
			<Strong class="text-light">Buscar usuario</Strong><br>
			<div class="input-group mb-3">
				<input id="idBusca" type="text" class="form-control"
					placeholder="Digite o ID" aria-label="Recipiente para nickname"
					aria-describedby="basic-addon2">
				<button id="btnBusca" type='button'
					class='btn btn-secondary btn-sm mr-2'>
					<svg width="1em" height="1em" viewBox="0 0 16 16"
						class="bi bi-search" fill="currentColor"
						xmlns="http://www.w3.org/2000/svg">
  							<path fill-rule="evenodd"
							d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
  							<path fill-rule="evenodd"
							d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
				    	</svg>
				</button>
			</div>
		</div>
		<table class="table table-dark table-striped col-9">
			<thead class="thead">
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Nome</th>
					<th scope="col">Email</th>
					<th scope="col">Senha</th>
					<th scope="col">Ações</th>
					<th scope="col"><button id="addButton" type="button"
							class="btn btn-success">Add novo usuário</button></th>
				</tr>
			</thead>
			<tbody id="tabelaUsuarios">

			</tbody>
		</table>

	</div>

	<!-- Modal add novo usuário -->
	<div class="modal fade" id="addModal" tabindex="-1"
		aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="ModalLabel">Add novo usuário</h5>
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<form id="formAdd">
						<div class="form-group">
							<label for="nome">Nome</label> <input type="text"
								class="form-control" id="nomeAdd" name="nome"
								aria-describedby="emailHelp" required>
						</div>
						<div class="form-group">
							<label for="email">Email</label> <input type="email"
								class="form-control" id="emailAdd" name="email" required>
						</div>
						<div class="form-group">
							<label for="senha">Senha</label> <input type="password"
								class="form-control" id="senhaAdd" name="senha" required>
						</div>
						<button id="btnAddForm" type="submit" class="btn btn-primary">salvar</button>
					</form>
				</div>
			</div>
		</div>
	</div>


	<!-- Modal telefones -->
	<div class="modal fade" id="telefoneModal" tabindex="-1"
		aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="ModalLabel">Cotatos do usuário</h5>
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<table class="table table-dark table-striped col-12">
						<thead class="thead">
							<tr>
								<th scope="col">DDD</th>
								<th scope="col">Número</th>
								<th scope="col">Tipo</th>


							</tr>
						</thead>
						<tbody id="tabelaTelefones">

						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>



	<!-- Modal buscar -->
	<div class="modal fade" id="buscaModal" tabindex="-1"
		aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Usuario
						encontrado</h5>
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<form id="formAlterarConsulta">
						<div class="form-group">
							<label for="id">ID</label> <input type="text"
								class="form-control" id="idConsulta" name="id"
								aria-describedby="emailHelp">
						</div>
						<div class="form-group">
							<label for="nome">Nome</label> <input type="text"
								class="form-control" id="nomeConsulta" name="nome"
								aria-describedby="emailHelp" required>
						</div>
						<div class="form-group">
							<label for="email">Email</label> <input type="email"
								class="form-control" id="emailConsulta" name="email" required>
						</div>
						<div class="form-group">
							<label for="senha">Senha</label> <input type="password"
								class="form-control" id="senhaConsulta" name="senha" required>
						</div>

						<button id="btnAlterarConsulta" type="button"
							class="btn btn-secondary btn-sm mr-2">
							<svg width="1em" height="1em" viewBox="0 0 16 16"
								class="bi bi-pencil1" fill="currentColor"
								xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd"
									d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" /></svg>
						</button>
						<button id="btnExcluirConsulta" type="button"
							class="btn btn-danger btn-sm">
							<svg width="1em" height="1em" viewBox="0 0 16 16"
								class="bi bi-trash" fill="currentColor"
								xmlns="http://www.w3.org/2000/svg">
						  		<path
									d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
						  		<path fill-rule="evenodd"
									d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
							</svg>
						</button>

						<button id="btnSalvarFormConsulta" type="submit"
							class="btn btn-primary">salvar atualização</button>
					</form>

					<hr />

					<h6 class="modal-title" id="exampleModalLabel">Telefones</h6>
					<div class="scrollspy-example">
						<form id="list-item-1" class="align-items-end">
							<div class="form-group">
								<label for="ddd">DDD</label> <input type="number"
									class="form-control" id="dddConsulta" name="ddd"> <label
									for="numero">Número</label> <input type="number"
									class="form-control" id="numeroConsulta" name="nÃºmero">
								<label for="tipo">Tipo</label>
								<div class="form-check">
									<input class="form-check-input" type="radio" name="Fixo"
										id="RFixoCadastro" value="Fixo"> <label
										class="form-check-label" for="fixo"> Fixo </label>
								</div>
								<div class="form-check">
									<input class="form-check-input" type="radio" name="Celular"
										id="RCelularCadastro" value="Celular"> <label
										class="form-check-label" for="celular"> Celular </label>
								</div>
							</div>
							<button id="btnSalvarTelefoneFormConsulta" type="submit"
								class="btn btn-primary">salvar atualização</button>
						</form>
					</div>

				</div>
				<div class="modal-footer"></div>
			</div>
		</div>
	</div>

	<!-- Modal alterar na lista -->
	<div class="modal fade" id="alterarModal" tabindex="-1"
		aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="ModalLabel">Alterar usuário</h5>
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<form id="formAlterarLista">
						<div class="form-group">
							<label for="id">ID</label> <input type="text"
								class="form-control" id="idAlterar" name="id"
								aria-describedby="emailHelp">
						</div>
						<div class="form-group">
							<label for="nome">Nome</label> <input type="text"
								class="form-control" id="nomeAlterar" name="nome"
								aria-describedby="emailHelp">
						</div>
						<div class="form-group">
							<label for="email">Email</label> <input type="email"
								class="form-control" id="emailAlterar" name="email">
						</div>
						<div class="form-group">
							<label for="senha">Senha</label> <input type="password"
								class="form-control" id="senhaAlterar" name="senha">
						</div>
						<button id="btnAltersForm" type="submit" class="btn btn-primary">salvar</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</body>

<script src="js/dashboardPage/view.js"></script>
<script src="js/dashboardPage/index.js"></script>
<script>
	
</script>
</html>


