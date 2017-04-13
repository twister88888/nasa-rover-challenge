const size = 5;
const fontWidth = 36;
const fontHeight = 42;
const width = 400 / size;
const initialLeft = ( width - fontWidth ) / 2;
const initialTop = ( width - fontHeight ) / 2;

//L => girar 90º a la izquierda
//R => girar 90ª a la derecha
//M => avanzar un


function setup ( x = 0, y = 4, o = 'O', move = ['R','M'/*,'M','M','R','M','R','M','M'*/] ) {
  if ( x <= size && y <= size ) {
    var icon = '';
    let arrowLeft = 'fa fa-arrow-left';
    let arrowRight = 'fa fa-arrow-right';
    let arrowUp = 'fa fa-arrow-up';
    let arrowDown = 'fa fa-arrow-down';

    if ( o === 'N' ) {
      icon = arrowUp;
    } else if ( o === 'S') {
      icon = arrowDown;
    } else if ( o === 'E') {
      icon = arrowRight;
    } else if ( o === 'O') {
      icon = arrowLeft;
    }

    // Initial position
  /*  document.getElementById("rover").style.left = initialLeft + x * width + "px";
    document.getElementById("rover").style.top = initialTop + y * width + "px";
    document.getElementById("arrow").className = icon;*/

    // Moving rover
    if ( move ) {
      for ( i = 0; i < move.length; i++ ) {
        if ( move[i] === "M" ) {
          document.getElementById("rover").style.left = initialLeft + x * width + "px";
          document.getElementById("rover").style.top = initialTop + y * width + "px";
          
          document.getElementById("arrow").className = icon;
        } else if ( move[i] === "L" ) {
          document.getElementById("arrow").className = arrowLeft;
        } else {
          document.getElementById("arrow").className = arrowRight;
        }
      }
    }



  } else {
    alert ('Error de limitación. Máximo permitido: ' + size + 'x' + size);
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
    document.write("<div id='rover' style='left: " + initialLeft + "px; top: " + initialTop + "px;'><i id='arrow' class='fa fa-arrow-down' aria-hidden='true'></i></div>")
  document.write("</div>");
}
