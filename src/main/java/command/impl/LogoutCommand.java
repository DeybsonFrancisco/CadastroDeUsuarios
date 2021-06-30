package command.impl;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import command.Command;

public class LogoutCommand implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res){
		
		try {
			req.getSession().invalidate();
			res.getWriter().print(req.getContextPath()+"/index.jsp");
		}catch (Exception e) {
			e.printStackTrace();
		}	
	}

}
