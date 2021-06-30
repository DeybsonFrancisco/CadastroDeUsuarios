package command.bind;

import javax.servlet.ServletRequest;

import model.Phone;

public class PhoneBind {

	public static Phone getPhone(ServletRequest req) {
		Phone phone = new Phone();
		phone.setDdd(Integer.parseInt(req.getParameter("ddd")));
		phone.setNumber(req.getParameter("num"));
		phone.setType(req.getParameter("type"));

		return phone;
	}

}
