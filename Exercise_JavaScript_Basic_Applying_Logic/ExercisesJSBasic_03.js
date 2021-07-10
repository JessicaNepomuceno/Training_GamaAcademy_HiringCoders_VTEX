/*| Exemplo 03 | Descrição |
| `Média entre números` |
 Crie uma variavel e atribua como valor 
 uma operacao de média entre 5 números inteiros e positivos. |*/

let resultado = average(3);

function average(inicialNum) {
  let ListNum = [];
  let quant = 5;

  if (inicialNum < 0)
    return 'Não é um número positivo';

  for (let i = 0; i < quant; i++) {
    ListNum[i] = inicialNum + i;
    //console.log(ListNum);
  }

  let soma = 0;

  for (let i = 0; i < quant; i++) {
    soma = (soma + (i + inicialNum));
    //console.log(soma);
  }

  let resultado = soma / quant;
  return console.log(`A média entre os cinco números gerados, iniciando em ${inicialNum} é: ${resultado}`);
}

