/**
 * Created by Administrator on 12/11/2017.
 */

//关闭进度环
NProgress.configure({ showSpinner: false});

$(document).ajaxStart(function () {
    NProgress.start();
});

$(document).ajaxStop(function () {
    setTimeout(function () {
        NProgress.done();
    }, 500);
});