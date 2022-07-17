function qerySelectorFun(nSelector) {
	return document.querySelector(nSelector);
}
//circle hours, min, sex
let hr=qerySelectorFun("#hr");
let mn=qerySelectorFun("#mn");
let sc=qerySelectorFun("#sc");

//elements
let elements=qerySelectorFun(".elements");
let timer=qerySelectorFun(".timer");




//create elements
elements.innerHTML=createHours();
timer.innerHTML=createTimer();

//box hours, min, sex
let hrs=qerySelectorFun("#hrs");
let mns=qerySelectorFun("#mns");
let scs=qerySelectorFun("#scs");
let ampm=qerySelectorFun("#ampm");


setInterval(()=>{
	dateFun();
},1000);



function dateFun(){
	//get Date
	let date=new Date();
	let hh=date.getHours() ;
	let mm=date.getMinutes();
	let ss=date.getSeconds();

	//move hours by deg 
	hr.style.transform=`rotateZ(${(hh+(mm/12))*30}deg)`;
	mn.style.transform=`rotateZ(${(mm)*6}deg)`;
	sc.style.transform=`rotateZ(${(ss)*6}deg)`;

	//set Text Content in box Timer 
	hrs.textContent=setHoursMinSec(hh>12? hh-12: hh);
	mns.textContent=setHoursMinSec(mm);
	scs.textContent=setHoursMinSec(ss);
	ams=hh>=12? "PM":"AM";
	ampm.textContent=ams;
}

function setHoursMinSec(num){
	if (num<10)
		return "0"+num;
	else
		return	num;

}


function createHours(){
	ele="";
	for(let i=1;i<=12;i++){
		ele+=` <span style="--i:${i};"><b>${i}</b></span>\n`;
	}
	return ele;
}

function createTimer(){
	ele="";
	colors=["ff2972","fee800","04fc43","04fc43"];
	data=["hrs","mns","scs","ampm"]
	for(let i=0;i<4;i++){
		ele+=`<span id="${data[i]}"style="--clx:#${colors[i]};"></span>\n`;
	}
	return ele;
}

