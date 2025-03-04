// Librarys
import React from "react"
import Axios from "axios"
import Swal from "sweetalert2"
import { useForm } from "react-hook-form"

// Module pets
const PetRegisterModule = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        const url = "http://localhost:3000/pet/register"

        // Alert 
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

        // Call function
        sendData(data)

        // Send data with method post
        function sendData(data) {
            Axios.post(url, data)
                .then(() => {
                    Swal.fire({
                        title: "Mascota Registrada",
                        text: "La mascota se registró exitosamente",
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
                        text: JSON.parse(JSON.stringify(err)).message === "Network Error" ? "Intente más tarde" : JSON.parse(JSON.stringify(err)).message,
                        timer: 5000
                    })
                })
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Registro de Mascota</h1>

            <span>
                <p>Nombre de la mascota</p>
                <input 
                    placeholder="Nombre" 
                    type="text" 
                    {...register("nombre", { required: true })} 
                />
                {errors.nombre && <p>Este campo es requerido</p>}
            </span>

            <span>
                <p>Especie</p>
                <select 
                    {...register("especie", { required: true })}
                >
                    <option value="">Selecciona una especie</option>
                    <option value="perro">Perro</option>
                    <option value="gato">Gato</option>
                    <option value="ave">Ave</option>
                    <option value="otro">Otro</option>
                </select>
                {errors.especie && <p>Este campo es requerido</p>}
            </span>

            <span>
                <p>Raza</p>
                <input 
                    placeholder="Raza" 
                    type="text" 
                    {...register("raza", { required: true })} 
                />
                {errors.raza && <p>Este campo es requerido</p>}
            </span>

            <span>
                <p>Edad (en años)</p>
                <input 
                    placeholder="Edad" 
                    type="number" 
                    {...register("edad", { required: true, min: 0 })} 
                />
                {errors.edad && <p>Este campo es requerido y debe ser mayor o igual a 0</p>}
            </span>

            <span>
                <p>Peso (en kg)</p>
                <input 
                    placeholder="Peso" 
                    type="number" 
                    {...register("peso", { required: true, min: 0 })} 
                />
                {errors.peso && <p>Este campo es requerido y debe ser mayor o igual a 0</p>}
            </span>

            <span>
                <p>Nombre del propietario</p>
                <input 
                    placeholder="Nombre del propietario" 
                    type="text" 
                    {...register("nom_prop", { required: true })} 
                />
                {errors.nom_prop && <p>Este campo es requerido</p>}
            </span>

            <span>
                <p>Sexo</p>
                <select 
                    {...register("sexo", { required: true })}
                >
                    <option value="">Selecciona el sexo</option>
                    <option value="macho">Macho</option>
                    <option value="hembra">Hembra</option>
                </select>
                {errors.sexo && <p>Este campo es requerido</p>}
            </span>

            <div className="card-btns">
                <button type="submit">Registrar Mascota</button>
            </div>
        </form>
    )
}

export default PetRegisterModule