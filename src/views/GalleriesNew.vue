<template>
  <div class="galleries-new">
    <div class="card">
      <div class="center col-sm-4">
        <img class="card-img-top" :src="image.image_url" :alt="image.title" />
        <div class="card-body">
          <h2 class="card-text">Add to your gallery</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 col-md-8 center">
          <h3 class="mb-30">Journal Notes</h3>
          <form v-on:submit.prevent="galleryCreate()">
            <div class="mt-10">
              <textarea
                class="single-textarea"
                v-model="galleryParams.notes"
                placeholder="Type your notes about the art here."
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Message'"
                required
              ></textarea>
            </div>
            <div class="switch-wrap d-flex">
              <p>Have you seen this art in person?</p>
              <div class="primary-checkbox">
                <input v-model="galleryParams.seen" type="checkbox" id="primary-checkbox" />
                <label for="primary-checkbox"></label>
              </div>
            </div>
            <input type="submit" value="Submit" />
            <div v-if="errors.length > 0">
              <div v-for="error in errors" :key="error.id">
                <h2 class="text-danger">{{ error }}</h2>
              </div>
            </div>
          </form>
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
