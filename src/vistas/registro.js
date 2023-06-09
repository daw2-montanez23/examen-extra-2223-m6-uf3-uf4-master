import { header } from "../componentes/header"
import login from "./login"

export default{
    template: `<div class="pt-5">
                <h1 class="w-100 text-center">Registro</h1>
                <form action="registro" class="form p-4 border shadow bordered mt-5 mx-auto" style="width: 400px;">
                <label for="email" class="mt-2 form-label">User: </label>
                <input  id="inputUsuario" type="text" class="form-control" placeholder="usuario@mail.com">

                <label for="pass" class="mt-2 form-label">Contraseña: </label>
                <input id="inputPassword" type="password" class="form-control">

                <input type="text" class="mt-4 w-100 btn btn-success" value="Registro" id="enviar">
                </form>
            </div>`,
            
}