package command.impl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import command.Command;
import dao.UserDAO;
import model.User;

public class LoginCommand  implements Command{

	private UserDAO dao;

	public LoginCommand(UserDAO dao) {
		this.dao = dao;
	
	}
	
	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res){
		
		String email = req.getParameter("email");
		String senha =  req.getParameter("password");
	
		try {
			User user = dao.login(email, senha);
			req.getSession().setAttribute("user", user);
			String context = req.getContextPath() + "/dashboard.jsp";
			res.getWriter().print(context);
		} catch (Exception e) {
			e.printStackTrace();
		} 
		
	}

}
