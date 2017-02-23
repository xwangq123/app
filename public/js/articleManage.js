var add_category = function () {
    var category = $("#txtCategory").val().trim();
    if (category == "") {
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
    // location.href = '/articleManage/insert?name=' + category;
};

/*
 $.ajax({
 type: "GET",
 url: "test.json",
 data: {username: $("#username").val(), content: $("#content").val()},
 dataType: "json",
 success: function (data) {
 $('#resText').empty();   //清空resText里面的所有内容
 var html = '';
 $.each(data, function (commentIndex, comment) {
 html += '<div class="comment"><h6>' + comment['username']
 + ':</h6><p class="para"' + comment['content']
 + '</p></div>';
 });
 $('#resText').html(html);
 }
 });*/
