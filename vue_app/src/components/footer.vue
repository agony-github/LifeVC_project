<template>
  <footer id="footer">
    <ul id="footermenuNav">
      <li>
        <a v-link="{path:'/home'}">
          <div class="ico homeico"></div>
          <span class="lispan">首页</span>
        </a>
      </li>
      <li>
        <a v-link="{path:'/allProject'}">
          <div class="ico typeico"></div>
          <span class="lispan">全部产品</span>
        </a>
      </li>
      <li>
        <a v-link="{path:'/stroll'}">
          <div class="ico strollico"></div>
          <span class="lispan">闲逛</span>
        </a>
      </li>
      <li>
        <a v-link="{path:'/shopcart'}">
          <div class="ico shoppingcartico"></div>
          <span class="lispan">购物车</span>
        </a>
      </li>
      <li>
        <a v-link="{path:'/center'}">
          <div class="ico accountcenterico"></div>
          <span class="lispan">账户中心</span>
          <span title="个人中心组件"></span>
        </a>
      </li>
    </ul>
  </footer>
  <!--广告-->
  <div class="download0207">
    <img src="http://i1.lifevccdn.com/images/aboutLifeVC/downloadTop.png">
    <a href="itms-apps://itunes.apple.com/us/app/li-fu-jia-ju-jia-li-que-xiang/id961925723?mt=8">
    </a>
    <span class="close"></span>
  </div>
</template>
<script>
    export default {}
</script>
<style>
  #footer{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 222;
    width: 100%;
  }
  #footer ul{
    overflow: hidden;
    background-color: #f8f8f8;
  }
  #footer li{
    width: 20%;
    float: left;
    text-align: center;
    line-height: 12px;
  }
  #footer li .ico{
    width: 100%;
    height: 40px;
    background-size: 28%;
    background-position: 50%;
  }
  #footer li span{
    display: block;
    margin-top: -4px;
    margin-bottom: 6px;
    font-size: 15px;
  }

  /*footer里面的图标*/
  #footermenuNav .homeico{
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAbFBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaB0FoYAAAAI3RSTlMA+pHrKQbzuxgSC+LezcWqeWtcQDQf2NWyo56ZiYN/Y1BKJXbYS5EAAAEcSURBVEjH7ZPLloIwEESnSaKALxTx/c7//+NU4MyUjCTBzejCWkB3U3WSc0m+XqY0fc5/Fjk/4z9a6Njbbra21tb082dDmIf1I+vjr9aw7ozZ4bWu4v6lgvHkqhMKtYz5rwNrZdHUC7F2cA37585T/nSlS89D/gN2MdLs9QiDgx/nDJ8naeuHTzCaGQ/OqSOZt4e5wzvNOnGu8GlvHpbdY7yqPDgL9lTRifdCnPci3ssjTlX6aJTqL94Eq461H7cew5CQBHF2iXjzO5wbNCHlm1+8Ny7nE7d9w/aUdZIk5hcLKQ3KjSQSkMZWuPPVKBKoPTyZsQAd/x4gD7KLBuBnIhhgTfUJsP4EPgG0LYWmPKGUBKe8A7wFnumb6hti7z9v6uz02AAAAABJRU5ErkJggg==") no-repeat;
  }
  #footermenuNav .typeico{
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAIVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYs5FxxAAAACnRSTlMA5Skc3cKxeT0GBVZw6gAAAD5JREFUOMtjGGKA0xKHROPCBuwSXqscGJikVqEDIYZVqxYwsK/CAMsZolYFYNdhJmbAMKzBaOgig9HQHXwAAOIlf0tmWGbNAAAAAElFTkSuQmCC") no-repeat;
  }
  #footermenuNav .strollico{
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAWlBMVEUAAABmZWZmZGZnZmZmZWZmZmZoaGhmZmZmZWZmZWZmZWZmZGZmZGZmZGVmZGVmZWVnZ2dmZWVmZGVmZWZnZWZmZGZmZWZmZWZoZ2drZmtvampnZGZmZWZmZGU6sV+kAAAAHXRSTlMA6Kg482oqRYJ4w7av3dS+I9mbj1pu7c0eEQpSYYtFbUIAAAHXSURBVDjLjVXbloMgEBPEVQHxUqu2Nv//m4tVGVBxN08ejCEzk+MkB7zzUhsmRFvzIk1ukXMBD6zLo9R5/DJUV2RZ0SkGC3ktPykA7cN7mT5aALo5c3sBVP3ptAKGk5cSEM+rC58COLx4WNmf60p+rPjjoCtfsbpfMtDugTq5QQ0439OAinSvtCsMjftQOL8R3wJ6GxuQJX8gA9YBjGijitlne2ohN+H5msgZ3TmvNXKYCHGBK8ags5kUKK6JQtdg7rgA+7oIglWtRFXaUw1OqVp4JapAF4DcYy+Q+SqF+5p69PLEvP5zSzRhSjiklxgWZK1OGEqfzJZyG6WW6SrwIGyt9dWHltOFBeUsU9rEgZzZk41MloncBja4Nbba2Dob2qj9AoMK5G6ZCuTgoWUXYhcMal2B6mjZIi0kBYOGEpTBv4WVtYDFabRpaJNBqpXIeEYaNKEOI31NxCNGdGv4891yhOixpEv/50yk7Ms9XJ/kD3xcTzXYdM+dGPT22Aww7zvu22BoPPf6jqypBxZPy35HdS33GaYEZor4NfTLJW3WX3F7RrrU9QEY89PpSGvCR6MByLLxTkpJC+iIVMLC2M02z3a3mevVRrd27J9Lc489r9vIOv4FXQsplico/ngAAAAASUVORK5CYII=") no-repeat;
  }
  #footermenuNav .shoppingcartico{
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAe1BMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmY+mZAPAAAAKHRSTlMA+3P1BtcJxo94OjQZ7uTfzpopHsCuoWVOI724sqZsVkpBEQ+Efi5g8YO1+gAAAU5JREFUSMfVldduwzAMRSV5zwxnz2a15/+/sEWNGnVCxtFjziPBKwHivZR5U5ylpZ6+1B9W/JG9JMjB74YrTIwPY1j59DdgLz6CJWyMDztwPv1xAL3HSS1DjHonWAZJe4KEQT56ggzmRmcKQShUVNzjeaP2ToUNLO9K6TOrXCw0d7UT1KrgCGPJ7p+aYAHXh+Iebpqghly6NlH6C6gen/BsoZQFN1gI5Rks1ewc5eHsxP7SYs9CfQ1BLAm+YGYkIiW1c22xpChoE8r17Ki5FfFdSNEzH6uP58EBtkalvDNH3MRbOGgL3dWINIpgjkykb0+CQJpCqHpyEoaTLo0rqApTVOqat3D5iQXYblWlrWEyWRDA+vcfCDq7L9o8O1mwhaQoEth01rJufbCQy4ITtJy6CLbMnn/E1nVTjACISqNR7KNo/+/+2CWjJIvNW/ANvhZIo9s5gpsAAAAASUVORK5CYII=") no-repeat;
  }
  #footermenuNav .accountcenterico{
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAe1BMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmY+mZAPAAAAKHRSTlMA+wav9lASw3wlH7mTioUM3ta+oHHQtBw3MBbw6+bJmVlIQXhhX2piwz4+bgAAAbZJREFUSMetlNmWmzAQRBG7DWN28L7P5P7/F0YEx2DLDeSc3CdT7pJaUp+y/gv2tYyLuLza88qX8Y6OXbycsXro0uOGU7skEZr0VH6XpxRNlIyvnwPV5fF1qYB8dI8T8GX3/i/gNFJ/BcIXJQSusuEIzpvkwFGsX4Navl+ygrVk0B0XhljoU0mGADxD9CCQDHtoDLGBvWQABFVAgW2+JSjJcICFIS7gIBkiuBviHSLJcIPcEHO4GaLxSOJjmnOQJa/jnrXTIrJwobaHV1SDu7BkfoCg6R8tAH6sMWL0kqtld6SV3pDYGidUaLLaqTM0KrQmaByGOM14+cZRvKKcjVy+LbqaqgjLsgyLSv35LHyh/rJHk9/7//1fAZrD5fNx0dSb9yYjQN2ECz14lonXbrwy5BUQbD8fLfjg+AYcW8pPBzgbQxTZcoJG7yMVdGMq4qcQvDakNtYYazVsyk77sBoJudQeZNXOnzD4u0HKRd2tTW5R/zUrWE4aFqAebZzbRJ/m+OwpbjuaZvW8mby1TuM9Uys1ElI6RNr9ciGZYUjAHc1zOfcrqlmGjOzxDp4/y7A9b61/5zcPhTVGJpPASwAAAABJRU5ErkJggg==") no-repeat;
  }
  /*首页中的广告*/
  .download0207{
    width: 100%;
    height: 65px;
    background: url(http://i1.lifevccdn.com/images/aboutLifeVC/downloadBottom.png) no-repeat;
    background-position: 0 0;
    background-size: 100%;
    position: fixed;
    left: 0;
    bottom: 54px;
    z-index: 50;
  }
  .download0207 img{
    width: 15.5%;
    position: absolute;
    left: 4.9%;
    top: -42px;
  }
</style>
