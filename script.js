var grid = new Image()
grid.src = "grid.png";
grid = new ImageRenderer(grid, 1, 0, 0, (e.data.h / 8) * 5, (e.data.h / 8) * 7, false, false, true, false);
var logo = new Image()
logo.src = "logo.png";
logo = new ImageRenderer(grid, 1, 0, 0, (e.data.h / 8) * 5, (e.data.h / 8), false, false, true, false);

const timer = setInterval(update, 10);

function update() {
	e.methods.clearCanvas(new FillRenderer("#DDFFEE", null, 1, 0));
	e.methods.renderImage(new Transform(e.data.w / 2, (e.data.h / -2) + (e.data.h / -16), 0), grid);
	e.methods.renderImage(new Transform(e.data.w / 2, (e.data.h / -2) + (e.data.h / -16), 0), grid);
}