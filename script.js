const images = {
	grid: new Image(),
	logo: new Image(),
	bottomLine: new Image(),
	plus: new Image(),
	neg: new Image()
};
images.grid.src = "grid.png";
images.grid = new ImageRenderer(images.grid, 1, 0, 0, (e.data.h / 10) * 5, (e.data.h / 10) * 7, false, false, true, false);
images.logo.src = "logo.png";
images.logo = new ImageRenderer(images.logo, 1, 0, 0, (e.data.h / 10) * 5, (e.data.h / 20), false, false, true, false);
images.bottomLine.src = "bottomLine.png";
images.bottomLine = new ImageRenderer(images.bottomLine, 1, 0, 0, (e.data.h / 10) * 5, (e.data.h / 10), false, false, true, false);
images.plus.src = "plus.png";
images.plus = new ImageRenderer(images.plus, 1, 0, 0, (e.data.h / 15), (e.data.h / 15), false, false, true, false);
images.plus.src = "plus.png";
images.plus = new ImageRenderer(images.plus, 1, 0, 0, (e.data.h / 15), (e.data.h / 15), false, false, true, false);

const gridMatrix = [
	[

	],
	[
		
	],
	[
		
	],
	[
		
	],
	[
		
	]
]
for(i = 0; i < 5; i++) {
	gridMatrix[i].push({
		seat: null,
		zone: null
	},
	{
		seat: null,
		zone: null
	},
	{
		seat: null,
		zone: null
	},
	{
		seat: null,
		zone: null
	},
	{
		seat: null,
		zone: null
	},
	{
		seat: null,
		zone: null
	},
	{
		seat: null,
		zone: null
	});
}

const timer = setInterval(update, 10);

function update() {
	e.methods.clearCanvas(new FillRenderer("#FFFFFF", null, 1, 0));
	e.methods.renderImage(new Transform(e.data.w / 2, (e.data.h / -20), 0), images.logo);
	e.methods.renderImage(new Transform(e.data.w / 2, (e.data.h / -2), 0), images.grid);
	e.methods.renderImage(new Transform(e.data.w / 2, (e.data.h / 15) - e.data.h, 0), images.bottomLine);
}