<template>
  <v-container>
    
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to the threat information platform
        </h1>
        
        <img alt="Vue logo" src="../assets/logo1.png"   />
        <h2> text1 </h2>
        <img alt="Vue logo" src="../assets/logo1.png"   />
        <h2> text2 </h2>
        <img alt="Vue logo" src="../assets/logo1.png"   />
        <h2> text3 </h2>
        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />
         
         
        </p>
      </v-col>

     
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader'
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify'
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify'
      }
    ],
    importantLinks: [
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com'
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify'
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs'
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify'
      }
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com'
      },
      {
        text: 'Roadmap',
        href: 'https://vuetifyjs.com/introduction/roadmap/'
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
      }
    ]
  })
}
</script>
<style scoped>
img{
  width: 80px;
  height: 80px;
  margin-right: 20px;
  margin-top: 70px;
  background:  #E7F2F9;


}

</style>

