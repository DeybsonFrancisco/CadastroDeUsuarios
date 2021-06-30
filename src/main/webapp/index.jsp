
<jsp:include page="head.jsp" />
<body>
	<header>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
			<span class="navbar-brand mb-0 text-danger h1">Sistema para cadastro de usuários</span>
			<button class="navbar-toggler" type="button" data-toggle="collapse"
				data-target="#navbarNav" aria-controls="navbarNav"
				aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item active"><a class="nav-link text-white"
						href="#" data-toggle="modal" data-target="#loginModal">Login <span
							class="sr-only"></span></a></li>
					<li class="nav-item active"><a class="nav-link text-white"
						href="#" data-toggle="modal" data-target="#cadastroModal">Cadastre-se
							<span class="sr-only"></span>
					</a></li>


				</ul>
			</div>
		</nav>
	</header>

	<!-- Modal login-->
	<div class="modal fade" id="loginModal" tabindex="-1"
		aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Login</h5>
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<form id="formLogin">
						<div class="form-group">
							<label for="emaiLogin">Email</label> <input type="email"
								class="form-control" id="emailLogin"
								aria-describedby="emailHelp" required>
						</div>
						<div class="form-group">
							<label for="senhaLogin">Senha</label> <input
								type="password" class="form-control" id="senhaLogin" required>
						</div>
						<button type="submit" class="btn btn-primary">Entrar</button>
					</form>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal cadastro-->
	<div class="modal fade" id="cadastroModal" tabindex="-1"
		aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Cadastro</h5>
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<form id="formCadastro">
						<div class="form-group">
							<label for="nome">Nome</label> <input type="text"
								class="form-control" id="nomeCadastro" name="nome"
								aria-describedby="emailHelp" required>
						</div>
						<div class="form-group">
							<label for="email">Email</label> <input type="email"
								class="form-control" id="emailCadastro" name="email" required>
						</div>
						<div class="form-group">
							<label for="senha">Senha</label> <input type="password"
								class="form-control" id="senhaCadastro" name="senha" required>
						</div>
						<button id="buttonSalvarUsuario" type="submit"
							class="btn btn-primary btn-block">Salvar</button>
					</form>
					<hr />
					<h6>Add telefone</h6>
					<form id="cadastroTelefone">
						<div class="form-group">
							<label for="ddd">DDD</label>
							 	<input type="number" class="form-control" id="dddCadastro" name="ddd" disabled required/> 
							 <label for="numero">Número</label> 
							 	<input type="number" class="form-control" id="numeroCadastro" name="numero" disabled required/>
							<label for="tipo">Tipo</label>
							<div class="form-check">
								<input class="form-check-input" type="radio" name="tipo" id="tipoFixo" value="Fixo" >
								<label class="form-check-label" for="tipoFixo"> Fixo </label>
							</div>
							<div class="form-check">
								<input class="form-check-input" type="radio" name="tipo" id="tipoCelular" value="Celular"checked>
								<label class="form-check-label" for="tipoCelular"> Celular </label>
							</div>
						</div>
						<button id="buttonAddTelefone" type="submit"
							class="btn btn-primary btn-block">Adicionar</button>
					</form>

					<hr />



				</div>
				<div class="modal-footer">
					<button type="button" id="buttonFinalizarCadastro"  class="btn btn-primary"  disabled >Finalizar</button>
				</div>
			</div>
		</div>
	</div>
	</div>
<script src="js/indexPage/index.js"></script>
</body>
</html>