$(document).ready(function () {
    $("#save").on("click" , function () {
        var name = $("#name").val();
        var phone = $("#phone").val();
        if (name == '' || phone == '' || isNaN(phone) || phone < 0){
            alert("cannot be empty and only enter positive digits")
        }
        else{
            $("#contact-enter").append("<div class='contact-details'><table><tr><td class='data'>" + name + ":" + phone + "</td></tr></table><button class='update'>update</button><button class='delete'>delete</button></div>");
            $("#name").val('');
            $("#phone").val('');
            $(".delete").on("click" , function () {
                $(this).parent().remove();
            });
            $(".update").on("click" , function () {
                var name = $("#name").val()
                var phone = $("#phone").val()
                $(this).parent().find(".data").text(name + " : " + phone)
                $(".delete").on("click" , function () {
                    $(this).parent().remove();
                });
            });   
        }    
    });
});