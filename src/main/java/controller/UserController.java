package controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import command.Command;
import command.impl.AddUserPhoneCommand;
import command.impl.CreateUserCommand;
import command.impl.FindUserCommand;
import command.impl.ListUserCommand;
import command.impl.LoginCommand;
import command.impl.LogoutCommand;
import command.impl.RemoveUserCommand;
import command.impl.RemoveUserPhoneCommand;
import command.impl.UpdateUserCommand;
import dao.UserDAO;


public class UserController extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public UserController() {
        super();
        // TODO Auto-generated constructor stub
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String commandStr =  (String) request.getParameter("command");
		Command command = getCommands().get(commandStr);
		command.execute(request, response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
	
	private Map<String, Command> getCommands(){
		Map<String, Command> commands = new HashMap<String, Command>();
		commands.put("login", new LoginCommand(UserDAO.getInstance()));
		commands.put("logout", new LogoutCommand());
		commands.put("list", new ListUserCommand(UserDAO.getInstance()));
		commands.put("find", new FindUserCommand(UserDAO.getInstance()));
		commands.put("create", new CreateUserCommand(UserDAO.getInstance()));
		commands.put("update", new UpdateUserCommand(UserDAO.getInstance()));
		commands.put("remove", new RemoveUserCommand(UserDAO.getInstance()));
		commands.put("addPhone", new AddUserPhoneCommand(UserDAO.getInstance()));
		commands.put("removePhone", new RemoveUserPhoneCommand(UserDAO.getInstance()));
		
		return commands;
		
		
	}

}
