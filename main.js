b="";
function main(val)
{
	b+=val;
	if(val==='=')
	{
	b=b.substr(0, b.length -1);
	b= eval(b);
	b= b.toString();
	}
	else if(val==='C')
	{
		b="";
	}
	else if(val==='x')
	{
		b=b.substr(0, b.length -2);
	}
	
	if(b==="")
	{
		b='0';
	}
	if(val==='+' || val==='-')
	{
		if(b[b.length -2] === '+' || b[b.length -2] === '-')
		{
			c=b[b.length -1];
			b=b.substr(0, b.length - 2) + c;
		}
	}
	if(val==='*' || val==='/')
	{
		if(b[b.length -2] === '*' || b[b.length -2] === '/' || b[b.length -2] === '+' || b[b.length -2] === '-')
		{
			c=b[b.length -1];
			b=b.substr(0, b.length - 2) + c;
		}
		if(b[b.length -3] === '*' || b[b.length -3] === '/' || b[b.length -3] === '+' || b[b.length -3] === '-')
		{
			c=b[b.length -1];
			b=b.substr(0, b.length - 3) + c;
		}
	}
	var a = document.getElementById("disp");
	a.innerHTML = b;
	if(b==='0')
	{
		b="";
	}
}
