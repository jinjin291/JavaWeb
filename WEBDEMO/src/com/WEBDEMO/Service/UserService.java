package com.WEBDEMO.Service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.WEBDEMO.Bean.LoginBean;
import com.WEBDEMO.Pojo.User;
import com.WEBDEMO.Util.UtilJDBC;
/**
 * @author JT
 *
 */
public class UserService {
	 PreparedStatement sql=null; 
     Connection con=null;
     boolean flag=false;      
     /**
 	 * 用于注册用户添加
 	 * @param loginer
 	 * @return
 	 */
		public boolean Save(User user){
			
		    try{
				con=UtilJDBC.getConnection();//连接数据	
				
			    sql=con.prepareStatement("insert into T_WEBDEMO_USER(userid,uname,upassword,usex) values(users_sequence.nextval,?,?,?)");
		    
			    sql.setString(1, user.getUname());
		        sql.setString(2, user.getUpassword());
		        sql.setString(3,"男");
		        if(sql.executeUpdate()>0){
		        	flag=true;
		        }; //执行！！！	   
			}catch(SQLException E){
				E.printStackTrace();
				flag=false;
			}finally
		       {    
		           if(sql!= null)
					try {
						sql.close();
					} catch (SQLException e) {
						e.printStackTrace();
					} 
		           if(con != null)
					try {
						con.close();
					} catch (SQLException e) {
						e.printStackTrace();
					} 
		       } 
			return flag;
			
		}
		
		/**
		 * 用于检查用户登入
		 * @param Loginer
		 * @return  ArrayList  登入者列表
		 * @throws SQLException 
		 */
		public ArrayList<LoginBean> checkLogin(LoginBean Loginer) throws SQLException{
			PreparedStatement sql=null; 
		    ResultSet rs=null;
		    Connection con=null;
		    ArrayList<LoginBean> login=null;
			try{
				con=UtilJDBC.getConnection();//连接数据		 	
			    sql=con.prepareStatement("select * from  T_WEBDEMO_USER where UNAME='"+Loginer.getUname()+"'");
			    rs=sql.executeQuery(); //执行！！！
			   
			    int N=0;
			    int P=0;
			    while(rs.next()){
			    	if(Loginer.getUname().equals(rs.getString("uname"))){
			    		N=1001;
			    		if(Loginer.getUpassword().equals(rs.getString("upassword"))){
			    		P=1001;
			    			//实例化保存用户登入信息LoginBean
			    			LoginBean uu=new LoginBean();
			    			uu.setUserid(rs.getInt("userid"));
			    			uu.setUname(rs.getString("uname"));
			    			uu.setUpassword(rs.getString("upassword"));
			    			uu.setUsex(rs.getString("usex"));
		    			login=new ArrayList<LoginBean>();//实例化登入对象列表	
			    			login.add(uu);	
			    		}
			    		else{
			    			//密码错误			    			
			    		}
			    	}
			    	else{
			    		//不存在该用户		    		
			    	}
			    }
			}catch(SQLException E){
				E.printStackTrace();
			}finally
		       {    
		           if(sql!= null)
					try {
						sql.close();
					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					} 
		           if(con != null)
					try {
						con.close();
					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					} 
		       } 
			return login;	 
		}

}
