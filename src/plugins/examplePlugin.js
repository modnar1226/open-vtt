// ExamplePlugin.js
import { defineComponent } from 'vue';

const CustomComponent = defineComponent({
    name: 'CustomComponent',
    template: `<div>A custom component from a plugin</div>`,
});

export default {
    name: 'CustomComponent',
    component: CustomComponent
};
