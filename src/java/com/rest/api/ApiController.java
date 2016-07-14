package com.rest.api;

import com.db.providers.objects.User;
import com.utils.HibernateUtils;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.ui.ModelMap;

@Controller
public class ApiController {
    
   @RequestMapping(value = "/index", method = RequestMethod.GET)
   public String goIndex (ModelMap model) {
      model.addAttribute("message", "Hello ANSHU MVC Framework!");
      return "index";
   }
   
   
    @RequestMapping(value = "/userCheck", produces="application/json", method = RequestMethod.POST)
    @ResponseBody
    public String userCheckFunction(HttpServletRequest req) {
            
            JSONObject res = new JSONObject();
            Transaction trns;
            SessionFactory factory = HibernateUtils.getSessionFactory();
            Session session  = factory.openSession();
            trns = session.beginTransaction();
            Criteria criteria = session.createCriteria(User.class);
            criteria.add(Restrictions.eq("user_name", req.getParameter("loginId")));
            criteria.add(Restrictions.eq("user_password", req.getParameter("loginPass")));
            
            List<User> users = new ArrayList<User>();
            users=criteria.list();
            
            if(users.size()==1){
                res.put("result","success");
            }else{
                res.put("result","error");
            }
            session.flush();
            //HibernateUtils.shutdown();
            return res.toString();
    }
}
