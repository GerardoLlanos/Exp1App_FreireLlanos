import {browser, element, by} from 'protractor';

describe('Mi prueba', ()=>{
    // Bloque de config
    beforeEach(()=>{
        browser.get("/"); 
        // Lo primero que se hace es ir a la page por defecto
    });

    // Prueba1
    it("El login se muestra por defecto", ()=>{
        expect(element(by.css(".itemitem ion-title")).getText()).toContain("LOGIN");
    });

    // Prueba 2
    it("Muestra la opción de crear una cuenta en caso de que sea necesario", ()=>{
        expect(element(by.css(".registro p")).getText()).toContain("¿No tienes una cuenta? Registrate aquí");
    });
       

    
});