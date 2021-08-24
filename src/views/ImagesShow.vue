<template>
  <div class="images-show">
    <div class="card">
      <div class="center">
        <img class="card-img-top" :src="image.image_url" :alt="image.title" />
        <div class="card-body">
          <h2 class="card-text">{{ image.title }}</h2>
          <h3 class="card-text">{{ image.artist }}</h3>
          <h4 class="card-text">{{ image.museum }}</h4>
          <p class="card-text">{{ image.description }}</p>
          <router-link v-bind:to="`/images/${image.id}/edit`">
            <button v-if="$parent.isLoggedIn()" class="genric-btn primary">Add to your Gallery</button>
          </router-link>
          <router-link to="/images"><button class="genric-btn info">Back to all images</button></router-link>
        </div>
      </div>
      <!-- <h2>{{ image.title }}</h2>
      <img :src="image.image_url" :alt="image.title" />
      <h2>{{ image.artist }}</h2>
      <p>{{ image.museum }}</p>
      <p>{{ image.description }}</p> -->

      <!-- <dialog id="galleryNotes">
        <form method="dialog">
          Write a note about this piece of art:
          <textarea v-model="galleryParams.notes"></textarea>
          Have you seen this in person?
          <input type="checkbox" v-model="galleryParams.seen" />
          <button v-on:click="galleryCreate()">Submit to gallery</button>
          <h2 v-if="errors.length > 0">{{ errors }}</h2>
          <button>Close</button>
        </form>
      </dialog> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      image: [],
      galleryParams: { seen: false },
      errors: {},
    };
  },
  created: function () {
    axios.get("/images/" + this.$route.params.id).then((response) => {
      this.image = response.data;
      console.log(response.data);
    });
  },
  methods: {
    addToGallery: function () {
      document.querySelector("#galleryNotes").showModal();
    },
    galleryCreate: function () {
      this.galleryParams.user_id = this.$parent.getUserId();
      this.galleryParams.image_id = this.image.id;
      axios
        .post("/galleries", this.galleryParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((errors) => {
          this.errors = errors.response.data.errors;
          console.log(this.errors);
        });
    },
  },
};
</script>
