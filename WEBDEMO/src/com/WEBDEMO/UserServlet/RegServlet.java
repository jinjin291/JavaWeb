package com.WEBDEMO.UserServlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.WEBDEMO.Pojo.User;
import com.WEBDEMO.Service.UserService;

public class RegServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		this.doPost(request, response);
		
	}

	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
			String uname=request.getParameter("uname");
			String upassword=request.getParameter("upassword");
			
			User user=new User(uname, upassword);
			if(new UserService().Save(user)){
				 response.sendRedirect("../login.jsp");
			}else{
				 response.sendRedirect("../Reg.jsp");
			}
			
	
	}

}
