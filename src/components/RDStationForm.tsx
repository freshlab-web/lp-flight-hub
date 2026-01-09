import { useEffect } from 'react';

declare global {
  interface Window {
    RDStationForms: any;
  }
}

const RDStationForm = () => {
  useEffect(() => {
    const scriptSrc = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
    const scriptId = "rd-station-forms-script";

    const initializeForm = () => {
       if (window.RDStationForms) {
        new window.RDStationForms(
          'formulario-hardware-profissional-para-operacoes-criticas-1d3cb9f2202f8667d104', 
          'UA-61384495-1'
        ).createForm();
      }
    };

    if (document.getElementById(scriptId)) {
      initializeForm();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = scriptSrc;
    script.async = true;
    script.onload = initializeForm;
    document.body.appendChild(script);

  }, []);

  return (
    <div role="main" id="formulario-hardware-profissional-para-operacoes-criticas-1d3cb9f2202f8667d104" />
  );
};

export default RDStationForm;
