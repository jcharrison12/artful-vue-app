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
              <!-- <li class="menu-has-children">
                <a href="">Pages</a>
                <ul>
                  <li><a href="blog-single.html">Blog Single</a></li>
                  <li><a href="category.html">Category</a></li>
                  <li><a href="elements.html">Elements</a></li>
                </ul>
              </li> -->
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
            <!-- <a href="#" class="primary-btn text-uppercase">Get Started</a> -->
          </div>
        </div>
      </div>
    </section>
    <!-- End banner Area -->
    <!-- <div id="nav">
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
    </div> -->
    <router-view />
    <footer class="footer-area section-gap">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <h6>About Us</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                dolore magna aliqua.
              </p>
              <p class="footer-text">
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                Copyright &copy; 2021
                <!-- <script>
                  document.write(new Date().getFullYear());
                </script> -->
                All rights reserved | This template is made with
                <i class="fa fa-heart-o" aria-hidden="true"></i>
                by
                <a href="https://colorlib.com" target="_blank">Colorlib</a>
                and distributed by
                <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              </p>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <h6>Newsletter</h6>
              <p>Stay update with our latest</p>
              <div class="" id="mc_embed_signup">
                <form
                  target="_blank"
                  novalidate="true"
                  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                  method="get"
                  class="form-inline"
                >
                  <input
                    class="form-control"
                    name="EMAIL"
                    placeholder="Enter Email"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter Email '"
                    required=""
                    type="email"
                  />
                  <button class="click-btn btn btn-default"><span class="lnr lnr-arrow-right"></span></button>
                  <div style="position: absolute; left: -5000px">
                    <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text" />
                  </div>

                  <div class="info"></div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-6 social-widget">
            <div class="single-footer-widget">
              <h6>Follow Us</h6>
              <p>Let us be social</p>
              <div class="footer-social d-flex align-items-center">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-dribbble"></i></a>
                <a href="#"><i class="fa fa-behance"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
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
