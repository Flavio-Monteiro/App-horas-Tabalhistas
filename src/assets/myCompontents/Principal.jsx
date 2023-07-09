import React, { useState } from "react";
import { Header } from "./Header";
import { Subheader } from "./Subheader ";
import { Section } from "./Section ";
import { Subsection } from "./Subsection ";
import { Footer } from "./Footer ";
import { ServiceList } from "./ServiceList ";
const Principal = () => {
    const [selectedService, setSelectedService] = useState("");
    const [showSeguroDesemprego, setShowSeguroDesemprego] = useState(false);
    const [showCalculoFerias, setShowCalculoFerias] = useState(false);


    return (
        <div className="parent">
            <Header />
            <Subheader />
            <ServiceList
                setSelectedService={setSelectedService}
                setShowSeguroDesemprego={setShowSeguroDesemprego}
                setShowCalculoFerias={setShowCalculoFerias}
            />
            <Section
                selectedService={selectedService}
                showSeguroDesemprego={showSeguroDesemprego}
                showCalculoFerias={showCalculoFerias}
            />
            <Subsection />
            <div className="content-list-services2">
                <ul className="service-list">
                    <li>Cálculo de Salário</li>
                    <li>Cálculo de Horas Hextras</li>
                </ul>
            </div>
            <Footer />
        </div>
    );
};
export { Principal }