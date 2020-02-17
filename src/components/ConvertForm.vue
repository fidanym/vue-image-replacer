<template>
  <div>
    <div class="form-group">
      <label for="image_id">First image ID</label>
      <input v-model.trim="first_img_id" type="text" class="form-control" id="image_id" />
    </div>

    <div class="form-group">
      <label for="image_name">First image Name</label>
      <input v-model.trim="first_img_name" type="text" class="form-control" id="image_name" />
    </div>

    <div class="form-group">
      <label for="post_body">Post Body</label>
      <textarea v-model.trim="post_body" class="form-control" id="post_body" rows="10"></textarea>
    </div>

    <button @click="execute" class="btn btn-block btn-dark">Replace</button>

    <div class="form-group">
      <label for="converted_post_body">Converted</label>
      <textarea v-model.trim="converted_body" class="form-control" id="converted_post_body" rows="10"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConvertForm",
  data() {
    return {
      first_img_id: null,
      first_img_name: null,
      post_body: null,
      converted_body: null,
      externalImages: [],
      externalURLs: [],
      dataMap: []
    };
  },
  methods: {
    execute() {
      //this.downloadImages()
      this.extractImages()
      this.replaceImages()
    },

    downloadImages() {
      const zip = new JSZip()
      let count = 0
      const zipFilename = "post_images.zip"
      const imageName = "image-"

      this.externalURLs.forEach(image => {
        fetch(image)
          .then(res => res.blob())
          .then(blob => {
            const extension = "." + image.split(".").pop()

            zip.file(imageName + (count + 1) + extension, blob, {
              binary: true
            })

            count++

            if (count === this.externalURLs.length) {
              zip.generateAsync({ type: "blob" }).then(function(content) {
                saveAs(content, zipFilename)
              })
            }
          })
      })

    },

    extractImages() {
      if (!this.post_body) {
        alert('Missing post body')
        return
      }

      this.externalImages = this.post_body.match(/<img [^>]*src="[^"]*"[^>]*>/gm);

      if (!this.externalImages.length) {
        alert('No images found')
        return
      }

      this.externalURLs = this.externalImages.map(x => x.replace(/.*src="([^"]*)".*/, '$1'))

      let first_id = parseInt(this.first_img_id)

      this.dataMap = this.externalImages.map((item, index) => {
        let url = item.replace(/.*src="([^"]*)".*/, '$1')
        let id = item.replace(/.*(wp-image-\d+).*/, '$1')
        let extension = '.' + url.split('.').pop()

        return {
          url: url,
          image_id: id,
          new_id: 'wp-image-' + (first_id + index),
          new_url: this.first_img_name + (index + 1) + extension
        }
      })
    },

    replaceImages() {
      if (!this.first_img_id || !this.first_img_name) {
        alert('Missing id and name')
        return
      }

      if (this.first_img_name.lastIndexOf('-') !== (this.first_img_name.length - 1)) {
        alert('Name must end in dash "-"')
        return
      }

      if (!this.externalImages.length) {
        alert('No images found')
        return
      }

      let body = this.post_body

      for(let i = 0; i < this.dataMap.length; i++) {
        let item = this.dataMap[i]
        body = body.replace(item.url, item.new_url)
        body = body.replace(item.image_id, item.new_id)
      }

      this.converted_body = body
      debugger
    }
  }
};
</script>

<style scoped>
</style>
