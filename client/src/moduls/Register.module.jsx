import React,{ useState } from "react";
import Axios from "axios"
import Swal from "sweetalert2"

const RegisterModule = () => {
    const [nom,setNom] = useState("")
    const [ape,setApe] = useState("")
    const [dir,setDir] = useState("")
    const [tel,setTel] = useState("")
    const [tipUser,setTipUser] = useState("")
    const [email,setEmail] = useState("")
    const [cont,setCont] = useState("")

    const add = (event) => {
        event.preventDefault()
        const url = "http://localhost:3000/user/register"
        const data = {
            nom: nom,
            ape: ape,
            dir: dir,
            tel: tel,
            email: email,
            tipUser: tipUser,
            cont: cont
        }

        if(nom === "") {
            Swal.fire({
                title: "Faltan Datos",
                text: "Rellena los campos que te faltan",
                icon: 'error',
            })
        } else {
            Swal.fire({
                title: "Loading",
                imageUrl: "https://github.com/DICREY/Multimedia-Mascotas/blob/main/imgs/102.jpg?raw=true",
                imageWidth: 220,
                imageHeight: 200,
                imageAlt: "Custom image",
                timer: 4000,
                theme: 'dark',
                showConfirmButton: false
            })
            sendData()
        }

        // sendData()

        function sendData() {
            Axios.post(url,data)
            .then(()=> {
                Swal.fire({
                    title: "Registrado",
                    text: "Te registraste exitosamente",
                    icon: "success",
                    timer: 5000,
                    theme: 'dark',
                    imageUrl: "https://github.com/DICREY/Multimedia-Mascotas/blob/main/imgs/201.jpg?raw=true",
                    imageWidth: 220,
                    imageHeight: 200,
                    imageAlt: "Custom image"
                })
            })
            .catch((err) => {
                Swal.fire({
                    title: "Oops...",
                    theme: 'dark',
                    icon: 'error',
                    text: JSON.parse(JSON.stringify(err)).message === "Network Error"?"Intente mas tarde":JSON.parse(JSON.stringify(err)).message,
                    timer: 5000
                })
            })
        }
    }

    return (
        <form>
            <h1>Registro</h1>
            <span>
                <p>Nombre</p>
                <input placeholder="Nombre" type="text" required onChange={e => setNom(e.target.value)} />
            </span>
            <span>
                <p>Apellido</p>
                <input placeholder="Apellido" type="text" required onChange={e => setApe(e.target.value)} />
            </span>
            <span>
                <p>Email</p>
                <input placeholder="Email" type="email" required onChange={e => setEmail(e.target.value)} />
            </span>
            <span>
                <p>Contraseña</p>
                <input placeholder="Contraseña" type="password" required onChange={e => setCont(e.target.value)} />
            </span>
            <span>
                <p>Celular</p>
                <input placeholder="Celular" type="tel" required onChange={e => setTel(e.target.value)} />
            </span>
            <span>
                <p>Dirección</p>
                <input placeholder="Dirección" type="text" required onChange={e => setDir(e.target.value)} />
            </span>
            <span>
                <p>Tipo de Usuario</p>
                <select required onChange={e => setTipUser(e.target.value)}>
                    <option selected value="1">Propietario</option>
                    <option value="2">Veterinario</option>
                    <option value="3">Administrador</option>
                </select>
            </span>
            <div className="card-btns">
                <button type="submit" onClick={() => add(event)}>Registrar</button>
            </div>
        </form>
    )
}

export default RegisterModule