const size = 4;
const fontWidth = 36;
const fontHeight = 42;
const width = 400 / size;
const initialLeft = (width - fontWidth) / 2;
const initialTop = (width - fontHeight) / 2;


function setup (x,y,o,move) {
  if (x <= size && y <= size) {
    var icon = '';

    document.getElementById("rover").style.left = initialLeft + x * width + "px";
    document.getElementById("rover").style.top = initialTop + y * width + "px";

    if ( o === 'N' ) {
      icon = 'fa fa-arrow-up';
    } else if ( o === 'S') {
      icon = 'fa fa-arrow-down';
    } else if ( o === 'E') {
      icon = 'fa fa-arrow-right';
    } else if ( o === 'O') {
      icon = 'fa fa-arrow-left'; }

    document.getElementById("arrow").className = icon;

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
