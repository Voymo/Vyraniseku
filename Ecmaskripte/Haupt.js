// jshint esversion: 6
'use strict';

var xhttp, xdoc;
var bg;
var titlebar, sidebar;
NodeList.prototype.forEach = Array.prototype.forEach;

function ajaxLoad(url, stamp) {
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200)
			stamp(this);
	};
	xhttp.open('GET', url);
	xhttp.send();
}
function callback(xhttp) {
	xdoc = xhttp.responseXML;
	document.querySelector('main').innerHTML = xdoc.documentElement.innerText;
}

function hashLocator(frame) {
	frame = document.querySelector('#frame');
	if(document.body.contains(frame)) {
		switch(location.hash) {
			case "#HW_Herrscher": frame.src="Doks/Dokument1.htm";
				break;
			case "#TESTHA": frame.src="Doks/KALK.htm";
				break;
			default: frame.src="Doks/Basis.xht";
		}
	}else switch(location.hash) {
		case "#HW_Herrscher": ajaxLoad('Doks/Dokument1.xml', callback);
			break;
		case "#TESTHA": ajaxLoad('Doks/KALK.htm', callback);
			break;
		default: ajaxLoad('Doks/Basis.xht', callback);
	}
}
let rh = _ => window.removeEventListener('hashchange', hashLocator);
window.addEventListener('load', hashLocator, {once:true});
window.addEventListener('hashchange', hashLocator);
// END

document.onreadystatechange = function(event) { switch(this.readyState) {
case 'interactive':
	function hitboxFix(ornamentL, ornamentR) {
		ornamentL ={
			container: document.querySelector('div.left>span'),
			image: document.querySelector('div.left>span img')
		};
		ornamentR ={
			container: document.querySelector('div.right>span'),
			image: document.querySelector('div.right>span img')
		};
		ornamentL.container.style.marginRight = ornamentL.image.offsetWidth+'px';
		ornamentR.container.style.marginLeft = ornamentR.image.offsetWidth+'px';
	}
	bg = document.styleSheets[1].cssRules[1].style;
	document.querySelector('select.hg').onchange = function(background) {
		switch(background.target.value) {
			case "stdHg":
				bg.backgroundImage="url(Hgbilder/GothMarjell.jpg)";
				break;
			case "nacht":
				bg.backgroundImage="url(Hgbilder/Nachthimmel1.jpg)";
				break;
			case "fort1":
				bg.backgroundImage="url(Hgbilder/CSH_Burg.jpg)";
				break;
			case "fort2":
				bg.backgroundImage="url(Hgbilder/Burg_im_Winter.jpg)";
				break;
			case "schiff":
				bg.backgroundImage="url(Hgbilder/Schiff_Silhouette.jpg)";
				break;
			case "raum":
				bg.backgroundImage="url(Hgbilder/Planet-Raum.jpg)";
		}
	};
	titlebar = document.styleSheets[1].cssRules[0].styleSheet.cssRules[14].style;
	sidebar = document.styleSheets[1].cssRules[0].styleSheet.cssRules[16].style;
	document.querySelector('select.far').onchange = function(bgcolour) {
		switch(bgcolour.target.value) {
			case "stdRot":
				titlebar.background="linear-gradient(to bottom, rgba(22,0,3,.8),rgba(100,80,82,.8))";
				titlebar.borderColor="#503333";
				sidebar.backgroundColor="rgba(157,3,17,.7)";
			//	sidebar.borderColor="#303050";
				break;
			case "blau":
				titlebar.background="linear-gradient(to bottom, rgba(0,3,26,.8),rgba(80,82,104,.8))";
				titlebar.borderColor="#503333";
				sidebar.backgroundColor="rgba(12,28,153,.7)";
			//	sidebar.borderColor="#303050";
				break;
			case "lila":
				titlebar.background="linear-gradient(to bottom, rgba(20,0,22,.8),rgba(98,80,100,.8))";
				titlebar.borderColor="#3E3042";
				sidebar.backgroundColor="rgba(12,28,153,.7)";
			//	sidebar.borderColor="#3E3042";
				break;
		}	
	};
break;
case 'complete':
	hitboxFix.apply();
	document.querySelectorAll('noscript').forEach(noscript => noscript.remove());
	console.log(document.styleSheets[1].cssRules[0].styleSheet.cssRules[14].cssText);
	console.log(document.styleSheets[1].cssRules[0].styleSheet.cssRules[16].cssText);
}/*END*/};
