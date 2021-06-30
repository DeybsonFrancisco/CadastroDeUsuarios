package command.impl;

import java.lang.reflect.Type;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import command.Command;

import com.google.gson.GsonBuilder;

import dao.UserDAO;
import model.User;
import model.dto.UserDto;

public class ListUserCommand implements Command {

	private UserDAO dao;

	public ListUserCommand(UserDAO dao) {
		this.dao = dao;
	}
	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res){
		
		Gson json = new GsonBuilder().create();
		
		Type type = new TypeToken<List<UserDto>>() {}.getType();
		try {
			List<User> userList = dao.findAll();
			
			List<UserDto> userListDto = UserDto.toModelList(userList);
			res.setContentType("application/json");
			res.setCharacterEncoding("UTF-8");
			res.getWriter().print(json.toJson(userListDto, type));
		}catch(Exception ex){
			ex.printStackTrace();
		}
		
	}
	
	


}
