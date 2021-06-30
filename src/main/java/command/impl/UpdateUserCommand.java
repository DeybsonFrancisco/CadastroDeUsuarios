package command.impl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import command.bind.UserBind;
import command.Command;
import dao.UserDAO;
import model.User;
import model.dto.UserDto;

public class UpdateUserCommand implements Command{

	private UserDAO dao;

	public UpdateUserCommand(UserDAO dao) {
		this.dao = dao;
	}
	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res){
		
		Gson json = new GsonBuilder().create();
		Long id = Long.parseLong(req.getParameter("id"));
		User user = UserBind.getUser(req);
		try {
			dao.update(user, id);
			User userSave = dao.findById(id).get();
			UserDto dto = UserDto.toModel(userSave);
			res.setContentType("application/json");
			res.setCharacterEncoding("UTF-8");
			res.getWriter().print(json.toJson(dto, UserDto.class));
		}catch(Exception ex){
			ex.printStackTrace();
		}
		
	}


}
