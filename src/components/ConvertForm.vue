<template>
  <div>
    <div class="row pb-2">
      <div class="col-sm-4">
        <h1>Image Replacer</h1>
      </div>

      <div class="col-sm-8">
        <div class="form-group row pt-2">
          <label for="post_title" class="col-sm-2 col-form-label">Post Title</label>
          <div class="col-sm-10">
            <input v-model.trim="post_title" type="text" class="form-control" id="post_title" />
          </div>
        </div>
      </div>
    </div>


    <div class="form-group">
      <label for="post_body">Post Body</label>
      <textarea v-model.trim="post_body" class="form-control" id="post_body" rows="8"></textarea>
    </div>

    <div class="row">
      <div class="col-sm">
        <button :disabled="!post_body || !post_title" @click="extractImages" class="btn btn-block btn-outline-danger">
          1. Extract Images
        </button>
      </div>

      <div class="col-sm">
        <button :disabled='!extracted' @click="downloadImages" class="btn btn-block btn-warning">
          2. Download Images
        </button>
      </div>
    </div>

    <div class="form-group pt-3">
      <label for="image_id">First image ID</label>
      <input v-model.trim="first_img_id" type="text" class="form-control" id="image_id" />
    </div>

    <div class="form-group">
      <label for="image_name">First image Name</label>
      <input v-model.trim="first_img_name" type="text" class="form-control" id="image_name" />
    </div>

    <button :disabled='!extracted || !first_img_id || !first_img_name' @click="replaceImages" class="btn btn-block btn-dark mb-3">3. Replace</button>

    <div class="form-group">
      <label for="converted_post_body">Converted</label>
      <textarea v-model.trim="converted_body" class="form-control" id="converted_post_body" rows="8"></textarea>
    </div>

    <div class="row">
      <div class="col-sm">
        <button @click="reset" class="btn btn-block btn-danger">
          Reset
        </button>
      </div>
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
      dataMap: [],
      extracted: false,
      post_title: null
    };
  },
  methods: {

    downloadImages() {
      const zip = new JSZip()
      let count = 0
      let title = this.post_title.replace(/[^a-zA-Z0-9 ]/g, '')
      title = title.replace(/\s/g, '-')
      const zipFilename = title + '.zip'
      const imageName = title + '-'

      this.dataMap.forEach(data => {
        fetch(data.url)
          .then(res => res.blob())
          .then(blob => {
            zip.file(imageName + (count + 1) + data.extension, blob, {
              binary: true
            })

            count++

            if (count === this.dataMap.length) {
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

      if (!this.externalImages || !this.externalImages.length) {
        alert('No images found')
        return
      }

      let extension_pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i

      this.dataMap = this.externalImages.map((item, index) => {
        let url = item.replace(/.*src="([^"]*)".*/, '$1')
        let id = item.replace(/.*(wp-image-\d+).*/, '$1')
        let extension = '.' + url.match(extension_pattern).pop()

        return {
          url: url,
          image_id: id,
          index: index,
          new_url_ending: (index + 1) + extension
        }
      })

      this.extracted = true
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
      let first_id = parseInt(this.first_img_id)

      for(let i = 0; i < this.dataMap.length; i++) {
        let item = this.dataMap[i]
        let new_url = this.first_img_name + item.new_url_ending
        let new_id = 'wp-image-' + (item.index + first_id)
        body = body.replace(item.url, new_url)
        body = body.replace(item.image_id, new_id)
      }

      this.converted_body = body
    },

    reset() {
      this.first_img_id = null
      this.first_img_name = null
      this.post_body = null
      this.converted_body = null
      this.externalImages = []
      this.dataMap = [],
      this.extracted = false,
      this.post_title = null
    }
  }
};
</script>

<style scoped>
  label {
    font-weight: bold;
  }
</style>
