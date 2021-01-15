initialiseTheCards = () => {
	str = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.IxLbxM_0EOOqirRmMWLKrAHaNK%26pid%3DApi&f=1,https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.aJ1uZzv6RwE-ywKw_o8wtwHaEo%26pid%3DApi&f=1,https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.ZVzzwT34id48uBwLn-YTkwEsC7%26pid%3DApi&f=1,https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.2dX1OlBL7Dz0jm0uAtQClAHaEo%26pid%3DApi&f=1,https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Vfl8aXTh7itRXO3EM2ucpwHaEK%26pid%3DApi&f=1,https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.DxpkktdoIQQkjRRQvN6TzQHaNK%26pid%3DApi&f=1,https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.KOTb69POkFOgMmfH_U-0mgHaNK%26pid%3DApi&f=1',https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.jWOba9THMPAiCcJuH3EvzgHaEK%26pid%3DApi&f=1,https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.vBiLoEr0YME3g6cczqS0OAHaEK%26pid%3DApi&f=1,https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.a9Si9uyGHSgYjJaDW4yuSQHaNK%26pid%3DApi&f=1,'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.bhp2cEaU3GZdrKj9JjtlOAHaEK%26pid%3DApi&f=1',https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ACQnDlXb5WDszzycD0HWVwHaEK%26pid%3DApi&f=1"
	slider = document.getElementById("slider")

	arr = str.split(",")

	slider_data = ``
	for (i = 0; i < 12; i++) {
		slider_data += `
			<div class="carousel__slider__item">
			<div class="item__3d-frame">
			<div class="item__3d-frame__box item__3d-frame__box--front">
				<img src="${arr[i]}">
			</div>
			<div class="item__3d-frame__box item__3d-frame__box--left"></div>
			<div class="item__3d-frame__box item__3d-frame__box--right"></div>
			</div>
			</div>
		`
	}

	slider.innerHTML = slider_data
}

(function() {
	initialiseTheCards()
	"use strict";
  
	var carousel = document.getElementsByClassName('carousel')[0],
		slider = carousel.getElementsByClassName('carousel__slider')[0],
		items = carousel.getElementsByClassName('carousel__slider__item'),
		prevBtn = carousel.getElementsByClassName('carousel__prev')[0],
		nextBtn = carousel.getElementsByClassName('carousel__next')[0];
	
	var width, height, totalWidth, margin = 20,
		currIndex = 0,
		interval, intervalTime = 4000;
	
	function init() {
		resize();
		move(Math.floor(items.length / 2));
		bindEvents();
	  
		timer();
	}
	
	function resize() {
		width = Math.max(window.innerWidth * .25, 275),
		height = window.innerHeight * .5,
		totalWidth = width * items.length;
	  
		slider.style.width = totalWidth + "px";
	  
		for(var i = 0; i < items.length; i++) {
			let item = items[i];
			item.style.width = (width - (margin * 2)) + "px";
			item.style.height = height + "px";
		}
	}
	
	function move(index) {
	  
		if(index < 1) index = items.length;
		if(index > items.length) index = 1;
		currIndex = index;
	  
		for(var i = 0; i < items.length; i++) {
			let item = items[i],
				box = item.getElementsByClassName('item__3d-frame')[0];
			if(i == (index - 1)) {
				item.classList.add('carousel__slider__item--active');
				box.style.transform = "perspective(1200px)"; 
			} else {
			  item.classList.remove('carousel__slider__item--active');
				box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
			}
		}
	  
		slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
	}
	
	function timer() {
		clearInterval(interval);    
		interval = setInterval(() => {
		  move(++currIndex);
		}, intervalTime);    
	}
	
	function prev() {
	  move(--currIndex);
	  timer();
	}
	
	function next() {
	  move(++currIndex);    
	  timer();
	}
	
	
	function bindEvents() {
		window.onresize = resize;
		prevBtn.addEventListener('click', () => { prev(); });
		nextBtn.addEventListener('click', () => { next(); });    
	}
  
  
  
  
	
	init();
	
  })();

(function() {
	images = []
	for (i = 0; i < 10; i ++) {
		// https://www.wallpaperwolf.com/wallpapers/wallpapers-for-phones/hd/download/exotic-purple-colors-0381.png
		images.push({
			"name"  : "lipsum",
			"src" : "https://www.logobee.com/uploads/rgb-colors.jpg", 
		})
	}

	var innerHTML = ""
	var prev_angle = -60

	div = document.createElement("div")
	div.style.transform = "rotateY("+prev_angle+"deg)"
	div.style.opacity = "0"
	img = document.createElement("img")
	img.src = "./i.gif"
	div.appendChild(img)
	document.getElementById("slideshow").appendChild(div)


	for (i = 0; i< 3; i++) {
		prev_angle = prev_angle + 30
		div = document.createElement("div")

		div.style.transform = "rotateY("+prev_angle+"deg)"

		if (i == 1) {
			div.style.transform = "rotateY("+prev_angle+"deg) scale(1.2)"
		}

		img = document.createElement("img")
		img.src = images[i].src

		div.appendChild(img)

		document.getElementById("slideshow").appendChild(div)
		
	}

	div = document.createElement("div")
	div.style.transform = "rotateY("+prev_angle+"deg)"
	div.style.opacity = "0"
	img = document.createElement("img")
	img.src = "./i.gif"
	div.appendChild(img)
	document.getElementById("slideshow").appendChild(div)


})()