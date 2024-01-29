# Aplicación Web en React con API de Rappi

Esta es una aplicación web en React que utiliza la API de Rappi para autenticar a los usuarios. Sigue los siguientes pasos para montar la aplicación y probarla.

## Requisitos Previos

Antes de comenzar, asegúrate de tener Node.js y npm instalados en tu sistema. Puedes descargarlos desde [nodejs.org](https://nodejs.org/).

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/miusarname/loginCampus.git
   cd loginCampus
   ```

2. Instala las dependencias del proyecto ejecutando el siguiente comando:

   ```bash
   npm install
   ```

## Configuración de la API de Rappi

Para que la aplicación funcione correctamente, debes configurar la API de Rappi. Sigue estos pasos:

1. Clona el repositorio de la API de Rappi en tu máquina local:

   ```bash
   git clone https://github.com/diegomanga26/rappi_campus.git
   cd rappi_campus
   ```

2. Sigue las instrucciones en el README del repositorio de la API de Rappi para configurar y ejecutar la API en tu entorno local.

## Uso

La aplicación se encuentra en el archivo `LogIn.js` y utiliza un formulario de inicio de sesión que se comunica con la API de Rappi para autenticar a los usuarios. Aquí hay una descripción del código:

```jsx
import React from "react";
import InsertU from "./insertUsername";
import InserPassword from "./inserPassword";
import LogInBtn from "./logInBtn";

export default function LogIn() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let username = e.target[0].value;
          let passwords = e.target[1].value;
          fetch("http://localhost:5524/doorAuth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept-Version": "3.0.0",
            },
            body: JSON.stringify({
              email: username,
              password: passwords,
            }),
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              console.log(data);
              window.location.href = '/welcome';
            })
            .catch((error) => {
             alert('Contraseña o usuario incorrecto');
            });
        }}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <InsertU />
        <InserPassword />
        <LogInBtn />
      </form>
    </div>
  );
}
```

Para probar la aplicación, simplemente ejecuta:

```bash
npm run dev
```

Esto iniciará la aplicación en modo de desarrollo. Abre tu navegador web y ve a `http://localhost:3000` para ver la aplicación en acción.

