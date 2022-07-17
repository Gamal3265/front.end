function qerySelectorFun(nSelector) {
	return document.querySelector(nSelector);
}
//circle hours, min, sex
let hr=qerySelectorFun("#hr");
let mn=qerySelectorFun("#mn");
let sc=qerySelectorFun("#sc");


//box hours, min, sex
let hrs=qerySelectorFun("#hrs");
let mns=qerySelectorFun("#mns");
let scs=qerySelectorFun("#scs");
let ampm=qerySelectorFun("#ampm");



setInterval(()=>{
	dateFun();
},1000);



function dateFun(){

	let date=new Date();
	let hh=date.getHours() ;
	let mm=date.getMinutes();
	let ss=date.getSeconds();
	hr.style.transform=`rotateZ(${(hh+(mm/12))*30}deg)`;
	mn.style.transform=`rotateZ(${(mm)*6}deg)`;
	sc.style.transform=`rotateZ(${(ss)*6}deg)`;


	ams=hh>=12? "PM":"AM";

	hrs.textContent=setHoursMinSec(hh>12? hh-12: hh);
	mns.textContent=setHoursMinSec(mm);
	scs.textContent=setHoursMinSec(ss);
	ampm.textContent=ams;

}

function setHoursMinSec(num){
	if (num<10)
		return "0"+num;
	else
		return	num;

}

