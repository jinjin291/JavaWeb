package com.WEBDEMO.UserServlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import com.WEBDEMO.Bean.LoginBean;
import com.WEBDEMO.Service.UserService;

public class loginServlet extends HttpServlet {
	/**
	 * 
	 * ���������ڴ���view ͨ��get  �������
	 * @param request
	 * @param response
	 * 
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
			this.doPost(request, response);
	
	}
	/**
	 * 
	 * ���ڴ���view �������ĵ�������
	 * @param request   
	 * @param response
	 * @throws ServletException
	 * @throws IOException
	 * 
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		//��ȡsession ����
		HttpSession session=request.getSession(true);
		String name=request.getParameter("uname");
		String Pass=request.getParameter("upassword");
		LoginBean Loginer=new LoginBean();
		Loginer.setUname(name);
		Loginer.setUpassword(Pass);
		ArrayList<LoginBean> login= null;
		try {
			login = new UserService().checkLogin(Loginer);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
		if(login!=null&&login.size()>0){
			LoginBean loginBean = new LoginBean();
			loginBean.setUname(login.get(0).getUname());
			loginBean.setUpassword(login.get(0).getUpassword());
			loginBean.setUsex(login.get(0).getUsex());
			
			session.setAttribute("login", loginBean);
			response.sendRedirect("../Home/index.jsp");
		}
		else{
			response.sendRedirect("../login.jsp");
		}
		
	}

}
