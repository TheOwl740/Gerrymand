//jshint maxerr: 10000

const version = 28;

var selectedColor = null;
var dragging = false;
var winPoints = 0;
var gameState = "playing";
var gridFilled = false;

e.data.element.addEventListener("dblclick", () => {
  if(gameState === "winScreen") {
    reset();
    gameState = "playing";
  }
});

e.data.element.addEventListener("click", () => {
  fullClick();
});

const images = {
	grid: new Image(),
	logo: new Image(),
	bottomLine: new Image(),
	plus: new Image(),
	owlLogo: new Image(),
	winScreen: new Image(),
	refresh: new Image(),
	help: new Image(),
	helpPage: new Image(),
	close: new Image(),
	info: new Image(),
	infoPage: new Image()
};
images.grid.src = "grid.png";
images.grid = new ImageRenderer(images.grid, 1, 0, 0, (e.data.h / 10) * 5, (e.data.h / 10) * 7, false, false, true, false);
images.logo.src = "logo.png";
images.logo = new ImageRenderer(images.logo, 1, 0, 0, (e.data.h / 10) * 5, (e.data.h / 20), false, false, true, false);
images.bottomLine.src = "bottomLine.png";
images.bottomLine = new ImageRenderer(images.bottomLine, 1, 0, 0, (e.data.h / 10) * 5, (e.data.h / 10), false, false, true, false);
images.plus.src = "plus.png";
images.plus = new ImageRenderer(images.plus, 1, 0, 0, (e.data.h / 12), (e.data.h / 12), false, false, true, false);
images.owlLogo.src = "owlLogo.png";
images.owlLogo = new ImageRenderer(images.owlLogo, 1, 0, 0, (e.data.h / 13), (e.data.h / 13), false, false, true, false);
images.winScreen.src = "winScreen.png";
images.winScreen = new ImageRenderer(images.winScreen, 1, 0, 0, (e.data.h / 10) * 7, (e.data.h / 10) * 7, false, false, true, false);
images.refresh.src = "refresh.png";
images.refresh = new ImageRenderer(images.refresh, 1, 0, 0, (e.data.h / 10), (e.data.h / 15), false, false, true, false);
images.help.src = "help.png";
images.help = new ImageRenderer(images.help, 1, 0, 0, (e.data.h / 10), (e.data.h / 15), false, false, true, false);
images.helpPage.src = "helpPage.png";
images.helpPage = new ImageRenderer(images.helpPage, 1, 0, 0, (e.data.h / 10) * 7, (e.data.h / 10) * 7, false, false, true, false);
images.close.src = "close.png";
images.close = new ImageRenderer(images.close, 1, 0, 0, (e.data.h / 10), (e.data.h / 15), false, false, true, false);
images.info.src = "info.png";
images.info = new ImageRenderer(images.info, 1, 0, 0, (e.data.h / 10), (e.data.h / 15), false, false, true, false);
images.infoPage.src = "infoPage.png";
images.infoPage = new ImageRenderer(images.infoPage, 1, 0, 0, (e.data.h / 10) * 7, (e.data.h / 10) * 7, false, false, true, false);

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

const buttonCollider = new Polygon([
  new Tri([
    new Transform((e.data.h / -20), (e.data.h / 40), 0),
    new Transform((e.data.h / 20), (e.data.h / 40), 0),
    new Transform((e.data.h / -20), (e.data.h / -40), 0)
  ], 3),
  new Tri([
    new Transform((e.data.h / 20), (e.data.h / 40), 0),
    new Transform((e.data.h / 20), (e.data.h / -40), 0),
    new Transform((e.data.h / -20), (e.data.h / -40), 0)
  ], 3)
], true);

function reset() {
  for(a = 0; a < 5; a++) {
    gridMatrix[a] = [
    ];
  }
  resetGrid();
  selectedColor = null;
}

function generateBool() {
  if(e.methods.randomNum(0, 1) === 0) {
    return false;
  } else {
    return true;
  }
}

function resetGrid() {
  for(i = 0; i < 5; i++) {
    gridMatrix[i].push({
      seat: generateBool(),
      zone: null,
      center: new Transform((e.data.w / 2) + ((i - 2) * (e.data.h / 10.2)), (e.data.h / -2) + (-3 * (e.data.h / 10.1)), 0),
      collider: null,
      face: null
    },
    {
      seat: generateBool(),
      zone: null,
      center: new Transform((e.data.w / 2) + ((i - 2) * (e.data.h / 10.2)), (e.data.h / -2) + (-2 * (e.data.h / 10.1)), 0),
      collider: null,
      face: null
    },
    {
      seat: generateBool(),
      zone: null,
      center: new Transform((e.data.w / 2) + ((i - 2) * (e.data.h / 10.2)), (e.data.h / -2) + (-1 * (e.data.h / 10.1)), 0),
      collider: null,
      face: null
    },
    {
      seat: generateBool(),
      zone: null,
      center: new Transform((e.data.w / 2) + ((i - 2) * (e.data.h / 10.2)), (e.data.h / -2) + (0 * (e.data.h / 10.1)), 0),
      collider: null,
      face: null
    },
    {
      seat: generateBool(),
      zone: null,
      center: new Transform((e.data.w / 2) + ((i - 2) * (e.data.h / 10.2)), (e.data.h / -2) + (1 * (e.data.h / 10.1)), 0),
      collider: null,
      face: null
    },
    {
      seat: generateBool(),
      zone: null,
      center: new Transform((e.data.w / 2) + ((i - 2) * (e.data.h / 10.2)), (e.data.h / -2) + (2 * (e.data.h / 10.1)), 0),
      collider: null,
      face: null
    },
    {
      seat: generateBool(),
      zone: null,
      center: new Transform((e.data.w / 2) + ((i - 2) * (e.data.h / 10.2)), (e.data.h / -2) + (3 * (e.data.h / 10.1)), 0),
      collider: null,
      face: null
  	});
  	for(ii = 0; ii < 7; ii++) {
      let cell = gridMatrix[i][ii];
      cell.collider = new Polygon([
        new Tri([
          new Transform(cell.center.x - (e.data.h / 20), cell.center.y + (e.data.h / 20), 0),
          new Transform(cell.center.x + (e.data.h / 20), cell.center.y + (e.data.h / 20), 0),
          new Transform(cell.center.x - (e.data.h / 20), cell.center.y - (e.data.h / 20), 0)
        ], 3),
        new Tri([
          new Transform(cell.center.x + (e.data.h / 20), cell.center.y + (e.data.h / 20), 0),
          new Transform(cell.center.x + (e.data.h / 20), cell.center.y - (e.data.h / 20), 0),
          new Transform(cell.center.x - (e.data.h / 20), cell.center.y - (e.data.h / 20), 0)
        ], 3)
      ], false);
      cell.face = new Polygon([
        new Tri([
          new Transform(cell.center.x, cell.center.y, 0),
          new Transform(cell.center.x - (e.data.h / 42), cell.center.y + (e.data.h / 21), 0),
          new Transform(cell.center.x + (e.data.h / 42), cell.center.y + (e.data.h / 21), 0)
        ], 3),
        new Tri([
          new Transform(cell.center.x, cell.center.y, 0),
          new Transform(cell.center.x + (e.data.h / 42), cell.center.y + (e.data.h / 21), 0),
          new Transform(cell.center.x + (e.data.h / 21), cell.center.y + (e.data.h / 42), 0)
        ], 3),
        new Tri([
          new Transform(cell.center.x, cell.center.y, 0),
          new Transform(cell.center.x + (e.data.h / 21), cell.center.y + (e.data.h / 42), 0),
          new Transform(cell.center.x + (e.data.h / 21), cell.center.y - (e.data.h / 42), 0)
        ], 3),
        new Tri([
          new Transform(cell.center.x, cell.center.y, 0),
          new Transform(cell.center.x + (e.data.h / 21), cell.center.y - (e.data.h / 42), 0),
          new Transform(cell.center.x + (e.data.h / 42), cell.center.y - (e.data.h / 21), 0)
        ], 3),
        new Tri([
          new Transform(cell.center.x, cell.center.y, 0),
          new Transform(cell.center.x + (e.data.h / 42), cell.center.y - (e.data.h / 21), 0),
          new Transform(cell.center.x - (e.data.h / 42), cell.center.y - (e.data.h / 21), 0)
        ], 3),
        new Tri([
          new Transform(cell.center.x, cell.center.y, 0),
          new Transform(cell.center.x - (e.data.h / 42), cell.center.y - (e.data.h / 21), 0),
          new Transform(cell.center.x - (e.data.h / 21), cell.center.y - (e.data.h / 42), 0)
        ], 3),
        new Tri([
          new Transform(cell.center.x, cell.center.y, 0),
          new Transform(cell.center.x - (e.data.h / 21), cell.center.y - (e.data.h / 42), 0),
          new Transform(cell.center.x - (e.data.h / 21), cell.center.y + (e.data.h / 42), 0)
        ], 3),
        new Tri([
          new Transform(cell.center.x, cell.center.y, 0),
          new Transform(cell.center.x - (e.data.h / 21), cell.center.y + (e.data.h / 42), 0),
          new Transform(cell.center.x - (e.data.h / 42), cell.center.y + (e.data.h / 21), 0)
        ], 3),
      ], false);
    }
  }
}

resetGrid();

function fullClick() {
  if(e.methods.detectCollision(e.data.mouse.absolute, null, new Transform((e.data.w / 2) - (e.data.h / 7), (e.data.h / -8.2), 0), buttonCollider) && gameState === "playing") {
    reset();
  }
  if(e.methods.detectCollision(e.data.mouse.absolute, null, new Transform((e.data.w / 2), (e.data.h / -8.2), 0), buttonCollider)) {
    if(gameState === "helpScreen") {
      gameState = "playing";
    } else {
      gameState = "helpScreen";
    }
  }
  if(e.methods.detectCollision(e.data.mouse.absolute, null, new Transform((e.data.w / 2) + (e.data.h / 7), (e.data.h / -8.2), 0), buttonCollider)) {
    if(gameState === "infoPage") {
      gameState = "playing";
    } else {
      gameState = "infoPage";
    }
  }
  if(e.methods.detectCollision(e.data.mouse.absolute, null, new Transform(0, 0, 0), colorColliders[0])) {
    selectedColor = "#ff0000";
    for(i = 0; i < 5; i++) {
      for(ii = 0; ii < 7; ii++) {
        if(gridMatrix[i][ii].zone === "#ff0000") {
          gridMatrix[i][ii].zone = null;
        }
      }
    }
  }
  if(e.methods.detectCollision(e.data.mouse.absolute, null, new Transform(0, 0, 0), colorColliders[1])) {
    selectedColor = "#ff9900";
    for(i = 0; i < 5; i++) {
      for(ii = 0; ii < 7; ii++) {
        if(gridMatrix[i][ii].zone === "#ff9900") {
          gridMatrix[i][ii].zone = null;
        }
      }
    }
  }
  if(e.methods.detectCollision(e.data.mouse.absolute, null, new Transform(0, 0, 0), colorColliders[2])) {
    selectedColor = "#ffff00";
    for(i = 0; i < 5; i++) {
      for(ii = 0; ii < 7; ii++) {
        if(gridMatrix[i][ii].zone === "#ffff00") {
          gridMatrix[i][ii].zone = null;
        }
      }
    }
  }
  if(e.methods.detectCollision(e.data.mouse.absolute, null, new Transform(0, 0, 0), colorColliders[3])) {
    selectedColor = "#00ff00";
    for(i = 0; i < 5; i++) {
      for(ii = 0; ii < 7; ii++) {
        if(gridMatrix[i][ii].zone === "#00ff00") {
          gridMatrix[i][ii].zone = null;
        }
      }
    }
  }
  if(e.methods.detectCollision(e.data.mouse.absolute, null, new Transform(0, 0, 0), colorColliders[4])) {
    selectedColor = "#1155cc";
    for(i = 0; i < 5; i++) {
      for(ii = 0; ii < 7; ii++) {
        if(gridMatrix[i][ii].zone === "#1155cc") {
          gridMatrix[i][ii].zone = null;
        }
      }
    }
  }
  if(e.methods.detectCollision(e.data.mouse.absolute, null, new Transform(0, 0, 0), colorColliders[5])) {
    selectedColor = "#9900ff";
    for(i = 0; i < 5; i++) {
      for(ii = 0; ii < 7; ii++) {
        if(gridMatrix[i][ii].zone === "#9900ff") {
          gridMatrix[i][ii].zone = null;
        }
      }
    }
  }
  if(e.methods.detectCollision(e.data.mouse.absolute, null, new Transform(0, 0, 0), colorColliders[6])) {
    selectedColor = "#ff00ff";
    for(i = 0; i < 5; i++) {
      for(ii = 0; ii < 7; ii++) {
        if(gridMatrix[i][ii].zone === "#ff00ff") {
          gridMatrix[i][ii].zone = null;
        }
      }
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
      if(cell.zone !== null) {
        e.methods.renderPolygon(new Transform(0, 0, 0), cell.face, new FillRenderer(cell.zone, null, 1, 0), null);
      }
    }
  }
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
  for(i = 0; i < winPoints; i++) {
    if(i < 4) {
      e.methods.renderImage(new Transform(((e.data.w / 2) - (e.data.h / 10)) + (i * (e.data.h / 10)), ((e.data.h / 15) - e.data.h), 0), images.plus);
    }
  }
	if(gameState === "playing") {
	  e.methods.renderImage(new Transform((e.data.w / 2) - (e.data.h / 7), (e.data.h / -8.2), 0), images.refresh);
	  e.methods.renderImage(new Transform((e.data.w / 2), (e.data.h / -8.2), 0), images.help);
	  e.methods.renderImage(new Transform((e.data.w / 2) + (e.data.h / 7), (e.data.h / -8.2), 0), images.info);
	  if(selectedColor !== null) {
      let index = 0;
      switch(selectedColor) {
        case "#ff0000":
          index = 0;
          break;
        case "#ff9900":
          index = 1;
          break;
        case "#ffff00":
          index = 2;
          break;
        case "#00ff00":
          index = 3;
          break;
        case "#1155cc":
          index = 4;
          break;
        case "#9900ff":
          index = 5;
          break;
        case "#ff00ff":
          index = 6;
          break;
      }
      e.methods.renderPolygon(new Transform(0, 0, 0), colorColliders[index], new FillRenderer("black", null, 0.1, 0), null);
    }
  	if(e.data.mouse.clicking) {
      for(i = 0; i < 5; i++) {
        for(ii = 0; ii < 7; ii++) {
          let cell = gridMatrix[i][ii];
          if(e.methods.detectCollision(e.data.mouse.absolute, null, new Transform(0, 0, 0), cell.collider) && selectedColor !== null) {
            dragging = true;
            if(cell.zone !== null && cell.zone !== selectedColor) {
              for(a = 0; a < 5; a++) {
                for(aa = 0; aa < 7; aa++) {
                  if(gridMatrix[a][aa].zone === cell.zone && !((a === i) && (aa === ii))) {
                    gridMatrix[a][aa].zone = null;
                  }
                }
              }
            }
            cell.zone = selectedColor;
        	}
        }
      }
  	} else {
      if(dragging) {
        dragging = false;
        let total = 0;
        for(i = 0; i < 5; i++) {
          for(ii = 0; ii < 7; ii++) {
            if(gridMatrix[i][ii].zone === selectedColor) {
              total++;
            }
          }
        }
        if(total !== 5) {
          for(i = 0; i < 5; i++) {
            for(ii = 0; ii < 7; ii++) {
              if(gridMatrix[i][ii].zone === selectedColor) {
                gridMatrix[i][ii].zone = null;
              }
            }
          }
        }
				if(total === 5) {
        	selectedColor = null;
				}
      }
  	}
    winPoints = 0;
    for(a = 0; a < 7; a++) {
      let color = null;
      let total = 0;
      switch(a) {
        case 0:
          color = "#ff0000";
          break;
        case 1:
          color = "#ff9900";
          break;
        case 2:
          color = "#ffff00";
          break;
        case 3:
          color = "#00ff00";
          break;
        case 4:
          color = "#1155cc";
          break;
        case 5:
          color = "#9900ff";
          break;
        case 6:
          color = "#ff00ff";
          break;
      }
      for(i = 0; i < 5; i++) {
        for(ii = 0; ii < 7; ii++) {
          if(gridMatrix[i][ii].zone === color && gridMatrix[i][ii].seat) {
            total++;
          }
        }
      }
      if(total > 2) {
        winPoints++;
      }
    }
    gridFilled = true;
    for(i = 0; i < 5; i++) {
      for(ii = 0; ii < 7; ii++) {
        if(gridMatrix[i][ii].zone === null) {
          gridFilled = false;
        }
      }
    }
    if(winPoints > 3 && gridFilled) {
      gameState = "winScreen";
    }
	} else if(gameState === "winScreen") {
	  e.methods.renderImage(new Transform(e.data.w / 2, e.data.h / -2, 0), images.winScreen);
	} else if(gameState === "helpScreen") {
	  e.methods.renderImage(new Transform((e.data.w / 2), (e.data.h / -8.2), 0), images.close);
	  e.methods.renderImage(new Transform(e.data.w / 2, e.data.h / -2, 0), images.helpPage);
	} else if(gameState === "infoPage") {
	  e.methods.renderImage(new Transform((e.data.w / 2) + (e.data.h / 7), (e.data.h / -8.2), 0), images.close);
	  e.methods.renderImage(new Transform(e.data.w / 2, e.data.h / -2, 0), images.infoPage);
	  e.methods.renderText(new Transform((e.data.w / 2) - 40, e.data.h * -0.7, 0), new Text("Trebuchet MS", "Version " + version, 18, 0, 0, true, false), new FillRenderer("black", null, 1, 0));
	}
}
