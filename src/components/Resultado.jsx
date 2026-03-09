//desestruturando o resultado para pegar o valor
const tabela = ({ resultado }) => {
  const valor = parseFloat(resultado);
console.log(valor);
  if (valor < 18.5) {
    return (
      <>
        <td>abaixo do peso</td>
        <td>abaixo de 18.5</td>
      </>
    );
  } else if (valor >= 18.5 && valor < 25) {
    return (
      <>
        <td>peso normal</td>
        <td>entre 18.5 e 24.9</td>
      </>
    );
  } else if (valor >= 25 && valor < 30) {
    return (
      <>
        <td>sobrepeso</td>
        <td>entre 25 e 29.9</td>
      </>
    );
  } else {
    return (
      <>
        <td>obesidade grau 1</td>
        <td>maior ou igual a 40</td>
      </>
    );
  }
};

const Resultado = ({resultado}) => {
  return (
    <div> 
        <div className="resultado">
            <h2>
                Seu Imc é de:<span className="img-span">{resultado}</span>
            </h2>
        </div>
        <table className="tabela">
            <thead className="tabelaHeader">
                <tr>
                    <th>Classificacao</th>
                    <th>IMC</th>
                </tr>
            </thead>
          <tbody className="tabelaBody">
            <tr>
                <tabela resultado={resultado} />  
            </tr>
          </tbody>  
        </table>
    </div>
  );
};

export default Resultado;