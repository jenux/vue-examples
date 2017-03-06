<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Introduction</h1>
        </div>
      </div>
    </section>

    <v-doc>
      # Declarative Rendering
    </v-doc>

    <v-example :component="$options.components.DeclarativeRendering"></v-example>

    <v-doc>
      ## Bind Attribute
    </v-doc>
    <v-example :component="$options.components.BindAttribute"></v-example>
  </div>
</template>
<script>
  import DeclarativeRendering from './examples/declarative-rendering'
  import BindAttribute from './examples/bind-attribute'

  export default {
    components: {
      DeclarativeRendering,
      BindAttribute
    },
    mounted () {

    }
  }
</script>
