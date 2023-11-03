// Scrollイベントの度にスクロール位置を判定してクラスを付けたり外したりしたい
$(window).scroll(function () {
	fadeAnime();
});

$(window).on("load", function () {
	fadeAnime();
});

function fadeAnime() {
	$(".fadeInUp").each(function () {
		//$(this)はセレクターで指定したクラス(この場合fadeUpクラス)
		var elemPos = $(this).offset().top - 50; //セレクターのクラスの50px手前の高さ
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height(); // 画面分の高さ

		// 指定した要素よりも現在のスクロール位置が高ければクラス付加、低ければクラス削除
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("animate__fadeInUp animate__animated");
		} else {
			$(this).removeClass("animate__fadeInUp animate__animated");
		}
	});
	$(".swing").each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("animate__animated animate__swing");
		} else {
			$(this).removeClass("animate__animated animate__swing");
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
	$(".rubberBand").each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("animate__animated animate__rubberBand");
		} else {
			$(this).removeClass("animate__animated animate__rubberBand");
		}
	});
	$(".fadeIn").each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("animate__animated animate__fadeIn");
		} else {
			$(this).removeClass("animate__animated animate__fadeIn ");
		}
	});
	$(".fadeInRight").each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("animate__animated animate__fadeInRight");
		} else {
			$(this).removeClass("animate__animated animate__fadeInRight");
		}
	});
	$(".fadeInLeft").each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("animate__animated animate__fadeInLeft");
		} else {
			$(this).removeClass("animate__animated animate__fadeInLeft");
		}
	});
}
