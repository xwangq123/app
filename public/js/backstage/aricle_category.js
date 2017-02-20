var add_category = function () {
    var category = $("#txtCategory").val().trim();
    if (category == "") {
        alert("请输入类别名称!")
    }
    $.ajax({
        url: "/articleCategory/insert",
        dataType: 'json',
        method: "POST",
        data: {name: category},
        success(data){
            if (data.errorMsg != '') {
                alert(data.errorMsg)
            }
        }
        /* error(err){
         alter(err);
         }*/
    });
};