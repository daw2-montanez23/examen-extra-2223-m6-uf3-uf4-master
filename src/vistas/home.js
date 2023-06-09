import { HomeComponent } from '../componentes/homeComponent.js';


document.querySelector('home').innerHTML = HomeComponent.template
HomeComponent.script()
console.log("funciona")
