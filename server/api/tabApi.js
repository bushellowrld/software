const models = require('../db')
 const express = require('express')
 const router = express.Router()
 const mysql = require('mysql')
 const $sql = require('../sqlMap')
 // 连接数据库
 const conn = mysql.createConnection(models.mysql)
 conn.connect()
 const jsonWrite = function (res, ret) {
   if (typeof ret === 'undefined') {
     res.json({
       code: '1', msg: '操作失败'
     })
   } else {
     res.json(
       ret
     )
   }
 }
 
 // 接口：增加信息
 router.post('/addTab', (req, res) => {
   const sql = $sql.table.add
   const params = req.body
   console.log('添加', params)
   conn.query(sql, [params.idno, params.name, params.chinese, params.math, params.inte, params.english, params.spoken, params.listen, params.all, params.time], function (err, result) {
     if (err) {
       console.log(err)
     }
     if (result) {
       jsonWrite(res, result)
     }
   })
 })
 
 // 接口：查询全部
 router.get('/showTab', (req, res) => {
   const sql = $sql.table.show
   const params = req.body
   console.log(params)
   conn.query(sql, [params.idno, params.name, params.chinese, params.math, params.inte, params.english, params.spoken, params.listen, params.all, params.time], function (err, result) {
     if (err) {
       console.log(err)
     }
     if (result) {
       jsonWrite(res, result)
     }
   })
 })
 
 // 接口：删除信息
 router.post('/delTab', (req, res) => {
   const sql = $sql.table.delete
   const params = req.body
   console.log('删除', params)
   conn.query(sql, [params.idno], function (err, result) {
     if (err) {
       console.log(err)
     }
     if (result) {
       jsonWrite(res, result)
     }
   })
 })
  
 // 接口：修改信息
 router.post('/updateStu', (req, res) => {
   const sql = $sql.Stu.update
   const params = req.body
   console.log('修改', params)
   conn.query(sql, [params.idno, params.name, params.chinese, params.math, params.inte, params.english, params.spoken, params.listen, params.all, params.time], function (err, result) {
     if (err) {
       console.log(err)
     }
     if (result) {
       jsonWrite(res, result)
     }
   })
 })
  
module.exports = router;