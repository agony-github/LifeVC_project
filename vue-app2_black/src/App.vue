<template>
  <!--首页-->
  <div>
    <router-view></router-view>

    <loading></loading>
  </div>
</template>
<script>
import loading from './components/loading'
export default {
  components: {
    loading
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .active
    border-bottom: 2px solid #80b532;
  #footermenuNav
    .active
      color: #3ea438
      .homeico
        width: 100%;
        height: 40px;
        background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAVFBMVEUAAAAAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEJ7h1ASAAAAG3RSTlMA/OnDkCcSCPXaqmsfAePVo4mDeWNQSjcyGgOuh2jLAAAAtUlEQVRIx+3QyRKDIBBFUZuAgvM8vf//z1iWlSIWtrBKFp4lvN7c6GeWJWzfE/UB86LFpi1890mNXZ347eMXDq/YZ59X+Kjy+/0sYBHz3X7U+KJHfp8RTijjcjZwaIrLnCmc0oTLaePz5gaXjCPvJMAQ03k/aLD0cJeTzbtKeJArk5PJ68rJ51UG3oza9gIBhIo6BOkiVSJAqY5Q8LEvn4Pz13PwHIQfEGzEvB4k2T/y4vVPvQFhvn9R6PLAtwAAAABJRU5ErkJggg==") no-repeat
        background-size: 28%;
        background-position: 50%;
      .typeico
        width: 100%;
        height: 40px;
        background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAIVBMVEUAAAAAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEKz1vbMAAAACnRSTlMA5Skc3cKxeT0GBVZw6gAAAD5JREFUOMtjGGKA0xKHROPCBuwSXqscGJikVqEDIYZVqxYwsK/CAMsZolYFYNdhJmbAMKzBaOgig9HQHXwAAOIlf0tmWGbNAAAAAElFTkSuQmCC") no-repeat
        background-size: 28%;
        background-position: 50%;
      .strollico
        width: 100%;
        height: 40px;
        background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAA0lBMVEUAAAANoz8PoUAOoT4oqlMNoT8OoT4NoD5OunINoT6j27aAzZoNoD8NoT8OoT/////8/vzm9eoNoT/T7dsNoT8Ooj4OoT8PpUQOokD///8NoT7////r9+8OoT/t+PHd8uQOoUAYpUcdp0v///82sF/z+vbw+fNewH9mxIc4sWBAtGcOoD+95Mm148Ti8+jn9u2H0aDh8+eU1aqe2bIOoT8OoT8Ooj4SpkP9/v0wrlpFtmvv+fP1+/fa8eIOoT8OoT4QoUEas00gv0ANoD7///8SokKhU4dVAAAAQ3RSTlMAOETz2vzv597YyLm/rqX229LDupqDbSJG/Pjl0n3YvZD8+e3f3drY1NDMzMjHxMLCwLe2tFhJHPLy4dHJu6OTTwoIdbqiQgAAAZxJREFUOMuVldlWwjAQhqfWUottVSygiODGvoOC+/aH938lWU47JiUQvqte/CfnS2cyQwq/0+vAc0u254d5i7ZyEdoA40YH2uh3Bylym4+fPWIjQTGdfbKhIZNyuYYepyBnv7CVG4NzmcI/X+zCSbxnGewkE/8THwYE6+wURqyr04GO+VF2yLVc9YM2eHYixDESlnf81AVXHCIhIvqxdcGrj7I4BeOmLObP6+Bo3HJQFufSFdXiHQlxP5i0S1hwe7lUZvKkNGZW3CclakjKQEgeJM7EADE9SRnwyZWVT8QEeK2UHwDUZWV4VFKV20BFiD5wpyjDJltRvioBZSGqQDNW5rCnKI8APPSri1g3VmYNX1EeI6amKMOnUFFuxd8vQlFGSHlF2cGCu2a3xo3BRbFk5SpuG736pVjynu5oV1J+q6yDp+fHybncSBRJyhxMEcnNn9UEufkph5ihJsjPiqx9HiwFe4wCKu4zZOjAMRhfCQWDwcjcGIxcpuCYDPPEO7N7TTDFwGABMVbOYLUxF5FrsDQZKx/6nr15Hf8BtTFsID8eqccAAAAASUVORK5CYII=") no-repeat
        background-size: 28%;
        background-position: 50%;
      .shoppingcartico
        width: 100%;
        height: 40px;
        background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA5CAMAAAC1bw3YAAAAZlBMVEUAAAAAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEJ+HSx/AAAAIXRSTlMAn2C/8T4P65EHSFf4c8/G2Kch44eBUbWtezgwKRYba90AFU1LAAABrUlEQVRIx6WW6WKDIBCElSie8TZqNAfv/5JdqWkbDQyU7yfgyLGzu549WRv8EtWJvQLPxRvMXuIi3nnYS/jijRO3l4jou5T/4NkTkkKQeC7EJFF7TlQkkTkpLILgThLn9RE8J0oQCZibIBonCUYKxX6wKYQlPYhXA2ZnifbofmFJ/Nn+i43FjsMDDU9mCldpMc07YTpaOqJowRZjqpg9myg00mIq55RuFpPiNw9zUm+3MEvlXHNpPU0NZharFHMzzeU4E420rFNNPk3yYRLQqqtTVk5pUYRqA65iPrKPnva1Bv8BWwyfU/3yI7rtUKeA469e/8E0PIALDNNfibofAM4ItcAswIa9r6OUFnOilhaDuD26mcWciKUBIJd4HE4K1nNcYKGqBABJpCi0YF7jkcAEd53EJIg6m6J1ZfiXdh3pM39rC9SUW+Qs+a6LuQsi3CpZi/oGuc1hd2/hq+wngkiARCNr3r8lyu2ks2x59p1Dut3WE9VsMbAuWA15EM9jhq+Tt6rnD/GjblwDVUM3iY0cFZq5+P7TMbmxSKxUBl4Pez9m/NMps9jvNFv4ApE5a+bTSsLDAAAAAElFTkSuQmCC") no-repeat
        background-size: 28%;
        background-position: 50%;
      .accountcenterico
        width: 100%;
        height: 40px;
        background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAdVBMVEUAAAAAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnEIAnELMF8/DAAAAJnRSTlMAX/249+3AlXx2TUID3ayQiFMlHxIH9eXGn9TLsZlqWjYvHBYMgbeMtawAAAEQSURBVEjHrdTZboMwEIXhybCHNYQQyNZsPe//iK1EpIjgY7tSv2t+aSw8ln+xy7NkTLJ8J162SYRJlGzFqUhDvIVpIXbPAHPB0z59jE+x9SRnLJ2Fy2GS8+AIk6MwV5hdWdCQoGHBQIKBBREJIhaAYYHCTFmwJ8GeBQEJAhZkJMjoJihMlG9FBZNKqDbEUtgKd8HSRWxqfKrFLtX5gVNxuJ9mwekuVrdKMafVTajHqFjSsSPfryN2l3J2XEYzWUpg05B95r5lbgWXL3KJqL6Vt2KAW0wHcg9VlPBRFvKygZ8NXX7HY9Ap/GhHJnLNVINg2xeDYL+ihK9yCnr46skrz03BAb4Or/+w/rXy8ZC/+wHsAbUfMABFwAAAAABJRU5ErkJggg==") no-repeat
        background-size: 28%;
        background-position: 50%;
  body, html
    width 100%
    height 100%
  /*页面头部的公共样式*/
  #home_page{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .home_data{
    width: 100%;
    margin: 0 auto;
  }
  .header{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 111;
    font-family: Microsoft YaHei;
  }
</style>

