$(document).ready(function(){
  //product 1 adding
    $("#p1add").click(function(){
        $(".card").hide();
        $(".container").show();
        $(".p1").show()
        $("#totalprice1").show();
        $("#noofitems1").show();
      });
  //product 2 adding

      $("#p2add").click(function(){
        $(".card").hide();
        $(".container").show();
        $(".p2").show();
        $("#totalprice2").show();
        $("#noofitems2").show();
      });
  //product 3 adding

      $("#p3add").click(function(){
        $(".card").hide();
        $(".container").show();
        $(".p3").show();
        $("#totalprice3").show();
        $("#noofitems3").show();
      });
  //removing cart
        $(".product-remove1").click(function(){
          $(".p1").hide();
          $("#totalprice1").hide();
          $("#noofitems1").hide();
        });
        $(".product-remove2").click(function(){
          $(".p2").hide();
          $("#totalprice2").hide();
          $("#noofitems2").hide();
        });
        $(".product-remove3").click(function(){
          $(".p3").hide();
          $("#totalprice3").hide();
          $("#noofitems3").hide();
        });
  //clear cart
      $("#clearcart").click(function(){
        $(".container").hide();
        $(".p1").hide();
        $(".p2").hide();
        $(".p3").hide();
        $("#totalprice1").hide();
        $("#totalprice2").hide();
        $("#totalprice3").hide();
        $("#noofitems1").hide();
        $("#noofitems2").hide();
        $("#noofitems3").hide();
        alert("cart cleared");
        $(".card").show();
      });
  //cart
      $("#cart-icon").click(function(){
        $(".card").hide();
        $(".container").show();
      });
  // go back
      $("#gobackbtn").click(function(){
        $(".container").hide();
        $(".card").show();
      });    
  //showing bill payment validation
      $("#proceed").click(function(){
        $(".container").hide();
        $(".billpaymentvalidation").show();
        $("#cart-icon").hide();
      });
  // showing no of items and total amount
      $("#inputqty1").keyup(function(){
          var qty1 = $("#inputqty1").val();
          $("#noofitems1").text(qty1);
          var totalprice1 = 40;
          if (qty1 >= 0){
          $("#totalprice1").text(qty1*totalprice1);
          } else {
            alert("enter positive number only")
          }
      });
      $("#inputqty2").keyup(function(){
        var qty2 = $("#inputqty2").val();
        $("#noofitems2").text(qty2);
        var totalprice2 = 30;
        if (qty2 >= 0){
          $("#totalprice2").text(qty2*totalprice2);
          } else {
            alert("enter positive number only")
          }
      });
      $("#inputqty3").keyup(function(){
        var qty3 = $("#inputqty3").val();
        $("#noofitems3").text(qty3);
        var totalprice3 = 20;
        if (qty3 >= 0){
          $("#totalprice3").text(qty3*totalprice3);
          } else {
            alert("enter positive number only")
          }
      });
    //form validation
         var $registerForm = $("#billingdetails");
         if ($registerForm.length){
          $registerForm.validate({
            rules:{
              name:{
                required:true,
                minlength:3
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
                required:true,
                digits:true
              },
              cardname:{
                required:true
              },
              cardnumber:{
                required:true,
                digits:true
              },
              cardmonth:{
                required:true,
                digits:true
              },
              expmonth:{
                required:true,
                digits:true
              },
              expyear:{
                required:true,
                digits:true
              },
              cvv:{
                required:true,
                digits:true,
                minlength:3,
                maxlength:3
              },
              sameadr:{
                required:true
              }
            },
            messages:{
              name:{
                required:"name is mandatory !",
                minlength:"enter atlest 3 characters"
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
                required:"zip is mandatory",
                digits:"enter digits only"
              },
              cardname:{
                required:"cardname is mandatory"
              },
              cardnumber:{
                required:"card number is",
                digits:"enter digits only"
              },
              cardmonth:{
                required:"cardmonth is mandatory",
                digits:"enter digits only"
              },
              expmonth:{
                required:"expmonth is mandatory",
                digits:"enter digits only"
              },
              expyear:{
                required:"expyear is mandatory",
                digits:"enter digits only"
              },
              cvv:{
                required:"cvv is mandatory",
                digits:"enter digits only",
                minlength:"enter only 3 digit number",
                maxlength:"enter only 3 digit number"

              },
              sameadr:{
                required:"shipping address is mandatory"
              }

            }
          });
        }
});