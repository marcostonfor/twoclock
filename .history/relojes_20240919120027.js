
import { conf12h } from './archivoConfiguracion.js';
import { estilosPersonales } from './archivoEstilos.js';
function laHora() {
	const Reloj = class {
		constructor(formato, salida) {
			this.ahora = new Date();
			this.reloj = {
				hora: this.ahora.getHours(),
				minuto: this.ahora.getMinutes(),
				segundo: this.ahora.getSeconds()
			};
			this._formato = formato;
			this._salida = salida;
		}

		get formato() {
			return this._formato;
		}

		get salida() {
			return this._salida;
		}

		set formato(horaActual) {
			this._formato = horaActual;
		}

		set salida(output) {
			this._salida = output;
		}

		anyadirCero(formatear) {
			return formatear <= 9 ? "0" + formatear : formatear;
		}

		_12h() {
			let horas = this.reloj.hora % 12;
			if (horas === 0) horas = 12;
			const amOpm = this.reloj.hora >= 12 ? "pm" : "am";
			this._formato = `<strong class="comunAdos">${this.anyadirCero(horas)}:${this.anyadirCero(this.reloj.minuto)}:${this.anyadirCero(this.reloj.segundo)}<sup>${amOpm}</sup></strong>`;
			return this._formato;
		}

		_24h() {
			this._formato = `<strong class="comunAdos">${this.anyadirCero(this.reloj.hora)}:${this.anyadirCero(this.reloj.minuto)}:${this.anyadirCero(this.reloj.segundo)}</strong>`;
			return this._formato;
		}
	};

	const laSalida = () => {
		const salida = document.getElementById("reloj12h");
		const salida24h = document.getElementById("reloj24h");
		const doceHoras = new Reloj();
	//	salida.innerHTML = doceHoras._12h();
	//	salida24h.innerHTML = doceHoras._24h();

 // Verifica si existe el elemento #reloj12h
 if (salida) {
	salida.innerHTML = doceHoras._12h();	
	conf12h(); // Llamada a la función conf12h() si el elemento existe
}

// Verifica si existe el elemento #reloj24h
if (salida24h) {
	salida24h.innerHTML = doceHoras._24h();
}


	function estiloscss(estilosPersonales) {
		
		const estils = document.createElement('STYLE');
		estils.textContent = `
* {
    box-sizing: border-box;
}

.comunAdos {
    text-align: center;
    width: fit-content;
    border: 0.1vw solid black;
    font-size: 13pt;
    padding: 0.5vh 1vw;
    box-shadow: inset 0 0 10px 10px dimgray;
    font-family: monospace, sans serif;
    color: black;
    text-shadow: 0.1vh 0.1vw 1px orange;
    border-radius: 0.5vw;
}


sup {
    margin-left: 0.5vw !important;
}
	`;
		if (estilosPersonales) {
			document.getElementById('reloj12h').classList.remove('comunAdos')
			estils.textContent += estilosPersonales;
		}


		document.head.appendChild(estils);
}

	// Llamada a la función con estilos adicionales
	estiloscss(estilosPersonales);


	};

// estiloscss();
return setInterval(laSalida, 1000);
}
laHora();