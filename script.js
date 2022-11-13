var from = document.getElementById('from');
var to = document.getElementById('to');
var fromin = document.getElementById('fromin');
var toin = document.getElementById('toin');
var output = document.getElementById('out');
var unit = document.getElementById('units');
var lfin = document.getElementById('lengthfromin');
var ltin = document.getElementById('lengthtoin');
var lofrom = document.getElementById("nepalifrom");
var loto = document.getElementById("nepalito");
var answer;

function units(){
	var lengthdiv = document.getElementById("lengthdiv");
	var nepareadiv = document.getElementById("nepalidiv");
	if(unit.value=="length"){
		lengthdiv.classList.add("visible");
		lengthdiv.classList.remove("invisible");
		nepareadiv.classList.add("invisible");
		nepareadiv.classList.remove("visible");
	}
	else if(unit.value=="nepaliland")
	{
		nepareadiv.classList.remove("invisible");
		nepareadiv.classList.add("visible");
		lengthdiv.classList.remove("visible");
		lengthdiv.classList.add("invisible");
	};

};


// A function to determine position of input value for nepali land //
function nepaliland(nepaliconversion){
if(nepaliconversion=="from"){
	var answer = landfrom();
	document.getElementById("lengthtoin").value = answer; 
}else if(nepaliconversion=="to"){
	var answer = landto();
	document.getElementById("lengthfromin").value = answer;
};
};

function landto(){
	let answer;
	// converstion of khetmuri to other //
	// lfin = lengthfrominput & ltin = lengthtoinput
	if(lofrom.value=="khetmuri"  && loto.value=="ropani")
	{
		answer =  ltin.value * 0.04;
	}else if(lofrom.value=="khetmuri" && loto.value=="bigha")
	{
		answer = ltin.value * 0.5324;
	}else if(lofrom.value=="khetmuri" && loto.value=="kattha")
	{
		answer = ltin.value * 0.02662;
	}else if(lofrom.value=="khetmuri" && loto.value=="dhur")
	{
		answer = ltin.value * 0.001;
	}else if(lofrom.value=="khetmuri" && loto.value=="msq")
	{
		answer = ltin.value * 0.0001;
	}else if(lofrom.value=="khetmuri" && loto.value=="sqfeet")
	{
		answer = ltin.value * 0.00001;
	}else if(lofrom.value=="khetmuri" && loto.value=="aana")
	{
		answer = ltin.value * 0.002;
	}else if(lofrom.value=="khetmuri" && loto.value=="paisa")
	{
		answer = ltin.value * 0.001;
	}else if(lofrom.value=="khetmuri" && loto.value=="daam")
	{
		answer = ltin.value * 0.0002;
	}else if(lofrom.value=="ropani" && loto.value=="khetmuri")
	{
		// converstion of ropani to other //
		answer = ltin.value * 25;
	}else if(lofrom.value=="ropani" && loto.value=="bigha")
	{
		answer = ltin.value * 13.31;
	}else if(lofrom.value=="ropani" && loto.value=="kattha")
	{
		answer = ltin.value * 0.66551;
	}else if(lofrom.value=="ropani" && loto.value=="dhur")
	{
		answer = ltin.value * 0.03328;
	}else if(lofrom.value=="ropani" && loto.value=="msq")
	{
		answer = ltin.value * 0.002;
	}else if(lofrom.value=="ropani" && loto.value=="sqfeet")
	{
		answer = ltin.value * 0.0002;
	}else if(lofrom.value=="ropani" && loto.value=="aana")
	{
		answer = ltin.value * 0.06;
	}else if(lofrom.value=="ropani" && loto.value=="paisa")
	{
		answer = ltin.value * 0.02;
	}else if(lofrom.value=="ropani" && loto.value=="daam")
	{
		answer = ltin.value * 0.004;
	}else if(lofrom.value=="bigha" && loto.value=="khetmuri")
	{
		answer = ltin.value * 1.88;
	}else if(lofrom.value=="bigha" && loto.value=="ropani")
	{
		answer = ltin.value * 0.07513;
	}else if(lofrom.value=="bigha" && loto.value=="kattha")
	{
		answer = ltin.value * 0.05;
	}else if(lofrom.value=="bigha" && loto.value=="dhur")
	{
		answer = ltin.value * 0.0025;
	}else if(lofrom.value=="bigha" && loto.value=="msq")
	{
		answer = ltin.value * 0.0001;
	}else if(lofrom.value=="bigha" && loto.value=="sqfeet")
	{
		answer = ltin.value * 0.00001;
	}else if(lofrom.value=="bigha" && loto.value=="aana")
	{
		answer = ltin.value * 0.005;
	}else if(lofrom.value=="bigha" && loto.value=="paisa")
	{
		answer = ltin.value * 0.001;
	}else if(lofrom.value=="bigha" && loto.value=="daam")
	{
		answer = ltin.value * 0.0003;
	}else if(lofrom.value=="kattha" && loto.value=="khetmuri")
	{
		answer = ltin.value * 37.56;
	}else if(lofrom.value=="kattha" && loto.value=="ropani")
	{
		answer = ltin.value * 1.50260;
	}else if(lofrom.value=="kattha" && loto.value=="bigha")
	{
		answer = ltin.value * 20;
	}else if(lofrom.value=="kattha" && loto.value=="dhur")
	{
		answer = ltin.value * 0.05;
	}else if(lofrom.value=="kattha" && loto.value=="msq")
	{
		answer = ltin.value * 0.003;
	}else if(lofrom.value=="kattha" && loto.value=="sqfeet")
	{
		answer = ltin.value * 0.0003;
	}else if(lofrom.value=="kattha" && loto.value=="aana")
	{
		answer = ltin.value * 0.09;
	}else if(lofrom.value=="kattha" && loto.value=="paisa")
	{
		answer = ltin.value * 0.02;
	}else if(lofrom.value=="kattha" && loto.value=="daam")
	{
		answer = ltin.value * 0.01;
	}else if(lofrom.value=="dhur" && loto.value=="khetmuri")
	{
		answer = ltin.value * 751.17;
	}else if(lofrom.value=="dhur" && loto.value=="ropani")
	{
		answer = ltin.value * 30.052;
	}else if(lofrom.value=="dhur" && loto.value=="bigha")
	{
		answer = ltin.value * 400;
	}else if(lofrom.value=="dhur" && loto.value=="kattha")
	{
		answer = ltin.value * 20;
	}else if(lofrom.value=="dhur" && loto.value=="msq")
	{
		answer = ltin.value * 0.06;
	}else if(lofrom.value=="dhur" && loto.value=="sqfeet")
	{
		answer = ltin.value * 0.01;
	}else if(lofrom.value=="dhur" && loto.value=="aana")
	{
		answer = ltin.value * 1.88;
	}else if(lofrom.value=="dhur" && loto.value=="paisa")
	{
		answer = ltin.value * 0.47;
	}else if(lofrom.value=="dhur" && loto.value=="daam")
	{
		answer = ltin.value * 0.12;
	}else if(lofrom.value=="msq" && loto.value=="khetmuri")
	{
		answer = ltin.value * 12718.43;
	}else if(lofrom.value=="msq" && loto.value=="ropani")
	{
		answer = ltin.value * 508.8;
	}else if(lofrom.value=="msq" && loto.value=="bigha")
	{
		answer = ltin.value * 6772.63;
	}else if(lofrom.value=="msq" && loto.value=="kattha")
	{
		answer = ltin.value * 338.63;
	}else if(lofrom.value=="msq" && loto.value=="dhur")
	{
		answer = ltin.value * 16.93;
	}else if(lofrom.value=="msq" && loto.value=="sqfeet")
	{
		answer = ltin.value * 0.09;
	}else if(lofrom.value=="msq" && loto.value=="aana")
	{
		answer = ltin.value * 31.8;
	}else if(lofrom.value=="msq" && loto.value=="paisa")
	{
		answer = ltin.value * 7.95;
	}else if(lofrom.value=="msq" && loto.value=="daam")
	{
		answer = ltin.value * 1.99;
	}else if(lofrom.value=="sqfeet" && loto.value=="khetmuri")
	{
		answer = ltin.value * 136900;
	}else if(lofrom.value=="sqfeet" && loto.value=="ropani")
	{
		answer = ltin.value * 5476;
	}else if(lofrom.value=="sqfeet" && loto.value=="bigha")
	{
		answer = ltin.value * 72900;
	}else if(lofrom.value=="sqfeet" && loto.value=="kattha")
	{
		answer = ltin.value * 3645;
	}else if(lofrom.value=="sqfeet" && loto.value=="dhur")
	{
		answer = ltin.value * 182.25;
	}else if(lofrom.value=="sqfeet" && loto.value=="msq")
	{
		answer = ltin.value * 10.76;
	}else if(lofrom.value=="sqfeet" && loto.value=="aana")
	{
		answer = ltin.value * 342.25;
	}else if(lofrom.value=="sqfeet" && loto.value=="paisa")
	{
		answer = ltin.value * 85.56;
	}else if(lofrom.value=="sqfeet" && loto.value=="daam")
	{
		answer = ltin.value * 21.39;
	}else if(lofrom.value=="aana" && loto.value=="khetmuri")
	{
		answer = ltin.value * 400;
	}else if(lofrom.value=="aana" && loto.value=="ropani")
	{
		answer = ltin.value * 16;
	}else if(lofrom.value=="aana" && loto.value=="bigha")
	{
		answer = ltin.value * 213;
	}else if(lofrom.value=="aana" && loto.value=="kattha")
	{
		answer = ltin.value * 10.64816;
	}else if(lofrom.value=="aana" && loto.value=="dhur")
	{
		answer = ltin.value * 0.53;
	}else if(lofrom.value=="aana" && loto.value=="msq")
	{
		answer = ltin.value * 0.03;
	}else if(lofrom.value=="aana" && loto.value=="sqfeet")
	{
		answer = ltin.value * 0.003;
	}else if(lofrom.value=="aana" && loto.value=="paisa")
	{
		answer = ltin.value * 0.25;
	}else if(lofrom.value=="aana" && loto.value=="daam")
	{
		answer = ltin.value * 0.06;
	}else if(lofrom.value=="paisa" && loto.value=="khetmuri")
	{
		answer = ltin.value * 1600;
	}else if(lofrom.value=="paisa" && loto.value=="ropani")
	{
		answer = ltin.value * 64;
	}else if(lofrom.value=="paisa" && loto.value=="bigha")
	{
		answer = ltin.value * 852.01;
	}else if(lofrom.value=="paisa" && loto.value=="kattha")
	{
		answer = ltin.value * 42.59264;
	}else if(lofrom.value=="paisa" && loto.value=="dhur")
	{
		answer = ltin.value * 2.13;
	}else if(lofrom.value=="paisa" && loto.value=="msq")
	{
		answer = ltin.value * 0.13;
	}else if(lofrom.value=="paisa" && loto.value=="sqfeet")
	{
		answer = ltin.value * 0.01;
	}else if(lofrom.value=="paisa" && loto.value=="aana")
	{
		answer = ltin.value * 4;
	}else if(lofrom.value=="paisa" && loto.value=="daam")
	{
		answer = ltin.value * 0.25;
	}else if(lofrom.value=="daam" && loto.value=="khetmuri")
	{
		answer = ltin.value * 6400;
	}else if(lofrom.value=="daam" && loto.value=="ropani")
	{
		answer = ltin.value * 256;
	}else if(lofrom.value=="daam" && loto.value=="bigha")
	{
		answer = ltin.value * 3408.04;
	}else if(lofrom.value=="daam" && loto.value=="kattha")
	{
		answer = ltin.value * 170.37056;
	}else if(lofrom.value=="daam" && loto.value=="dhur")
	{
		answer = ltin.value * 8.52;
	}else if(lofrom.value=="daam" && loto.value=="msq")
	{
		answer = ltin.value * 0.5;
	}else if(lofrom.value=="daam" && loto.value=="sqfeet")
	{
		answer = ltin.value * 0.05;
	}else if(lofrom.value=="daam" && loto.value=="aana")
	{
		answer = ltin.value * 16;
	}else if(lofrom.value=="daam" && loto.value=="paisa")
	{
		answer = ltin.value * 4;
	};

	return(answer);
};


function landfrom(){
	let answer;
	// converstion of khetmuri to other //
	if(lofrom.value=="khetmuri"  && loto.value=="ropani")
	{
		answer =  lfin.value * 25;
	}else if(lofrom.value=="khetmuri" && loto.value=="bigha")
	{
		answer = lfin.value * 1.88;
	}else if(lofrom.value=="khetmuri" && loto.value=="kattha")
	{
		answer = lfin.value * 37.56;
	}else if(lofrom.value=="khetmuri" && loto.value=="dhur")
	{
		answer = lfin.value * 751.17;
	}else if(lofrom.value=="khetmuri" && loto.value=="msq")
	{
		answer = lfin.value * 12718.43;
	}else if(lofrom.value=="khetmuri" && loto.value=="sqfeet")
	{
		answer = lfin.value * 136900;
	}else if(lofrom.value=="khetmuri" && loto.value=="aana")
	{
		answer = lfin.value * 400;
	}else if(lofrom.value=="khetmuri" && loto.value=="paisa")
	{
		answer = lfin.value * 1600;
	}else if(lofrom.value=="khetmuri" && loto.value=="daam")
	{
		answer = lfin.value * 6400;
	}else if(lofrom.value=="ropani" && loto.value=="khetmuri")
	{
		// converstion of ropani to other //
		answer = lfin.value * 0.04;
	}else if(lofrom.value=="ropani" && loto.value=="bigha")
	{
		answer = lfin.value * 0.07513;
	}else if(lofrom.value=="ropani" && loto.value=="kattha")
	{
		answer = lfin.value * 1.50260;
	}else if(lofrom.value=="ropani" && loto.value=="dhur")
	{
		answer = lfin.value * 30.052;
	}else if(lofrom.value=="ropani" && loto.value=="msq")
	{
		answer = lfin.value * 508.8;
	}else if(lofrom.value=="ropani" && loto.value=="sqfeet")
	{
		answer = lfin.value * 5476;
	}else if(lofrom.value=="ropani" && loto.value=="aana")
	{
		answer = lfin.value * 16;
	}else if(lofrom.value=="ropani" && loto.value=="paisa")
	{
		answer = lfin.value * 64;
	}else if(lofrom.value=="ropani" && loto.value=="daam")
	{
		answer = lfin.value * 256;
	}else if(lofrom.value=="bigha" && loto.value=="khetmuri")
	{
		answer = lfin.value * 0.5324;
	}else if(lofrom.value=="bigha" && loto.value=="ropani")
	{
		answer = lfin.value * 13.31;
	}else if(lofrom.value=="bigha" && loto.value=="kattha")
	{
		answer = lfin.value * 20;
	}else if(lofrom.value=="bigha" && loto.value=="dhur")
	{
		answer = lfin.value * 400;
	}else if(lofrom.value=="bigha" && loto.value=="msq")
	{
		answer = lfin.value * 6772.63;
	}else if(lofrom.value=="bigha" && loto.value=="sqfeet")
	{
		answer = lfin.value * 72900;
	}else if(lofrom.value=="bigha" && loto.value=="aana")
	{
		answer = lfin.value * 213;
	}else if(lofrom.value=="bigha" && loto.value=="paisa")
	{
		answer = lfin.value * 852.01;
	}else if(lofrom.value=="bigha" && loto.value=="daam")
	{
		answer = lfin.value * 3408.04;
	}else if(lofrom.value=="kattha" && loto.value=="khetmuri")
	{
		answer = lfin.value * 0.02662;
	}else if(lofrom.value=="kattha" && loto.value=="ropani")
	{
		answer = lfin.value * 0.66551;
	}else if(lofrom.value=="kattha" && loto.value=="bigha")
	{
		answer = lfin.value * 0.05;
	}else if(lofrom.value=="kattha" && loto.value=="dhur")
	{
		answer = lfin.value * 20;
	}else if(lofrom.value=="kattha" && loto.value=="msq")
	{
		answer = lfin.value * 338.63;
	}else if(lofrom.value=="kattha" && loto.value=="sqfeet")
	{
		answer = lfin.value * 3645;
	}else if(lofrom.value=="kattha" && loto.value=="aana")
	{
		answer = lfin.value * 10.64816;
	}else if(lofrom.value=="kattha" && loto.value=="paisa")
	{
		answer = lfin.value * 42.59264;
	}else if(lofrom.value=="kattha" && loto.value=="daam")
	{
		answer = lfin.value * 170.37056;
	}else if(lofrom.value=="dhur" && loto.value=="khetmuri")
	{
		answer = lfin.value * 0.001;
	}else if(lofrom.value=="dhur" && loto.value=="ropani")
	{
		answer = lfin.value * 0.03328;
	}else if(lofrom.value=="dhur" && loto.value=="bigha")
	{
		answer = lfin.value * 0.0025;
	}else if(lofrom.value=="dhur" && loto.value=="kattha")
	{
		answer = lfin.value * 0.05;
	}else if(lofrom.value=="dhur" && loto.value=="msq")
	{
		answer = lfin.value * 16.93;
	}else if(lofrom.value=="dhur" && loto.value=="sqfeet")
	{
		answer = lfin.value * 182.25;
	}else if(lofrom.value=="dhur" && loto.value=="aana")
	{
		answer = lfin.value * 0.53;
	}else if(lofrom.value=="dhur" && loto.value=="paisa")
	{
		answer = lfin.value * 2.13;
	}else if(lofrom.value=="dhur" && loto.value=="daam")
	{
		answer = lfin.value * 8.52;
	}else if(lofrom.value=="msq" && loto.value=="khetmuri")
	{
		answer = lfin.value * 0.0001;
	}else if(lofrom.value=="msq" && loto.value=="ropani")
	{
		answer = lfin.value * 0.002;
	}else if(lofrom.value=="msq" && loto.value=="bigha")
	{
		answer = lfin.value * 0.0001;
	}else if(lofrom.value=="msq" && loto.value=="kattha")
	{
		answer = lfin.value * 0.003;
	}else if(lofrom.value=="msq" && loto.value=="dhur")
	{
		answer = lfin.value * 0.06;
	}else if(lofrom.value=="msq" && loto.value=="sqfeet")
	{
		answer = lfin.value * 10.76;
	}else if(lofrom.value=="msq" && loto.value=="aana")
	{
		answer = lfin.value * 0.03;
	}else if(lofrom.value=="msq" && loto.value=="paisa")
	{
		answer = lfin.value * 0.13;
	}else if(lofrom.value=="msq" && loto.value=="daam")
	{
		answer = lfin.value * 0.5;
	}else if(lofrom.value=="sqfeet" && loto.value=="khetmuri")
	{
		answer = lfin.value * 0.00001;
	}else if(lofrom.value=="sqfeet" && loto.value=="ropani")
	{
		answer = lfin.value * 0.0002;
	}else if(lofrom.value=="sqfeet" && loto.value=="bigha")
	{
		answer = lfin.value * 0.00001;
	}else if(lofrom.value=="sqfeet" && loto.value=="kattha")
	{
		answer = lfin.value * 0.0003;
	}else if(lofrom.value=="sqfeet" && loto.value=="dhur")
	{
		answer = lfin.value * 0.01;
	}else if(lofrom.value=="sqfeet" && loto.value=="msq")
	{
		answer = lfin.value * 0.09;
	}else if(lofrom.value=="sqfeet" && loto.value=="aana")
	{
		answer = lfin.value * 0.003;
	}else if(lofrom.value=="sqfeet" && loto.value=="paisa")
	{
		answer = lfin.value * 0.01;
	}else if(lofrom.value=="sqfeet" && loto.value=="daam")
	{
		answer = lfin.value * 0.05;
	}else if(lofrom.value=="aana" && loto.value=="khetmuri")
	{
		answer = lfin.value * 0.002;
	}else if(lofrom.value=="aana" && loto.value=="ropani")
	{
		answer = lfin.value * 0.06;
	}else if(lofrom.value=="aana" && loto.value=="bigha")
	{
		answer = lfin.value * 0.005;
	}else if(lofrom.value=="aana" && loto.value=="kattha")
	{
		answer = lfin.value * 0.09;
	}else if(lofrom.value=="aana" && loto.value=="dhur")
	{
		answer = lfin.value * 1.88;
	}else if(lofrom.value=="aana" && loto.value=="msq")
	{
		answer = lfin.value * 31.8;
	}else if(lofrom.value=="aana" && loto.value=="sqfeet")
	{
		answer = lfin.value * 342.25;
	}else if(lofrom.value=="aana" && loto.value=="paisa")
	{
		answer = lfin.value * 4;
	}else if(lofrom.value=="aana" && loto.value=="daam")
	{
		answer = lfin.value * 16;
	}else if(lofrom.value=="paisa" && loto.value=="khetmuri")
	{
		answer = lfin.value * 0.001;
	}else if(lofrom.value=="paisa" && loto.value=="ropani")
	{
		answer = lfin.value * 0.02;
	}else if(lofrom.value=="paisa" && loto.value=="bigha")
	{
		answer = lfin.value * 0.001;
	}else if(lofrom.value=="paisa" && loto.value=="kattha")
	{
		answer = lfin.value * 0.02;
	}else if(lofrom.value=="paisa" && loto.value=="dhur")
	{
		answer = lfin.value * 0.47;
	}else if(lofrom.value=="paisa" && loto.value=="msq")
	{
		answer = lfin.value * 7.95;
	}else if(lofrom.value=="paisa" && loto.value=="sqfeet")
	{
		answer = lfin.value * 85.56;
	}else if(lofrom.value=="paisa" && loto.value=="aana")
	{
		answer = lfin.value * 0.25;
	}else if(lofrom.value=="paisa" && loto.value=="daam")
	{
		answer = lfin.value * 4;
	}else if(lofrom.value=="daam" && loto.value=="khetmuri")
	{
		answer = lfin.value * 0.0002;
	}else if(lofrom.value=="daam" && loto.value=="ropani")
	{
		answer = lfin.value * 0.004;
	}else if(lofrom.value=="daam" && loto.value=="bigha")
	{
		answer = lfin.value * 0.0003;
	}else if(lofrom.value=="daam" && loto.value=="kattha")
	{
		answer = lfin.value * 0.01;
	}else if(lofrom.value=="daam" && loto.value=="dhur")
	{
		answer = lfin.value * 0.12;
	}else if(lofrom.value=="daam" && loto.value=="msq")
	{
		answer = lfin.value * 1.99;
	}else if(lofrom.value=="daam" && loto.value=="sqfeet")
	{
		answer = lfin.value * 21.39;
	}else if(lofrom.value=="daam" && loto.value=="aana")
	{
		answer = lfin.value * 0.06;
	}else if(lofrom.value=="daam" && loto.value=="paisa")
	{
		answer = lfin.value * 0.25;
	};

	return(answer);
}







// A function to check whether convert's value is to or from //
function length(convert){
if(convert=="from"){
	var answer = fromto();
	document.getElementById("toin").value = answer;
}else if(convert=="to"){
	var answer = tofrom();
	document.getElementById("fromin").value = answer;
};
};
// A function to convert from length //
function fromto(){
	if(from.value=="meter" && to.value=="foot")
	{
	// This is from meter //
	answer = fromin.value * 3.28;
	}
	else if(from.value=="meter" && to.value=="centimeter")
	{
		answer = fromin.value * 100;
	}
	else if(from.value=="meter" && to.value=="kilometer")
	{
		answer = fromin.value * 0.001;
	}
	else if(from.value=="foot" && to.value=="meter")
	{
	// This is from Foot //
	answer = fromin.value * 0.3048;
	}
	else if(from.value=="foot" && to.value=="centimeter")
	{
		answer = fromin.value * 30.48;
	}
	else if(from.value=="foot" && to.value=="kilometer")
	{
		answer = fromin.value * 0.0003048;
	}
	else if(from.value=="centimeter" && to.value=="meter")
	{
	// This is from Centimeter //
	answer = fromin.value * 0.01;
	}
	else if(from.value=="centimeter" && to.value=="foot")
	{
		answer = fromin.value * 0.0328084;
	}
	else if(from.value=="centimeter" && to.value=="kilometer")
	{
		answer = fromin.value * 0.00001;
	}
	else if(from.value=="kilometer" && to.value=="meter")
	{
		// This is from kilometer
		answer = fromin.value * 1000;
	}
	else if(from.value=="kilometer" && to.value=="foot")
	{
		answer = fromin.value * 3280.8399;
	}
	else if(from.value=="kilometer" && to.value=="centimeter")
	{
		answer = fromin.value * 100000;
	};
	return(answer);
};
// A function to convert to length //
function tofrom(){
	if(from.value=="meter" && to.value=="foot")
	{
		// This is from meter //
		answer = toin.value * 0.3048;
	}
	else if(from.value=="meter" && to.value=="centimeter")
	{
		answer = toin.value * 0.01;
	}
	else if(from.value=="meter" && to.value=="kilometer")
	{
		answer = toin.value * 1000;
	}
	else if(from.value=="foot" && to.value=="meter")
	{
		// This is from Foot //
		answer = toin.value * 3.28;
	}
	else if(from.value=="foot" && to.value=="centimeter")
	{
		answer = toin.value * 0.0328084;
	}
	else if(from.value=="foot" && to.value=="kilometer")
	{
		answer = toin.value * 3280.8399;
	}
	else if(from.value=="centimeter" && to.value=="meter")
	{
		// This is from Centimeter //
		answer = toin.value * 100;
	}
	else if(from.value=="centimeter" && to.value=="foot")
	{
		answer = toin.value * 30.48;
	}
	else if(from.value=="centimeter" && to.value=="kilometer")
	{
		answer = toin.value * 100000;
	}
	else if(from.value=="kilometer" && to.value=="meter")
	{
		// This is from kilometer
		answer = toin.value * 0.001;
	}
	else if(from.value=="kilometer" && to.value=="foot")
	{
		answer = toin.value * 0.0003048;
	}
	else if(from.value=="kilometer" && to.value=="centimeter")
	{
		answer = toin.value * 0.00001;
	};
	return(answer);
};





