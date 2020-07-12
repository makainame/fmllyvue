<template>
  <div class="wrapper" :style="{overflow:$store.state.index==1?'hidden':''}">
    <!-- 轮播图开始 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in banner" :key="index">
        <img :src="item.banner_img" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播图结束 -->
    <!-- 导航开始 -->
    <div class="menu">
      <ul>
        <li>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA8CAYAAADSfGxZAAAFZUlEQVRoQ+1bW2xUVRRd68xMeZPaFESeBkuLhkekk6IfxDEEMQqUmWGMwcQPE5FEo9GYGONP/TIh8UH88BsNwTDObR0CGsUImGDAGVEQIn1JIBYqBSwtr5m5Z5tbaDLYoXPb28d8nPs1ybl7n7PXXWedk8leRN6zfv3pSr/f9wypN4uwlhAheJKQvVnNfblc2fkLFy72ptPBbH5cqf0OhcQ/ZcqJaWVl02dRsmtJrtPQywmQwG+AfJG1M98mk0s7+9dO50dDg6jjx5vrofE2qFYC4htYnPQC6gREpwl1BD5/KpF48DRAKQ0ghNFoexVsvVKAWlCCAJYDmDZwfbQBSYPqo2XLHoo3NFD3AbEp3FKvIZ8CmFesKBE4hfcQuASgTSi7/f7pTfH4AxeLxY7G+MaNV8qV6opSEBVIjQgqSU4FRBWbTwSdCmproqmqibG1Jyv05EBCgFCxwHuNk8hCuF+RO5Dhz7dU9koyWXMNoB5uzsJxomKxi5Ntu7tcCR63oV8g1NOATPAwz8GcrTczGm2Lira/BOD3kOxOaN82+UegjwE4qrRKZcVOJ5OLO7zk3rCh/X6lsisUVJ1QgnSoD84CpI/RHp8ciJcZibRaEB32mGxAuAhyJLodYEB1REQn/P7Md/H4koybuUKhH/0VFfNDgH4eIo8BmCki95EcgQ/2/xWovYyEW/4GZLabxXl/hx0UvHnmXHfjvU6eWEx8OtuyUYhtABZ6n9NNBl5gJNx8tbCyukkwrHe6QLXFsqoaC0WHw+1riNxOADOGlX14Qb0OI256FJuhT00esqxFTxQGonk/gdVDT+op4ta4AEHiWsKqnlpo6ZFwcw+AgmOeSh00mOMFBHXCWlTg0gZEIy22SPE7wMiCYoDoP/YNI24jYRhhGHG3xhhGGEYYRhQ8d83WMFvDbA2zNQa7lBuNMBphNMJohNEIF39dGLE0YmnE0oilEUsjli4QMGJpxNKIpRFLF1JhbpZGLI1YGrE0YmnE0gUC+WI55j1UIEuuUaTHaSY7BeBh9+h5f7MEgWhmJNKyGyIx7+W5zzAYEJFws9OtOxKNpO4XBCQZibRththOO9+YPSXHCGIrY+va5tsB+zCAOWOFRCkBIYIOZfMphkJ/Tawoz34G4kUARTvaRwKsUgHCcRoQ2JHT+vXbNoX69lVa5XaNFStKBQgAl0GELav6UB8QfQ3g5XNfA+XjkfjixXKUChCK8l7X5Y5tBw48mbtLnaPh5u0CbAEwsVgxXsZL4NS4CeJzy6p+pb+Ou4CIxQ5PyuUq3yL4BiCj1hQ+zoz4F4IPc1pvTyYXO+3Ofc+A89oBQzIzH9VKPgBk1Wic6eMEhGOqOQLiHZ9v0i/x+Lwb+ay+58XF8U3YduuzFHlVgKUQTAc5yY1Xqti2GQsg7pwI10H2CORPQH9y9mzNvnSaBR2Krm5wkcipBSKBOooESdQKuAKQ8uGyZRSBcL56twC/UyRFqKOiJGVZ1e1FP06xF/LHa2tTgTlzJlQEAhNna40QgSggdQACQ8kDoNdqrC5gQwSGaVPIkvhVNCz6yr6/caP3fGfnzUtD8ae6YsRgRcZirVW2Lc9BY5NAHLvkNBKDue4cw+QPVlP1mkJ5I+HT3wBcOzjbJCPCq1ToANhIqp2JxMJWLx5Uz0D0F+O4b2eUn1liq1wQIkEI60A8MsAdRLQqW1766uuanwoBEY22BSF6l4hU5Y87ZjkQfxBMQUuKwqNqwq2Tbs1yxRg7YkDkT+ScPJnMzMoyxQU29DpA6gHMFeCYz+d7v6vr7EHnElN4caLC4ZbVhLwL0HH1ngO4F0BSa7ZrPfnSnj2zrxcrbKjj/wFPducAYoibwgAAAABJRU5ErkJggg=="
            alt
          />

          <p>特色课</p>
        </li>
        <li>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA8CAYAAADRy2JxAAAEDElEQVRoQ+2aTWhUVxTH/+fNRyYmE78WirTQFgwiXSjFjWDRlR+k0CIOlJiaVk1VNGrGmBZaOy24EXSmlBqk2inUyaRZKM3MFFxoNt1VQXEhiogSSKwL48ckMTNz7yk3VQntTN7Me2HezJv3tveee+7vnnP+9773LgFAaGjIPZ4eeVsCX4KwCZKXgEhTbRX3EP4mxiXp1b46tfHjYTPzIwX+/PloO4i/AfCGmcHKZcsAa6ALYnKiIxzY9dioX+pOxJZL4Eq1gM8AfeRyy/dPbG67bRg+mIxFwWg3OoBldkTMLFaf+qDthtE5UDDRNwrwUqMDWGnHkKvMwQ/GBAiVKW46K2sePhFjK6NnxrcDb67mncibyT7LbJ20d9LeWPJR0KZq352KLmX2vguX5n+9NDmAmB7kXqTvh7ftHLMlfFeqv5lYXARjZZ6cEAD+AmG/LeGDidhBAJFCxaBejEAYtCV8VzL2NTG+m1UJCE9rFx6AA29so7DeqtAhp6i0dyJvw33eibye2jtp76S99cptZAaO2ud5pXUEzxG82YvJOd4aEZtKsHEEr0YFb0oKXhP+cPvN/2ZhLaj9XUHYGGlpvVcz8OoTFAETID7pn/AeDwUCmfLAT/8Wxp9EuE7M2XKLHhMxMacl+NaLSW/qdCCQzjeHuU97IgbzOZGRx0T92OOp4TpZbvhlzc0cWr9B/VWe9efqnMIzIEAUnwR39ra0jpUbulR/cwf/b8TPC4/siWxqGy11Ilb0nxt4VWPA2Vx26mjko0+fWAFixKdpeJXqBPSJXKazmsCnr9WNj/wiGa16C5f/bK+T6ocuRhdoLs8KaFSv56Cc7STIzRqvJaJOMC/S8/1/eAUO/klkMz35In7093N+ofl6AV4PaC49B2VtZ3U9D00gqgOritV7q0vGnoAxX3UrJtW/+CO+OivkNfX9T2/wSm+nI6l4J0vZw0ATgfpFRhyLbC2s6l2D51uIKFHpYMXMj7YNDHjfdE++xW6PJ+eWwz9s2f5sNkNbwRezQjP7dCV/20Ccu2yLtC8V/lAy9o6LoWp+Qam2lda/ZNHqSJyZ59caf4ZEoNqjXzK8it7h5K/rNNbOMrCcqlj1DcGrPfTwYP97mov3QvJmAEuq8f6uMfiXxbtv4MdGX8PiZaRhviayPstqmqlegrYQcIBR/CVqU/CWwRZwfCQR382QYQDzitEjW8F3XD3jaRpp3AtCiIGFesGxFbyCDQ1FfemJuh2QfFqvBGwH/yrawVTfLkiEAW4oVAK2hVcl4H/o30PM3xYqAdvCqwxoH4r6Fo97PyFGb74SsDX8qxLoTsY/E1J+D0LDjEOZrAn46V1gtPFzxvSV1Je7AN2pCfjXJZCu3wqSx8H8yEXo+Qf3I4hni2PDwwAAAABJRU5ErkJggg=="
            alt
          />

          <p>一对一辅导</p>
        </li>
        <li>
          <img
            src="data:image/png;base64,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"
            alt
          />
          <p>工作日历</p>
        </li>
      </ul>
    </div>
    <!-- 导航结束 -->
    <!-- 首页列表开始 -->
    <div v-for="(item,index) in List" :key="index">
      <div class="nav" v-if="item.channel_info.type == 3">
        <ul>
          <h3>{{ item.channel_info.name }}</h3>
          <br />
          <!-- <van-cell> -->
          <li v-for="(v,i) in item.list" :key="i"   @click="showPopup">
            <div class="left">
              <img :src="v.teacher_avatar" alt />
            </div>
            <div class="right">
              <p class="nav-con">{{ v.teacher_name }}</p>
              <p class="content">{{ v.introduction }}</p>
            </div>
          </li>
          <!-- </van-cell> -->
        </ul>
      </div>

      <div class="cons" v-if="item.channel_info.type == 1">
        <ul>
          <h3>{{ item.channel_info.name }}</h3>
          <br />
          <li v-for="(j,k) in item.list" :key="k" v-detail="path" @click='statDetail(j.id)'>
            <p>{{ j.title }}</p>
            <br />
            <span>共{{j.total_periods }}课时</span>
            <br />
            <p v-for="(s,y) in j.teachers_list" :key="y">
              <img :src="s.teacher_avatar" alt />
              {{ s.teacher_name }}
            </p>
            <br />
            <hr />
            <br />
            <div class="bz">
              <span>已有{{ j.sales_num }}报名</span>
              <span class="mat">{{ j.price | priceShow }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="nav" v-if="item.channel_info.type == 4">
        <ul>
          <h3>{{ item.channel_info.name }}</h3>

          <br />
          <van-cell is-link @click="showPopup">
            <li v-for="(a,b) in item.list" :key="b">
              <div class="left">
                <img :src="a.teacher_avatar" alt />
              </div>
              <div class="right">
                <p>
                  {{ a.teacher_name }}
                  <span
                    style="color:red;font-size:16px;font-weight:bold;"
                  >{{ a.level_name }}</span>
                </p>
                <p>{{ a.introduction }}</p>
              </div>
            </li>
          </van-cell>
        </ul>
        <xf></xf>
      </div>
    </div>
    <!-- 首页列表结束 -->
    <!-- //点击名师阵容出现的面板 -->
    <van-popup v-model="show">
      <div class="tan">
        <img src="../assets/1594515660(1).png" alt />
        <h4>赶紧登陆一下吧</h4>
        <p style="margin-top:15px;margin-bottom:15px;">预约一对一辅导，浏览更多视频课程~~</p>
        <button class="btn">
          <router-link to="/home/wd" style="color:#fff;">立即登录</router-link>
        </button>
      </div>
    </van-popup>
    <!-- 悬浮面板结束 -->
  </div>
</template>

<script>
import axios from'axios'
export default {
   name:"sy",
  components: {
    
  },
  props: {},
  data() {
    return {
      path: "/detail",
      show: false,
      id: "",
      banner: [],
      List: []
    };
  },
  filters: {
    priceShow(val) {
      if (val == 0) {
        return "免费";
      } else {
        return `￥${(val / 100).toFixed(2)}`;
      }
    }
  },
  watch: {},
  computed: {},
  methods: {
    showPopup() {
      this.show = true;
    },
    //轮播图接口获取
    async AjaxSwiper() {
      let { data: res } = await this.$axios.get(
        "https://www.365msmk.com/api/app/banner"
      );
      console.log(res, 123);
      this.banner = res.data;
    },
    //首页数据列表获取
    async AjaxList() {
      let { data: res } = await this.$axios.get(
        "https://www.365msmk.com/api/app/recommend/appIndex"
      );
      console.log(res, 123);
      this.List = res.data;
    },
    //课程详情页
     statDetail(id){
          this.$router.push({
            path:'/detail',
            query:{
              id:id
            }
          })
     }






  },
  created() {
  },
  mounted() {
    this.AjaxSwiper();
    this.AjaxList();
  }
};
</script>
<style lang="scss" scoped>
// 外层盒子
.wrapper {
  width: 100%;
  height: 100%;
  background: #fafafa;
  font-size: 14px;
}
//轮播图
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 0.2rem;
  text-align: center;
  img {
    width: 100%;
    height: 200px;
  }
}
//导航悬浮
.menu {
  width: 100%;
  height: 95px;

  position: relative;
  top: -1rem;
  ul {
    width: 100%;
    height: 95px;
    display: flex;
    justify-content: space-around;
    li {
      width: 23%;
      background: #ffffff;
      border-radius: 0.2rem;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
      font-size: 0.14rem;
      text-align: center;
      padding-top: 15px;
      img {
        width: 50px;
        height: 40px;
        line-height: 20px;
        text-align: center;
      }
      p{
        font-size:16px;
      }
    }
  }
}
//首页列表
.nav {
  width: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 50px;
  ul {
    width: 100%;

    h3 {
      width: 100%;
      height: 20px;
      border-left: 5px solid orange;
      padding-left: 20px;
    }
    li {
      width: 100%;
      height:81px;
      background: #ffffff;
      // line-height:81px;
      display: flex;
      justify-content: space-around;
      align-items:center;
      margin-top: 10px;
      // background:orange;

      .left {
        width: 40px;
        height: 40px;
        margin-right: 15px;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          // margin-right:10px;
        }
      }
      .right {
        width: 100%;
        // height: 100%;
        overflow: hidden;

        .content {
          color:#ccc;
          width: 300px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .nav-con{
          font-size:18px;
          margin-left:5px;
        }
      }
    }
  }
}
//推荐课程
.cons {
  width: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
  ul {
    width: 100%;
    h3 {
      width: 100%;
      height: 20px;
      border-left: 5px solid orange;
      padding-left: 10px;
    }
    li {
      width: 345px;
      height: 190px;
      background: #ffffff;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: append;
      margin-top: 20px;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      p {
        font-size: 16px;
      }
      span {
        display: block;
        color: #d4d4d4;
      }
      .mat {
        color: green;
        font-size: 16px;
        font-weight: bold;
      }
      .bz {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
//明星讲师
.cont {
  width: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
  ul {
    width: 100%;
    h3 {
      width: 100%;
      height: 20px;
      border-left: 5px solid orange;
      padding-left: 10px;
    }
    li {
      width: 345px;
      height: 203px;
      background: #ffffff;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-top: 10px;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      p {
        font-size: 18px;
      }
      span {
        display: block;
        color: #d4d4d4;
      }
      .mat {
        color: green;
        font-size: 16px;
        font-weight: bold;
      }
      .bz {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
//悬浮面板立即登录
.btn {
  width: 250px;
  height: 40px;
  color: #ffffff;
  background: #fc5500;
  border: none;
  border-radius: 20px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  font-weight: normal;
  margin-left: 10px;
  margin-bottom: 10px;
}
//点击面板
.tan {
  width: 300px;
  text-align: center;
  border-radius: 20px;
  img {
    width: 300px;
    // margin-left:20px;
  }
}
h3 {
  padding: 0 !important;
  box-sizing: border-box !important;
}
</style>