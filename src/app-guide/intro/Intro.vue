<template>
  <div>
    <h1>Introduction</h1>

    <v-doc>
      ## Declarative Rendering
    </v-doc>

    <v-example>
      <tab slot="Result"><declarative-rendering></declarative-rendering></tab>
      <tab slot="Source">source code</tab>
    </v-example>

    <hr>
    <!--<ex-declarative-rendering></ex-declarative-rendering>-->

    <v-doc>
      ## Bind Attribute
    </v-doc>
    <!--<ex-bind-attribute></ex-bind-attribute>-->
    <v-example src="./examples/bind-attribute"></v-example>
  </div>
</template>
<script>
  import DeclarativeRendering from './examples/declarative-rendering'
  import BindAttribute from './examples/bind-attribute'

  export default {
    components: {
      'ex-declarative-rendering': DeclarativeRendering,
      'ex-bind-attribute': BindAttribute

    }
  }
</script>
