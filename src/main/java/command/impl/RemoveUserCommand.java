package command.impl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import command.Command;
import dao.UserDAO;


public class RemoveUserCommand implements Command {

	private UserDAO dao;

	public RemoveUserCommand(UserDAO dao) {
		this.dao = dao;
	}
	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res){
		
		Gson json = new GsonBuilder().create();
		
		Long id = Long.parseLong(req.getParameter("id"));
		try {
			dao.remove(id);
			res.setContentType("application/json");
			res.setCharacterEncoding("UTF-8");
			res.getWriter().print(json.toJson("msg: Usuário excluido!"));
		}catch(Exception ex){
			ex.printStackTrace();
		}
		
	}



}
