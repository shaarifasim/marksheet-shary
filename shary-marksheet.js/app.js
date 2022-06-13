


function gen(){
var Sindhi=parseInt(document.getElementById("sin").value);
  var urdu=parseInt(document.getElementById("urdui").value);
  var eng1=parseInt(document.getElementById("eng1").value);
  var eng2=parseInt(document.getElementById("eng2").value);
  var paki=parseInt(document.getElementById("pak").value);
var comp=parseInt(document.getElementById("cs").value);
var chemi=parseInt(document.getElementById("chem").value);
var isl1=parseInt(document.getElementById("isl").value);
var math=parseInt(document.getElementById("maths").value);
var sics=parseInt(document.getElementById("phy").value);
var yname=document.getElementById("yname").value;
var year=document.getElementById("eyear").value;
var dob=document.getElementById("date").value;
var roll=document.getElementById("rno").value;


var obt=(Sindhi+urdu+eng1+eng2+paki+comp+chemi+isl1+math+sics);
var t_Otal=(75+75+75+75+75+500);

var perc=(obt/t_Otal)*100;


document.getElementById("year").innerText = year;
document.getElementById("rollno").innerText = roll;
document.getElementById("sname").innerText = yname;
document.getElementById("dob").innerText = dob;



document.getElementById("sindh").innerText = Sindhi;
document.getElementById("sindh2").innerText = Sindhi;

document.getElementById("urdumarks").innerText = urdu;
document.getElementById("urdumarks2").innerText = urdu;

document.getElementById("english").innerText = eng1;
document.getElementById("englishmarks2").innerText = eng1;

document.getElementById("englishII").innerText = eng2;
document.getElementById("englishIImarks2").innerText = eng2;

document.getElementById("pst").innerText = paki;
document.getElementById("pstmarks2").innerText = paki;

document.getElementById("computermarks").innerText =comp;
document.getElementById("comptotalmarks").innerText =comp;


document.getElementById("islmarks").innerText=isl1;
document.getElementById("islmarks2").innerText=isl1;

document.getElementById("mathsmarks").innerText=math;
document.getElementById("mathsmarks2").innerText=math;

document.getElementById("physicsmarks").innerText=sics;
document.getElementById("phytotalmarks").innerText=sics;
}