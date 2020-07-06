<template>
  
    <div id="qdfss">
      <div  class="qdf_info">
        <header  class="qdf_header">
          <span >
            <img
              @click="qdf_fh()"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC"
              alt
            />
          </span>
          <span >
            <input  placeholder="请输入内容" class="input" />
          </span>
          <span @click="qdf_fh()">取消</span>
          <!---->
        </header>
        <section  class="qdf_search">
          <header  class="qdf_his-header">
            <p >
              <span >历史搜索</span>
              <span>
                <i><van-icon name="delete" /></i>
              </span>
            </p>
          </header>
          <div class="list"></div>
        </section>
        <div  role="feed" class="qdf_van-list">
          <div class="qdf_placeholder"></div>
        </div>
        <!---->
      </div>
      <!---->
      <!---->
    </div>
 
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
      qdf_fh(){
          this.$router.go(-1)
      }
  },
  mounted() {}
};
</script>

<style scoped lang="scss" >
#qdfss{
    background: #fff;
    min-height: 100vh;
    box-sizing: border-box;
}
.qdf_info {
    padding-bottom: 1.06667rem;
    padding-bottom: 10.66667vw;
}
.qdf_header {
    height: 1.25333rem;
    height: 12.53333vw;
    border-bottom: 1px solid #eaeaea;
    background: #fff;
}
.qdf_header span:first-child {
    flex: 1;
    margin-right:0.2rem;
}
.qdf_header span:first-child img {
    width: .24rem;
    width: 2.4vw;
    height: .42667rem;
    height: 4.26667vw;
    padding-left: .4rem;
    padding-left: 4vw;
}
.qdf_header span:nth-child(2) {
    flex: 6;
}
.qdf_header span:nth-child(2) input {
  
    height: .8rem;
    height: 8vw;
    padding-left: .74667rem;
    padding-left: 7.46667vw;
    border: none;
    background: #e4e7ed;
    border-radius: .4rem;
    border-radius: 4vw;
    font-size: .4rem;
    font-size: 4vw;
    width: 73%;
}
.qdf_header span:nth-child(3) {
    flex: 1;
    font-size: .37333rem;
    font-size: 3.73333vw;
    color: #d2d2d1;
    margin-left:0.3rem;
}
.qdf_search {
    margin: .4rem .45333rem;
    margin: 4vw 4.53333vw;
}
.qdf_his-header {
    height: 1.06667rem;
    height: 10.66667vw;
}
.qdf_his-header p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}
.qdf_his-header p span:first-child {
    font-size: .4rem;
    font-size: 4vw;
    color: #333;
    font-weight: 700;
}
.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
}
.qdf_placeholder {
    height: 0;
    pointer-events: none;
}






























</style>