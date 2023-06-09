console.log('hola');

import { header } from "./componentes/header";
import { HomeComponent } from "./componentes/homeComponent";
import { series } from "./datos/series";


console.log(series);

document.querySelector('header').innerHTML = header.template
header.script()
document.querySelector('main').innerHTML = HomeComponent.template
HomeComponent.script()
