<template>
    <div
            v-show="ready"
            class="carousel-item"
            :class="{
      'is-animating': animating
    }"
            :style="itemStyle"
    >
        <slot></slot>
    </div>
</template>

<script>
    import isUndefined from 'lodash/isUndefined'
    export default {
        name: "CarouselItem",
        data() {
            return {
                translate: 0,
                scale: 1,
                ready: false,
                animating: false
            };
        },

        computed: {
             itemStyle() {
                const value = `translateX(${this.translate}px) scale(${this.scale})`;
                const style = {
                    transform: value
                };
                return style;
            }
        },

        methods: {

            processIndex(index, activeIndex, length) {
                //最后一张左移1
                if (activeIndex === 0 && index === length - 1) {
                    return -1;
                } else if (activeIndex === length - 1 && index === 0) {
                    //第一张右移1
                    return length;
                } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
                    //左边移动到右边备用
                    return length + 1;
                } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
                    //右边移动到左边备用
                    return -2;
                }
                return index;
            },

            calcTranslate(index, activeIndex) {
                const distance = this.$parent.$el["offsetWidth"];
                return distance * (index - activeIndex);
            },

            translateItem(index, activeIndex, oldIndex) {
                const length = this.$parent.items.length;
                this.animating = index === activeIndex || index === oldIndex;
                if(length > 2){
                    if (index !== activeIndex && this.$parent.loop) {
                        //改变排序index
                        index = this.processIndex(index, activeIndex, length);
                    }
                    // this.translate = this.calcTranslate(index, activeIndex);
                }else if(length === 2){

                }
                this.translate = this.calcTranslate(index, activeIndex)
                this.ready = true;
            }
        },

        created() {
            this.$parent && this.$parent.updateItems();
        },

        destroyed() {
            this.$parent && this.$parent.updateItems();
        }
    };
</script>

<style lang="scss" scoped>
    .carousel-item {
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 0;
    }

    .is-animating {
        transition: transform .5s ease-in-out;
    }
</style>
