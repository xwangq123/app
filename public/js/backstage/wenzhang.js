var getUser = function () {
    $.ajax({
        url: "/getUser",
        method: "GET",
        success(data){
            console.log(data);
        }
    });
};
