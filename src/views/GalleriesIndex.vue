<template>
  <div id="galleries-index">
    <!-- <section class="exibition-area section-gap" id="exhibitions">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="menu-content pb-60 col-lg-10">
            <div class="title text-center">
              <h1 class="mb-10">Ongoing Exhibitions from the scratch</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="active-exibition-carusel owl-carousel owl-theme owl-loaded">
            <div class="single-exibition item">
              <img src="img/e1.jpg" alt="" />
              <ul class="tags">
                <li><a href="#">Travel</a></li>
                <li><a href="#">Life style</a></li>
              </ul>
              <a href="#"><h4>Portable latest blog for women</h4></a>
              <p>Lorem ipsum dolor sit amet, consec teturadip isicing elit, sed do eiusmod tempor.</p>
              <h6 class="date">31st January, 2018</h6>
            </div>

            <div class="single-exibition item">
              <img src="img/e2.jpg" alt="" />
              <ul class="tags">
                <li><a href="#">Travel</a></li>
                <li><a href="#">Life style</a></li>
              </ul>
              <a href="#"><h4>Portable latest blog for women</h4></a>
              <p>Lorem ipsum dolor sit amet, consec teturadip isicing elit, sed do eiusmod tempor.</p>
              <h6 class="date">31st January, 2018</h6>
            </div>

            <div class="single-exibition item">
              <img src="img/e3.jpg" alt="" />
              <ul class="tags">
                <li><a href="#">Travel</a></li>
                <li><a href="#">Life style</a></li>
              </ul>
              <a href="#"><h4>Portable latest blog for women</h4></a>
              <p>Lorem ipsum dolor sit amet, consec teturadip isicing elit, sed do eiusmod tempor.</p>
              <h6 class="date">31st January, 2018</h6>
            </div>
            <div class="single-exibition item">
              <img src="img/e1.jpg" alt="" />
              <ul class="tags">
                <li><a href="#">Travel</a></li>
                <li><a href="#">Life style</a></li>
              </ul>
              <a href="#"><h4>Portable latest blog for women</h4></a>
              <p>Lorem ipsum dolor sit amet, consec teturadip isicing elit, sed do eiusmod tempor.</p>
              <h6 class="date">31st January, 2018</h6>
            </div>

            <div class="single-exibition item">
              <img class="img-fluid" src="img/e3.jpg" alt="" />
              <ul class="tags">
                <li><a href="#">Travel</a></li>
                <li><a href="#">Life style</a></li>
              </ul>
              <a href="#"><h4>Portable latest blog for women</h4></a>
              <p>Lorem ipsum dolor sit amet, consec teturadip isicing elit, sed do eiusmod tempor.</p>
              <h6 class="date">31st January, 2018</h6>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- <section class="exibition-area section-gap" id="exhibitions" v-for="user in users" :key="user.id">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="menu-content pb-60 col-lg-10">
            <div class="title text-center">
              <h1 class="mb-10">Ongoing Exhibitions from the scratch</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="active-exibition-carusel" :key="componentKey">
            <div class="single-exibition item" v-for="image in user.images" :key="image.id">
              <img :src="image.image_url" alt="" />
              <ul class="tags">
                <li><a href="#">Travel</a></li>
                <li><a href="#">Life style</a></li>
              </ul>
              <a href="#"><h4>Portable latest blog for women</h4></a>
              <p>Lorem ipsum dolor sit amet, consec teturadip isicing elit, sed do eiusmod tempor.</p>
              <h6 class="date">31st January, 2018</h6>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <br />
    <h1 class="center">Browse galleries</h1>
    <br />
    <div class="center" v-for="user in users" :key="user.id">
      <router-link v-bind:to="`/galleries/${user.id}`">
        <h2>{{ user.username }}'s gallery</h2>
      </router-link>
      <br />
      <br />
      <VueSlickCarousel v-bind="settings">
        <div v-for="image in user.images" :key="image.id">
          <img :src="image.image_url" alt="" />
        </div>
      </VueSlickCarousel>
      <br />
      <br />
    </div>
    <!-- <section class="exibition-area section-gap" id="exhibitions" v-for="user in users" :key="user.id">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="menu-content pb-60 col-lg-10">
            <div class="title text-center">
              <h1 class="mb-10">{{ user.username }}'s Gallery</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="active-exibition-carusel">
            <div class="single-exibition item" v-for="image in user.images" :key="image.id">
              <img :src="image.image_url" alt="" />
              <ul class="tags">
                <li><a href="#">Travel</a></li>
                <li><a href="#">Life style</a></li>
              </ul>
              <a href="#"><h4>Portable latest blog for women</h4></a>
              <p>Lorem ipsum dolor sit amet, consec teturadip isicing elit, sed do eiusmod tempor.</p>
              <h6 class="date">31st January, 2018</h6>
            </div>

            <div class="single-exibition item">
              <img src="img/e2.jpg" alt="" />
              <ul class="tags">
                <li><a href="#">Travel</a></li>
                <li><a href="#">Life style</a></li>
              </ul>
              <a href="#"><h4>Portable latest blog for women</h4></a>
              <p>Lorem ipsum dolor sit amet, consec teturadip isicing elit, sed do eiusmod tempor.</p>
              <h6 class="date">31st January, 2018</h6>
            </div>

            <div class="single-exibition item">
              <img src="img/e3.jpg" alt="" />
              <ul class="tags">
                <li><a href="#">Travel</a></li>
                <li><a href="#">Life style</a></li>
              </ul>
              <a href="#"><h4>Portable latest blog for women</h4></a>
              <p>Lorem ipsum dolor sit amet, consec teturadip isicing elit, sed do eiusmod tempor.</p>
              <h6 class="date">31st January, 2018</h6>
            </div>
            <div class="single-exibition item">
              <img src="img/e1.jpg" alt="" />
              <ul class="tags">
                <li><a href="#">Travel</a></li>
                <li><a href="#">Life style</a></li>
              </ul>
              <a href="#"><h4>Portable latest blog for women</h4></a>
              <p>Lorem ipsum dolor sit amet, consec teturadip isicing elit, sed do eiusmod tempor.</p>
              <h6 class="date">31st January, 2018</h6>
            </div>

            <div class="single-exibition item">
              <img src="img/e2.jpg" alt="" />
              <ul class="tags">
                <li><a href="#">Travel</a></li>
                <li><a href="#">Life style</a></li>
              </ul>
              <a href="#"><h4>Portable latest blog for women</h4></a>
              <p>Lorem ipsum dolor sit amet, consec teturadip isicing elit, sed do eiusmod tempor.</p>
              <h6 class="date">31st January, 2018</h6>
            </div>

            <div class="single-exibition item">
              <img src="img/e3.jpg" alt="" />
              <ul class="tags">
                <li><a href="#">Travel</a></li>
                <li><a href="#">Life style</a></li>
              </ul>
              <a href="#"><h4>Portable latest blog for women</h4></a>
              <p>Lorem ipsum dolor sit amet, consec teturadip isicing elit, sed do eiusmod tempor.</p>
              <h6 class="date">31st January, 2018</h6>
            </div>
            <div class="single-exibition item">
              <img src="img/e1.jpg" alt="" />
              <ul class="tags">
                <li><a href="#">Travel</a></li>
                <li><a href="#">Life style</a></li>
              </ul>
              <a href="#"><h4>Portable latest blog for women</h4></a>
              <p>Lorem ipsum dolor sit amet, consec teturadip isicing elit, sed do eiusmod tempor.</p>
              <h6 class="date">31st January, 2018</h6>
            </div>

            <div class="single-exibition item">
              <img class="img-fluid" src="img/e2.jpg" alt="" />
              <ul class="tags">
                <li><a href="#">Travel</a></li>
                <li><a href="#">Life style</a></li>
              </ul>
              <a href="#"><h4>Portable latest blog for women</h4></a>
              <p>Lorem ipsum dolor sit amet, consec teturadip isicing elit, sed do eiusmod tempor.</p>
              <h6 class="date">31st January, 2018</h6>
            </div>

            <div class="single-exibition item">
              <img class="img-fluid" src="img/e3.jpg" alt="" />
              <ul class="tags">
                <li><a href="#">Travel</a></li>
                <li><a href="#">Life style</a></li>
              </ul>
              <a href="#"><h4>Portable latest blog for women</h4></a>
              <p>Lorem ipsum dolor sit amet, consec teturadip isicing elit, sed do eiusmod tempor.</p>
              <h6 class="date">31st January, 2018</h6>
            </div> 
   </div>
        </div>
      </div>
    </section> -->
    <!-- <div v-for="user in users" :key="user.id">
      <router-link v-bind:to="`/galleries/${user.id}`">
        <h2>{{ user.username }}'s Gallery</h2>
      </router-link>
      <div v-for="image in user.images" :key="image.id">
        <router-link v-bind:to="`/images/${image.id}`">
          <img :src="image.image_url" />
        </router-link>
      </div>
    </div> -->
  </div>
</template>
<style>
.center {
  margin: auto;
  text-align: center;
  width: 50%;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 40%;
}
</style>
<script>
import axios from "axios";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data: function () {
    return {
      users: [],
      images: [],
      componentKey: 0,
      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
    };
  },
  created: function () {
    this.indexUsers();
  },
  updated: function () {
    this.forceRerender;
  },
  methods: {
    indexUsers: function () {
      axios.get("/users").then((response) => {
        console.log(response.data);
        this.users = response.data;
        this.images = response.data.images;
      });
    },
    forceRerender() {
      this.componentKey += 1;
    },
  },
};
</script>
