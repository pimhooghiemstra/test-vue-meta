<template>
  <div class="about">
    <h1>This is an about a cat page</h1>
    <img v-if="catFound" :src="`${catAPI}/${cat.id}`" alt="image of a cat">
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      cat: null,
      catFound: false,
      catAPI: 'https://cataas.com/cat',
    }
  },
  metaInfo() {
    return { 
      title: 'A random cat - rolling over the floor',
      meta: [
        {
          name: 'description', 
          content:  `Retrieve a random cat from the cataas API. This time our cat has a number: ${this.cat ? `${this.cat.id}` : 'no number yet'}`
        },
        {
          property: 'og:title', 
          content: `Cats - ${this.cat ? `${this.cat.id}` : 'no number yet'}`
        },
        {
          property: 'og:image', 
          content: `${this.cat ? `${this.catAPI}/${this.cat.id}` : 'https://plint-sites.nl/images/diensten/webapps_378x234.jpg'}`
        }, 
      ]
    }
  },
  mounted() {
    axios.get(`https://cataas.com/api/cats?tags=cute&skip=0&limit=20`)
    .then(({data}) => {
      const index = Math.floor(Math.random()*20)
      this.cat = data[index]
      this.catFound = true
    })
    .catch(e => console.log(e))
  },
}
</script>
