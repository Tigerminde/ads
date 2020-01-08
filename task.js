const banners = document.getElementsByClassName("rotator");

[...banners].forEach(banner => {
	const bannerList = banner.getElementsByClassName("rotator__case");

	const tick = index => {
    [...bannerList].forEach(element => {
			element.classList.remove("rotator__case_active");
		});

		index = bannerList[index].nextElementSibling ? index + 1 : 0;

		let speed = bannerList[index].getAttribute("data-speed");
		let color = bannerList[index].getAttribute("data-color");

		bannerList[index].setAttribute("style", `color: ${color}`);
		bannerList[index].classList.add("rotator__case_active");

		setTimeout(tick, speed, index);
	};

	setTimeout(tick, 0, 0);
});
