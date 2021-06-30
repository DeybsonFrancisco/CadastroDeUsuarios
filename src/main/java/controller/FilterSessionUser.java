package controller;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.User;

/**
 * Servlet Filter implementation class FilterSessionUser
 */
@WebFilter(urlPatterns = "/dashboard.jsp")
public class FilterSessionUser implements Filter {

	
	String path;

    public FilterSessionUser() {
        // TODO Auto-generated constructor stub
    }

	public void destroy() {
		// TODO Auto-generated method stub
	}


	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		 HttpServletResponse res = (HttpServletResponse) response;
	        HttpServletRequest req = (HttpServletRequest) request;
	        HttpSession session = req.getSession();

	        User user = (User) session.getAttribute("user");
	        if (user == null) {
	            session.invalidate();
	            res.sendRedirect(path + "/index.jsp");
	        } else {
	            res.setHeader("Cache-control", "no-cache, no-store");
	            res.setHeader("Pragma", "no-cache");
	            res.setHeader("Expires", "-1");
	            chain.doFilter(request, response);
	        }
	}

	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
		this.path = fConfig.getServletContext().getContextPath();
	}

}
