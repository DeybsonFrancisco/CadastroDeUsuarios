package command.impl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import command.bind.UserBind;
import command.Command;
import dao.UserDAO;
import model.User;

public class CreateUserCommand implements Command{
	
	private UserDAO dao;

	public CreateUserCommand(UserDAO dao) {
		this.dao = dao;
	}
	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res){
		
		Gson json = new GsonBuilder().create();
		
		User user = UserBind.getUser(req);
		try {
			User userSave = dao.create(user);
			res.setContentType("application/json");
			res.setCharacterEncoding("UTF-8");
			res.getWriter().print(json.toJson(userSave, User.class));
		}catch(Exception ex){
			ex.printStackTrace();
		}
		
	}

}
