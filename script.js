const size = 5;
const fontWidth = 36;
const fontHeight = 42;
const width = 400 / size;

//Initial
const initialLeft = ( width - fontWidth ) / 2;
const initialTop = ( width - fontHeight ) / 2;
const originalOrientation = 'R';
const originalX = 0;
const originalY = 1;

//Values
var currentArrow = ''; //Add constant
var currentX = 0;
var currentY = 0;

const arrowLeft = 'fa fa-arrow-left';
const arrowRight = 'fa fa-arrow-right';
const arrowUp = 'fa fa-arrow-up';
const arrowDown = 'fa fa-arrow-down';


function getClassArrow ( newOrientation ) {
  var newIcon = ''; //Add constant

  if ( newOrientation === 'N' ) {
    newIcon = arrowUp;
  } else if ( newOrientation === 'S') {
    newIcon = arrowDown;
  } else if ( newOrientation === 'R') {
    newIcon = arrowRight;
  } else if ( newOrientation === 'L') {
    newIcon = arrowLeft;
  }

  return newIcon;
}

function setup ( x = originalX, y = originalY, o = originalOrientation ) {
  if ( x <= size && y <= size ) {
    let originalArrow = getClassArrow(originalOrientation);
    currentArrow = originalOrientation;
    currentX = initialLeft + x * width;
    currentY = initialTop + y * width;

    // Initial position
    document.getElementById("rover").style.left = currentX + "px";
    document.getElementById("rover").style.top = currentY + "px";
    document.getElementById("arrow").className = originalArrow;

  } else {
    alert ('Error de limitación. Máximo permitido: ' + size + 'x' + size);
  }
}

function move ( move = ['L'/*,'M','M','R','M','R','M','M'*/] ) {
  // Moving rover
  if ( move ) {
    let newArrow = "";

    for ( i = 0; i < move.length; i++ ) {
      if ( move[i] === "M" ) {
        if ( currentArrow === 'N') {
          currentY = currentY - 1 * width;
          document.getElementById("rover").style.top = currentY + "px";
        } else if ( currentArrow === 'S' ) {
          currentY = currentY + 1 * width;
          document.getElementById("rover").style.top = currentY + "px";
        } else if ( currentArrow === 'L' ) {
          currentX = currentX - 1 * width;
          document.getElementById("rover").style.left = currentX + "px";
        } else {
          currentX = currentX + 1 * width;
          document.getElementById("rover").style.left = currentX + "px";
        }
        //Crear función de pintado

      } else if ( move[i] === "L" ) {

        if ( currentArrow === 'N' || currentArrow === 'S' ) {
          newArrow = arrowLeft;
        }
        else if ( currentArrow === 'L') {
          newArrow = arrowDown;
        }
        else {
          newArrow = arrowUp;
        }

        document.getElementById("arrow").className = newArrow;

      } else {

          if ( currentArrow === 'N' || currentArrow === 'S' ) {
            newArrow = arrowRight;
          }
          else if ( currentArrow === 'L') {
            newArrow = arrowUp;
          }
          else {
            newArrow = arrowDown;
          }

          document.getElementById("arrow").className = newArrow;
      }
    }
  }
}

function createGrid () {
  //const size = prompt ('Dime el tamaño del tablero:');
  document.write("<div id='Chessfield'>")
    for ( x = 0; x < size; x++ ) {
      document.write("<div class='row'>");
      for ( y = 0; y < size; y++ ) {
        document.write("<div class='col' style='width: " + width + "px;height: " + width + "px;'></div>");
      }
      document.write('</div>');
    }
    document.write("<div id='rover' style='left: " + initialLeft + "px; top: " + initialTop + "px;'><i id='arrow' class='' aria-hidden='true'></i></div>")
  document.write("</div>");
}
