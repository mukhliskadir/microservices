<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<script>
	window.onload = function()
	{
		var request = new XMLHttpRequest();
		request.open('GET', 'https://masjidabuubaidah2.herokuapp.com/display', true);
		request.onload = function()
		{
			var obj = JSON.parse(this.response);
			var table = document.createElement("table");
			for(var i=0; i<obj.length; i++)
			{
				var row = table.insertRow(i);
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);
				var cell4 = row.insertCell(3);
				cell1.innerHTML = obj[i].speakerid;
				cell2.innerHTML = obj[i].speakername;
				cell3.innerHTML = obj[i].speakerphoneno;
				cell4.innerHTML = obj[i].speakeredu;
			}
			document.getElementById('demo').appendChild(table);
		};
		request.send();


</script>
</body>
</html>