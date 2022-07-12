var visor = document.getElementById('visor');
var valores1 = '';
var valores2 = '';
var operacao = '';

function adicionar(valor) {
	switch (valor) {
		case 'C':
			document.getElementById('visor').innerHTML = '';
			valores1 = '';
			valores2 = '';
			operacao = '';
			break;
	
		case '+':
		if (valores1.length == 0) {
				visor.innerHTML = 'Digite um número primeiro';
			} else if ((operacao.indexOf('*') == -1
				&& operacao.indexOf('/') == -1
				&& operacao.indexOf('-') == -1
				&& operacao.indexOf('+') == -1)) {
				visor.innerHTML = '+';
				operacao = '+';
			} else {
				visor.innerHTML = '+';
			}
				break
	
		case '/':
		if (valores1.length == 0) {
				visor.innerHTML = 'Digite um número primeiro';
			} else if ((operacao.indexOf('*') == -1
				&& operacao.indexOf('/') == -1
				&& operacao.indexOf('-') == -1
				&& operacao.indexOf('+') == -1)) {
				visor.innerHTML = '/';
				operacao = '/';				
			} 

			else {
				visor.innerHTML = '/';
			}
				break
	
		case '-':
			if (valores1.length == 0) {
				visor.innerHTML = 'Digite um número primeiro';
			} else if ((operacao.indexOf('*') == -1
				&& operacao.indexOf('/') == -1
				&& operacao.indexOf('-') == -1
				&& operacao.indexOf('+') == -1)) {
				visor.innerHTML = '-';
				operacao = '-';
			} else {
				visor.innerHTML = '-';
			}
				break
	
		case '*':
			if (valores1.length == 0) {
				visor.innerHTML = 'Digite um número primeiro';
			} else if ((operacao.indexOf('*') == -1
				&& operacao.indexOf('/') == -1
				&& operacao.indexOf('-') == -1
				&& operacao.indexOf('+') == -1)) {
				visor.innerHTML = '*';
				operacao = '*';
			} else {
				visor.innerHTML = '*';
			}
				break

		case '0':
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
		case '.':
			if ((operacao.indexOf('*') == -1
				&& operacao.indexOf('/') == -1
				&& operacao.indexOf('-') == -1
				&& operacao.indexOf('+') == -1)) {
				visor.innerHTML += valor;
				valores1 += valor;
			} else {
				visor.innerHTML += valor;
				valores2 += valor;
			}
				break

		case '=':
			switch(operacao) {
				case '*':
					resultado = parseFloat(valores1) * parseFloat(valores2);
					visor.innerHTML = resultado;
					break

				case '/':
					resultado = parseFloat(valores1) / parseFloat(valores2);
					visor.innerHTML = resultado;
					break

				case '-':
					resultado = parseFloat(valores1) - parseFloat(valores2);
					visor.innerHTML = resultado;
					break


				case '+':
					resultado = parseFloat(valores1) + parseFloat(valores2);
					visor.innerHTML = resultado;
					break
			}
	}
}


