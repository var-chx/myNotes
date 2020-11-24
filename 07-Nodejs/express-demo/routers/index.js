const express = require('express')
const Router = express.Router()
const md5 = require('blueimp-md5')
const UserModel = require('../models/UserModel')
const RoleModel = require('../models/RoleModel')

// 登录接口
Router.post('/api/login', (req, res) => {
    const { username, password } = req.body
    UserModel.findOne({username, password: md5(password)})
    .then(user => {
        if(user) { // 登录成功
            // 给浏览器设置 cookie
            res.cookie('userid', user._id, {maxAge: 1000 * 60 * 60 * 24})
            if (user.role_id) {
                RoleModel.findOne({_id: user.role_id})
                .then(role => {
                    user._doc.role = role
                    res.send({status: 0, data: user})
                })
            } else {
                user._doc.role = {menus: []}
                res.send({status: 0, data: user})
            } 
        } else { // 登录失败
            res.send({status: 1, msg: '用户名或密码不对'})
        }
    })
})

// 添加角色 /manage/role/add

Router.post('/api/manage/role/add', (req, res) => {
    const { roleName } = req.body
    RoleModel.create({ name: roleName})
    .then(role => {
        res.send({status: 0, data: role})
    })
    .catch(err => {
        console.error('添加角色异常', err)
        res.send({status: 1, msg: '添加角色异常, 请重新尝试'})
    })
})

// 获取所有角色list
Router.get('/api/manage/role/list', (req, res) => {
    RoleModel.find()
    .then(roles => {
        res.send({status: 0, data: roles})
    })
    .catch(err => {
        res.send({status: 1, msg: '获取角色列表异常'})
    })

})

// 更新角色 也就是给角色设置权限
Router.post('/api/manage/role/update', (req, res) => {
    const role = req.body
    role.auth_time = Date.now()
    RoleModel.findOneAndUpdate({_id: role._id}, role)
    .then( oldRole => {
        res.send({status: 0 , data: { ...oldRole._doc, ...role }})
    })
    .catch(err => {
        res.send({status: 1, msg: '更新异常'})
    })
})

// 获取用户
Router.get('/api/manage/user/list', (req, res) => {
    UserModel.find()
    .then(users => {
        RoleModel.find()
        .then(roles => {
            res.send({status: 0, data: {users, roles}})
        })
    })
})

// 添加用户
Router.post('/api/manage/user/add', (req, res) => {
    UserModel.create({...req.body, password: md5(req.body.password)})
    .then(role => {
        res.send({status: 0, data: role})
    })
    .catch(err => {
        console.error('添加角色异常', err)
        res.send({status: 1, msg: '添加角色异常, 请重新尝试'})
    })
})

// 删除用户

Router.post('/api/manage/user/delete', (req, res) => {
    const { userId : _id } = req.body
    UserModel.deleteOne({_id})
    .then(() => {
        res.send({status: 0})
    })

})

// 测试 get
Router.get('/api/login', (req, res) => {
    console.log(req)
    console.log(req.body, 9091)
    console.log(req.query, 9090)
    UserModel.findOne({username: 'admin'})
    .then(user => {
        res.set({
            'Content-Type': 'text/plain',
        })
        res.cookie('userid', user._id, {maxAge: 1000 * 60 * 60 * 24})
        res.send(user)
    })
})


module.exports = Router