import { defineComponent } from 'vue';
export default {
    name: 'CustomComponent',
    component: defineComponent({
        // Vue component definition
        template: `<div>A custom component from a plugin</div>`,
    }),
};
