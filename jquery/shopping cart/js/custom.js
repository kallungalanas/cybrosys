$(document).ready(function(){
  //product 1 adding
    $("#p1add").click(function(){
        $(".card").hide();
        $(".container").show();
        $(".p2").hide();
        $(".p3").hide();
        $("#totalprice2").hide();
        $("#totalprice3").hide();
      });
  //product 2 adding

      $("#p2add").click(function(){
        $(".card").hide();
        $(".container").show();
        $(".p1").hide();
        $(".p3").hide();
        $("#totalprice1").hide();
        $("#totalprice3").hide();
      });
  //product 3 adding

      $("#p3add").click(function(){
        $(".card").hide();
        $(".container").show();
        $(".p1").hide();
        $(".p2").hide();
        $("#totalprice1").hide();
        $("#totalprice2").hide();
      });
  //removing cart
      $(".product-remove").click(function(){
        alert("product removed");
        $(".container").hide();
        $(".card").show();
      });
  //clear cart
      $("#clearcart").click(function(){
        alert("cart cleared");
        $(".container").hide();
        $(".card").show();
      });
  //showing bill payment validation
      $("#proceed").click(function(){
        $(".container").hide();
        $(".billpaymentvalidation").show();
      });
      // showing no of items and total amount
      $("#inputqty1").mouseleave(function(){
        var qty1 = $("#inputqty1").val();
        $("#noofitems").text(qty1);
        var totalprice1 = 40;
        $("#totalprice1").text(qty1*totalprice1);
      });
      $("#inputqty2").mouseleave(function(){
        var qty2 = $("#inputqty2").val();
        $("#noofitems").text(qty2);
        var totalprice2 = 30;
        $("#totalprice2").text(qty2*totalprice2);
      });
      $("#inputqty3").mouseleave(function(){
        var qty3 = $("#inputqty3").val();
        $("#noofitems").text(qty3);
        var totalprice3 = 20;
        $("#totalprice3").text(qty3*totalprice3);
      });
      //form validation
         var $registerForm = $("#billingdetails");
         if ($registerForm.length){
          $registerForm.validate({
            rules:{
              name:{
                required:true
              },
              email:{
                required:true,
                email:true
              },
              address:{
                required:true
              },
              city:{
                required:true
              },
              state:{
                required:true
              },
              zip:{
                required:true
              },
              cardname:{
                required:true
              },
              cardmonth:{
                required:true
              },
              expmonth:{
                required:true
              },
              expyear:{
                required:true
              },
              cvv:{
                required:true
              },
              sameadr:{
                required:true
              }
            },
            messages:{
              name:{
                required:"name is mandatory !"
              },
              email:{
                required:"email is mandatory"
              },
              address:{
                required:"address is mandatory"
              },
              city:{
                required:" city is mandatory"
              },
              state:{
                required:"state is mandatory"
              },
              zip:{
                required:"zip is mandatory"
              },
              cardname:{
                required:"cardname is mandatory"
              },
              cardmonth:{
                required:"cardmonth is mandatory"
              },
              expmonth:{
                required:"expmonth is mandatory"
              },
              expyear:{
                required:"expyear is mandatory"
              },
              cvv:{
                required:"cvv is mandatory"
              },
              sameadr:{
                required:"shipping address is mandatory"
              }

            }
          });
        }
        $(".btn").click(function(){
          alert("success");
         });
});