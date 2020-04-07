<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="phoneBook"
             v-for="(items,key) of phoneBooks" :key="key"
              :ref="key">
          <div class="title">{{key}}</div>
          <div class="item"
               v-for="innerItem of items" :key="innerItem.id">
            <img :src="getImageUrl(innerItem.image)" >
            <div class="content border-bottom">{{innerItem.name}}</div>
          </div>
        </div>

      </div>

    </div>
</template>

<script>
  import {getServerUrl} from "@/config/sys"
  import Bscroll from 'better-scroll'
    export default {
        name: "List",
        props:{
          phoneBooks:Object,
          letter:String
        },
      methods:{
          getImageUrl(imageName){
              return getServerUrl("images/"+imageName);
          }
      },
      mounted() {
          this.scroll = new Bscroll(this.$refs.wrapper);
      },
      watch:{
          letter(){
            console.log(" 列表获取 "+this.letter);
            if(this.letter){
              const letterValue = this.$refs[this.letter][0];
              this.scroll.scrollToElement(letterValue);
            }

          }
      }
    }
</script>

<style lang="stylus" scoped>

  @import "~@/assets/styles/varibles.styl"

  .border-bottom
    &:before
      border-color: $borderColor

  .list
    overflow: hidden
    position: absolute
    top: 2.8rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: $bgColor
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .item
      line-height: .76rem
      margin: .2rem
      img
        float: left
        width: .8rem
        height: .8rem
        border-radius: .2rem
      .content
        padding-left: 1rem
        font-size: .4rem
        padding-bottom: .3rem

</style>
