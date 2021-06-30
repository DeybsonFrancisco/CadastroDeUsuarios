package command.impl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import command.Command;
import dao.UserDAO;

public class RemoveUserPhoneCommand  implements Command {

	private UserDAO dao;

	public RemoveUserPhoneCommand(UserDAO dao) {
		this.dao = dao;
	}
	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res){
		
		Gson json = new GsonBuilder().create();
		
		Long id = Long.parseLong(req.getParameter("id"));
		try {
			dao.removeUserPhone(id);
			res.setContentType("application/json");
			res.setCharacterEncoding("UTF-8");
			res.getWriter().print(json.toJson("msg: telefone do usuário excluido!"));
		}catch(Exception ex){
			ex.printStackTrace();
		}
		
	}



}