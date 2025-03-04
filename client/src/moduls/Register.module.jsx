// Librarys 
import React from "react"
import Axios from "axios"
import Swal from "sweetalert2"
import { useForm } from "react-hook-form"

// Module
const RegisterModule = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    // Send data 
    const onSubmit = (data) => {
        const url = "http://localhost:3000/user/register"

        // Load alert
        Swal.fire({
            title: "Loading",
            imageUrl: "https://github.com/DICREY/Multimedia-Mascotas/blob/main/imgs/102.jpg?raw=true",
            imageWidth: 220,
            imageHeight: 200,
            imageAlt: "Custom image",
            timer: 4000,
            theme: "dark",
            showConfirmButton: false
        })
        sendData(data)

        function sendData(data) {
            Axios.post(url, data)
                .then(() => {
                    Swal.fire({
                        title: "Registrado",
                        text: "Te registraste exitosamente",
                        icon: "success",
                        timer: 5000,
                        theme: "dark",
                        imageUrl: "https://github.com/DICREY/Multimedia-Mascotas/blob/main/imgs/201.jpg?raw=true",
                        imageWidth: 220,
                        imageHeight: 200,
                        imageAlt: "Custom image"
                    })
                })
                .catch((err) => {
                    Swal.fire({
                        title: "Oops...",
                        theme: "dark",
                        icon: "error",
                        text: JSON.parse(JSON.stringify(err)).message === "Network Error" ? "Intente mas tarde" : JSON.parse(JSON.stringify(err)).message,
                        timer: 5000
                    })
                })
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Registro</h1>
            <span>
                <p>Nombre</p>
                <input 
                    placeholder="Nombre" 
                    type="text" 
                    {...register("nom", { 
                        required: {
                            value: true,
                            message: "Este campo es requerido"
                        },
                        minLength:{
                            value: 3,
                            message: "Debe contener 3 letras como minimo"
                        },
                        maxLength: {
                            value: 40,
                            message: "No debe tener mas de 40"
                        }
                    })} 
                />
            {errors.nom && <p color="red"><strong>{errors.nom.message}</strong></p>}
            </span>
            <span>
                <p>Apellido</p>
                <input 
                    placeholder="Apellido" 
                    type="text" 
                    {...register("ape", { required: {
                        value: true,
                        message: "Este campo es requerido"
                        },
                        minLength:{
                            value: 3,
                            message: "Debe contener 3 letras como minimo"
                        },
                        maxLength: {
                            value: 40,
                            message: "No debe tener mas de 40"
                        }
                    })} 
                />
                {errors.ape && <p color="red"><strong>{errors.ape.message}</strong></p>}
            </span>
            <span>
                <p>Email</p>
                <input 
                    placeholder="Email" 
                    type="email" 
                    {...register("email", { required: {
                        value: true,
                        message: "Este campo es requerido"
                    }
                     })} 
                />
                {errors.email && <p color="red"><strong>{errors.email.message}</strong></p>}
            </span>
            <span>
                <p>Contraseña</p>
                <input 
                    placeholder="Contraseña" 
                    type="password" 
                    {...register("cont", { required: {
                        value: true,
                        message: "Este campo es requerido"
                    } })} 
                />
                {errors.cont && <p color="red"><strong>{errors.cont.message}</strong></p>}
            </span>
            <span>
                <p>Celular</p>
                <input 
                    placeholder="Celular" 
                    type="tel" 
                    {...register("tel", { required: {
                        value: true,
                        message: "Este campo es requerido"
                    } })} 
                />
                {errors.tel && <p><strong>{errors.tel.message}</strong></p>}
            </span>
            <span>
                <p>Dirección</p>
                <input 
                    placeholder="Dirección" 
                    type="text" 
                    {...register("dir", { required: {
                        value: true,
                        message: "Este campo es requerido"
                    } })} 
                />
                {errors.dir && <p>Este campo es requerido</p>}
            </span>
            <span>
                <p>Tipo de Usuario</p>
                <select 
                    {...register("tipUser", { required:{
                        value: true,
                        message: "Este campo es requerido"
                    } })}
                >
                    <option value="1">Propietario</option>
                    <option value="2">Veterinario</option>
                    <option value="3">Administrador</option>
                </select>
                {errors.tipUser && <p>Este campo es requerido</p>}
            </span>
            <div className="card-btns">
                <button type="submit">Registrar</button>
            </div>
        </form>
    )
}

export default RegisterModule