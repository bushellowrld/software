//sqlMap.js用来实现sql语句的api
//sqlMap.js
var sqlMap = {
  // 用户
  admin_user: {
	  login:'SELECT password FROM user WHERE user = ?;'
  },
  table: {
    add: 'insert into t_raw_data( student_num, student_name, lang_score, math_score, combination_score, sec_lang_score, speaking_score, listening_score, total_score,date) values (?,?,?,?,?,?,?,?,?,?)',
    del: 'delete from t_raw_data where student_num = ?',
    search: 'select * from t_raw_data where student_num = ?', //查找成绩信息
	show:'select * from t_raw_data',
	update:'update t_raw_data set student_num = ?,lang_score= ?,math_score = ?,combination_score=?,sec_lang_score = ?,speaking_score = ?,listening_score =?,total_score = ?,date = ? where student_name =?'
  },
  stu: {
    add: 'insert into t_admission_data(student_num, student_num, school, major, ad_type, ad_method) values (?, ?, ?,?,?,?)',
    search: 'select * from t_admission_data where student_num = ?', //录取情况
	del:'delete from t_admission_data where student_num = ?',
	show:'select * from t_admission_data',
	update:'update t_admission_data set student_num = ?,school= ?,major = ?,ad_type=?,ad_method = ? where student_num =?'
 
  }
}
module.exports = sqlMap;
