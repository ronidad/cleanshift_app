<template>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Clean.Shift</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- normalize css -->
    <!-- <link rel = "stylesheet" href = "resources/normalize.css"> -->
    <!-- font -->
    <!-- <link rel = "stylesheet" href = "resources/font.css"> -->
    <!-- font awesome cdn -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
      crossorigin="anonymous"
    />
    <!-- magnific popup -->
    <link
      rel="stylesheet"
      href="resources/Magnific-Popup-master/dist/magnific-popup.css"
    />
    <!-- owl carousel -->
    <link
      rel="stylesheet"
      href="resources/OwlCarousel2-2.3.4/dist/assets/owl.carousel.css"
    />
    <link
      rel="stylesheet"
      href="resources/OwlCarousel2-2.3.4/dist/assets/owl.theme.default.css"
    />
    <!-- animate css -->
    <!-- <link rel = "stylesheet" href = "resources/animate.css-main/animate.css"> -->
    <!-- custom (main) css -->
    <!-- <link rel="stylesheet" href="css/main.css"> -->
  </head>

  <!-- header -->
  <header class="header" id="intro">
    <nav class="navbar">
      <div class="container">
        <div class="brand-and-toggler">
          <a href="/" class="navbar-brand"> Clean<span></span>Shift </a>
          <button type="button" class="navbar-toggler" id="navbar-toggler">
            <i class="fas fa-bars"></i>
          </button>
        </div>

        <div class="navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#intro" class="nav-link">intro</a>
            </li>
            <li class="nav-item">
              <a href="#feature" class="nav-link">feature</a>
            </li>
            <li class="nav-item">
              <a href="#team" class="nav-link">team</a>
            </li>
            <li class="nav-item">
              <a href="#pricing" class="nav-link">pricing</a>
            </li>
            <li class="nav-item">
              <a href="#testimonial" class="nav-link">testimonial</a>
            </li>
            <li class="nav-item">
              <a href="dashboard" class="nav-link">Admin</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- <div class="bodies"> -->

    <div class="hero-div center container">
      <h1>we collect litter in your compound</h1>
      <p class="animate__animated animate__fadeInUp animate__slow">
        Give us the work to clean your compound. We collect weekly on saturdays
        throught the courts using our trucks
      </p>

      <div class="hero-btns animate__animated animate__fadeInUp animate__slow">
        <button type="button" class="btn-trans">learn more</button>

        <button type="button" class="btn-white">Manage</button>
      </div>
    </div>
<!-- </div> -->
  </header>
</template>

<style scoped>
:root {
  --mount-meadow: #1bbc9c;
  --white-smoke: #f0f0f0;
  --night-rider: #343434;
  --black: #191b17;
  --transition: all 0.5s ease-in-out;
}
* {
  font-family: "Hind Siliguri", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  color: var(--black);
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  text-rendering: optimizeLegibility;
  scroll-behavior: smooth;
}
.bodies {
  background: #1bbdee;
  margin-left: -130px !important;
  margin-top: 150px;
  position: fixed;
  background: transparent;
}
img {
  width: 100%;
}
a {
  text-decoration: none;
  color: var(--black);
}
li {
  list-style-type: none;
}
button {
  cursor: pointer;
  outline: 0;
  background: transparent;
}
.container {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 1rem;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0.6rem 0;
  line-height: 1.25;
  font-weight: 400;
  text-transform: capitalize;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Headers */
.header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(../../assets/garbage.jpg);
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: rgb(15, 179, 165);
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  margin-left: -220px;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgb(107, 241, 168);
  z-index: 999;
}
.brand-and-toggler {
  font-size: 1.65rem;
  padding: 0.8rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-brand {
  font-weight: 500;
  color: var(--night-rider);
}
.navbar-brand span {
  color: var(--mount-meadow);
}
.navbar-toggler {
  border: none;
  color: var(--mount-meadow);
}
.navbar-nav {
  margin: 0.2rem 0 0.6rem 0;
}
.nav-item {
  padding: 0.6rem 0;
}
.nav-link {
  text-transform: uppercase;
  font-size: 0.95rem;
  letter-spacing: 1.5px;
  font-weight: 400;
  opacity: 0.65;
  transition: var(--transition);
}
.nav-link:hover {
  color: var(--mount-meadow) !important;
}
.navbar-collapse {
  display: none;
}
.hero-div {
  flex: 1;
  flex-direction: column;
  text-align: center;
}
.hero-div h1 {
  font-size: 2.55rem;
  padding-bottom: 0.4rem;
}
.hero-div p {
  color: var(--white-smoke);
  font-size: 1.05rem;
  letter-spacing: 3px;
}
.hero-btns {
  margin-top: 2.8rem;
}
.hero-btns button {
  border: 3.5px solid #fff;
  border-radius: 2rem;
  padding: 0.8rem 2rem;
  text-transform: uppercase;
}
.btn-trans {
  color: #fff;
  transition: var(--transition);
  display: none;
}
.btn-trans:hover {
  background: var(--mount-meadow);
  border-color: var(--mount-meadow);
}
.btn-white {
  background: #fff;
  color: var(--night-rider);
  transition: var(--transition);
}
.btn-white:hover {
  background: transparent;
  color: #fff;
}

@media screen and (min-width: 992px) {
  .navbar {
    background: transparent;
    margin-top: 1.4rem;
    height: 60px;
  }
  .navbar .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .navbar-brand {
    color: var(--white-smoke);
    font-size: 2rem;
  }
  .navbar-toggler {
    display: none;
  }
  .navbar-collapse {
    display: block !important;
  }
  .navbar-nav {
    display: flex;
    margin: 0;
  }
  .nav-item {
    margin-left: 1.8rem;
  }
  .nav-link {
    color: var(--white-smoke);
  }
  .hero-div h1 {
    font-size: 3.8rem;
  }
  .btn-trans {
    display: inline-block;
    margin-right: 0.8rem;
  }
  .navbar {
    -webkit-box-shadow: 0 2px 5px 0 rgba(207, 205, 207, 0.3);
    -moz-box-shadow: 0 2px 5px 0 rgba(207, 205, 207, 0.3);
    box-shadow: 0 2px 5px 0 rgba(207, 205, 207, 0.3);
    margin-top: 0;
    background: rgb(63, 79, 82);
  }
  .navbar .navbar-brand {
    color: var(--night-rider);
  }
  .navbar .nav-link {
    color: var(--night-rider);
  }
}
</style>
