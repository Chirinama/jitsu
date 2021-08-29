$(function($){
	// Settings
	$(".maxsize").css({ top : ($(window).width() - $(".maxsize").height())/2  });
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'true',
		continous = true,
		autoplay = true,
		playlist = [
		{
			title: "十夏の花",
			artist: "HoneyComeBear",
			album: "HappyEND",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/HoneyComeBear---HappyEND1d18ab26cc2dafc5.jpg",
			mp3: "https://iw233music.oss-cn-beijing.aliyuncs.com/HoneyComeBear/%E5%8D%81%E5%A4%8F%E3%81%AE%E8%8A%B1.mp3",
		}, 
	    {
			title: "さよならの支度",
			artist: "HoneyComeBear",
			album: "HappyEND",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/HoneyComeBear---HappyEND1d18ab26cc2dafc5.jpg",
			mp3: "https://iw233music.oss-cn-beijing.aliyuncs.com/HoneyComeBear/%E3%81%95%E3%82%88%E3%81%AA%E3%82%89%E3%81%AE%E6%94%AF%E5%BA%A6%20.mp3",
		}, 
	    {
			title: "きみと君",
			artist: "HoneyComeBear",
			album: "HappyEND",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/HoneyComeBear---HappyEND1d18ab26cc2dafc5.jpg",
			mp3: "https://iw233music.oss-cn-beijing.aliyuncs.com/HoneyComeBear/%E3%81%8D%E3%81%BF%E3%81%A8%E5%90%9B.mp3",
		}, 
	    {
			title: "悪天",
			artist: "HoneyComeBear",
			album: "HappyEND",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/HoneyComeBear---HappyEND1d18ab26cc2dafc5.jpg",
			mp3: "https://iw233music.oss-cn-beijing.aliyuncs.com/HoneyComeBear/%E6%82%AA%E5%A4%A9.mp3",
		}, 
	    {
			title: "ニライカナイ",
			artist: "HoneyComeBear",
			album: "HappyEND",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/HoneyComeBear---HappyEND1d18ab26cc2dafc5.jpg",
			mp3: "https://iw233music.oss-cn-beijing.aliyuncs.com/HoneyComeBear/%E3%83%8B%E3%83%A9%E3%82%A4%E3%82%AB%E3%83%8A%E3%82%A4.mp3",
		}, 
	    {
			title: "糸電話",
			artist: "HoneyComeBear",
			album: "HappyEND",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/HoneyComeBear---HappyEND1d18ab26cc2dafc5.jpg",
			mp3: "https://iw233music.oss-cn-beijing.aliyuncs.com/HoneyComeBear/%E7%B3%B8%E9%9B%BB%E8%A9%B1.mp3",
		}, 
	    {
			title: "打上げ星",
			artist: "HoneyComeBear",
			album: "HappyEND",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/HoneyComeBear---HappyEND1d18ab26cc2dafc5.jpg",
			mp3: "https://iw233music.oss-cn-beijing.aliyuncs.com/HoneyComeBear/%E6%89%93%E4%B8%8A%E3%81%92%E6%98%9F.mp3",
		}, 
	    {
			title: "雨泳ぎ",
			artist: "HoneyComeBear",
			album: "HappyEND",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/HoneyComeBear---HappyEND1d18ab26cc2dafc5.jpg",
			mp3: "https://iw233music.oss-cn-beijing.aliyuncs.com/HoneyComeBear/%E9%9B%A8%E6%B3%B3%E3%81%8E.mp3",
		}, 
	    {
			title: "夢さんぽ",
			artist: "HoneyComeBear",
			album: "HappyEND",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/HoneyComeBear---HappyEND1d18ab26cc2dafc5.jpg",
			mp3: "https://iw233music.oss-cn-beijing.aliyuncs.com/HoneyComeBear/%E5%A4%A2%E3%81%95%E3%82%93%E3%81%BD.mp3",
		}, 
	    {
			title: "夏の魔法",
			artist: "HoneyComeBear",
			album: "HappyEND",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/HoneyComeBear---HappyEND1d18ab26cc2dafc5.jpg",
			mp3: "https://iw233music.oss-cn-beijing.aliyuncs.com/HoneyComeBear/HoneyComeBear-%E5%A4%8F%E3%81%AE%E9%AD%94%E6%B3%95.mp3",
		}, 
	    {
			title: "Revolver",
			artist: "HoneyComeBear",
			album: "Revolver",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/HoneyComeBear---Revolver3522b1c035f4bde4.md.jpg",
			mp3: "https://iw233music.oss-cn-beijing.aliyuncs.com/HoneyComeBear/HoneyComeBear%20-%20Revolver.mp3",
		}, 
	    {
			title: "忘れ風",
			artist: "HoneyComeBear",
			album: "Revolver",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/HoneyComeBear---f38b616f4d99287a.md.jpg",
			mp3: "https://iw233music.oss-cn-beijing.aliyuncs.com/HoneyComeBear/HoneyComeBear%20-%20%E5%BF%98%E3%82%8C%E9%A2%A8.mp3",
		}, 
	    {
			title: "Terrarium",
			artist: "HoneyComeBear",
			album: "Revolver",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/HoneyComeBear---Terrariuma1f1390ad78ef47b.jpg",
			mp3: "https://iw233music.oss-cn-beijing.aliyuncs.com/HoneyComeBear/HoneyComeBear%20-%20Terrarium.mp3",
		},
	    {
			title: "Mirror",
			artist: "HoneyComeBear",
			album: "Holic",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/coverbe0770f3d16284cc.md.jpg",
			mp3: "https://cdn.jsdelivr.net/gh/Chirinama/jitsu@main/s/music/Mirror%20-%20HoneyComeBear.mp3",
		},
	    {
			title: "IDOL",
			artist: "HoneyComeBear",
			album: "Holic",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/coverbe0770f3d16284cc.md.jpg",
			mp3: "https://cdn.jsdelivr.net/gh/Chirinama/jitsu@main/s/music/IDOL%20-%20HoneyComeBear.mp3",
		},
	    {
			title: "Calling",
			artist: "HoneyComeBear",
			album: "Holic",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/coverbe0770f3d16284cc.md.jpg",
			mp3: "https://cdn.jsdelivr.net/gh/Chirinama/jitsu@main/s/music/Calling%20-%20HoneyComeBear.mp3",
		},
	    {
			title: "スニーカー",
			artist: "HoneyComeBear",
			album: "Intro",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/cover9cb23e8a2f407fd4.md.jpg",
			mp3: "https://cdn.jsdelivr.net/gh/Chirinama/jitsu@main/s/music/Sneaker%20-%20%E3%82%B9%E3%83%8B%E3%83%BC%E3%82%AB%E3%83%BC%20-%20HoneyComeBear.mp3",
		},
	    {
			title: "またね",
			artist: "HoneyComeBear",
			album: "Intro",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/cover9cb23e8a2f407fd4.md.jpg",
			mp3: "https://cdn.jsdelivr.net/gh/Chirinama/jitsu@main/s/music/See%20You%20-%20%E3%81%BE%E3%81%9F%E3%81%AD%20-%20HoneyComeBear.mp3",
		},
	    {
			title: "Defy",
			artist: "HoneyComeBear",
			album: "Intro",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/cover9cb23e8a2f407fd4.md.jpg",
			mp3: "https://cdn.jsdelivr.net/gh/Chirinama/jitsu@main/s/music/Defy%20-%20HoneyComeBear.mp3",
		},
	    {
			title: "ナツゾラ",
			artist: "HoneyComeBear",
			album: "Outro",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/covercdfccc77fd150f56.md.jpg",
			mp3: "https://cdn.jsdelivr.net/gh/Chirinama/jitsu@main/s/music/%E3%83%8A%E3%83%84%E3%82%BE%E3%83%A9%20-%20HoneyComeBear.mp3",
		},
	    {
			title: "クラゲ",
			artist: "HoneyComeBear",
			album: "Outro",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/covercdfccc77fd150f56.md.jpg",
			mp3: "https://cdn.jsdelivr.net/gh/Chirinama/jitsu@main/s/music/SpaceJellyfish%20-%20%E3%82%AF%E3%83%A9%E3%82%B1%E3%82%99%20-%20HoneyComeBear.mp3",
		},
	    {
			title: "Clockwise",
			artist: "HoneyComeBear",
			album: "Outro",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/covercdfccc77fd150f56.md.jpg",
			mp3: "https://cdn.jsdelivr.net/gh/Chirinama/jitsu@main/s/music/Clockwise%20-%20HoneyComeBear.mp3",
		},
	    {
			title: "レイニーガール",
			artist: "HoneyComeBear",
			album: "Rainy Girl",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/cover91ebd335685e019d.md.png",
			mp3: "https://cdn.jsdelivr.net/gh/Chirinama/jitsu@main/s/music/Rainy%20Girl%20-%20%E3%83%AC%E3%82%A4%E3%83%8B%E3%83%BC%E3%82%AB%E3%82%99%E3%83%BC%E3%83%AB%20-%20HoneyComeBear.mp3",
		},
	    {
			title: "Twilight",
			artist: "HoneyComeBear",
			album: "Twilight",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/covered04bc121bd04f30.md.png",
			mp3: "https://cdn.jsdelivr.net/gh/Chirinama/jitsu@main/s/music/Twilight%20-%20HoneyComeBear.mp3",
		},
	    {
			title: "Colorful",
			artist: "HoneyComeBear",
			album: "Colorful",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/cover4f00a5edd6e674d3.md.jpg",
			mp3: "https://cdn.jsdelivr.net/gh/Chirinama/jitsu@main/s/music/Colorful%20-%20HoneyComeBear.mp3",
		},
	    {
			title: "Friend",
			artist: "HoneyComeBear",
			album: "Friend",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/cover384764eacc368fd0.md.jpg",
			mp3: "https://cdn.jsdelivr.net/gh/Chirinama/jitsu@main/s/music/Friend%20-%20HoneyComeBear.mp3",
		},
	    {
			title: "アキレア",
			artist: "HoneyComeBear",
			album: "Achillea",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/27/cover7b468aa89efcbe7d.md.png",
			mp3: "https://cdn.jsdelivr.net/gh/Chirinama/jitsu@main/s/music/%E3%82%A2%E3%82%AD%E3%83%AC%E3%82%A2%20-%20HoneyComeBear.mp3",
		},
	    {
			title: "Missing",
			artist: "HoneyComeBear",
			album: "Missing",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/28/cover1e8df331af5fd2b5.md.jpg",
			mp3: "https://cdn.jsdelivr.net/gh/Chirinama/jitsu@main/s/music/Missing%20-%20HoneyComeBear.mp3",
		},
	    {
			title: "リメンバー",
			artist: "HoneyComeBear",
			album: "Remember",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/28/coverfa97d70cf090deee.md.jpg",
			mp3: "https://cdn.jsdelivr.net/gh/Chirinama/jitsu@main/s/music/Remember%20-%20HoneyComeBear.mp3",
		},
	    {
			title: "Sunflower",
			artist: "HoneyComeBear",
			album: "Sunflower",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/28/covercd73b0182d1945d7.md.jpg",
			mp3: "https://cdn.jsdelivr.net/gh/Chirinama/jitsu@main/s/music/Sunflower%20-%20HoneyComeBear.mp3",
		},
	    {
			title: "Dear",
			artist: "HoneyComeBear",
			album: "Dear",
			cover: "https://img.jpggod.com/file/jpggod/2021/08/28/coverc0f2c38d9188883a.md.png",
			mp3: "https://cdn.jsdelivr.net/gh/Chirinama/jitsu@main/s/music/Dear%20-%20HoneyComeBear.mp3",
		}];

	// Load playlist
	for (var i = 0; i < playlist.length; i++) {
		var item = playlist[i];
		$('#playlist').append('<li>' + item.artist + ' - ' + item.title + '</li>');
	}

	var time = new Date(),
		currentTrack = shuffle === 'true' ? time.getTime() % playlist.length : 0,
		audio, timeout, isPlaying, playCounts;

	var play = function () {
		audio.play();
		$('.playback').addClass('playing');
		timeout = setInterval(updateProgress, 500);
		isPlaying = true;
	};

	var pause = function () {
		audio.pause();
		$('.playback').removeClass('playing');
		clearInterval(updateProgress);
		isPlaying = false;
	};

	// Update progress
	var setProgress = function (value) {
		var currentSec = parseInt(value % 60) < 10 ? '0' + parseInt(value % 60) : parseInt(value % 60),
			ratio = value / audio.duration * 100;

		$('.timer').html(parseInt(value / 60) + ':' + currentSec);
		$('.progress .pace').css('width', ratio + '%');
		$('.progress .slider a').css('left', ratio + '%');
	};

	var updateProgress = function () {
		setProgress(audio.currentTime);
	};

	// Progress slider
	$('.progress .slider').slider({
		step: 0.1,
		slide: function (event, ui) {
			$(this).addClass('enable');
			setProgress(audio.duration * ui.value / 100);
			clearInterval(timeout);
		},
		stop: function (event, ui) {
			audio.currentTime = audio.duration * ui.value / 100;
			$(this).removeClass('enable');
			timeout = setInterval(updateProgress, 500);
		}
	});

	// Volume slider
	var setVolume = function (value) {
		audio.volume = localStorage.volume = value;
		$('.volume .pace').css('width', value * 100 + '%');
		$('.volume .slider a').css('left', value * 100 + '%');
	};

	var volume = localStorage.volume || 0.5;
	$('.volume .slider').slider({
		max: 1,
		min: 0,
		step: 0.01,
		value: volume,
		slide: function (event, ui) {
			setVolume(ui.value);
			$(this).addClass('enable');
			$('.mute').removeClass('enable');
		},
		stop: function () {
			$(this).removeClass('enable');
		}
	}).children('.pace').css('width', volume * 100 + '%');

	$('.mute').click(function () {
		if ($(this).hasClass('enable')) {
			setVolume($(this).data('volume'));
			$(this).removeClass('enable');
		} else {
			$(this).data('volume', audio.volume).addClass('enable');
			setVolume(0);
		}
	});

	// Switch track
	var switchTrack = function (i) {
		if (i < 0) {
			track = currentTrack = playlist.length - 1;
		} else if (i >= playlist.length) {
			track = currentTrack = 0;
		} else {
			track = i;
		}

		$('audio').remove();
		loadMusic(track);
		if (isPlaying == true) play();
	};

	// Shuffle
	var shufflePlay = function () {
		var time = new Date(),
			lastTrack = currentTrack;
		currentTrack = time.getTime() % playlist.length;
		if (lastTrack == currentTrack) ++currentTrack;
		switchTrack(currentTrack);
	}

	// Fire when track ended
	var ended = function () {
		pause();
		audio.currentTime = 0;
		playCounts++;
		if (continous == true) isPlaying = true;
		if (repeat == 1) {
			play();
		} else {
			if (shuffle === 'true') {
				shufflePlay();
			} else {
				if (repeat == 2) {
					switchTrack(++currentTrack);
				} else {
					if (currentTrack < playlist.length) switchTrack(++currentTrack);
				}
			}
		}
	}

	var beforeLoad = function () {
		var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
		$('.progress .loaded').css('width', (100 / (this.duration || 1) * endVal) + '%');
	}

	// Fire when track loaded completely
	var afterLoad = function () {
		if (autoplay == true) play();
	}

	// Load track
	var loadMusic = function (i) {
		var item = playlist[i],
			newaudio = $('<audio>').html('<source src="' + item.mp3 + '"><source src="' + item.ogg + '">').appendTo('#player');

		$('.cover').html('<img src="' + item.cover + '" alt="' + item.album + '">');
		$('.tag').html('<strong>' + item.title + '</strong><span class="artist">' + item.artist + '</span><span class="album">' + item.album + '</span>');
		$('#playlist li').removeClass('playing').eq(i).addClass('playing');
		audio = newaudio[0];
		audio.volume = $('.mute').hasClass('enable') ? 0 : volume;
		audio.addEventListener('progress', beforeLoad, false);
		audio.addEventListener('durationchange', beforeLoad, false);
		audio.addEventListener('canplay', afterLoad, false);
		audio.addEventListener('ended', ended, false);
	}

	loadMusic(currentTrack);
	$('.playback').on('click', function () {
		if ($(this).hasClass('playing')) {
			pause();
		} else {
			play();
		}
	});
	$('.rewind').on('click', function () {
		if (shuffle === 'true') {
			shufflePlay();
		} else {
			switchTrack(--currentTrack);
		}
	});
	$('.fastforward').on('click', function () {
		if (shuffle === 'true') {
			shufflePlay();
		} else {
			switchTrack(++currentTrack);
		}
	});
	$('#playlist li').each(function (i) {
		var _i = i;
		$(this).on('click', function () {
			switchTrack(_i);
		});
	});

	if (shuffle === 'true') $('.shuffle').addClass('enable');
	if (repeat == 1) {
		$('.repeat').addClass('once');
	} else if (repeat == 2) {
		$('.repeat').addClass('all');
	}

	$('.repeat').on('click', function () {
		if ($(this).hasClass('once')) {
			repeat = localStorage.repeat = 2;
			$(this).removeClass('once').addClass('all');
		} else if ($(this).hasClass('all')) {
			repeat = localStorage.repeat = 0;
			$(this).removeClass('all');
		} else {
			repeat = localStorage.repeat = 1;
			$(this).addClass('once');
		}
	});

	$('.shuffle').on('click', function () {
		if ($(this).hasClass('enable')) {
			shuffle = localStorage.shuffle = 'false';
			$(this).removeClass('enable');
		} else {
			shuffle = localStorage.shuffle = 'true';
			$(this).addClass('enable');
		}
	});
		$(".download img").hover(function(){
		$(this).attr({ "src" : "img/link2.png" });
	}, function(){
		$(this).attr({ "src" : "img/link1.png" });
	});
});
