//<![CDATA[
'use strict';

function yepscript()
{
	var noscript = document.querySelectorAll('noscript');
	var i;
	for (i=0; i<noscript.length; i++) {noscript[i].parentNode.removeChild(noscript[i]);}
}
window.addEventListener('load', yepscript, {once: true});

function ajaxLoad(url)
{
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4)
			stamp(this);
	};
	xhttp.open('GET', url);
	xhttp.send();
}
function stamp(xdoc)
{
	xml = xdoc.responseXML;
	document.querySelector('main').innerHTML = xml.documentElement.innerHTML; 
}

//]]>