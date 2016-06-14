var a1=["David",80];
var a2=["Vinoth",77];
var a3=["Divya",88];
var a4=["Ishitha",95];
var a5=["Thomas",68];
var a=[a1,a2,a3,a4,a5];
var i;
document.write("Name\t\tMarks\tGrade<br/><br/>")
for(i=0;i<a.length;i++)
{
	document.write(a[i][0] + "\t" + a[i][1] + "\t");

	if(a[i][1]<100 && a[i][1]>=90)
	{
		document.write("A Grade<br/>");
	}
	if(a[i][1]<90 && a[i][1]>=80)
	{
		document.write("B Grade<br/>");
	}
	if(a[i][1]<80 && a[i][1]>=70)
	{
		document.write("C Grade<br/>");
	}
	if(a[i][1]<70 && a[i][1]>=60)
	{
		document.write("D Grade<br/>");
	}
	if(a[i][1]<60)
	{
		document.write("F Grade<br/>");
	}
	
}
