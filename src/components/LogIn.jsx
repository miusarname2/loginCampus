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
             alert('Contraseña o usurio incorrecto');
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
