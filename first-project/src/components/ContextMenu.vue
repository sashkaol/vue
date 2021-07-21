<template>
  <div class="context" v-if="shown" :style="styles">
      <div v-for="item in items" :key="item.text" class="context__item" @click="onClick(item)">
          {{item.text}}
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            items: [],
            shown: false,
            xPos: 0,
            yPos: 0,
        }
    },
    methods: {
        onClick(item){
            item.action()
        },
        onShow({ items, caller }) {
            this.items = items,
            this.shown = true
            this.setPosition (caller)
        },
        setPosition(caller){
            const computed = caller.getBoundingClientRect()
            this.xPos = computed.left
            this.yPos = computed.top
        },
        onClose(){
            this.items = [],
            this.shown = false
        }
    },
    computed: {
        styles(){
            return {
                top: `${this.yPos + 10}px`,
                left: `${this.xPos + 20}px`
            }
        }
    },
    mounted(){
        this.$context.EventBus.$on('shown', this.onShow)
        this.$context.EventBus.$on('close', this.onClose)
    },
    beforeDestroy(){
        this.$context.EventBus.$off('shown', this.onShow)
        this.$context.EventBus.$off('close', this.onClose)
    }
}
</script>

<style scoped>
    .context {
        background-color: white;
        box-shadow: 1px 1px 5px 1px rgb(145, 155, 164);
        border-radius: 10px;
        border: none;
        z-index: 2;
        left: 530px;
        width: 150px;
        position: absolute;
        padding: 7px 0 7px 0;
        top: 330px;
    }
    .context__item:hover {
        background-color: rgba(207, 209, 210, 0.696);
        cursor: pointer;
    }
    .context__item {
        height: 30px;
        display: flex;
        align-items: center;
        padding-left: 10px;
    }
</style>