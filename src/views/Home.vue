<template>
  <div class="home">
    <!-- Start upcoming-event Area -->

    <!-- End upcoming-event Area -->
    <!-- Start upcoming-event Area -->
    <section class="upcoming-event-area section-gap" id="events">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="menu-content pb-60 col-lg-10">
            <div class="title text-center">
              <h1 class="mb-10">Your Gallery</h1>
              <h4>A.k.a all your cool art</h4>
            </div>
          </div>
        </div>
        <div class="card-deck">
          <div class="col-lg-6" v-for="(gallery, index) in galleries" :key="gallery.id">
            <div class="card">
              <img class="card-img-top" :src="images[index].image_url" alt="" />
              <div class="card-body">
                <h5 class="card-title">{{ images[index].title }}</h5>
                <h5 class="card-title">{{ images[index].artist }}</h5>
                <p class="card-text">
                  <strong>Your notes:</strong>
                  {{ gallery.notes }}
                </p>
                <p class="card-text" v-if="gallery.seen == true">You have seen this art in person.</p>
                <p class="card-text" v-else>
                  You have
                  <strong>not</strong>
                  seen this art in person.
                </p>
                <p class="card-text">
                  <small class="text-muted">at {{ images[index].museum }}</small>
                </p>
                <router-link v-bind:to="`/yourgallery/${gallery.id}`">
                  <button>Edit</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="card-deck">
          <div v-for="(gallery, index) in galleries" :key="gallery.id">
            <div class="card">
              <img class="card-img-top" :src="images[index].image_url" alt="" />
              <h4>{{ images[index].title }}</h4>
              <h6>
                <span>{{ images[index].artist }}</span>
                at {{ images[index].museum }}
              </h6>
              <p>
                <strong>Your notes:</strong>
                {{ gallery.notes }}
              </p>
              <p v-if="gallery.seen == true">You have seen this art in person.</p>
              <p v-else>
                You have
                <strong>not</strong>
                seen this art in person.
              </p>
             <a href="#" class="primary-btn text-uppercase">View Details</a> -->
        <!-- <div class="col-lg-6 event-right">
            <div class="single-events">
              <a href="#"><h4>Event on the rock solid carbon</h4></a>
              <h6>
                <span>21st February</span>
                at Central government museum
              </h6>
              <p>
                inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards
                especially.
              </p>
              <a href="#" class="primary-btn text-uppercase">View Details</a>
              <img class="img-fluid" src="img/u2.jpg" alt="" />
            </div>
            <div class="single-events">
              <a href="#"><h4>Event on the rock solid carbon</h4></a>
              <h6>
                <span>21st February</span>
                at Central government museum
              </h6>
              <p>
                inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards
                especially.
              </p>
              <a href="#" class="primary-btn text-uppercase">View Details</a>
              <img class="img-fluid" src="img/u4.jpg" alt="" />
            </div> -->
      </div>
    </section>
    <!-- End upcoming-event Area -->
    <!-- <h2>{{ user }}</h2> -->
    <!-- <div v-for="image in user.images" :key="image.id"> -->
    <!-- <div v-for="index in indexes" :key="index.id">
      <img :src="index.image" />
      <h2>{{ index.notes }}</h2>
    </div> -->
    <!-- <div v-for="(gallery, index) in galleries" :key="gallery.id">
      <img :src="images[index].image_url" />
      <h1 class="center">{{ images[index].title }}</h1>
      <h2 class="center">{{ images[index].artist }}</h2>
      <h2 class="center">{{ images[index].museum }}</h2>
      <p class="center">
        <strong>Your notes:</strong>
        {{ gallery.notes }}
      </p>
      <p class="center" v-if="gallery.seen == true">You have seen this art in person.</p>
      <p class="center" v-else>
        You have
        <strong>not</strong>
        seen this art in person.
      </p>
    </div> -->
  </div>
  <!-- </div> -->
</template>

<style>
.card {
  padding-top: 10px;
  padding-bottom: 10px;
}
/* .event-left {
  padding-right: 5 px;
}
.event-right {
  padding-left: 5 px;
}
.col-lg-6 {
  padding-left: 10 px;
  padding-right: 10 px;
} */
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      user: [],
      images: [],
      galleries: [],
      indices: [],
      array: [],
    };
  },
  created: function () {
    this.userHome();
  },
  computed: {
    indexes() {
      return this.indices.map((index, i) => {
        return {
          image: this.images[index],
          notes: this.galleries[i].notes,
        };
      });
    },
  },
  methods: {
    userHome: function () {
      var user_id = this.$parent.getUserId();
      // console.log(parent.getUserId());
      axios
        .get("/users/" + user_id)
        .then((response) => {
          console.log(response.data);
          this.user = response.data;
          this.images = response.data.images;
          this.images.sort((x, y) => {
            x.id - y.id;
          });
          this.galleries = response.data.galleries;
          this.galleries.sort(function (a, b) {
            return a.image_id - b.image_id;
          });
          console.log(this.galleries);
          console.log(this.images);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // newArray: function () {
    // //   // this.array = this.indices.map((index) => {});
    // },
  },
};
</script>
