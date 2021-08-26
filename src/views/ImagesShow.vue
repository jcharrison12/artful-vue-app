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
