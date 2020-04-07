<template>
    <ul class="list">
      <li class="item"
          @click="clickLetter"
         v-for="(item,key) of letters">{{item}}</li>
    </ul>
</template>

<script>
    export default {
        name: "Alphabet",
        props:{
          phoneBooks:Object
        },
        computed:{
          letters(){
            const lettes=[];
           // console.log(this.phoneBooks);
            for (let i in this.phoneBooks){
            //  console.log(i)
              lettes.push(i)
            }
            return lettes;
          }
        },
      methods:{
        clickLetter(e){
          console.log(" 点击字母 "+e.target.innerText);
          this.$emit("changeLetter",e.target.innerText);
        }
      }
    }
</script>

<style lang="stylus" scoped>

  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute;
    top: 4.1rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    .item
      line-height: .4rem
      text-align: center
</style>
