import login from "../vistas/login"
import registro from "../vistas/registro"
import { HomeComponent } from "./homeComponent"

export const header = {
    template : `
    <div class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <span id="homeComponent" class="navbar-brand mb-0">2223 M6 UF3/UF4 - Examen extraordinaria - Alumnno:Francesc Monañez Rosell</span>
        <form  class="d-flex">
          <input class="form-control me-2" placeholder="email@email.com">
          <button id="login" class="btn btn-outline-success" >Login</button>
          <button id="registro" class="btn btn-link" >Regístrate</button>
        </form>
        
      </div>
    </div>
    `,
    script: async()=>{
      
      document.querySelector('#login').addEventListener("click", (e)=>{
        e.preventDefault()
        document.querySelector('main').innerHTML = login.template
        login.script()
      })

      document.querySelector('#registro').addEventListener("click", (e)=>{
        e.preventDefault()
        document.querySelector('main').innerHTML = registro.template
        registro.script()
      })

      document.querySelector('#homeComponent').addEventListener("click", (e)=>{
        e.preventDefault()
        document.querySelector('main').innerHTML = login.template
        login.script()
      })
    }
}