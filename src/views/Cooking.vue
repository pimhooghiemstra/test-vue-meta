<template>
  <div class="cooking">
    <h2>Een lekker recept!</h2>
    
    <img :src="recipeImage" alt="Kip kokos wrap">

    <br>

    <a href="https://solo-cooking.nl/">Voor meer recepten</a>
  </div>
</template>

<script>

export default {
  name: 'Cooking',
  data() {
    return {
      title: 'Kip kokos wrap met pindakaas dressing',
      recipeImage: 'https://admin.solo-cooking.nl/storage/76/conversions/thaise-kip-kokos-wrap-main-large.jpg'
    }
  },
  metaInfo() {
    return { 
      title: this.title,
      meta: [
        {
          name: 'description', 
          content:  `Een bijzonder gerecht uit de oosterse keuken. Gewoon op een pannenkoek, maar een torilla kan natuurlijk ook! Eet smakelijk en deel je ervaring.`
        },
        {
          property: 'og:title', 
          content: this.title
        },
        {
          property: 'og:image', 
          content: this.recipeImage
        }, 
      ]
    }
  },
}
</script>
