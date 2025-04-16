<template>
  <div class="wrapper">
    <div class="main_content">
      <div class="header">
        <nav>
          <p>Welcome to cleanshift management system</p>

          <!-- Hamburger Icon -->
          <div class="menu-toggle" @click="toggleMenu">
            <i class="fas fa-ellipsis-v"></i>
          </div>

          <!-- Navigation Links -->
          <ul :class="{ show: menuOpen }">
            <li v-if="isLoggedIn">
              <router-link to="/profile">Profile</router-link>
            </li>
            <li v-if="isLoggedIn">
              <router-link to="/courts">Courts</router-link>
            </li>
            <li v-if="isLoggedIn">
              <router-link to="/clients">Clients</router-link>
            </li>
            <li v-if="isLoggedIn">
              <router-link to="/payments">Payments</router-link>
            </li>
            <li v-if="isLoggedIn">
              <router-link to="/mpesa/payments">Mpesa</router-link>
            </li>
            <li v-else>
              <router-link to="/login">Login</router-link>
            </li>
            <li v-if="isLoggedIn">
              <router-link to="/" @click="handleLogout">Logout</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="main_content">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      user: "",
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    handleLogout() {
      this.$store.dispatch("clearToken");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.$router.push("/");
    },
  },
  mounted() {
    setInterval(() => {
      this.handleLogout();
    }, 3600000);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Josefin Sans", sans-serif;
}

body {
  background: #fdfbfb;
}

.wrapper {
  display: flex;
  flex-direction: column;
}

.main_content {
  width: 100%;
  padding: 20px;
}

.header {
  background: rgba(249, 251, 252, 0.973);
  color: #717171;
  border-bottom: 1px solid #e0e4e8;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

nav ul {
  display: flex;
  gap: 15px;
  align-items: center;
  transition: all 0.3s ease;
}

nav ul li {
  display: block;
}

nav a {
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: #333;
}

.menu-toggle {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  nav ul {
    display: none;
    position: absolute;
    top: 3.5rem;
    right: 0;
    background: white;
    flex-direction: column;
    width: 200px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    border-radius: 6px;
    z-index: 1000;
  }

  nav ul.show {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }
}

table,
th,
td {
  border: 1px solid;
  padding: 7px;
}

table {
  width: 90%;
  border-collapse: collapse;
  color: #717171;
}
</style>
