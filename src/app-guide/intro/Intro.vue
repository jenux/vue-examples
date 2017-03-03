<template>
  <div>
    <h1>Introduction</h1>

    <v-doc>
      ## Declarative Rendering
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
    }
  }
</script>
