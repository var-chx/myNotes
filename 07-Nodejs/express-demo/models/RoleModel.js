const mongoose = require('mongoose')
const roleSchema = new mongoose.Schema({
    name: { type: String, required: true},
    auth_name: String, // 授权人
    auth_time: Number, // 授权时间
    create_time: { type: Number, required: true}, // 创建时间
    menus: Array // 所有有权限操作的菜单path的数组
})

const RoleModel = mongoose.model('roles', roleSchema)

module.exports = RoleModel