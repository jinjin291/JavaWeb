<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>登录</title>
<link href="Css/LoginCss.css" rel="stylesheet" type="text/css" />
</head>

<body>
<div id="main">
<div id="header">
	<img src="Images/Head1.png"  ></img>
</div>

<p id="text">#登录到您的账户#</p>
<form  action="User/loginServlet" id="content">
	<div class="include"><span class="flag">*用户名 </span><input type="text" id="User" name = "uname" placeholder="请输入用户名" /> <p class="warning" id="Uwarning"></p></div>
   
  <div class="include"><span class="flag">*密码 </span><input type="password" id="password" name = "upassword" placeholder="请输入密码"  /> <p class="warning" id="Pwarning"></p></div>
  <div id="back"><a href="Reg.jsp">注册账户-></a></div>
  <a style="text-decortion:none"><input id="register" type="submit" value="立即登录" /> </a>
 </form>
 </div>
<script type="text/javascript" src="JS/LoginJs.js"></script>
</body>
</html>
