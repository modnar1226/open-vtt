<template>
  <div>Component Content</div>
</template>
<script>
import { PluginManager } from './pluginManager';
import eventBus from './eventBus';


export default {
  data() {
    return {
      pluginLoaded: false
    };
  },
  components: {
    CustomComponent: defineComponent(() =>
      import('./plugins/examplePlugin.js').then((module) => module.default.component)
    )
  },
  mounted() {
    this.pluginLoaded = true;
  }
};
</script>