<template>
    <div class="form">
      <h2>Registro</h2>
      <input type="email" v-model="email" placeholder="correo electrónico" />
      <input type="password" v-model="password" placeholder="contraseña" />
      <button class="btnRegistro"  @click="register">Registrarse</button>
    </div>
  </template>
  
  <script>
  import { auth, createUserWithEmailAndPassword } from "../auth.js";
  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      async register() {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
          this.email = "";
          this.password = "";
          console.log("Usuario registrado: ", userCredential);
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  
  