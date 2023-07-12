import React, { useState } from "react";

const ServiceList = ({ setSelectedService, setShowSeguroDesemprego, setShowCalculoFerias }) => {
  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowSeguroDesemprego(service === "Cálculo de Seguro Desemprego");
    setShowCalculoFerias(service === "Cálculo de Férias");
  };

  return (
    <div className="content-list-service1">
       <h2>Escolha o Serviço desejado</h2>
      <ul className="service-list">
        <li className="list-content list-content-01" onClick={() => handleServiceClick("Cálculo de Seguro Desemprego")}>
          Cálculo de Seguro Desemprego
        </li>
        <li className="list-content list-content-02" onClick={() => handleServiceClick("Cálculo de Férias")}>
          Cálculo de Férias
        </li>
        <li className="list-content list-content-03" onClick={() => handleServiceClick("Cálculo de FGTS")}>
          Cálculo de FGTS
        </li>
        <li className="list-content list-content-04" onClick={() => handleServiceClick("Cálculo de Recisão")}>
          Cálculo de Recisão
        </li>
        <li className="list-content list-content-05" onClick={() => handleServiceClick("Cálculo de IRRF")}>
          Cálculo de IRRF
        </li>
        <li className="list-content list-content-06" onClick={() => handleServiceClick("Cálculo de INSS")}>
          Cálculo de INSS
        </li>
      </ul>
    </div>
  );
};
export { ServiceList }