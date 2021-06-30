package command.impl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import command.Command;
import command.bind.PhoneBind;
import dao.UserDAO;
import model.Phone;
import model.User;
import model.dto.UserDto;

public class AddUserPhoneCommand implements Command {

	private UserDAO dao;

	public AddUserPhoneCommand(UserDAO dao) {
		this.dao = dao;
	}

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res) {
		
		Phone phone = PhoneBind.getPhone(req);
		
		Long userId = Long.parseLong(req.getParameter("id"));
		
		Gson json = new GsonBuilder().create();
		try {
			User userSave = dao.addUserPhone(phone, userId);
			UserDto userDto = UserDto.toModel(userSave);
			res.setContentType("application/json");
			res.setCharacterEncoding("UTF-8");
			res.getWriter().print(json.toJson(userDto));
		} catch (Exception ex) {
			ex.printStackTrace();
		}

	}
	
	
}
