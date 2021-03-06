// Grid
const size = 5;
const fontWidth = 36;
const fontHeight = 42;
const width = 400 / size;

// Declaration
const initialLeft = (width - fontWidth) / 2;
const initialTop = (width - fontHeight) / 2;
var currentX = 0;
var currentY = 0;
var currentOrientation = '';
var classArrow = '';

// Arrow
const arrowLeft = 'fa fa-arrow-left';
const arrowRight = 'fa fa-arrow-right';
const arrowUp = 'fa fa-arrow-up';
const arrowDown = 'fa fa-arrow-down';

// Setup user
const userOrientation = 'R';
const userX = 0;
const userY = 0;
const move = ['M','R','M','R','M','R','M','M'];
var i = 0;

function print (currentX, currentY, classArrow) {
  document.getElementById("rover").style.left = currentX + "px";
  document.getElementById("rover").style.top = currentY + "px";
  document.getElementById("arrow").className = classArrow;
}

function setup (x = userX, y = userY, o = userOrientation) {
  if (x <= size && y <= size) {
    classArrow = getClassArrow(userOrientation);
    currentOrientation = userOrientation;
    currentX = initialLeft + x * width;
    currentY = initialTop + y * width;

    // Initial position
    print(currentX, currentY, classArrow);
  }
  else {
    alert('Error de limitación. Máximo permitido: ' + size + 'x' + size);
  }
}

function moving () {
  if (move) {
    if (move[i] === "M") {
      if (currentOrientation === 'N') {
        currentY = currentY - 1 * width;
      }
      else if (currentOrientation === 'S') {
        currentY = currentY + 1 * width;
      }
      else if (currentOrientation === 'L') {
        currentX = currentX - 1 * width;
      }
      else {
        currentX = currentX + 1 * width;
      }
    }
    else if (move[i] === "L") {
      if (currentOrientation === 'N' || currentOrientation === 'S') {
        classArrow = arrowLeft;
        currentOrientation = 'L';
      }
      else if (currentOrientation === 'L') {
        classArrow = arrowDown;
        currentOrientation = 'S';
      }
      else {
        classArrow = arrowUp;
        currentOrientation = 'N';
      }
    }
    else {
        if (currentOrientation === 'N' || currentOrientation === 'S') {
          classArrow = arrowRight;
          currentOrientation = 'R';
        }
        else if (currentOrientation === 'L') {
          classArrow = arrowUp;
          currentOrientation = 'N';
        }
        else {
          classArrow = arrowDown;
          currentOrientation = 'S';
        }
    }

    if (i++ == move.length) {
      return;
    }

    print(currentX, currentY, classArrow);
    setTimeout(moving, 1500);
  }
}

function createGrid () {
  //const size = prompt ('Dime el tamaño del tablero:');
  document.write("<div id='Chessfield'>")
    for (x = 0; x < size; x++) {
      document.write("<div class='row'>");
      for (y = 0; y < size; y++) {
        document.write("<div class='col' style='width: " + width + "px;height: " + width + "px;'></div>");
      }
      document.write('</div>');
    }
    document.write("<div id='rover' style='left: " + initialLeft + "px; top: " + initialTop + "px;'><i id='arrow' class='' aria-hidden='true'></i></div>")
  document.write("</div>");
}

function getClassArrow (userOrientation) {
  if (userOrientation === 'N') {
    classArrow = arrowUp;
  }
  else if (userOrientation === 'S') {
    classArrow = arrowDown;
  }
  else if (userOrientation === 'R') {
    classArrow = arrowRight;
  }
  else if (userOrientation === 'L') {
    classArrow = arrowLeft;
  }

  return classArrow;
}
