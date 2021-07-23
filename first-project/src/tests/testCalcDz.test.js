import Calc from '../components/Calc';
import { mount } from "@vue/test-utils";

describe('Test calc input', () => {
    it("Test calc inputs oper1 value", () => {
        const wrapper = mount(Calc)
        const oper1 = wrapper.find('input[id=oper1]')
        oper1.setValue('1')

        expect(wrapper.vm.oper1).toBe(1)
    })

    it("Test calc inputs oper2 value", () => {
        const wrapper = mount(Calc)
        const oper2 = wrapper.find('input[id=oper2]')
        oper2.setValue('1')

        expect(wrapper.vm.oper2).toBe(1)
    })

    // тест на сложение

    it("Test calc sum", () => {
        const wrapper = mount(Calc)
        const oper1 = wrapper.find('input[id=oper1]')
        const oper2 = wrapper.find('input[id=oper2]')
        oper1.setValue('3')
        oper2.setValue('1')

        const sum = wrapper.find('button[name="+"]')
        sum.trigger('click')

        expect(wrapper.vm.result).toBe(4)
    })

    // тест на вычитание

    it("Test calc minus", () => {
        const wrapper = mount(Calc)
        const oper1 = wrapper.find('input[id=oper1]')
        const oper2 = wrapper.find('input[id=oper2]')
        oper1.setValue('3')
        oper2.setValue('1')

        const minus = wrapper.find('button[name="-"]')
        minus.trigger('click')

        expect(wrapper.vm.result).toBe(2)
    })

    // тест на умножение

    it("Test calc multi", () => {
        const wrapper = mount(Calc)
        const oper1 = wrapper.find('input[id=oper1]')
        const oper2 = wrapper.find('input[id=oper2]')
        oper1.setValue('3')
        oper2.setValue('1')

        const multi = wrapper.find('button[name="*"]')
        multi.trigger('click')

        expect(wrapper.vm.result).toBe(3)
    })

    // тест на деление

    it("Test calc div", () => {
        const wrapper = mount(Calc)
        const oper1 = wrapper.find('input[id=oper1]')
        const oper2 = wrapper.find('input[id=oper2]')
        oper1.setValue('3')
        oper2.setValue('1')

        const div = wrapper.find('button[name="/"]')
        div.trigger('click')

        expect(wrapper.vm.result).toBe(3)
    })

    // тест на степень

    it("Test calc degree", () => {
        const wrapper = mount(Calc)
        const oper1 = wrapper.find('input[id=oper1]')
        const oper2 = wrapper.find('input[id=oper2]')
        oper1.setValue('2')
        oper2.setValue('5')

        const degree = wrapper.find('button[name="degree"]')
        degree.trigger('click')

        expect(wrapper.vm.result).toBe(32)
    })

    // тест клавиатуры

    test("Test keyboard numbers", () => {
        const wrapper = mount(Calc)
        const oper1 = wrapper.find('input[id=oper1]')

        for (let i = 1; i < 10; i++) {
            var  key = wrapper.find(`button[name="${i}"]`)
            key.trigger('click')
        }

        key = wrapper.find('button[name="0"]')
        key.trigger('click')

        expect(wrapper.vm.oper1).toBe(1234567890)
    })

    // тест стирания символа    

    test("Test keyboard backspace", () => {
        const wrapper = mount(Calc)
        const oper1 = wrapper.find('input[id=oper1]')
        oper1.setValue('456')

        const key = wrapper.find('button[name=backspace]')
        key.trigger('click')

        expect(wrapper.vm.oper1).toBe(45)
    })
})