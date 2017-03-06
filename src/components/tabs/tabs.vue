<template>
  <div class="v-tabs">
    <nav class="tabs">
      <ul>
        <li
          v-for="tab in tabs"
          :class="{'is-active': tab.isSelected}">
          <a @click="selectTab(tab)">{{ tab.title }}</a></li>
      </ul>
    </nav>
    <div class="tab-panes">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['actived'],
    data () {
      return {
        tabs: []
      }
    },
    created () {
      this.tabs = this.$children
    },
    methods: {
      selectTab (selectTab) {
        this.tabs.forEach(tab => {
          tab.isSelected = tab.title === selectTab.title
        })
      }
    },
    mounted () {
      let selected = this.tabs.filter(x => x.selected)
      if (this.tabs.length && !selected.length) {
        this.selectTab(this.tabs[0])
      }
    }
  }
</script>
