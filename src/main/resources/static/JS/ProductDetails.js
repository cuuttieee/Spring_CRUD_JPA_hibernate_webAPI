$(document).ready(function(){
 var Flag = getParameterByName('flag');
if(Flag == 1 || Flag == 2 || Flag == 3 || Flag ==4){
getProductsAll(Flag);
}
$('#ddlProductID').on('change', function(){
debugger;
var Prod= $('#ddlProductID').val();
var checkflag = parseInt(Prod);
if(isNaN(checkflag)){
ShowProduct(Prod, 'flag1')
}else{
ShowProduct(Prod, 'flag2')
}


});

});



function getProductsAll(Flag){
$.ajax({
        type: 'GET',
        url: 'http://localhost:9191/Products',
       // data: JSON.stringify({ "Employee": Emp }),
        contentType: 'application/json',
        dataType: 'json',
        success: function (response) {

                       if (response.length > 0) {
                       if(Flag == 1){
                       $('#ddtxt').hide();
                       $('#Bdt').show();
                                          $("#Bdt >tbody").empty();
                                            $.each(response, function (index) {
                                            var SL = (index + 1);

                                              $("#Bdt >tbody").append(
                                               '<tr>'
                                                + '<td>' + SL + '</td>'
                                                 + '<td>' + this.id + '</td>'
                                                 + '<td>'  + this.name +'</td>'
                                                 + '<td>' + this.quantity +'</td>'
                                                 + '<td>' + this.price +'</td>'
                                                  + '</tr>');
                                                });
                       }
                       else if(Flag == 2){
                       $('#txtProduct').text('ID');
                        var ddlProduct = $("#ddlProductID");
                                        ddlProduct.empty();
                                        ddlProduct.append($("<option></option>").val("0").html("Please Select"));
                                        $.each(response, function (e) {
                                         ddlProduct.append($("<option></option>").val(this['id']).html(this['id']));
                                        });


                       }
                       else if(Flag == 3){
                        $('#txtProduct').text('Name');
                       var ddlProduct = $("#ddlProductID");
                                         ddlProduct.empty();
                                         ddlProduct.append($("<option></option>").val("0").html("Please Select"));
                                         $.each(response, function (e) {
                                      ddlProduct.append($("<option></option>").val(this['name']).html(this['name']));
                                        });
                       }
                       else if(Flag == 4){
                        $('#ddtxt').hide();
                           $('#Bdt').show();
                           $('#delbtn').show();
                           $("#Bdt >tbody").empty();
                             $.each(response, function (index) {
                              var SL = (index + 1);

                                $("#Bdt >tbody").append(
                                   '<tr>'
                                   + '<td>' + SL + '</td>'
                                   + '<td>' + this.id + '</td>'
                                    + '<td>'  + this.name +'</td>'
                                     + '<td>' + this.quantity +'</td>'
                                      + '<td>' + this.price +'</td>'
                                      +'<td><a href="#" onclick="DeleteProduct('+ this.id+');"><img src= "/Icons/delete.png" height="25" width="25"></td>'
                                      + '</tr>');
                                           });
                                              }
                       }
        },
        error: function() {
            alert('Error Encountered');
        }
    });
}
function ShowProduct(Prod, CheckFlag){
var FinalURL = '';
if(CheckFlag == 'flag1'){
FinalURL = 'http://localhost:9191/ProductsByName/'+ Prod;
}
else if(CheckFlag == 'flag2'){
FinalURL = 'http://localhost:9191/ProductsByID/'+ Prod;
}
//http://localhost:9191/ProductsByID/54
$.ajax({
        url:FinalURL,
        type:'GET',
        contentType:'application/json',
        dataType:'json',
        success: function(MyData){
        debugger;
let SignleArrrayProd = [];
SignleArrrayProd.push(MyData);
                  $('#Bdt').show();
                  $("#Bdt >tbody").empty();
                    $.each(SignleArrrayProd, function (index) {
                     var SL = (index + 1);
                       if (SignleArrrayProd.length > 0) {

                      $("#Bdt >tbody").append(
                         '<tr>'
                          + '<td>' + SL + '</td>'
                            + '<td>' + MyData.id + '</td>'
                              + '<td>'  + MyData.name +'</td>'
                                 + '<td>' + MyData.quantity +'</td>'
                                    + '<td>' + MyData.price +'</td>'
                                      + '</tr>');
                                      }
                                      });


        },
        error: function(){
        }

});

}





function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[[]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function DeleteProduct(del){
debugger;
var con = confirm("Are you sure want to delete this product..");
if(con == false){
return;
}
$.ajax({
        type: 'DELETE',
        url: 'http://localhost:9191/DeleteProduct/'+ del,
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
        console.log("Successfully deleted");


        },
        error: function(){
        alert("Items deleted..")
        location.reload()
        }
});

}