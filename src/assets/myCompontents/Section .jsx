import React from "react";

const Section = ({ selectedService, showSeguroDesemprego, showCalculoFerias }) => {
  const renderContent = () => {
    if (selectedService === "Cálculo de Seguro Desemprego" && showSeguroDesemprego) {
      return (
        <div className="seguro_desemprego">
          <div className="container-calculos">
            <p>Valor do salário do último mês:</p>
            <input type="number" name="ultimoMes" id="ultimoMes" placeholder="R$" />
          </div>
          <div className="container-calculos">
            <p>Valor do salário do penúltimo mês:</p>
            <input type="number" name="penultimoMes" id="penultimoMes" placeholder="R$" />
          </div>
          <div className="container-calculos">
            <p>Valor do salário do antepenúltimo mês:</p>
            <input type="number" name="antepenultimoMes" id="antepenultimoMes" placeholder="R$" />
          </div>
          <div className="container-calculos">
            <p>Quantidade de meses trabalhados:</p>
            <input type="number" name="mesesTrabalhados" id="mesesTrabalhados" placeholder="Mês(es)" />
          </div>
          <div className="container-calculos">
            <p>Quantas vezes solicitou esse benefício?</p>
            <input type="text" name="solicitacoesBeneficio" id="solicitacoesBeneficio" placeholder="S/N" />
          </div>
          <input type="button" value="Calcular" id="calcular"/>
        </div>
      );
    } else if (selectedService === "Cálculo de Férias" && showCalculoFerias) {
      return (
        <div className="calculo_ferias">
          <div className="container-calculos">
            <p>Salário bruto:</p>
            <input type="number" name="salarioBruto" id="salarioBruto" placeholder="R$" />
          </div>
          <div className="container-calculos">
            <p>Média de hora extra (Opcional):</p>
            <input type="number" name="mediaHora" id="mediaHora" placeholder="R$" />
          </div>
          <div className="container-calculos">
            <p>Número de dependentes:</p>
            <input type="number" name="dependentes" id="dependentes" placeholder="R$" />
          </div>
          <div className="container-calculos">
            <p>Dias de férias:</p>
            <input type="number" name="quantFerias" id="quantFerias" placeholder="Mês(es)" />
          </div>
          <div className="container-calculos">
            <p>Abono pecuniário (Vende 1/3)</p>
            <input type="text" name="abonoPec" id="abonoPec" placeholder="S/N" />
          </div>
          <div className="container-calculos">
            <p>Adiantar 1ª parcela 13º:</p>
            <input type="text" name="adiantar13" id="adiantar13" placeholder="S/N" />
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="section">
      {selectedService && <p>Serviço selecionado: <br /> {selectedService}</p>}
      {renderContent()}
    </div>
  );
};

export { Section };
