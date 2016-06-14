var arr=new Array("a","b","b","d","d","a","e","s");

	var i,l;
	l=arr.length;
	var flag=false;

	for(i=0;i<l;i++)
	{
		for(j=i+1;j<l;j++)
		{
			if(arr[i]==arr[j])
			{
				flag=true;
				document.write("<br/>" + arr[i]);
			}
		}
	}

if(flag==true)
	document.write("<br/>Yes.. Array has duplicate values as displayed above");
else
	document.write("<br/>No.. Array does not have duplicate values");
