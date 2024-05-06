$(document).ready(function(){
var product= getParameterByName('flag');
if(product == 6){
$('#inputform2').show();
}

});




function InsertProduct(){
debugger;
var name= $('#Inputname').val();
var quantity= $('#Inputquantity').val();
var price= $('#Inputprice').val();
//second form
var name1= $('#Inputname1').val();
var quantity1= $('#Inputquantity1').val();
var price1= $('#Inputprice1').val();
//third form
var name2= $('#Inputname2').val();
var quantity2= $('#Inputquantity2').val();
var price2= $('#Inputprice2').val();


var product= getParameterByName('flag');
var urldata ='';
var  JSONArray='';

if(product == 5 ){
urldata= 'http://localhost:9191/AddProduct';
JSONArray= JSON.stringify({'name': name, 'quantity': quantity, 'price': price});
}
else if(product == 6){
urldata= 'http://localhost:9191/AddProducts';
JSONArray= JSON.stringify([{'name': name, 'quantity': quantity, 'price': price},{'name': name1, 'quantity': quantity1, 'price': price1},{'name': name2, 'quantity': quantity2, 'price': price2}]);
}

$.ajax({
        type: 'POST',
        url: urldata,
        contentType: 'application/json',
        dataType: 'json',
        data: JSONArray,
        success: function(data) {

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


