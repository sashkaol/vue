import { mount } from "@vue/test-utils";
import TestComp from "./testComp.vue";

describe('TestComp', () => {
    test("Test content", () => {
        const wrapper = mount(TestComp, {
            propsData: {
                message: "Hello from test!"
            }
        })

        expect(wrapper.text()).toEqual(
            'This message: Hello from test!'
        )
    })
})