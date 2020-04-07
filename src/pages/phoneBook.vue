<template>
    <div>
      <phone-book-header></phone-book-header>
      <phone-book-search
        :phoneBooks="phoneBooks"></phone-book-search>
      <phone-book-list
        :letter="letter"
        :phoneBooks="phoneBooks"></phone-book-list>
      <phone-book-alphabet
        @changeLetter="changeLetter"
        :phoneBooks="phoneBooks"></phone-book-alphabet>
    </div>
</template>

<script>
    import axios from 'axios'
    import {getServerUrl} from "@/config/sys"
    import PhoneBookHeader from './components/Header'
    import PhoneBookSearch from './components/Search'
    import PhoneBookList from './components/List'
    import PhoneBookAlphabet from './components/Alphabet'

    export default {
        name: "phoneBook",
        data(){
            return{
              phoneBooks:{},
              letter:""
            }
        },
        components:{
          PhoneBookHeader,
          PhoneBookSearch,
          PhoneBookList,
          PhoneBookAlphabet
        },
        methods:{
          refreshToken(){
            let url = getServerUrl("refreshToken");
            let token = window.localStorage.getItem("token");
            //console.log("token ttt " + token);
            axios.defaults.headers.common["token"] = token;
            console.log("url "+url);
            axios.get(url)
              .then(response=>{
                if(response.data.code == 0) {
                  window.localStorage.setItem("token",response.data.token);
                }
              }).catch(error=>{
                console.log(" error： "+error);
              })
          },
          getPhoneBooks(){
              let url = getServerUrl("phoneBook/list");
              let token = window.localStorage.getItem("token");
              //console.log("token ttt " + token);
              axios.defaults.headers.common["token"] = token;
              console.log("url "+url);
              axios.get(url)
                .then(response=>{
                  //console.log(JSON.stringify(response.data));
                    this.phoneBooks = response.data.data;
                })
                .catch(error=>{
                  console.log(" error： "+error);
               })
          },
          changeLetter(e){
            console.log("传来的字母" + e);
            this.letter = e;
          }
        },
      mounted() {
          setInterval(this.refreshToken,1000*60*10);
        this.getPhoneBooks();
      }

    }
</script>

<style lang="stylus" scoped>



</style>
