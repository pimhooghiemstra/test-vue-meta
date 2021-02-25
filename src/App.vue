<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo() {
    return { 
      title: 'PLint logo - rolling over the floor',
      meta: [
        {
          name: 'description', 
          content:  'PLint-sites heeft een cirkelvormig logo. Het logo heeft een vrij dikke groene rand. In het midden van de cirkel, die verder wit is, staat een donkerblauwe letter. Dit is een samentrekking van de P en de L.'
        },
        {
          property: 'og:title', 
          content: 'PLint-sites - websites, applicaties en pannenkoeken'
        },
        { 
          property: 'og:site_name', 
          content: 'PLint-sites'
        },
        {
          property: 'og:type', 
          content: 'website'
        },
        {
          name: 'robots', 
          content: 'index,follow'
        },
        {
          property: 'og:image', 
          content: 'https://plint-sites.nl/images/diensten/webdesign_378x234.jpg'
        },  
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
