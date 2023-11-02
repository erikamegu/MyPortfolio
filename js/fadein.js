$(window).scroll(function () {
	fadeAnime();
});

$(window).on("load", function () {
	fadeAnime();
});

function fadeAnime() {
	$(".fadeInUp").each(function () {
		//fadeUpTriggerというクラス名が
		var elemPos = $(this).offset().top - 50; //要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("animate__fadeInUp animate__animated"); // 画面内に入ったらfadeUpというクラス名を追記
		} else {
			$(this).removeClass("animate__fadeInUp animate__animated"); // 画面外に出たらfadeUpというクラス名を外す
		}
	});
	$(".headShake").each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("animate__animated animate__headShake");
		} else {
			$(this).removeClass("animate__animated animate__headShake");
		}
	});
	$(".tada").each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("animate__animated animate__tada");
		} else {
			$(this).removeClass("animate__animated animate__tada");
		}
	});
}
