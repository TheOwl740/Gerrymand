const images = {
	grid: new Image(),
	logo: new Image(),
	bottomLine: new Image(),
	plus: new Image(),
	owlLogo: new Image()
};
images.grid.src = "grid.png";
images.grid = new ImageRenderer(images.grid, 1, 0, 0, (e.data.h / 10) * 5, (e.data.h / 10) * 7, false, false, true, false);
images.logo.src = "logo.png";
images.logo = new ImageRenderer(images.logo, 1, 0, 0, (e.data.h / 10) * 5, (e.data.h / 20), false, false, true, false);
images.bottomLine.src = "bottomLine.png";
images.bottomLine = new ImageRenderer(images.bottomLine, 1, 0, 0, (e.data.h / 10) * 5, (e.data.h / 10), false, false, true, false);
images.plus.src = "plus.png";
images.plus = new ImageRenderer(images.plus, 1, 0, 0, (e.data.h / 15), (e.data.h / 15), false, false, true, false);
images.owlLogo.src = "owlLogo.png";
images.owlLogo = new ImageRenderer(images.owlLogo, 1, 0, 0, (e.data.h / 13), (e.data.h / 13), false, false, true, false);

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
];

const colorColliders = [
];

for(i = 0; i < 5; i++) {
	gridMatrix[i].push({
		seat: null,
		zone: null,
		center: new Transform((e.data.w / 2) + ((i - 2) * (e.data.h / 10.1)), (e.data.h / -2) + (-3 * (e.data.h / 10.1)), 0),
		collider: null
	},
	{
		seat: null,
		zone: null,
		center: new Transform((e.data.w / 2) + ((i - 2) * (e.data.h / 10.1)), (e.data.h / -2) + (-2 * (e.data.h / 10.1)), 0),
		collider: null
	},
	{
		seat: null,
		zone: null,
		center: new Transform((e.data.w / 2) + ((i - 2) * (e.data.h / 10.1)), (e.data.h / -2) + (-1 * (e.data.h / 10.1)), 0),
		collider: null
	},
	{
		seat: null,
		zone: null,
		center: new Transform((e.data.w / 2) + ((i - 2) * (e.data.h / 10.1)), (e.data.h / -2) + (0 * (e.data.h / 10.1)), 0),
		collider: null
	},
	{
		seat: null,
		zone: null,
		center: new Transform((e.data.w / 2) + ((i - 2) * (e.data.h / 10.1)), (e.data.h / -2) + (1 * (e.data.h / 10.1)), 0),
		collider: null
	},
	{
		seat: null,
		zone: null,
		center: new Transform((e.data.w / 2) + ((i - 2) * (e.data.h / 10.1)), (e.data.h / -2) + (2 * (e.data.h / 10.1)), 0),
		collider: null
	},
	{
		seat: null,
		zone: null,
		center: new Transform((e.data.w / 2) + ((i - 2) * (e.data.h / 10.1)), (e.data.h / -2) + (3 * (e.data.h / 10.1)), 0),
		collider: null
	});
}

for(i = 0; i < 5; i++) {
  for(ii = 0; ii < 7; ii++) {
    let cell = gridMatrix[i][ii];
    cell.collider = new Polygon([
      new Tri([
        new Transform(cell.center.x - (e.data.h / 21), cell.center.y + (e.data.h / 21), 0),
        new Transform(cell.center.x + (e.data.h / 21), cell.center.y + (e.data.h / 21), 0),
        new Transform(cell.center.x - (e.data.h / 21), cell.center.y - (e.data.h / 21), 0)
      ], 3),
      new Tri([
        new Transform(cell.center.x + (e.data.h / 21), cell.center.y + (e.data.h / 21), 0),
        new Transform(cell.center.x + (e.data.h / 21), cell.center.y - (e.data.h / 21), 0),
        new Transform(cell.center.x - (e.data.h / 21), cell.center.y - (e.data.h / 21), 0)
      ], 3)
    ], false);
    if(e.methods.randomNum(0, 1) === 0) {
      cell.seat = false;
    } else {
      cell.seat = true;
    }
  }
}

for(i = 0; i < 7; i++) {
  colorColliders.push(new Polygon([
    new Tri([
      new Transform((e.data.w / 2) + ((i - 3) * ((e.data.h / 2) / 9.05) - (e.data.h / 40)), (e.data.h / -20) + (e.data.h / 40), 0),
      new Transform((e.data.w / 2) + ((i - 3) * ((e.data.h / 2) / 9.05) + (e.data.h / 40)), (e.data.h / -20) + (e.data.h / 40), 0),
      new Transform((e.data.w / 2) + ((i - 3) * ((e.data.h / 2) / 9.05) - (e.data.h / 40)), (e.data.h / -20) - (e.data.h / 40), 0)
    ], 3),
    new Tri([
      new Transform((e.data.w / 2) + ((i - 3) * ((e.data.h / 2) / 9.05) + (e.data.h / 40)), (e.data.h / -20) + (e.data.h / 40), 0),
      new Transform((e.data.w / 2) + ((i - 3) * ((e.data.h / 2) / 9.05) + (e.data.h / 40)), (e.data.h / -20) - (e.data.h / 40), 0),
      new Transform((e.data.w / 2) + ((i - 3) * ((e.data.h / 2) / 9.05) - (e.data.h / 40)), (e.data.h / -20) - (e.data.h / 40), 0)
    ], 3)
  ], false));
}

const timer = setInterval(update, 10);

function update() {
	e.methods.clearCanvas(new FillRenderer("#FFFFFF", null, 1, 0));
	e.methods.renderImage(new Transform(e.data.w / 2, (e.data.h / -20), 0), images.logo);
	e.methods.renderImage(new Transform(e.data.w / 2, (e.data.h / -2), 0), images.grid);
	e.methods.renderImage(new Transform(e.data.w / 2, (e.data.h / 15) - e.data.h, 0), images.bottomLine);
	e.methods.renderImage(new Transform((e.data.w / 2) - (e.data.h / 5), (e.data.h / 15) - e.data.h, 0), images.owlLogo);
	for(i = 0; i < 5; i++) {
    for(ii = 0; ii < 7; ii++) {
      let cell = gridMatrix[i][ii];
      if(cell.seat) {
        e.methods.renderImage(cell.center, images.plus);
      } else {
        e.methods.renderImage(e.methods.addTransform(cell.center, new Transform(0, 0, 45)), images.plus);
      }
    }
	}
}
