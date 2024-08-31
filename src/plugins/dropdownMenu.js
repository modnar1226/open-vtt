import { defineComponent as e } from "vue";
const t = e({
    name: "DropdownMenu",
    template: `
    <select v-model="selected" @change="onChange">
        <option disabled value="">Please select one</option>
        <option v-for="item in items" :key="item.id" :value="item.value">
            {{ item.text }}
        </option>
    </select>
    `,
    props: {
        items: {
            type: Array,
            default: () => [
                { id: 1, value: "default1", text: "Default Option 1" },
                { id: 2, value: "default2", text: "Default Option 2" }
            ]
        },
        initialValue: {
            type: [String, Number],
            default: ""
        }
    },
    data() {
        return {
            selected: this.initialValue
        };
    },
    methods: {
        onChange() {
            this.$emit("change", this.selected);
        }
    }
}), o = {
    name: "DropdownMenu",
    component: t
};
export {
    o as default
};
