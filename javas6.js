function Upload(dvENG2) {
	
	//document.getElementsByClassName("tick").style.borderColor = "";
	const input = document.querySelector('#fileUpload');

	// Retrieve FileList object
	const files = input.files;
	cOff=[]
	cOff2=[]
	cOff3=[]
	// Loop through files
	for (let i = 0; i < files.length; i++) {
		//document.getElementsByClassName("tick").style.borderColor="#00ff00"
		//document.getElementsByClassName("tick").style.visibility="hidden"
		for (x = 0; x < document.getElementsByTagName('input').length; x++) {
			if (document.getElementsByTagName('input').item(x).type == 'checkbox') {
				let cn = document.getElementsByTagName('input').item(x);
				cn.checked =false
				tn = cn.id.slice(1);
				if(tn){
					ti = document.getElementById(tn);
					ti.style.borderColor = '#00ff00';
					ti.style.visibility = 'hidden';
					tn='c'+tn
					ti = document.getElementById(tn);
					ti.checked=false
				}
			}
		}
		
		let file = files.item(i);
		filename=file.name.split('.').slice(0, -1).join('.')
		var reader = new FileReader();
		document.getElementById("nameid").value = filename;
			
			//Validate whether File is valid Excel file.
			var regex = /^([a-zA-Z0-9\(\)\s_\\.\-:])+(.xls|.xlsx|.csv)$/;
			if (regex.test(fileUpload.value.toLowerCase())) {
				if (typeof(FileReader) != "undefined") {
					
					//For Browsers other than IE.
					if (reader.readAsBinaryString) {
						reader.onload = function(e) {
							
							cOff2=ProcessExcel(e.target.result,file.name,dvENG2,i).slice();
							for(lm=0;lm<cOff2.length;lm++)
							{if (!cOff.includes(cOff2[lm])){
							cOff.push(cOff2[lm])
							cOff3.push(cOff2[lm])}}
							//ProcessExcel(e.target.result,file.name,dvENG2);
							
							var bn = document.getElementById("coursoff");
							var cx=[]
							cx = bn.innerHTML
							for(mn=0;mn<cOff3.length;mn++)
								if(!cx.includes(cOff3[mn]))
									bn.innerHTML += cOff3[mn]+','
							cOff2=[]
							cOff3=[]
							
							
						};
						
						reader.readAsBinaryString(file);
					
						
					} else {
						//For IE Browser.
						reader.onload = function(e) {
							var data = "";
							var bytes = new Uint8Array(e.target.result);
							for (var i = 0; i < bytes.byteLength; i++) {
								data += String.fromCharCode(bytes[i]);
							}
							cOff2=ProcessExcel(data,file.name,dvENG2,i).slice();
							//ProcessExcel(data,file.name,dvENG2);
							for(lm=0;lm<cOff2.length;lm++)
							{if (!cOff.includes(cOff2[lm])){
							cOff.push(cOff2[lm])
							cOff3.push(cOff2[lm])}}
							//ProcessExcel(e.target.result,file.name,dvENG2);
							
							var bn = document.getElementById("coursoff");
							var cx=[]
							cx = bn.innerHTML
							for(mn=0;mn<cOff3.length;mn++)
								if(!cx.includes(cOff3[mn]))
									bn.innerHTML += cOff3[mn]+','
							cOff2=[]
							cOff3=[]
							
						};
						reader.readAsArrayBuffer(file);
					}
			
				} else {
					alert("This browser does not support HTML5.");
				}
			} else {
				alert("Please upload a valid Excel file.");
			}
	
}

	
};

function ProcessExcel(data,nmid,dvENG2,ifile) {
	for (x = 0; x < document.getElementsByTagName('input').length; x++) {
		if (document.getElementsByTagName('input').item(x).type == 'checkbox') {
			let cn = document.getElementsByTagName('input').item(x);
			cn.checked =false
			tn = cn.id.slice(1);
			if(tn){
				ti = document.getElementById(tn);
				ti.style.borderColor = '#00ff00';
				ti.style.visibility = 'hidden';
				tn='c'+tn
				ti = document.getElementById(tn);
				ti.checked=false
			}
		}
	}
	let courseOff=[]
	let report=[];
	//var nmid=document.getElementById("nameid").value;
	filename=nmid.split('.').slice(0, -1).join('.')
	report.push(filename);
	//alert(filename)
	
	//Read the Excel File data.
	var workbook = XLSX.read(data, {
		type: 'binary'
	});
	
	//Fetch the name of First Sheet.
	var firstSheet = workbook.SheetNames[0];
	//Read all rows from First Sheet into an JSON array.
	var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
	let STUDENT = []
	//Add the data rows from Excel file.
	for (var i = 0; i < excelRows.length; i++) {
		var t = excelRows[i].Repeat_Code;
		if (t) {
			STUDENT.push([excelRows[i].Term, excelRows[i].Course, excelRows[i].Title, parseInt(excelRows[i].Credits), excelRows[i].Level, excelRows[i].Grade, excelRows[i].SGPA, excelRows[i].Repeat_Code]);
		} else {
			if (excelRows[i].Term)
				STUDENT.push([excelRows[i].Term, excelRows[i].Course, excelRows[i].Title, parseInt(excelRows[i].Credits), excelRows[i].Level, excelRows[i].Grade, excelRows[i].SGPA, ""]);
			else
				STUDENT.push(["Active", excelRows[i].Course, excelRows[i].Title, parseInt(excelRows[i].Credits), excelRows[i].Level, excelRows[i].Grade, excelRows[i].SGPA, ""]);
		}
	
}
	let GE = [
		'MCHE213',
		'INME221',
		'COMP208'
	];
	let BASIC = [
		'MATH281',
		'MATH282',
		'PHYS281',
		'MATH283',
		'PHYS282',
		'CHEM241',
		'MATH284',
		'MATH381',
		'CHEM405'
	];
	let sENG = [
		'IC003',
		'ARAB001',
		'ENGL001',
		'BLAW001',
		'ENGR001',
		'ENGL211',
		'ENGL300',
		'MGMT002'
	];
	let ENG = [
		'IC003',
		'ARAB001',
		'ENGL001',
		'BLAW001',
		'ENGR001',
		'ENGL211',
		'ENGL300',
		'MGMT002',
		'ARCH003',
		'BACC001',
		'BACC003',
		'BACC003',
		'BFSC001',
		'BIOL002',
		'BLAW006',
		'BLAW008',
		'BMGT001',
		'CMPS005',
		'CVLE007',
		'ENVI004',
		'FREN001',
		'FREN002',
		'FREN003',
		'HESC002',
		'HESC003',
		'HESC004',
		'HIST001',
		'HIST003',
		'HIST004',
		'HIST005',
		'HIST007',
		'HIST009',
		'HIST017',
		'HIST018',
		'HSSC001',
		'ITAL001',
		'MCOM002',
		'MCOM003',
		'NURS001',
		'NUTR001',
		'NUTR002',
		'PHAR011',
		'PHYS002',
		'PHYS006',
		'SCTH001',
		'SOCI001',
		'SOCI004',
		'SOCI008',
		'WRNL200',
		'HESC301',
		'NUTR413',
		'BUSN203',
		'CMPS001',
		'CMPS002',
		'PHED002',
		'HIST002',
		'PHED004',
		'SPAN001',
		'BECO001',
		'ARCH005',
		'POWE001',
		'CMPS004',
		'PTRE201',
		'PHED003'
	
		
	];
	let FRESH=[
	'MATH112',
	'MATH111',
	'PHYS120',
	'CHEM110'
	]
	let OUT = [
		'POWE212',
		'COME223',
		'COME411'
	];
	let CORE = [
		'COMP431',
		'COMP211',
		'ENGR002',
		'COMP210',
		'COMP215',
		'COMP225',
		'COMP226',
		'COMP231',
		'COMP232',
		'COMP311',
		'COMP325',
		'COMP337',
		'COMP344',
		'COMP361',
		'COMP364',
		'COMP423',
		'COMP428',
		'COMP442',
		'COMP443',
		'COMP452',
		'COMP453',
		'COMP454',
		'COMP454L',
		'COMP499',
		'COMP500',
		'COMP501',
		'COMP502',
		'COMP525',
		'COMP543',
		'COMP543L'
	];
	let TECH = [
		'COMP438',
		'COMP444',
		'COMP455',
		'COMP464',
		'COMP477',
		'COMP510',
		'COMP512',
		'COMP529',
		'COMP530',
		'COMP532',
		'COMP533',
		'COMP534',
		'COMP535',
		'COMP541',
		'COMP554',
		'COMP555',
		'COMP556',
		'COMP559',
		'COMP560',
		'COMP561',
		'COMP562',
		'COMP564',
		'COMP565',
		'COMP567',
		'COMP568',
		'INME482'
	];
	//course,prereq
	let prereq = [
		['COMP232', 'COMP210'],
		['COME223', 'POWE212'],
		['COME411', 'COME223'],
		['COME221', 'COME223'],
		['COMP210', 'COMP208'],
		['COMP215', 'COMP208'],
		['COMP226', 'COMP225'],
		['COMP222', 'COMP225'],
		['COMP226', 'COMP221'],
		['COMP222', 'COMP221'],
		['COMP231', 'MATH282'],
		['COMP232', 'COMP210', 'COMP231'],
		['COMP311', 'COMP210'],
		['COMP325', 'COMP226'],
		['COMP324', 'COMP226'],
		['COMP325', 'COMP222'],
		['COMP324', 'COMP222'],
		['COMP328', 'COMP226'],
		['COMP328', 'COMP222'],
		['COMP337', 'COMP231'],
		['COMP344', 'COMP232'],
		['COMP361', 'MATH283', 'POWE212'],
		['COMP364', 'COMP215'],
		['COMP462', 'COMP215'],
		['COMP423', 'COMP226'],
		['COMP423', 'COMP222'],
		['COMP428', 'COMP325'],
		['COMP428', 'COMP324'],
		['COMP428', 'COMP328'],
		['COMP442', 'COMP311'],
		['COMP443', 'COMP423'],
		['COMP452', 'COMP311'],
		['COMP448', 'COMP311'],
		['COMP453', 'COMP231'],
		['COMP454', 'COMP225'],
		['COMP454', 'COMP221'],
		['COMP458', 'COMP225'],
		['COMP458', 'COMP221'],
		['COMP454L', 'COMP454'],
		['COMP454L', 'COMP458'],
		['COMP500', 'ENGL300'],
		['COMP501', 'COMP500'],
		['COMP502', 'COMP500'],
		['COMP525', 'COMP325'],
		['COMP525', 'COMP324'],
		['COMP521', 'COMP325'],
		['COMP521', 'COMP324'],
		['COMP525', 'COMP328'],
		['COMP521', 'COMP328'],
		['COMP543', 'COMP337'],
		['COMP531', 'COMP337'],
		['COMP543', 'COMP333'],
		['COMP531', 'COMP333'],
		['COMP543L', 'COMP543'],
		['COMP543L', 'COMP531'],
		['COMP431', 'MATH381'],
		['COMP438', 'COMP325', 'MATH283'],
		['COMP438', 'COMP324', 'MATH283'],
		['COMP444', 'COMP443'],
		['COMP455', 'COMP210'],
		['COMP464', 'COMP231'],
		['COMP477', 'COMP325'],
		['COMP477', 'COMP324'],
		['COMP477', 'COMP232'],
		['COMP510', 'COMP454'],
		['COMP510', 'COMP458'],
		['COMP512', 'COMP344'],
		['COMP529', 'COMP428'],
		['COMP530', 'COMP428'],
		['COMP532', 'COMP337', 'MATH381'],
		['COMP532', 'COMP333', 'MATH381'],
		['COMP533', 'COMP311'],
		['COMP534', 'COMP231'],
		['COMP535', 'COMP453'],
		['COMP541', 'COMP442'],
		['COMP554', 'COMP454'],
		['COMP554', 'COMP458'],
		['COMP555', 'COMP454'],
		['COMP555', 'COMP458'],
		['COMP556', 'COMP454'],
		['COMP556', 'COMP458'],
		['COMP559', 'COMP454'],
		['COMP559', 'COMP458'],
		['COMP560', 'COMP364'],
		['COMP560', 'COMP462'],
		['COMP561', 'COMP361'],
		['COMP562', 'COMP364'],
		['COMP562', 'COMP462'],
		['COMP564', 'COMP364'],
		['COMP564', 'COMP462'],
		['COMP565', 'COMP364'],
		['COMP565', 'COMP462'],
		['COMP567', 'COMP454'],
		['COMP567', 'COMP458'],
		['COMP568', 'COMP232'],
		['INME482', 'ENGL300']
	];
	let fres=[];
	let elec = 0;
	let GE_C = 0;
	let BASIC_C = 0;
	let ENG_C = 0;
	let OUT_C = 0;
	let CORE_C = 0;
	let TECH_C = 0;
	let other_C = 0;
	let GE_L = [];
	let BASIC_L = [];
	let ENG_L = [];
	let OUT_L = [];
	let CORE_L = [];
	let TECH_L = [];
	let OTHER_L = [];
	let ENG_F = [];
	let BASIC_F = [];
	let GE_F = [];
	let OUT_F = [];
	let CORE_F = [];
	let TECH_F = [];
	let other_F = [];
	let pass = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D','D-', 'P', 'TR'];
	let fail = ['D-', 'F'];
	let grade = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D','D-','P', 'TR', 'F', 'W','NP']
	let mand = ['IC003', 'ARAB001', 'ENGL001', 'BLAW001'];
	let mand_st = [];
	let fail_c = [];
	let inc = [];
	let dup = [];
	let sum = 0;
	let nsum = 0;
	let totalgrad = 150;
	let crl = [];
	let dminusflag = 0
	let alter = [
		['COMP333', 'COMP337'],
		['COMP462', 'COMP364'],
		['COMP521', 'COMP525'],
		['COMP328', 'COMP325'],
		['COMP531', 'COMP543'],
		['COMP448', 'COMP452'],
		['COMP458', 'COMP454'],
		['COMP221', 'COMP225'],
		['COMP222', 'COMP226'],
		['COMP324', 'COMP325'],
		['COME221', 'COME411'],
		['POWE344', 'COME411'],
		['POWE210', 'POWE212'],
		['BMGT002', 'MGMT002']
	];
	
	let active = [];
	let prob = [];
	for (let i = 0; i < STUDENT.length; i++) {
		if (STUDENT[i][0] == 'Lebanese baccalaureate or Eqv.')
			continue;
		let course = STUDENT[i][1];
		if (course == 'COMP222L') {
			CORE_C += STUDENT[i][3];
			//CORE_L.push("["+STUDENT[i]+"]");
			CORE_F.push(['e']);
			for (j = 0; j < 8; j++) {
				CORE_F[CORE_F.length - 1][j] = STUDENT[i][j];
			}
			continue;
		}
		for (var q = 0; q < alter.length; q++) {
			if (course == alter[q][0])
				course = alter[q][1];
		}
		cours = document.getElementById(course);
		//document.getElementById('trg').innerHTML=course;
		if (STUDENT[i][0] == "Active") {
			if (cours)
				STUDENT[i][3] = parseInt(cours.getAttribute('value'));
			else if (TECH.includes(course)) {
				STUDENT[i][3] = 3
			} else {
				if (STUDENT[i][1]=='POWE344')
					STUDENT[i][3] = 3
				else
				{STUDENT[i][3] = 2
				prob.push(course)}
			}
			STUDENT[i][4] = "UG"
			STUDENT[i][5] = "/"
			STUDENT[i][6] = 0
			active.push(course);
		}
		//check earned credits
		sum += STUDENT[i][3];
		//check for fail
		if (fail.includes(STUDENT[i][5])) {
			
			//check if a D- course is a prereq, if not count it
			if(STUDENT[i][5] == 'D-'){
				for (ij=0;ij<prereq.length;ij++){
					for(ji=1;ji<prereq[ij].length;ji++){
						if (STUDENT[i][1]== prereq[ij][ji]){
							dminusflag=1
						}
					}
				}
				if (dminusflag==1){
					fail_c.push("[" + STUDENT[i] + "]");
					dminusflag = 0
					continue
				}
			}
		if (STUDENT[i][5] == 'F'){
			fail_c.push("[" + STUDENT[i] + "]");
		}
		}
		//check for incomplete
		if (STUDENT[i][5] == 'I') {
			inc.push("[" + STUDENT[i] + "]");
		}
		//check for duplicates and 
		if(STUDENT[i][5]=='W')
				continue;
		for (let j = 0; j < STUDENT.length; j++) {
			if (i == j) {
				continue;
			}
			if (STUDENT[i][5] == "/")
				continue
			
			if (STUDENT[i][1] == STUDENT[j][1] && grade.indexOf(STUDENT[i][5]) > grade.indexOf(STUDENT[j][5])) {
				dup.push("[" + STUDENT[i] + "]");
			}
		}
		if (dup.includes("[" + STUDENT[i] + "]") || inc.includes("[" + STUDENT[i] + "]")) {
			nsum += STUDENT[i][3];
			continue;
		}
		//check for mandatory
		if (mand.includes(course)) {
			mand_st.push(STUDENT[i][1]);
		}
		
		//check for groups and total
		if (GE.includes(course) && (pass.includes(STUDENT[i][5]) || STUDENT[i][5] == "/")) {
			GE_C += STUDENT[i][3];
			GE_L.push("[" + STUDENT[i] + "]");
			GE_F.push(['e']);
			for (j = 0; j < 8; j++) {
				GE_F[GE_F.length - 1][j] = STUDENT[i][j];
			}
		} else if (BASIC.includes(course) && (pass.includes(STUDENT[i][5]) || STUDENT[i][5] == "/")) {
			BASIC_C += STUDENT[i][3];
			BASIC_L.push("[" + STUDENT[i] + "]");
			BASIC_F.push(['e']);
			for (j = 0; j < 8; j++) {
				BASIC_F[BASIC_F.length - 1][j] = STUDENT[i][j];
			}
			if (cours) {
				if (active.includes(course))
					document.getElementById(course).style.borderColor = "yellow";
				document.getElementById(course).style.visibility = 'visible';
				document.getElementById("c" + course).checked = true;
			}
		} else if (ENG.includes(course) && (pass.includes(STUDENT[i][5]) || STUDENT[i][5] == "/")) {
			ENG_C += STUDENT[i][3];
			ENG_L.push("[" + STUDENT[i] + "]");
			ENG_F.push(['e']);
			for (j = 0; j < 8; j++) {
				ENG_F[ENG_F.length - 1][j] = STUDENT[i][j];
			}
			if (!sENG.includes(STUDENT[i][1])) {
				elec += 1;
			}
			if (cours) {
				if (active.includes(course))
					document.getElementById(course).style.borderColor = "yellow";
				document.getElementById(course).style.visibility = 'visible';
				document.getElementById("c" + course).checked = true;
			}
		} else if (OUT.includes(course) && (pass.includes(STUDENT[i][5]) || STUDENT[i][5] == "/")) {
			OUT_C += STUDENT[i][3];
			OUT_L.push("[" + STUDENT[i] + "]");
			OUT_F.push(['e']);
			for (j = 0; j < 8; j++) {
				OUT_F[OUT_F.length - 1][j] = STUDENT[i][j];
			}
		} else if (CORE.includes(course) && (pass.includes(STUDENT[i][5]) || STUDENT[i][5] == "/")) {
			CORE_C += STUDENT[i][3];
			CORE_L.push("[" + STUDENT[i] + "]");
			CORE_F.push(['e']);
			for (j = 0; j < 8; j++) {
				CORE_F[CORE_F.length - 1][j] = STUDENT[i][j];
			}
			crl.push(STUDENT[i][1]); //to track  and compare the names only for later check in non taken core courses
		} else if (TECH.includes(course) && (pass.includes(STUDENT[i][5]) || STUDENT[i][5] == "/")) {
			TECH_C += STUDENT[i][3];
			TECH_L.push("[" + STUDENT[i] + "]");
			TECH_F.push(['e']);
			for (j = 0; j < 8; j++) {
				TECH_F[TECH_F.length - 1][j] = STUDENT[i][j];
			}
			if (cours) {
				if (active.includes(course))
					document.getElementById(course).style.borderColor = "yellow";
				document.getElementById(course).style.visibility = 'visible';
				document.getElementById("c" + course).checked = true;
			}
		} else if (pass.includes(STUDENT[i][5])|| STUDENT[i][5] == "/") {
			
			if (FRESH.includes(STUDENT[i][1])){
				fres.push(STUDENT[i][3]);
				STUDENT[i][4]+=" FRESHMAN";
				
				}
				
			nsum += STUDENT[i][3];
			
			other_C += STUDENT[i][3];
			OTHER_L.push("[" + STUDENT[i] + "]");
			other_F.push(['e']);
			for (j = 0; j < 8; j++) {
				other_F[other_F.length - 1][j] = STUDENT[i][j];
			}
		} 
		
		else {
			
		}
		//document.getElementById("trg").innerHTML=course.value;
		if (cours) {
			if (active.includes(course))
				document.getElementById(course).style.borderColor = "yellow";
			document.getElementById(course).style.visibility = 'visible';
			document.getElementById("c" + course).checked = true;
		}
	}
	let diff = [];
	for (i = 0; i < CORE.length; i++) {
		if (!crl.includes(CORE[i]))
			diff.push(CORE[i]);
	}
	//tick and check technical
	for (i = 1; i <= TECH_L.length && i <= 4; i++) {
		document.getElementById("TE" + i).style.borderColor = '#00ff00';
		document.getElementById("TE" + i).style.visibility = 'visible';
		document.getElementById("c" + "TE" + i).checked = true;
	}
	//tick and check general
	for (i = 1; i <= elec && i <= 3; i++) {
		document.getElementById("TE" + i).style.borderColor = '#00ff00';
		document.getElementById("GE" + i).style.visibility = 'visible';
		document.getElementById("c" + "GE" + i).checked = true;
	}
	total = GE_C + BASIC_C + ENG_C + OUT_C + CORE_C + TECH_C + other_C;
	
	// loop through each input element and output the value of any checkbox elements
	for (x = 0; x < document.getElementsByTagName('input').length; x++) {
		if (document.getElementsByTagName('input').item(x).type == 'checkbox') {
			let cn = document.getElementsByTagName('input').item(x);
			if (cn.checked == false) {
				tn = cn.id.slice(1);
				preFlag = 0;
				inpre = 0;
				if (tn) {
					for (n = 0; n < prereq.length; n++) {
						if (tn == prereq[n][0]) {
							inpre = 1;
							for (v = 1; v < prereq[n].length; v++) {
								for (c = 0; c < STUDENT.length; c++) {
									if (prereq[n][v] == STUDENT[c][1]) {
										preFlag += 1;
										break;
									}
								}
							}
							if (preFlag == prereq[n].length - 1) {
								if (tn == 'COMP501' && total < 110) {
									preFlag = 0;
									inpre = 0;
									continue;
								}
								ti = document.getElementById(tn);
								ti.style.borderColor = "orange";
								ti.style.visibility = 'visible';

								if(!courseOff.includes(tn))
									courseOff.push(tn);
								tn='c'+tn
								ti=document.getElementById(tn)
								ti.checked=false
							}
							preFlag = 0;
						}
					}
					if (inpre == 0) {
						ti = document.getElementById(tn);
						ti.style.borderColor = "orange";
						ti.style.visibility = 'visible';
						if(!courseOff.includes(tn))
							courseOff.push(tn);
						tn='c'+tn
						ti=document.getElementById(tn)
						ti.checked=false
					}
					inpre = 0;
				}
			}
		}
	}
	//var here = document.getElementById("here");
	//here.innerHTML = ENG_F;
	let GE_Min = 20;
	let BASIC_Min = 26;
	let ENG_Min = 9;
	let OUT_Min = 9;
	let CORE_Min = 74;
	let TECH_Min = 12;
	//FILL TABLES
	//Create a HTML Table element.
	var table = document.createElement("table");
	table.className="disoki"
	table.border = "1";
	table.style.width = '100%';
	//table.style.marginLeft='0';
	//Add the header row.
	
	var ENGrow = table.insertRow(-1);
	var headerCell = document.createElement("TH");
	headerCell.innerHTML =filename;
	headerCell.style.backgroundColor="yellow"
	headerCell.rowspan=2;
	ENGrow.appendChild(headerCell);
	
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "Courses in blue are mandatory for graduation. <br> Bold Green Courses are prereq for fyp + ENGL001";
	headerCell.colSpan=7;
	ENGrow.appendChild(headerCell);
	
	var ENGrow = table.insertRow(-1);
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "Term";
	headerCell.style.backgroundColor = "#eee";
	ENGrow.appendChild(headerCell);
	//Add the header cells.
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "Course";
	headerCell.style.backgroundColor = "#eee";
	ENGrow.appendChild(headerCell);
	//Add the header cells.
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "Title";
	headerCell.style.backgroundColor = "#eee";
	ENGrow.appendChild(headerCell);
	//Add the header cells.
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "Credits";
	headerCell.style.backgroundColor = "#eee";
	ENGrow.appendChild(headerCell);
	//Add the header cells.
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "Level";
	headerCell.style.backgroundColor = "#eee";
	ENGrow.appendChild(headerCell);
	//Add the header cells.
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "Grade";
	headerCell.style.backgroundColor = "#eee";
	ENGrow.appendChild(headerCell);
	//Add the header cells.
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "SGPA";
	headerCell.style.backgroundColor = "#eee";
	ENGrow.appendChild(headerCell);
	//Add the header cells.
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "Repeat_Code";
	headerCell.style.backgroundColor = "#eee";
	ENGrow.appendChild(headerCell);
	//Create array of options to be added
	var array = ["Move to", "General Education Requirements", "Basic Sciences and Mathematics", "General Engineering topics", "A- Engineering topics from outside the program", "B- CE Core", "C-Technical Elective", "Other"];
	var array2 = ["Move to", "ENG_F", "BASIC_F", "GE_F", "OUT_F", "CORE_F", "TECH_F", "other_F"];
	var row = table.insertRow(-1);
	row.style.backgroundColor = "#eee";
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "General Education Requirements";
	headerCell.colSpan = 3;
	row.appendChild(headerCell);
	var x = document.createElement("TH");
	x.innerHTML = "Earned:  "+ ENG_C;
	x.style.backgroundColor="yellow"
	//x.colSpan = 2;
	row.appendChild(x);
	//var tot = document.createElement("INPUT");
	//tot.value = ENG_C;
	//row.appendChild(tot);
	report.push(ENG_C);
	var x = document.createElement("TH");
	x.innerHTML = "Required:  "+GE_Min;
	x.style.backgroundColor="yellow"
	//var z = document.createElement("br");
	row.appendChild(x);
	//row.appendChild(z);
	//var y = document.createElement("TH");
	//y.innerHTML = GE_Min;
	//row.appendChild(y);
	//var headerCell = document.createElement("TH");
	//headerCell.innerHTML = "";
	//headerCell.colSpan = 2;
	//row.appendChild(headerCell);
	
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "";
	headerCell.colSpan = 4;
	row.appendChild(headerCell);
	//Add the data rows from Excel file.
	let fyp = ['ENGL001', 'ENGL211', 'ENGL300', 'COMP500']
	let probFlag = 0
	for (var i = 0; i < ENG_F.length; i++) {
		
		//Add the data row.
		var row = table.insertRow(-1);
		for (j = 0; j < 8; j++) {
			//Add the data cells.
			var cell = row.insertCell(-1);
			cell.innerHTML = ENG_F[i][j];
			if(mand.includes(cell.innerHTML))
				row.style.color = "blue"
			if(fyp.includes(cell.innerHTML)){
				
				row.style.fontWeight="bold"
				if(cell.innerHTML!='ENGL001')
					row.style.color= "green"
			}
			if (cell.innerHTML == "Active")
				row.style.backgroundColor = "#FFF200"
			if (prob.includes(cell.innerHTML))
				probFlag = 1
			if (j == 3 && probFlag == 1) {
				cell.style.backgroundColor = "red"
				probFlag=0;
			}
		}
	}
	var row = table.insertRow(-1);
	row.style.backgroundColor = "#eee";
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "Basic Sciences and Mathematics";
	headerCell.colSpan = 3;
	row.appendChild(headerCell);
	
	var x = document.createElement("TH");
	x.innerHTML = "Earned:  "+ BASIC_C;
	x.style.backgroundColor="yellow"
	//x.colSpan = 2;
	row.appendChild(x);
	//var tot = document.createElement("INPUT");
	//tot.value = ENG_C;
	//row.appendChild(tot);
	report.push(BASIC_C);
	var x = document.createElement("TH");
	x.innerHTML = "Required:  "+BASIC_Min;
	x.style.backgroundColor="yellow"
	//var z = document.createElement("br");
	row.appendChild(x);
	//row.appendChild(z);
	//var y = document.createElement("TH");
	//y.innerHTML = GE_Min;
	//row.appendChild(y);
	//var headerCell = document.createElement("TH");
	//headerCell.innerHTML = "";
	//headerCell.colSpan = 2;
	//row.appendChild(headerCell);
	
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "";
	headerCell.colSpan = 4;
	row.appendChild(headerCell);
	
	
	/*
	var x = document.createElement("label");
	x.innerHTML = "Required  ";
	var z = document.createElement("br");
	row.appendChild(x);
	row.appendChild(z);
	var y = document.createElement("INPUT");
	y.value = BASIC_Min;
	row.appendChild(y);
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "";
	headerCell.colSpan = 2;
	row.appendChild(headerCell);
	var x = document.createElement("label");
	x.innerHTML = "Earned Credits  ";
	row.appendChild(x);
	var tot = document.createElement("INPUT");
	tot.value = BASIC_C;
	row.appendChild(tot);
	
	report.push(tot.value);
	*/
	//Add the data rows from Excel file.
	for (var i = 0; i < BASIC_F.length; i++) {
		//Add the data row.
		var row = table.insertRow(-1);
		for (j = 0; j < 8; j++) {
			//Add the data cells.
			var cell = row.insertCell(-1);
			cell.innerHTML = BASIC_F[i][j];
			if (cell.innerHTML == "Active")
				row.style.backgroundColor = "#FFF200"
		}
	}
	var row = table.insertRow(-1);
	row.style.backgroundColor = "#eee";
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "General Engineering topics";
	headerCell.colSpan = 3;
	row.appendChild(headerCell);
	var x = document.createElement("TH");
	x.innerHTML = "Earned:  "+ GE_C;
	x.style.backgroundColor="yellow"
	//x.colSpan = 2;
	row.appendChild(x);
	//var tot = document.createElement("INPUT");
	//tot.value = ENG_C;
	//row.appendChild(tot);
	report.push(GE_C);
	var x = document.createElement("TH");
	x.innerHTML = "Required:  "+ENG_Min;
	x.style.backgroundColor="yellow"
	//var z = document.createElement("br");
	row.appendChild(x);
	//row.appendChild(z);
	//var y = document.createElement("TH");
	//y.innerHTML = GE_Min;
	//row.appendChild(y);
	//var headerCell = document.createElement("TH");
	//headerCell.innerHTML = "";
	//headerCell.colSpan = 2;
	//row.appendChild(headerCell);
	
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "";
	headerCell.colSpan = 4;
	row.appendChild(headerCell);
	
	
	
	/*
	var x = document.createElement("label");
	x.innerHTML = "Required  ";
	var z = document.createElement("br");
	row.appendChild(x);
	row.appendChild(z);
	var y = document.createElement("INPUT");
	y.value = ENG_Min;
	row.appendChild(y);
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "";
	headerCell.colSpan = 2;
	row.appendChild(headerCell);
	var x = document.createElement("label");
	x.innerHTML = "Earned Credits  ";
	row.appendChild(x);
	var tot = document.createElement("INPUT");
	tot.value = GE_C;
	row.appendChild(tot);
	report.push(tot.value);
	*/
	//Add the data rows from Excel file.
	for (var i = 0; i < GE_F.length; i++) {
		//Add the data row.
		var row = table.insertRow(-1);
		for (j = 0; j < 8; j++) {
			//Add the data cells.
			var cell = row.insertCell(-1);
			cell.innerHTML = GE_F[i][j];
			if (cell.innerHTML == "Active")
				row.style.backgroundColor = "#FFF200"
		}
	}
	var row = table.insertRow(-1);
	row.style.backgroundColor = "#eee";
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "A- Engineering topics from outside the program";
	headerCell.colSpan = 3;
	row.appendChild(headerCell);
	var x = document.createElement("TH");
	x.innerHTML = "Earned:  "+ OUT_C;
	x.style.backgroundColor="yellow"
	//x.colSpan = 2;
	row.appendChild(x);
	//var tot = document.createElement("INPUT");
	//tot.value = ENG_C;
	//row.appendChild(tot);
	report.push(OUT_C);
	var x = document.createElement("TH");
	x.innerHTML = "Required:  "+OUT_Min;
	x.style.backgroundColor="yellow"
	//var z = document.createElement("br");
	row.appendChild(x);
	//row.appendChild(z);
	//var y = document.createElement("TH");
	//y.innerHTML = GE_Min;
	//row.appendChild(y);
	//var headerCell = document.createElement("TH");
	//headerCell.innerHTML = "";
	//headerCell.colSpan = 2;
	//row.appendChild(headerCell);
	
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "";
	headerCell.colSpan = 4;
	row.appendChild(headerCell);
	
	
	/*
	var x = document.createElement("label");
	x.innerHTML = "Required  ";
	var z = document.createElement("br");
	row.appendChild(x);
	row.appendChild(z);
	var y = document.createElement("INPUT");
	y.value = OUT_Min;
	row.appendChild(y);
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "";
	headerCell.colSpan = 2;
	row.appendChild(headerCell);
	var x = document.createElement("label");
	x.innerHTML = "Earned Credits  ";
	row.appendChild(x);
	var tot = document.createElement("INPUT");
	tot.value = OUT_C;
	row.appendChild(tot);
	report.push(tot.value);
	*/
	//Add the data rows from Excel file.
	for (var i = 0; i < OUT_F.length; i++) {
		//Add the data row.
		var row = table.insertRow(-1);
		for (j = 0; j < 8; j++) {
			//Add the data cells.
			var cell = row.insertCell(-1);
			cell.innerHTML = OUT_F[i][j];
			if (cell.innerHTML == "Active")
				row.style.backgroundColor = "#FFF200"
		}
	}
	var row = table.insertRow(-1);
	row.style.backgroundColor = "#eee";
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "B- CE Core";
	headerCell.colSpan = 3;
	row.appendChild(headerCell);
	var x = document.createElement("TH");
	x.innerHTML = "Earned:  "+ CORE_C;
	x.style.backgroundColor="yellow"
	//x.colSpan = 2;
	row.appendChild(x);
	//var tot = document.createElement("INPUT");
	//tot.value = ENG_C;
	//row.appendChild(tot);
	report.push(CORE_C);
	var x = document.createElement("TH");
	x.innerHTML = "Required:  "+CORE_Min;
	x.style.backgroundColor="yellow"
	//var z = document.createElement("br");
	row.appendChild(x);
	//row.appendChild(z);
	//var y = document.createElement("TH");
	//y.innerHTML = GE_Min;
	//row.appendChild(y);
	//var headerCell = document.createElement("TH");
	//headerCell.innerHTML = "";
	//headerCell.colSpan = 2;
	//row.appendChild(headerCell);
	
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "";
	headerCell.colSpan = 4;
	row.appendChild(headerCell);
	
	/*
	var x = document.createElement("label");
	x.innerHTML = "Required  ";
	var z = document.createElement("br");
	row.appendChild(x);
	row.appendChild(z);
	var y = document.createElement("INPUT");
	y.value = CORE_Min;
	row.appendChild(y);
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "";
	headerCell.colSpan = 2;
	row.appendChild(headerCell);
	var x = document.createElement("label");
	x.innerHTML = "Earned Credits  ";
	row.appendChild(x);
	var tot = document.createElement("INPUT");
	tot.value = CORE_C;
	row.appendChild(tot);
	report.push(tot.value);*/
	//Add the data rows from Excel file.
	for (var i = 0; i < CORE_F.length; i++) {
		//Add the data row.
		var row = table.insertRow(-1);
		for (j = 0; j < 8; j++) {
			//Add the data cells.
			var cell = row.insertCell(-1);
			cell.innerHTML = CORE_F[i][j];
			if(fyp.includes(cell.innerHTML)){
				
				row.style.fontWeight="bold"
				row.style.color= "green"
			}
			if (cell.innerHTML == "Active")
				row.style.backgroundColor = "#FFF200"
		}
	}
	var row = table.insertRow(-1);
	row.style.backgroundColor = "#eee";
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "C-Technical Elective";
	headerCell.colSpan = 3;
	row.appendChild(headerCell);
	var x = document.createElement("TH");
	x.innerHTML = "Earned:  "+ TECH_C;
	x.style.backgroundColor="yellow"
	//x.colSpan = 2;
	row.appendChild(x);
	//var tot = document.createElement("INPUT");
	//tot.value = ENG_C;
	//row.appendChild(tot);
	report.push(TECH_C);
	
	var x = document.createElement("TH");
	x.innerHTML = "Required:  "+TECH_Min;
	x.style.backgroundColor="yellow"
	//var z = document.createElement("br");
	row.appendChild(x);
	//row.appendChild(z);
	//var y = document.createElement("TH");
	//y.innerHTML = GE_Min;
	//row.appendChild(y);
	//var headerCell = document.createElement("TH");
	//headerCell.innerHTML = "";
	//headerCell.colSpan = 2;
	//row.appendChild(headerCell);
	
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "";
	headerCell.colSpan = 4;
	row.appendChild(headerCell);
	
	/*
	var x = document.createElement("label");
	x.innerHTML = "Required  ";
	var z = document.createElement("br");
	row.appendChild(x);
	row.appendChild(z);
	var y = document.createElement("INPUT");
	y.value = TECH_Min;
	row.appendChild(y);
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "";
	headerCell.colSpan = 2;
	row.appendChild(headerCell);
	var x = document.createElement("label");
	x.innerHTML = "Earned Credits  ";
	row.appendChild(x);
	var tot = document.createElement("INPUT");
	tot.value = TECH_C;
	row.appendChild(tot);
	report.push(tot.value);*/
	//Add the data rows from Excel file.
	for (var i = 0; i < TECH_F.length; i++) {
		//Add the data row.
		var row = table.insertRow(-1);
		for (j = 0; j < 8; j++) {
			//Add the data cells.
			var cell = row.insertCell(-1);
			cell.innerHTML = TECH_F[i][j];
			if (cell.innerHTML == "Active")
				row.style.backgroundColor = "#FFF200"
		}
	}
	var row = table.insertRow(-1);
	row.style.backgroundColor = "#eee";
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "Other";
	headerCell.colSpan = 3;
	row.appendChild(headerCell);
	var x = document.createElement("TH");
	x.innerHTML = "Earned:  "+ other_C;
	x.style.backgroundColor="yellow"
	//x.colSpan = 2;
	row.appendChild(x);
	//var tot = document.createElement("INPUT");
	//tot.value = ENG_C;
	//row.appendChild(tot);
	report.push(other_C);
	var x = document.createElement("TH");
	x.innerHTML = "Required: 0 ";
	x.style.backgroundColor="yellow"
	//var z = document.createElement("br");
	row.appendChild(x);
	//row.appendChild(z);
	//var y = document.createElement("TH");
	//y.innerHTML = GE_Min;
	//row.appendChild(y);
	//var headerCell = document.createElement("TH");
	//headerCell.innerHTML = "";
	//headerCell.colSpan = 2;
	//row.appendChild(headerCell);
	
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "";
	headerCell.colSpan = 4;
	row.appendChild(headerCell);
	
	/*
	var x = document.createElement("label");
	x.innerHTML = "Required  ";
	var z = document.createElement("br");
	row.appendChild(x);
	row.appendChild(z);
	var y = document.createElement("INPUT");
	y.value = 0;
	row.appendChild(y);
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "";
	headerCell.colSpan = 2;
	row.appendChild(headerCell);
	var x = document.createElement("label");
	x.innerHTML = "Earned Credits  ";
	row.appendChild(x);
	var tot = document.createElement("INPUT");
	tot.value = other_C;
	row.appendChild(tot);
	report.push(tot.value);*/
	//Add the data rows from Excel file.
	for (var i = 0; i < other_F.length; i++) {
		//Add the data row.
		var row = table.insertRow(-1);
		row.id = other_F[i][1];
		for (j = 0; j < 8; j++) {
			//Add the data cells.
			var cell = row.insertCell(-1);
			cell.innerHTML = other_F[i][j];
			if (cell.innerHTML == "Active")
				row.style.backgroundColor = "#FFF200"
		}
	}
	var row = table.insertRow(-1);
	row.style.backgroundColor = 'yellow';
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "";
	headerCell.colSpan = 3;
	row.appendChild(headerCell);
	var x = document.createElement("TH");
	x.innerHTML = "Total Earned: "+total;
	//x.colSpan=2;
	row.appendChild(x);
	//var tot = document.createElement("INPUT");
	//tot.value = total;
	//row.appendChild(tot);
	report.push(total);
	var x = document.createElement("TH");
	x.innerHTML = "Total Required:  "+totalgrad;
	row.appendChild(x);
	//var y = document.createElement("INPUT");
	//y.value = totalgrad;
	//row.appendChild(y);
	//var headerCell = document.createElement("TH");
	//headerCell.innerHTML = "";
	//headerCell.colSpan = 2;
	//row.appendChild(headerCell);
	
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "";
	headerCell.colSpan = 3;
	row.appendChild(headerCell);
	var row = table.insertRow(-1);
	row.style.backgroundColor = '#8FD8D8';
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "Comments";
	headerCell.colSpan = 4;
	row.appendChild(headerCell);
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "";
	
	if (mand_st.length != mand.length) {
		for (let r = 0; r < mand.length; r++) {
			if (!(mand_st.includes(mand[r]))) {
				headerCell.innerHTML += mand[r] + " ";
			}
		}
		headerCell.innerHTML += "must be taken.";
		report[9]= headerCell.innerHTML;
	}
	else{
		headerCell.innerHTML += "All Mandatory courses are taken (IC3, Arabic, General English, Human Rights)"
		
	}
	headerCell.colSpan = 4;
	row.appendChild(headerCell);
	// INSERT TABLES
	var dvENG = document.getElementById("dvENG");
	dvENG.innerHTML = "";
	dvENG.appendChild(table);
	
	//Add the data rows from Excel file.

	//FILL TABLES
	//Create a HTML Table element.
	
	

	var table= document.createElement("table");
	table.border = "1";
	table.style.width = '100%';
	table.className="disoki"
	//Add the header row.
	if (ifile ==0)
	{var row = table.insertRow(-1);
	var headerCell = document.createElement("TH");
	
	//if(document.getElementById("dvENG2").innerHTML=="")
	
	headerCell.innerHTML = "Name and ID";
	headerCell.style.width="9%"
	headerCell.style.backgroundColor = "#eee";
	row.appendChild(headerCell);
	
	
	headerCell = document.createElement("TH");
	
	headerCell.innerHTML = "General Education "+GE_Min;
	headerCell.style.width="9%"
	headerCell.style.backgroundColor = "#eee";
	row.appendChild(headerCell);
	
	
	headerCell = document.createElement("TH");
	headerCell.innerHTML = "Basic Science and Mathematics "+BASIC_Min;
	headerCell.style.width="9%"
	headerCell.style.backgroundColor = "#eee";
	row.appendChild(headerCell);
	headerCell = document.createElement("TH");
	headerCell.innerHTML = "General Engineering "+ENG_Min;
	headerCell.style.width="9%"
	headerCell.style.backgroundColor = "#eee";
	row.appendChild(headerCell);
	headerCell = document.createElement("TH");
	headerCell.innerHTML = "Outside program "+OUT_Min;
	headerCell.style.width="9%"
	headerCell.style.backgroundColor = "#eee";
	row.appendChild(headerCell);
	headerCell = document.createElement("TH");
	headerCell.innerHTML = "Core "+CORE_Min;
	headerCell.style.width="9%"
	headerCell.style.backgroundColor = "#eee";
	row.appendChild(headerCell);
	headerCell = document.createElement("TH");
	headerCell.innerHTML = "Technical "+TECH_Min;
	headerCell.style.width="9%"
	headerCell.style.backgroundColor = "#eee";
	row.appendChild(headerCell);
	headerCell = document.createElement("TH");
	headerCell.innerHTML = "Other" +" 0";
	headerCell.style.width="9%"
	headerCell.style.backgroundColor = "#eee";
	row.appendChild(headerCell);
	headerCell = document.createElement("TH");
	headerCell.innerHTML = "Total 150";
	headerCell.style.width="9%"
	headerCell.style.backgroundColor = "#eee";
	row.appendChild(headerCell);
	headerCell = document.createElement("TH");
	headerCell.innerHTML = "Comments";
	headerCell.style.width="9%"
	headerCell.style.backgroundColor = "#eee";
	row.appendChild(headerCell);
	headerCell = document.createElement("TH");
	headerCell.innerHTML = "Courses Needed";
	headerCell.style.width="9%"
	headerCell.style.backgroundColor = "#eee";
	row.appendChild(headerCell);
	
	
	}
	

	
	//report.push(total);
	if(prob.length>0)
		report.push(prob+ " set as 2 credits, recheck ");
	else
		report.push("")
	report.push(courseOff)
	var fsum=0;
	if(fres.length>0){
		for(var p=0;p<fres.length;p++)
		{	//alert(fres[p])
			fsum += fres[p];
		}
		
		report[9] += fsum + " credits FRESHMAN";
	}

	
		//Add the data row.
		var row = table.insertRow(-1);
		for (j = 0; j < 11; j++) {
			//Add the data cells.
			var cell=row.insertCell(-1);
			if (j==10){
				newl=""
				cell.innerHTML =""
				for(k=0;k<report[10].length;k++)
				{
					newl=report[10][k]+"<br>"
					cell.innerHTML += newl 
					
				}

				cell.style.width="9%";
				//cell.style.width="200px";
				continue
			}
			cell.innerHTML = report[j];

			cell.style.width="9%";
			
		
			
		}
	
	
	// INSERT TABLES

	//var dvENG2 = document.getElementById("dvENG2");
	//dvENG2.innerHTML = "";
	dvENG2.appendChild(table);

	
	return courseOff;
	
};