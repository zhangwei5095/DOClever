webpackJsonp([9],{496:function(n,e,t){(function(n,e,t){new n({el:"#app",data:{question:"",pwd:"",pwd1:"",answer:"",resetPending:!1,questionPending:!1,step:0,username:""},methods:{getQuestion:function(){var n=this;if(!this.username)return void e.tip("用户名不能为空",0);this.questionPending=!0,t.get("/user/question",{name:n.username},{"content-type":"application/x-www-form-urlencoded"}).then(function(t){n.questionPending=!1,200==t.code?(e.notify(t.msg,1),n.step=1,n.question=t.data):e.notify(t.msg,0)})},reset:function(){var n=this;return this.pwd&&this.pwd1&&this.answer?this.pwd!=this.pwd1?void e.tip("两次输入的密码不一致",0):(this.questionPending=!0,void t.put("/user/reset",{name:n.username,answer:n.answer,password:n.pwd},{"content-type":"application/x-www-form-urlencoded"}).then(function(t){n.questionPending=!1,200==t.code?(e.notify(t.msg,1),setTimeout(function(){location.href="../login/login.html"},1500)):e.notify(t.msg,0)})):void e.tip("密码,确认密码,找回密码答案不能为空",0)}}})}).call(e,t(5),t(1),t(3))},646:function(n,e,t){n.exports=t(496)}},[646]);