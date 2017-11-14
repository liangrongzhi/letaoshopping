/**
 * Created by liangrongzhi on 12/11/2017.
 */
$(function () {
    //登录表单校验
    //1.用户名不能为空
    //2.用户密码不能为空
    //3.密码的长度是6-12位


    //获取到表单
    var $form = $("form");

    //调用bootstrapValidator
    $form.bootstrapValidator({
    //配置校验时的小图标
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
        //规则
        fields: {
            //对应了表单中的name属性
            username: {
            //写username所有的校验规则
                validators: {
                    notEmpty:{
                        message:"用户名不能为空"
                    }
                }
            },

            password: {

                validators:{
                    notEmpty:{
                        message:"密码不能为空"
                    },
                    stringLength:{
                        min:6,
                        max:12,
                        message:"密码长度是6-12位"
                    }
                }
            }
        }
    });
    //console.log("呵呵");
    //给表单注册一个校验成功事件 success.form.bv
    $form.on("success.form.bv", function (e) {
        //阻止默认行为
        e.preventDefault();
        //console.log("呵呵");

        //console.log($form.serialize());
        //使用ajax发送登录请求
        $.ajax({
            type:"post",
            url:"/employee/employeeLogin",

            data:$form.serialize(),
            success:function (data) {
                //console.log(data);
                if(data.success){
                    //跳转到首页
                    location.href = "index.html";
                }

                if(data.error === 1000){
                    alert("用户名不存在")
                }

                if(data.error === 1001){
                    alert("密码错误")
                }

            }
        });

        //$.ajax({
        //    type:"post",
        //    url:'/employee/employeeLogin',
        //    data:$form.serialize(),
        //    success:function(data){
        //        console.log(data);
        //    }
        //})
    })

});
