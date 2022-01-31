var menu_list=["Neapolitan Pizza","Chicago Pizza","Greek Pizza","California Pizza"];

function show_menu(){
       document.getElementById("div_list").innerHTML= menu_list;
}
function add_item(){
var name=document.getElementById("input1").value;
menu_list.push(name);
document.getElementById("div_list").innerHTML= menu_list;
}