
function Upload() {
	
        //Reference the FileUpload element.
        var fileUpload = document.getElementById("fileUpload");
		fileUpload.name='studenttranscript.csv';
        //Validate whether File is valid Excel file.
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx|.csv)$/;
        if (regex.test(fileUpload.value.toLowerCase())) {
            if (typeof (FileReader) != "undefined") {
                var reader = new FileReader();
 
                //For Browsers other than IE.
                if (reader.readAsBinaryString) {
                    reader.onload = function (e) {
                        ProcessExcel(e.target.result);
                    };
                    reader.readAsBinaryString(fileUpload.files[0]);
                } else {
                    //For IE Browser.
                    reader.onload = function (e) {
                        var data = "";
                        var bytes = new Uint8Array(e.target.result);
                        for (var i = 0; i < bytes.byteLength; i++) {
                            data += String.fromCharCode(bytes[i]);
                        }
                        ProcessExcel(data);
                    };
                    reader.readAsArrayBuffer(fileUpload.files[0]);
                }
            } else {
                alert("This browser does not support HTML5.");
            }
        } else {
            alert("Please upload a valid Excel file.");
        }
    };
    function ProcessExcel(data) {
		
        //Read the Excel File data.
        var workbook = XLSX.read(data, {
            type: 'binary'
        });
 
        //Fetch the name of First Sheet.
        var firstSheet = workbook.SheetNames[0];
 
        //Read all rows from First Sheet into an JSON array.
        var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
 
       
		/*
		//Create general education requirements table
		var ENGtable = document.createElement("table");
        ENGtable.border = "1";
		ENGtable.style.width='100%';
		
		//Create Basic Sciences and Mathematics table
		var BASICtable = document.createElement("table");
        BASICtable.border = "1";
		BASICtable.style.width='100%';
		
		//Create General Engineering topics table
		var GEtable = document.createElement("table");
        GEtable.border = "1";
		GEtable.style.width='100%';
		
		//Create A- Engineering topics from outside the program table
		var OUTtable = document.createElement("table");
        OUTtable.border = "1";
		OUTtable.style.width='100%';
		
		//Create B- CE Core table
		var COREtable = document.createElement("table");
        COREtable.border = "1";
		COREtable.style.width='100%';
		
		//Create C-Technical Elective table
		var TECHtable = document.createElement("table");
        TECHtable.border = "1";
		TECHtable.style.width='100%';
		
		//Create Other table
		var othertable = document.createElement("table");
        othertable.border = "1";
		othertable.style.width='100%';
		*/
		
		
 
        
		/*
        var ENGrow = ENGtable.insertRow(-1);
        var BASICrow = BASICtable.insertRow(-1);
        var GErow = GEtable.insertRow(-1);
        var OUTrow = OUTtable.insertRow(-1);
        var CORErow = COREtable.insertRow(-1);
        var TECHrow = TECHtable.insertRow(-1);
        var otherrow = othertable.insertRow(-1);
		*/
 /*
        //Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Course";
        row.appendChild(headerCell);
		*/
		//Add the header cells.
		//document.getElementById('myTable').rows[0].cells[0].colSpan = 2
        
		/*
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Term";
		ENGrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Course";
        ENGrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Title";
        ENGrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Credits";
        ENGrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Level";
        ENGrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Grade";
        ENGrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "SGPA";
        ENGrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Repeat_Code";
        ENGrow.appendChild(headerCell);
		
		var ENGrow = ENGtable.insertRow(-1);
		var headerCell = document.createElement("TH");
		headerCell.innerHTML = "Core";
		headerCell.colSpan=8;
        ENGrow.appendChild(headerCell);
		
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Term";
        BASICrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Course";
        BASICrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Title";
        BASICrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Credits";
        BASICrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Level";
        BASICrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Grade";
        BASICrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "SGPA";
        BASICrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Repeat_Code";
        BASICrow.appendChild(headerCell);
		
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Term";
        GErow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Course";
        GErow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Title";
        GErow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Credits";
        GErow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Level";
        GErow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Grade";
        GErow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "SGPA";
        GErow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Repeat_Code";
        GErow.appendChild(headerCell);
		
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Term";
        OUTrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Course";
        OUTrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Title";
        OUTrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Credits";
        OUTrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Level";
        OUTrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Grade";
        OUTrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "SGPA";
        OUTrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Repeat_Code";
        OUTrow.appendChild(headerCell);
		
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Term";
        CORErow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Course";
        CORErow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Title";
        CORErow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Credits";
        CORErow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Level";
        CORErow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Grade";
        CORErow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "SGPA";
        CORErow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Repeat_Code";
        CORErow.appendChild(headerCell);
		
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Term";
        TECHrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Course";
        TECHrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Title";
        TECHrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Credits";
        TECHrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Level";
        TECHrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Grade";
        TECHrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "SGPA";
        TECHrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Repeat_Code";
        TECHrow.appendChild(headerCell);
		
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Term";
        otherrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Course";
        otherrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Title";
        otherrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Credits";
        otherrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Level";
        otherrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Grade";
        otherrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "SGPA";
        otherrow.appendChild(headerCell);
		//Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Repeat_Code";
        otherrow.appendChild(headerCell);
		
		
		
		
		
 
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "Credits";
        row.appendChild(headerCell);
 
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "Grade";
        row.appendChild(headerCell);
		*/
 
		let STUDENT=[]
        //Add the data rows from Excel file.
        for (var i = 0; i < excelRows.length; i++) {
            /*
			//Add the data row.
            var row = table.insertRow(-1);
 
            //Add the data cells.
            var cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].Course;
			
 
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].Credits;
 
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].Grade;
			*/
			var t=excelRows[i].Repeat_Code;
			if(t){
			STUDENT.push([excelRows[i].Term,excelRows[i].Course,excelRows[i].Title,parseInt(excelRows[i].Credits),excelRows[i].Level,excelRows[i].Grade,excelRows[i].SGPA,excelRows[i].Repeat_Code]);
							
			}
			else{
				STUDENT.push([excelRows[i].Term,excelRows[i].Course,excelRows[i].Title,parseInt(excelRows[i].Credits),excelRows[i].Level,excelRows[i].Grade,excelRows[i].SGPA,""]);
			}
        }

		
		//document.getElementById("trg").innerHTML=STUDENT;
		/*
        var dvExcel = document.getElementById("dvExcel");
        dvExcel.innerHTML = "";
        dvExcel.appendChild(table);
		*/
        
		
		
let GE =[
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
let sENG=[
'IC003',
'ARAB001',
'ENGL001',
'BLAW001',
'ENGR001',
'ENGL211',
'ENGL300',
'MGMT002']


let ENG=[
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
'CMPS001'

];

let OUT=[
'POWE212',
'COME223',
'COME411'

];

let CORE=[
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

let TECH=[

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

/*
let STUDENT =[
['ARAB001',2,'A+'],
['ARCH003',2,'B-'],
['BACC003',2,'B-'],
['BLAW001',1,'C+'],
['BUSN203',2,'A'],
['CHEM241',3,'B-'],
['CHEM241',3,'F'],
['CHEM405',2,'D'],
['CMPS001',2,'C'],
['COME221',3,'D'],
['COMP208',3,'A'],
['COMP210',3,'D'],
['COMP210',3,'F'],
['COMP211',3,'B+'],
['COMP221',2,'B-'],
['COMP222',2,'A'],
['COMP222L',1,'A'],
['COMP231',3,'C'],
['COMP232',3,'C+'],
['COMP311',3,'D'],
['COMP324',4,'C'],
['COMP333',3,'B-'],
['COMP344',3,'D'],
['COMP361',3,'C'],
['COMP361',3,'F'],
['COMP423',3,'C+'],
['COMP431',3,'C'],
['COMP438',3,'P'],
['COMP442',3,'A'],
['COMP443',3,'B-'],
['COMP448',3,'P'],
['COMP453',3,'C+'],
['COMP458',3,'B'],
['COMP477',3,'C-'],
['COMP499',1,'A-'],
['COMP501',1,'A'],
['COMP502',3,'A'],
['COMP512',3,'C-'],
['COMP521',3,'B-'],
['COMP531',3,'B-'],
['COMP533',3,'C'],
//['COMP533',3,'C'],
['CVLE210',3,'C-'],
['ENGL001',2,'A-'],
['ENGL211',2,'B'],
['ENGL300',2,'B'],
['ENGR001',1,'C'],
['HESC301',2,'B'],
['INME221',3,'C+'],
['MATH281',3,'C'],
['MATH281',3,'D-'],
['MATH282',3,'C'],
['MATH283',3,'C+'],
['MATH283',3,'F'],
['MATH284',3,'P'],
['MATH381',3,'D'],
['MCHE201',3,'A-'],
['MCHE213',3,'C-'],
['MCHE213',3,'F'],
['MCOM003',2,'B'],
['MGMT002',2,'C-'],
['NUA413',3,'B-'],
['PHYS281',3,'C-'],
['PHYS281',3,'D-'],
['PHYS282',3,'B-'],
['PHYS282',3,'D-'],
['POWE212',3,'A-'],
['POWE212',3,'F']

];

*/

/*
let STUDENT = [
['COMP502',3,'A-'],
['COMP543L',1,'B-'],
['COMP543',3,'C'],
['COMP499',1,'A-'],
['COMP443',3,'D'],
['COME214',3,'C'],
['COMP477',3,'B-'],
['MGMT002',2,'A'],
['IC003',0,'P'],
['COMP344',3,'B'],
['COMP533',3,'B'],
['COMP521',3,'C-'],
['COMP462',3,'C+'],
['COMP452',3,'C+'],
['COMP500',2,'B+'],
['COMP501',1,'A'],
['COMP431',3,'B-'],
['PHYS282',3,'A-'],
['COMP361',3,'C'],
['COMP453',3,'C'],
['COME411',3,'C'],
['COMP541',3,'A-'],
['CHEM405',2,'B'],
['ENGL300',2,'B+'],
['BLAW001',1,'A-'],
['CHEM241',3,'B'],
['HIST002',2,'A-'],
['COMP423',3,'P'],
['ENGL211',2,'P'],
['COMP454',3,'P'],
['COMP328',3,'A-'],
['COMP442',3,'A+'],
['COMP454L',1,'B'],
['COME223',3,'B'],
['MCHE213',3,'C+'],
['HESC003',2,'B'],
['MCHE005',2,'B+'],
['COMP333',3,'C-'],
['MATH284',3,'C+'],
['FREN001',2,'A'],
['COMP311',3,'C-'],
['MATH381',3,'C+'],
['COMP232',3,'D'],
['INME221',3,'D'],
['COMP328',3,'D-'],
['COMP226',3,'C-'],
['COMP211',3,'C+'],
['ENGR001',1,'C'],
['COMP231',3,'C'],
['COME223',3,'D'],
['COMP210',3,'C'],
['ARAB001',2,'C'],
['ENGL001',2,'B+'],
['POWE212',3,'C'],
['MATH283',3,'D'],
['ARCH003',2,'C-'],
['COMP208',3,'B+'],
['COMP225',3,'C'],
['MCHE213',3,'D-'],
['MATH282',3,'C'],
['PHYS281',3,'C-'],
['MATH281',3,'C-'],
['ENGR002',2,'B']

];
*/

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
let OTHER_L=[];

let ENG_F=[];
let BASIC_F=[];
let GE_F=[];
let OUT_F=[];
let CORE_F=[];
let TECH_F=[];
let other_F=[];




let pass =['A+','A','A-','B+','B','B-','C+','C','C-','D','P','TR'];
let fail =['D-','F'];
let grade = ['A+','A','A-','B+','B','B-','C+','C','C-','D','P','TR','D-','F','W']
let mand=['IC003','ARAB001','ENGL001','BLAW001'];
let mand_st=[];


let fail_c = [];
let inc =[];
let dup = [];

let sum=0;
let nsum = 0;
let totalgrad = 150;
let crl =[];

let alter=[
['COMP333','COMP337'],
['COMP462','COMP364'],
['COMP521','COMP525'],
['COMP328','COMP325'],
['COMP531','COMP543'],
['COMP448','COMP452'],
['COMP458','COMP454'],
['COMP221','COMP225'],
['COMP222','COMP226'],
['COMP324','COMP325'],
['COME221','COME411']

];

for (let i = 0; i < STUDENT.length; i++) {
	if (STUDENT[i][0] == 'Lebanese baccalaureate or Eqv.')
		continue;
	let course= STUDENT[i][1];
	
	
	if (course=='COMP222L')
	{
		CORE_C += STUDENT[i][3];
		//CORE_L.push("["+STUDENT[i]+"]");
		CORE_F.push(['e']);
		for(j=0;j<8;j++){
			
			CORE_F[CORE_F.length-1][j]=STUDENT[i][j];
			}
			continue;
	}
	for(var q=0;q<alter.length;q++){
		if(course==alter[q][0])
			course=alter[q][1];
	}
	cours=document.getElementById(course);
	//document.getElementById('trg').innerHTML=course;
	
	
	//check earned credits
	sum += STUDENT[i][3];
	
	//check for fail
	if(fail.includes(STUDENT[i][5]))
	{	fail_c.push("["+STUDENT[i]+"]");
		
	}
	
	
	//check for incomplete
	if (STUDENT[i][5] == 'I'){
		inc.push("["+STUDENT[i]+"]");
		
	}
	
	//check for duplicates and 
	for (let j = 0; j < STUDENT.length; j++) {
		if(i == j){
			
			continue;
		}
		if (STUDENT[i][1] == STUDENT[j][1] && grade.indexOf(STUDENT[i][5])> grade.indexOf(STUDENT[j][5]) )
		{
			dup.push("["+STUDENT[i]+"]");
			
		}
	}
	
	if (dup.includes("["+STUDENT[i]+"]") || inc.includes("["+STUDENT[i]+"]"))
	{		nsum += STUDENT[i][3];
			
			continue;
	}
	
	//check for mandatory
	if (mand.includes(course)){
		
		mand_st.push(STUDENT[i][1]);
	}

	//check for groups and total

	if (GE.includes(course) && pass.includes(STUDENT[i][5])){

		GE_C += STUDENT[i][3];
		GE_L.push("["+STUDENT[i]+"]");
		GE_F.push(['e']);
		for(j=0;j<8;j++){
			
			GE_F[GE_F.length-1][j]=STUDENT[i][j];
			}
		
		
	}
	else if (BASIC.includes(course) && pass.includes(STUDENT[i][5])){
		
		BASIC_C += STUDENT[i][3];
		BASIC_L.push("["+STUDENT[i]+"]");
		BASIC_F.push(['e']);
		for(j=0;j<8;j++){
			
			BASIC_F[BASIC_F.length-1][j]=STUDENT[i][j];
			}
		if(cours)
			{
				
				document.getElementById(course).style.visibility='visible';
				document.getElementById("c"+course).checked=true;
				
			}
	}
	else if (ENG.includes(course) && pass.includes(STUDENT[i][5])){
		
		ENG_C += STUDENT[i][3];
		ENG_L.push("["+STUDENT[i]+"]");

		ENG_F.push(['e']);
		for(j=0;j<8;j++){
			
			ENG_F[ENG_F.length-1][j]=STUDENT[i][j];
			}
			
		if (!sENG.includes(STUDENT[i][1])){
				
		elec += 1;}
		if(cours)
			{
				
				document.getElementById(course).style.visibility='visible';
				document.getElementById("c"+course).checked=true;
				
			}
	}
	else if (OUT.includes(course) && pass.includes(STUDENT[i][5])){
		
		OUT_C += STUDENT[i][3];
		OUT_L.push("["+STUDENT[i]+"]");
		OUT_F.push(['e']);
		for(j=0;j<8;j++){
			
			OUT_F[OUT_F.length-1][j]=STUDENT[i][j];
			}
		
	}
	else if (CORE.includes(course) && pass.includes(STUDENT[i][5])){
		
		CORE_C += STUDENT[i][3];
		CORE_L.push("["+STUDENT[i]+"]");
		CORE_F.push(['e']);
		for(j=0;j<8;j++){
			
			CORE_F[CORE_F.length-1][j]=STUDENT[i][j];
			}
		crl.push(STUDENT[i][1]); //to track  and compare the names only for later check in non taken core courses
		
	}

	else if (TECH.includes(course) && pass.includes(STUDENT[i][5])){
		
		TECH_C += STUDENT[i][3];
		TECH_L.push("["+STUDENT[i]+"]");
		TECH_F.push(['e']);
		for(j=0;j<8;j++){
			
			TECH_F[TECH_F.length-1][j]=STUDENT[i][j];
			}
		if(cours)
		{
			
			document.getElementById(course).style.visibility='visible';
			document.getElementById("c"+course).checked=true;
		
		}
	}
	
	else if(pass.includes(STUDENT[i][5])){
	
		
		nsum += STUDENT[i][3];
		other_C += STUDENT[i][3];
		OTHER_L.push("["+STUDENT[i]+"]");
		other_F.push(['e']);
		for(j=0;j<8;j++){
			
			other_F[other_F.length-1][j]=STUDENT[i][j];
			}
	}
	
	else{
		
	}
	
		
	
	//document.getElementById("trg").innerHTML=course.value;
	if(cours)
	{	
		document.getElementById(course).style.visibility='visible';
		document.getElementById("c"+course).checked=true;
		
	}

	
}

let diff =[];

for (i=0;i< CORE.length;i++){
	if (!crl.includes(CORE[i]))
		diff.push(CORE[i]);
}

//tick and check technical
for (i=1;i<=TECH_L.length && i<=4;i++){
	document.getElementById("TE"+i).style.visibility='visible';
	document.getElementById("c"+"TE"+i).checked=true;
	}
//tick and check general
for (i=1;i<=elec && i<=3;i++){
	document.getElementById("GE"+i).style.visibility='visible';
	document.getElementById("c"+"GE"+i).checked=true;
	}	



total= GE_C + BASIC_C + ENG_C + OUT_C + CORE_C + TECH_C + other_C;
/*
document.getElementById("GE").innerHTML=GE_L;
document.getElementById("GE_C").innerHTML=GE_C;

document.getElementById("BASIC").innerHTML=BASIC_L;
document.getElementById("BASIC_C").innerHTML=BASIC_C;

document.getElementById("ENG").innerHTML=ENG_L;
document.getElementById("ENG_C").innerHTML=ENG_C;

document.getElementById("OUT").innerHTML=OUT_L;
document.getElementById("OUT_C").innerHTML=OUT_C;

document.getElementById("CORE").innerHTML=CORE_L;
document.getElementById("CORE_C").innerHTML=CORE_C;

document.getElementById("TECH").innerHTML=TECH_L;
document.getElementById("TECH_C").innerHTML=TECH_C;


document.getElementById("mand").innerHTML="Taken: "+mand_st;

document.getElementById("dup").innerHTML=dup;

document.getElementById("fail").innerHTML=fail_c;

document.getElementById("inc").innerHTML=inc;

document.getElementById("other").innerHTML=OTHER_L;

document.getElementById("totalgrad").innerHTML=totalgrad;
document.getElementById("sum").innerHTML=sum;
document.getElementById("total").innerHTML=total;
document.getElementById("nsum").innerHTML=nsum;

document.getElementById("diff").innerHTML=diff;

*/
// loop through each input element and output the value of any checkbox elements
 for (x = 0; x < document.getElementsByTagName('input').length; x++) {
	 if (document.getElementsByTagName('input').item(x).type == 'checkbox') {
		 let cn = document.getElementsByTagName('input').item(x);
		 if(cn.checked==false){
			 
			tn=cn.id.slice(1);
			if(tn){
				 
				 ti =document.getElementById(tn);
				 ti.style.backgroundImage='url("images/tick2.png")';
				 ti.style.visibility='visible';
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
table.border = "1";
table.style.width='100%';

//Add the header row.
var ENGrow = table.insertRow(-1);
		
var headerCell = document.createElement("TH");
headerCell.innerHTML = "Term";
headerCell.style.backgroundColor="#eee";
ENGrow.appendChild(headerCell);
//Add the header cells.
var headerCell = document.createElement("TH");
headerCell.innerHTML = "Course";
headerCell.style.backgroundColor="#eee";
ENGrow.appendChild(headerCell);
//Add the header cells.
var headerCell = document.createElement("TH");
headerCell.innerHTML = "Title";
headerCell.style.backgroundColor="#eee";
ENGrow.appendChild(headerCell);
//Add the header cells.
var headerCell = document.createElement("TH");
headerCell.innerHTML = "Credits";
headerCell.style.backgroundColor="#eee";
ENGrow.appendChild(headerCell);
//Add the header cells.
var headerCell = document.createElement("TH");
headerCell.innerHTML = "Level";
headerCell.style.backgroundColor="#eee";
ENGrow.appendChild(headerCell);
//Add the header cells.
var headerCell = document.createElement("TH");
headerCell.innerHTML = "Grade";
headerCell.style.backgroundColor="#eee";
ENGrow.appendChild(headerCell);
//Add the header cells.
var headerCell = document.createElement("TH");
headerCell.innerHTML = "SGPA";
headerCell.style.backgroundColor="#eee";
ENGrow.appendChild(headerCell);
//Add the header cells.
var headerCell = document.createElement("TH");
headerCell.innerHTML = "Repeat_Code";
headerCell.style.backgroundColor="#eee";
ENGrow.appendChild(headerCell);


//Create array of options to be added
var array = ["Move to","General Education Requirements","Basic Sciences and Mathematics","General Engineering topics","A- Engineering topics from outside the program","B- CE Core","C-Technical Elective","Other"];
var array2 = ["Move to","ENG_F","BASIC_F","GE_F","OUT_F","CORE_F","TECH_F","other_F"];


var row = table.insertRow(-1);
row.style.backgroundColor="#eee";
var headerCell = document.createElement("TH");
headerCell.innerHTML = "General Education Requirements";

headerCell.colSpan=4;
row.appendChild(headerCell);



var x=document.createElement("label");
x.innerHTML = "Required  ";
var z=document.createElement("br");
row.appendChild(x);
row.appendChild(z);

var y=document.createElement("INPUT");
y.value=GE_Min;
row.appendChild(y);

var headerCell = document.createElement("TH");
headerCell.innerHTML = "";
headerCell.colSpan=2;
row.appendChild(headerCell);

var x=document.createElement("label");
x.innerHTML = "Earned Credits  ";
row.appendChild(x);

var tot = document.createElement("INPUT");
tot.value=ENG_C
row.appendChild(tot);

//Add the data rows from Excel file.

for (var i = 0; i < ENG_F.length; i++) {
	//Add the data row.
	var row = table.insertRow(-1);
	for (j=0;j<8;j++){
		//Add the data cells.
		var cell = row.insertCell(-1);
		cell.innerHTML = ENG_F[i][j];

	}
}

var row = table.insertRow(-1);
row.style.backgroundColor="#eee";
var headerCell = document.createElement("TH");

headerCell.innerHTML = "Basic Sciences and Mathematics";

headerCell.colSpan=4;
row.appendChild(headerCell);



var x=document.createElement("label");
x.innerHTML = "Required  ";
var z=document.createElement("br");
row.appendChild(x);
row.appendChild(z);



var y=document.createElement("INPUT");
y.value=BASIC_Min;
row.appendChild(y);

var headerCell = document.createElement("TH");
headerCell.innerHTML = "";
headerCell.colSpan=2;
row.appendChild(headerCell);

var x=document.createElement("label");
x.innerHTML = "Earned Credits  ";
row.appendChild(x);

var tot = document.createElement("INPUT");
tot.value=BASIC_C;
row.appendChild(tot);
//Add the data rows from Excel file.

for (var i = 0; i < BASIC_F.length; i++) {
	//Add the data row.
	var row = table.insertRow(-1);
	for (j=0;j<8;j++){
		//Add the data cells.
		var cell = row.insertCell(-1);
		cell.innerHTML = BASIC_F[i][j];

	}
}

var row = table.insertRow(-1);
row.style.backgroundColor="#eee";


var headerCell = document.createElement("TH");
headerCell.innerHTML = "General Engineering topics";

headerCell.colSpan=4;
row.appendChild(headerCell);



var x=document.createElement("label");
x.innerHTML = "Required  ";
var z=document.createElement("br");
row.appendChild(x);
row.appendChild(z);



var y=document.createElement("INPUT");
y.value=ENG_Min;
row.appendChild(y);

var headerCell = document.createElement("TH");
headerCell.innerHTML = "";
headerCell.colSpan=2;
row.appendChild(headerCell);

var x=document.createElement("label");
x.innerHTML = "Earned Credits  ";
row.appendChild(x);

var tot = document.createElement("INPUT");
tot.value=GE_C;
row.appendChild(tot);



//Add the data rows from Excel file.

for (var i = 0; i < GE_F.length; i++) {
	//Add the data row.
	var row = table.insertRow(-1);
	for (j=0;j<8;j++){
		//Add the data cells.
		var cell = row.insertCell(-1);
		cell.innerHTML = GE_F[i][j];

	}
}

var row = table.insertRow(-1);
row.style.backgroundColor="#eee";
var headerCell = document.createElement("TH");
headerCell.innerHTML = "A- Engineering topics from outside the program";

headerCell.colSpan=4;
row.appendChild(headerCell);



var x=document.createElement("label");
x.innerHTML = "Required  ";
var z=document.createElement("br");
row.appendChild(x);
row.appendChild(z);


var y=document.createElement("INPUT");
y.value=OUT_Min;
row.appendChild(y);

var headerCell = document.createElement("TH");
headerCell.innerHTML = "";
headerCell.colSpan=2;
row.appendChild(headerCell);

var x=document.createElement("label");
x.innerHTML = "Earned Credits  ";
row.appendChild(x);

var tot = document.createElement("INPUT");
tot.value=OUT_C;
row.appendChild(tot);

//Add the data rows from Excel file.

for (var i = 0; i < OUT_F.length; i++) {
	//Add the data row.
	var row = table.insertRow(-1);
	for (j=0;j<8;j++){
		//Add the data cells.
		var cell = row.insertCell(-1);
		cell.innerHTML = OUT_F[i][j];

	}
}

var row = table.insertRow(-1);
row.style.backgroundColor="#eee";
var headerCell = document.createElement("TH");
headerCell.innerHTML = "B- CE Core";

headerCell.colSpan=4;
row.appendChild(headerCell);



var x=document.createElement("label");
x.innerHTML = "Required  ";
var z=document.createElement("br");
row.appendChild(x);
row.appendChild(z);



var y=document.createElement("INPUT");
y.value=CORE_Min;
row.appendChild(y);

var headerCell = document.createElement("TH");
headerCell.innerHTML = "";
headerCell.colSpan=2;
row.appendChild(headerCell);

var x=document.createElement("label");
x.innerHTML = "Earned Credits  ";
row.appendChild(x);

var tot = document.createElement("INPUT");
tot.value=CORE_C;
row.appendChild(tot);

//Add the data rows from Excel file.

for (var i = 0; i < CORE_F.length; i++) {
	//Add the data row.
	var row = table.insertRow(-1);
	for (j=0;j<8;j++){
		//Add the data cells.
		var cell = row.insertCell(-1);
		cell.innerHTML = CORE_F[i][j];

	}
}

var row = table.insertRow(-1);
row.style.backgroundColor="#eee";
var headerCell = document.createElement("TH");
headerCell.innerHTML = "C-Technical Elective";


headerCell.colSpan=4;
row.appendChild(headerCell);



var x=document.createElement("label");
x.innerHTML = "Required  ";
var z=document.createElement("br");
row.appendChild(x);
row.appendChild(z);



var y=document.createElement("INPUT");
y.value=TECH_Min;
row.appendChild(y);

var headerCell = document.createElement("TH");
headerCell.innerHTML = "";
headerCell.colSpan=2;
row.appendChild(headerCell);

var x=document.createElement("label");
x.innerHTML = "Earned Credits  ";
row.appendChild(x);

var tot = document.createElement("INPUT");
tot.value=TECH_C;
row.appendChild(tot);
//Add the data rows from Excel file.

for (var i = 0; i < TECH_F.length; i++) {
	//Add the data row.
	var row = table.insertRow(-1);
	for (j=0;j<8;j++){
		//Add the data cells.
		var cell = row.insertCell(-1);
		cell.innerHTML = TECH_F[i][j];

	}
}

var row = table.insertRow(-1);
row.style.backgroundColor="#eee";
var headerCell = document.createElement("TH");
headerCell.innerHTML = "Other";


headerCell.colSpan=4;
row.appendChild(headerCell);



var x=document.createElement("label");
x.innerHTML = "Required  ";
var z=document.createElement("br");
row.appendChild(x);
row.appendChild(z);



var y=document.createElement("INPUT");
y.value=0;
row.appendChild(y);

var headerCell = document.createElement("TH");
headerCell.innerHTML = "";
headerCell.colSpan=2;
row.appendChild(headerCell);

var x=document.createElement("label");
x.innerHTML = "Earned Credits  ";
row.appendChild(x);

var tot = document.createElement("INPUT");
tot.value=other_C;
row.appendChild(tot);


//Add the data rows from Excel file.

for (var i = 0; i < other_F.length; i++) {
	//Add the data row.
	var row = table.insertRow(-1);
	row.id=other_F[i][1];
	for (j=0;j<8;j++){
		//Add the data cells.
		var cell = row.insertCell(-1);
		cell.innerHTML = other_F[i][j];

	}

	



	
}

var row = table.insertRow(-1);
row.style.backgroundColor='yellow';
var headerCell = document.createElement("TH");
headerCell.innerHTML = "";

headerCell.colSpan=4;
row.appendChild(headerCell);



var x=document.createElement("label");
x.innerHTML = "Total Required  ";

row.appendChild(x);

var y=document.createElement("INPUT");
y.value=totalgrad;
row.appendChild(y);

var headerCell = document.createElement("TH");
headerCell.innerHTML = "";
headerCell.colSpan=2;
row.appendChild(headerCell);

var x=document.createElement("label");
x.innerHTML = "Total Earned";
row.appendChild(x);

var tot = document.createElement("INPUT");
tot.value=total;
row.appendChild(tot);


var row = table.insertRow(-1);
row.style.backgroundColor='#8FD8D8';
var headerCell = document.createElement("TH");
headerCell.innerHTML = "Comments";

headerCell.colSpan=4;
row.appendChild(headerCell);



var headerCell = document.createElement("TH");
headerCell.innerHTML = "";
if ( mand_st.length != mand.length){
	for (let r =0;r<mand.length;r++){
		if(!(mand_st.includes(mand[r]))){
			headerCell.innerHTML += mand[r]+ " ";
		}
	}
headerCell.innerHTML += "must be taken.";
}

headerCell.colSpan=4;
row.appendChild(headerCell);



// INSERT TABLES

var dvENG = document.getElementById("dvENG");
dvENG.innerHTML = "";
dvENG.appendChild(table);

/*		
//Add the data rows from Excel file.

for (var i = 0; i < ENG_F.length; i++) {
	//Add the data row.
	var row = ENGtable.insertRow(-1);
	for (j=0;j<8;j++){
		//Add the data cells.
		var cell = row.insertCell(-1);
		cell.innerHTML = ENG_F[i][j];

	}
}

for (var i = 0; i < GE_F.length; i++) {
	//Add the data row.
	var row = GEtable.insertRow(-1);
	for (j=0;j<8;j++){
		//Add the data cells.
		var cell = row.insertCell(-1);
		cell.innerHTML = GE_F[i][j];

	}
}

for (var i = 0; i < BASIC_F.length; i++) {
	//Add the data row.
	var row = BASICtable.insertRow(-1);
	for (j=0;j<8;j++){
		//Add the data cells.
		var cell = row.insertCell(-1);
		cell.innerHTML = BASIC_F[i][j];

	}
}

for (var i = 0; i < OUT_F.length; i++) {
	//Add the data row.
	var row = OUTtable.insertRow(-1);
	for (j=0;j<8;j++){
		//Add the data cells.
		var cell = row.insertCell(-1);
		cell.innerHTML = OUT_F[i][j];

	}
}

for (var i = 0; i < CORE_F.length; i++) {
	//Add the data row.
	var row = COREtable.insertRow(-1);
	for (j=0;j<8;j++){
		//Add the data cells.
		var cell = row.insertCell(-1);
		cell.innerHTML = CORE_F[i][j];

	}
}

for (var i = 0; i < TECH_F.length; i++) {
	//Add the data row.
	var row = TECHtable.insertRow(-1);
	for (j=0;j<8;j++){
		//Add the data cells.
		var cell = row.insertCell(-1);
		cell.innerHTML = TECH_F[i][j];

	}
}

for (var i = 0; i < other_F.length; i++) {
	//Add the data row.
	var row = othertable.insertRow(-1);
	for (j=0;j<8;j++){
		//Add the data cells.
		var cell = row.insertCell(-1);
		cell.innerHTML = other_F[i][j];

	}
}

// INSERT TABLES

var dvENG = document.getElementById("dvENG");
dvENG.innerHTML = "";
dvENG.appendChild(ENGtable);		
	
/*	
	
// INSERT TABLES

var dvENG = document.getElementById("dvENG");
dvENG.innerHTML = "";
dvENG.appendChild(ENGtable);

var dvBASIC = document.getElementById("dvBASIC");
dvBASIC.innerHTML = "";
dvBASIC.appendChild(BASICtable);

var dvGE = document.getElementById("dvGE");
dvGE.innerHTML = "";
dvGE.appendChild(GEtable);

var dvOUT = document.getElementById("dvOUT");
dvOUT.innerHTML = "";
dvOUT.appendChild(OUTtable);

var dvCORE = document.getElementById("dvCORE");
dvCORE.innerHTML = "";
dvCORE.appendChild(COREtable);

var dvTECH = document.getElementById("dvTECH");
dvTECH.innerHTML = "";
dvTECH.appendChild(TECHtable);

var dvother = document.getElementById("dvother");
dvother.innerHTML = "";
dvother.appendChild(othertable);	
	
	*/
	
	};