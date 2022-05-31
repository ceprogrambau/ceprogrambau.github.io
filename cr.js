function f(){
		if(document.getElementById("scr").value=="ceCourses")
		 {var anchors = document.getElementsByTagName("a");
		for (var i = 0; i < anchors.length; i++) {
			anchors[i].onclick = function() {return true;};
		}}
			}