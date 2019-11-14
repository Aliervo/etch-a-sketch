	const pixels = document.querySelectorAll('.gridbox');
	pixels.forEach((pixel) => pixel.addEventListener('mouseenter', (e) => {
		let randomHSL = [Math.random() * 360, Math.random() * 100, Math.random() * 100];
		if (pixel.style.backgroundColor == '') {
			pixel.setAttribute('style',  `background-color: hsl(${randomHSL[0]}, ${randomHSL[1]}%, ${randomHSL[2]}%)`);
		} else {
			let currentColor = pixel.style.backgroundColor;
			
			let slicedRGB = currentColor.slice(4, currentColor.length -1);
			
			let arrayedSlice = slicedRGB.split(', ');
			
			let red = +arrayedSlice[0];
			
			let green = +arrayedSlice[1];
			
			let blue = +arrayedSlice[2];
			
			let rgbMax = Math.max(red, green, blue) / 255;
			
			let rgbMin = Math.min(red, green, blue) / 255;
			
			let luminance = (rgbMax + rgbMin) / 2;
			
			let saturation =  (rgbMax === 0) ? 0:
												(rgbMin === 1) ? 0:
												(rgbMax - luminance) / Math.min(luminance, (1 - luminance));
			
			let hue = (rgbMax === rgbMin) ? 0:
								(rgbMax === red)    ?
								60 * (0 + (green - blue ) / (255 * (rgbMax - rgbMin))):
								(rgbMin === green)  ?
								60 * (2 + ( blue - red  ) / (255 * (rgbMax - rgbMin))):
									60 * (4 + (red - green) / (255 * (rgbMax - rgbMin)));
			
			console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}, therefore Hue: ${hue}, Saturation: ${saturation * 100}%, Luminance: ${luminance * 100}%.`)};
