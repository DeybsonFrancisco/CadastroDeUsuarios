package command.impl;

import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import command.Command;
import dao.UserDAO;
import model.User;
import model.dto.UserDto;

public class FindUserCommand implements Command {


	private UserDAO dao;

	public FindUserCommand(UserDAO dao) {
		this.dao = dao;
	}
	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res){
		
		Gson json = new GsonBuilder().create();
		
		Long id = Long.parseLong(req.getParameter("id"));
		
		try {
			Optional<User> userSave = dao.findById(id);
			if(userSave.isPresent()) {
				UserDto dto = UserDto.toModel(userSave.get());
				res.setContentType("application/json");
				res.setCharacterEncoding("UTF-8");
				res.getWriter().print(json.toJson(dto, UserDto.class));
			}else {
				res.setContentType("application/json");
				res.setCharacterEncoding("UTF-8");
				res.getWriter().print(json.toJson("{'msg': 'não existe usuario com este id'}"));
			}

		}catch(Exception ex){
			ex.printStackTrace();
		}
		
	}


}
