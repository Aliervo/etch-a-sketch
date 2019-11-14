//const container = document.querySelector('#container');

const resetButton = document.querySelector('#reset');
reset.addEventListener('click', (e) => {
	resetGrid(+prompt('How long should a side be?', '16'));
});

function clearGrid() {
	const pixels = document.querySelectorAll('.gridbox');
	
	for (i = 0; i < pixels.length; i++) {
		container.removeChild(pixels[i]);
	}
};

function randomColor() {
	let randomHSL = [Math.random() * 360, Math.random() * 100, Math.random() * 100];
	return randomHSL;
};

function setGrid(gridDimensions) {
	const container = document.querySelector('#container');
	container.setAttribute('style', `grid-template: repeat(${gridDimensions}, 1fr) / repeat(${gridDimensions}, 1fr)`);
		
	for (i = 0; i < (gridDimensions ** 2); i++) {
	var gridDiv = document.createElement('div');
		gridDiv.classList.add('gridbox');
		container.appendChild(gridDiv);
	};
	
	gridDiv.style.cssText = 'width: 100%; height: 100%';

	const pixels = document.querySelectorAll('.gridbox');
	pixels.forEach((pixel) => pixel.addEventListener('mouseenter', (e) => {
		let randomRGB = [Math.random() * 255, Math.random() * 255, Math.random() * 255];
		
		if (pixel.style.backgroundColor == '') {
			pixel.style.backgroundColor = `rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`;
		} else {
			let currentColor = pixel.style.backgroundColor;
			
			let slicedRGB = currentColor.slice(4, currentColor.length -1);
			
			let arrayedSlice = slicedRGB.split(', ');
			
			let red = +arrayedSlice[0];
			
			let green = +arrayedSlice[1];
			
			let blue = +arrayedSlice[2];
			
			pixel.style.backgroundColor = `rgb(${Math.max(red - 25.5, 0)}, ${Math.max(green - 25.5, 0)}, ${Math.max(blue - 25.5, 0)})`;
		};
	}));
};

function resetGrid(gridDimensions) {
	clearGrid();
	
	setGrid(gridDimensions);
};

setGrid(16);
