package command.bind;

import javax.servlet.ServletRequest;

import model.User;

public class UserBind {

	public static User getUser(ServletRequest req) {
		User user = new User();
		String[] phones = req.getParameterValues("phones");
		System.out.println(phones);
		user.setName(req.getParameter("name"));
		user.setEmail(req.getParameter("email"));
		user.setPassword(req.getParameter("password"));

		return user;
	}

}
