<template>
    <nav>
      <router-link v-if="isLoggedIn" to="/">Home</router-link>
      <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
      <router-link v-if="!isLoggedIn" to="/registro">Registro</router-link>
      <router-link v-if="isLoggedIn" to="/about">About</router-link>
      <button class="btnLogout" v-if="isLoggedIn" @click="logout">Cerrar sesion</button>
    </nav>
    <main>
      <router-view />
    </main>
</template>

<script>
import { auth, signOut, onAuthStateChanged } from "./auth.js";
export default {
  data() {
    return {
      isLoggedIn: false, // Variable para controlar el estado de inicio de sesión
    };
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
      // this.isLoggedIn = user ? true : false;
      //this.isLoggedIn = !!user;
    });
  },

  methods: {
    async logout() {
      try {
      await signOut(auth);
      this.$router.push("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
    },
  },
};
</script>
