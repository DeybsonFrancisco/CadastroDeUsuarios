package command.impl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import command.Command;
import command.bind.PhoneBind;
import dao.UserDAO;
import model.Phone;
import model.dto.PhoneDto;


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
			Phone phoneSave = dao.addUserPhone(phone, userId);
			PhoneDto dto = PhoneDto.toModel(phoneSave);
			res.setContentType("application/json");
			res.setCharacterEncoding("UTF-8");
			res.getWriter().print(json.toJson(dto));
		} catch (Exception ex) {
			ex.printStackTrace();
		}

	}
	
	
}
