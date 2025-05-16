package com.xy.jupiter.service;

import com.xy.jupiter.dao.RegisterDao;
import com.xy.jupiter.entity.db.User;
import com.xy.jupiter.entity.db.User;
import com.xy.jupiter.util.Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.IOException;

@Service
public class RegisterService {

    @Autowired
    private RegisterDao registerDao;

    public boolean register(User user) throws IOException {
        user.setPassword(Util.encryptPassword(user.getUserId(), user.getPassword()));
        return registerDao.register(user);
    }
}
