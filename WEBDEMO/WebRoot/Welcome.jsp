<%@page import="sun.security.jgss.LoginConfigImpl"%>
<%@page import="com.WEBDEMO.Bean.LoginBean"%>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>Welcome</title>
  </head>
  
  <body>
  	<% 
  		LoginBean loginBean = (LoginBean)session.getAttribute("login");
  		
  	%>
  	<h2>姓名：<%=loginBean.getUname() %></h2>
	<h2>密码：<%=loginBean.getUpassword() %></h2>
	<h2>性别：<%=loginBean.getUsex()  %></h2>
	    欢迎登陆本系统！
  </body>
</html>
