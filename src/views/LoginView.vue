<template>
  <div class="form" >
    <h2>Inicio sesion</h2>
    <input type="email" v-model="email" placeholder="correo electrónico" />
    <input type="password" v-model="password" placeholder="contraseña" />
    <button  class="btnLogin" @click="signIn">Iniciar sesión</button>
    <RouterLink to="/registro">no tienes una cuenta? registrate</RouterLink>
  </div>
</template>

<script>
import { auth, signInWithEmailAndPassword } from "../auth.js";

export default {
  name: "LoginView",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async signIn() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        const redirectpath = this.$route.query.redirect || "/"; // constante para redirigir a la ruta de redireccionamiento "home" al iniciar sesion

        this.$router.push(redirectpath);// redirigir a la ruta de redireccionamiento
      } catch (error) {
        console.error("Error al iniciar sesión:", error.message);
      }
    },
  },
};

</script>
