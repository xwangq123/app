var ue = UE.getEditor('editor');

var add_category = function () {
    var category = $("#txtCategory").val().trim();
    if (category === "") {
        alert("请输入类别名称!");
        return;
    }
    $.ajax({
        type: "POST",
        url: "/articleManage/insert",
        data: {name: category},
        dataType: "json",
        success: function (data) {
            if (data.errMsg) {
                alert(data.errMsg);
                return;
            }
            location.href = '/articleManage/getArticleCategory';
        }
    });
};

var add_Article = function () {
    //类型
    var TYPE = $("#TYPE option:selected").val();
    if (TYPE === '') {
        alert("请输入类型!");
        return;
    }
    //标题
    var TITLE = $("#TITLE").val().trim();
    if (TITLE === '') {
        alert("请输入标题!");
        return;
    }
    //个人分类
    var ARTICLE = [];
    $('input[name="ARTICLE"]:checked').each(function () {
        ARTICLE.push($(this).val());
    });
    //内容
    var CONTENT = UE.getEditor('editor').getContent();
    alert(CONTENT);
    if (TITLE === '') {
        alert("内容不能为空!");
        return;
    }
    //摘要
    var SUMMARY = $("#SUMMARY").val().trim();
    var article = {
        TYPE: TYPE,
        TITLE: TITLE,
        ARTICLE: ARTICLE,
        CONTENT: CONTENT,
        SUMMARY: SUMMARY
    };
    $.ajax({
        type: "POST",
        url: "/articleManage/articleInsert",
        data: article,
        dataType: "json",
        success: function (data) {
            if (data.errMsg) {
                alert(data.errMsg);
                return;
            }
            location.href = '/articleManage/getArticleManage';
        }
    });
};