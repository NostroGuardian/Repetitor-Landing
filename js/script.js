document.getElementById('review1_left').onclick = function() {

	document.getElementById("review1").style.visibility = "hidden";
	document.getElementById("review3").style.visibility = "visible";

}

document.getElementById('review1_right').onclick = function() {

	document.getElementById("review1").style.visibility = "hidden";
	document.getElementById("review2").style.visibility = "visible";

}

document.getElementById('review2_left').onclick = function() {

	document.getElementById("review2").style.visibility = "hidden";
	document.getElementById("review1").style.visibility = "visible";

}

document.getElementById('review2_right').onclick = function() {

	document.getElementById("review2").style.visibility = "hidden";
	document.getElementById("review3").style.visibility = "visible";

}

document.getElementById('review3_left').onclick = function() {

	document.getElementById("review3").style.visibility = "hidden";
	document.getElementById("review2").style.visibility = "visible";

}

document.getElementById('review3_right').onclick = function() {

	document.getElementById("review3").style.visibility = "hidden";
	document.getElementById("review1").style.visibility = "visible";

}

document.getElementById('link_about').onclick = function() {
	document.getElementById('resume').scrollIntoView();
}

document.getElementById('link_lessons').onclick = function() {
	document.getElementById('features').scrollIntoView();
}

document.getElementById('link_service').onclick = function() {
	document.getElementById('service').scrollIntoView();
}

document.getElementById('link_reviwes').onclick = function() {
	document.getElementById('rating').scrollIntoView();
}

document.getElementById('icon_whatsapp').onclick = function() {
	window.open("https://google.com");
}

document.getElementById('icon_vk').onclick = function() {
	window.open("https://vk.com/prost_seregka");
}

document.getElementById('icon_telegram').onclick = function() {
	window.open("https://t.me/Seregka27");
}

document.getElementById('btn_lesson').onclick = function() {
	window.open("https://vk.com/prost_seregka");
}

document.getElementById('btn_service_1').onclick = function() {
	document.getElementById('service_text_2').style.display = 'none';
	document.getElementById('service_text_3').style.display = 'none';
	document.getElementById('service_text_1').style.display = 'block';
	document.getElementById('btn_service_1').style.background = '#49ED76';
	document.getElementById('btn_service_2').style.background = '#49d176';
	document.getElementById('btn_service_3').style.background = '#49d176';

}

document.getElementById('btn_service_2').onclick = function() {
	document.getElementById('service_text_1').style.display = 'none';
	document.getElementById('service_text_3').style.display = 'none';
	document.getElementById('service_text_2').style.display = 'block';
	document.getElementById('btn_service_2').style.background = '#49ED76';
	document.getElementById('btn_service_1').style.background = '#49d176';
	document.getElementById('btn_service_3').style.background = '#49d176';
}

document.getElementById('btn_service_3').onclick = function() {
	document.getElementById('service_text_1').style.display = 'none';
	document.getElementById('service_text_2').style.display = 'none';
	document.getElementById('service_text_3').style.display = 'block';
	document.getElementById('btn_service_3').style.background = '#49ED76';
	document.getElementById('btn_service_1').style.background = '#49d176';
	document.getElementById('btn_service_2').style.background = '#49d176';
}

var A = 2;

document.getElementById('hamburger').onclick = function() {

	if (A % 2 == 0) {
		document.getElementById('mobile_menu').style.display = 'block';
		A++;
	} else {
		document.getElementById('mobile_menu').style.display = 'none';
		A++;
	}
}
document.getElementById('link_about1').onclick = function() {
	document.getElementById('resume').scrollIntoView();
}

document.getElementById('link_lessons1').onclick = function() {
	document.getElementById('features').scrollIntoView();
}

document.getElementById('link_service1').onclick = function() {
	document.getElementById('service').scrollIntoView();
}

document.getElementById('link_reviwes1').onclick = function() {
	document.getElementById('rating').scrollIntoView();
}


