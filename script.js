const size = 5;
const fontWidth = 36;
const fontHeight = 42;
const width = 400 / size;
const initialLeft = ( width - fontWidth ) / 2;
const initialTop = ( width - fontHeight ) / 2;
const originalOrientation = 'L';

var currentArrow = ''; //Add constant
const arrowLeft = 'fa fa-arrow-left';
const arrowRight = 'fa fa-arrow-right';
const arrowUp = 'fa fa-arrow-up';
const arrowDown = 'fa fa-arrow-down';
//L => girar 90º a la izquierda
//R => girar 90ª a la derecha
//M => avanzar un

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

function setup ( x = 0, y = 1, o = originalOrientation ) {
  if ( x <= size && y <= size ) {
    let originalArrow = getClassArrow(originalOrientation);
    currentArrow = originalOrientation;

    // Initial position
    document.getElementById("rover").style.left = initialLeft + x * width + "px";
    document.getElementById("rover").style.top = initialTop + y * width + "px";
    document.getElementById("arrow").className = originalArrow;

  } else {
    alert ('Error de limitación. Máximo permitido: ' + size + 'x' + size);
  }
}

function move ( move = ['R'/*,'M','M','R','M','R','M','M'*/] ) {
  // Moving rover
  if ( move ) {
    let newArrow = "";

    for ( i = 0; i < move.length; i++ ) {
      if ( move[i] === "M" ) {
        /* console.log('Seguir hacia delante');
        document.getElementById("rover").style.left = initialLeft + x * width + "px";
        document.getElementById("rover").style.top = initialTop + y * width + "px";

        document.getElementById("arrow").className = icon;*/
      } else if ( move[i] === "L" ) {
        /*console.log('Mover a la izquierda');
        document.getElementById("arrow").className = arrowLeft; */
      } else {
          //console.log('Mover a la derecha');

          if ( move[i] === 'N' || move[i] === 'S' ) {
            newArrow = arrowRight;
          }
          else if ( move[i] === 'L') {
            newArrow = arrowUp;
          }
          else {
            newArrow = arrowDown;
          }
      }

      document.getElementById("arrow").className = newArrow;
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
