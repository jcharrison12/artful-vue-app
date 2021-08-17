<template>
  <div id="app">
    <header id="header">
      <div class="container header-top">
        <div class="row">
          <div class="col-6 top-head-left">
            <ul>
              <li><a href="#">Visit Us</a></li>
              <li><a href="#">Buy Ticket</a></li>
            </ul>
          </div>
          <div class="col-6 top-head-right">
            <ul>
              <li>
                <a href="#"><i class="fa fa-facebook"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-dribbble"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-behance"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div class="container">
        <div class="row align-items-center justify-content-between d-flex">
          <!-- <div id="logo">
            <a href="index.html"><img src="img/logo.png" alt="" title="" /></a>
          </div> -->
          <nav id="nav-menu-container">
            <ul class="nav-menu">
              <li class="menu-active"><a href="/">Home</a></li>
              <li><a href="/galleries">Galleries</a></li>
              <li><a href="/images">Images</a></li>
              <li v-if="!isLoggedIn()"><a href="/signup">Signup</a></li>
              <li v-if="!isLoggedIn()"><a href="/login">Login</a></li>
              <li v-if="isLoggedIn()"><a href="/logout">Logout</a></li>
              <li class="menu-has-children">
                <a href="">Pages</a>
                <ul>
                  <li><a href="blog-single.html">Blog Single</a></li>
                  <li><a href="category.html">Category</a></li>
                  <li><a href="elements.html">Elements</a></li>
                </ul>
              </li>
            </ul>
          </nav>
          <!-- #nav-menu-container -->
        </div>
      </div>
    </header>
    <!-- start banner Area -->
    <section class="banner-area relative" id="home">
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row fullscreen d-flex align-items-center justify-content-center">
          <div class="banner-content col-lg-8">
            <h1 class="text-white">Artful: An Art Appreciation App</h1>
            <p class="pt-20 pb-20 text-white">Save your favorite pieces of art in your very own personal gallery!</p>
            <a href="#" class="primary-btn text-uppercase">Get Started</a>
          </div>
        </div>
      </div>
    </section>
    <!-- End banner Area -->
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link v-if="!isLoggedIn()" to="/signup">Signup</router-link>
      |
      <router-link v-if="!isLoggedIn()" to="/login">Login</router-link>
      |
      <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link>
      |
      <router-link to="/images">Images</router-link>
      |
      <router-link v-if="isLoggedIn()" to="/galleries">Galleries</router-link>
    </div>
    <router-view />
  </div>
</template>

<style></style>
<script>
export default {
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
