var getUser = function () {
    $.ajax({
        url: "/getUser",
        method: "GET",
        success(data){
            console.log(data);
        }
    });
};


/*
 $.ajax ({
 url: "http://" + ctx.context.server_name + "/author/add",
 method: "POST", data: this.state.data, success(data) {
 alert(data.msg);
 ctx.context.router.push("/admin");
 }
 });*/
