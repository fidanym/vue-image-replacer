<template>
  <div>
    <div class="form-group">
      <label for="image_id">First image ID</label>
      <input type="text" class="form-control" id="image_id" />
    </div>

    <div class="form-group">
      <label for="image_name">First image Name</label>
      <input type="text" class="form-control" id="image_name" />
    </div>

    <div class="form-group">
      <label for="post_body">Post Body</label>
      <textarea class="form-control" id="post_body" rows="10"></textarea>
    </div>

    <button @click="downloadImages" class="btn btn-block btn-dark">Replace</button>

    <div class="form-group">
      <label for="converted_post_body">Converted</label>
      <textarea class="form-control" id="converted_post_body" rows="10"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConvertForm",
  data() {
    return {
      images: [
        "https://www.architectureartdesigns.com/wp-content/uploads/2020/02/DA-House-by-Bernardo-Bustamante-Arquitectos-in-Quito-Ecuador-1-630x420.jpg",
        "https://www.architectureartdesigns.com/wp-content/uploads/2020/02/DA-House-by-Bernardo-Bustamante-Arquitectos-in-Quito-Ecuador-6-630x420.jpg"
      ]
    };
  },
  methods: {
    downloadImages() {
      const zip = new JSZip();
      let count = 0;
      const zipFilename = "post_images.zip";
      const imageName = "image-";

      this.images.forEach(image => {
        fetch(image)
          .then(res => res.blob())
          .then(blob => {
            const extension = "." + image.split(".").pop();

            zip.file(imageName + (count + 1) + extension, blob, {
              binary: true
            });

            count++;

            if (count === this.images.length) {
              zip.generateAsync({ type: "blob" }).then(function(content) {
                saveAs(content, zipFilename);
              });
            }
          });
      });

    }
  }
};
</script>

<style scoped>
</style>
