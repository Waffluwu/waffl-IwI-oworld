var beforeMsg = "<center><font color=purple size=+6><b>"; 
	var afterMsg = "</b></font></center>"; 
	
	var msgRotateSpeed = 2000; 
	var textStr = new Array(); 
	textStr[0] = "~ O R I G A M I ~";
	textStr[1] = "~ P L A Z A ~";
	
	if (document.layers) { 
	document.write('<ilayer id="NS4message" height=25 width=100%><layer id="NS4message2" height=25 width=100%></layer></ilayer>') 
	temp = 'document.NS4message.document.NS4message2.document.write(beforeMsg + textStr[i++] + afterMsg);'+ 
	'document.NS4message.document.NS4message2.document.close()'; 
	} 
	else if (document.getElementById) { 
	document.write(beforeMsg + '<div id="message" style="position:relative;">IE division</div>' + afterMsg); 
	temp = 'document.getElementById("message").firstChild.nodeValue = textStr[i++];'; 
	} 
	else if (document.all) { 
	document.write(beforeMsg + '<div id="message" style="position:relative;">IE division</div>' + afterMsg); 
	temp = 'message.innerHTML = textStr[i++];'; 
	} 
	var i = 0; 
	function msgRotate() { 
	eval(temp); 
	if (i == textStr.length) i = 0; 
	setTimeout("msgRotate()", msgRotateSpeed); 
	} 
	window.onload = msgRotate;
