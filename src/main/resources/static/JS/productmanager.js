$(document).ready(function() {

});



function productmanager(flag){

switch(flag){
case 1:
ManageProduct(flag);
break;
case 2:
ManageProduct(flag);
break;
case 3:
ManageProduct(flag);
break;
case 4:
ManageProduct(flag);
break;
case 5:
ManageProduct(flag);
break;
case 6:
ManageProduct(flag);
break;
default:
break;
}
}



function ManageProduct(flag){
debugger;
if(flag == 5 || flag==  6){
window.open('InsertProduct.html?flag='+flag)
}else
window.open('product_details_page.html?flag='+flag)
}
