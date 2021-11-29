alertify.defaults = {
    notifier:{  
        delay: 3,
        position: 'top-center'
    }
};

var form = document.getElementById("form");
form.addEventListener('submit', (evento) => {
	evento.preventDefault();	
});

let codigoArea = document.getElementById('codigoArea');
let prefijo = document.getElementById('prefijo');
let sufijo = document.getElementById('sufijo');
let clave = document.getElementById('clave');
let orden = document.getElementById('orden');

let codigoAreaRegExp = new RegExp('^[0-9]{0,3}$');
let prefijoRegExp = new RegExp('^[2-9][0-9][0-9]$');
let sufijoRegExp = new RegExp('^[0-9]{4,4}$');
let claveRegExp = new RegExp('^(?=.+[0-9])(?=.+[a-zA-Z])([0-9a-zA-Z]){6,6}$');
let ordenRegExp = new RegExp('^(?!.[\\s])((Comprobar)|(Depositar)|(Pagar factura))$');

let codigoAreaValid = false;
let prefijoValid = false;
let sufijoValid = false;
let claveValid = false;
let ordenValid = false;


function validarInput() {
	let codigoAreaValue = codigoArea.value;
	let prefijoValue = prefijo.value;
	let sufijoValue = sufijo.value;
	let claveValue = clave.value;
	let ordenValue = orden.value;

	codigoAreaValid = codigoAreaRegExp.test(codigoAreaValue) ? true : false;
	prefijoValid = prefijoRegExp.test(prefijoValue) ? true : false;
	sufijoValid = sufijoRegExp.test(sufijoValue) ? true : false;
	claveValid = claveRegExp.test(claveValue) ? true : false;
	ordenValid = ordenRegExp.test(ordenValue) ? true : false;

	if(codigoAreaValid && prefijoValid && sufijoValid && claveValid && ordenValid){
		alertify.success('Correcto!');
	}else {
		if(!codigoAreaValid){
			alertify.error('Codigo de area invalido.');
		}
		if(!prefijoValid){
			alertify.error('Prefijo invalido.');
		}
		if(!sufijoValid){
			alertify.error('Sufijo invalido.');
		}
		if(!claveValid){
			alertify.error('Clave invalida.');
		}
		if(!ordenValid){
			alertify.error('Orden invalida.');
		}
	}
}