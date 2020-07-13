<template>
  <div class="detail">
    <van-nav-bar title="课程详情" left-arrow @click-left="toGo">
      <template #right>
        <van-icon name="cluster" size="18" />
      </template>
    </van-nav-bar>
    <button class="btn">立即报名</button>
    <div class="stat_con">
      <p>{{ Start.title }}</p>

      <span class="stat_logo">
       
        <van-icon   v-if="show1 == 0"
          name="star"
          size="20"
           color="#ccc"
          @click="Changeclick1" 
          
        />
        <van-icon   v-if="show1 == 1"
          name="star" 
          size="20"
          @click="Changeclick2"
           color="red"
        />
      </span>
      <span class="stat_logo2">{{ Start.price | priceShow }}</span>
      <p class="stat_bz">
        <span>共{{ Start.status }}课时</span>
        <span>{{ Start.sales_num }}人报名</span>
      </p>
    </div>
    <div class="tea" v-for="(item, index) in Tea" :key="index">
      <h3>教学团队</h3>
      <p>
        <img :src="item.teacher_avatar" alt />
      </p>
      <p class="name">{{ item.teacher_name }}</p>
    </div>
    <div class="tat_cj">
      <h3>课程介绍</h3>
      <p v-html="Start.course_details">{{ Start.course_details }}</p>
    </div>
    <div class="tat_cj">
      <h3>课程大纲</h3>
      <p v-html="Start.course_details">{{ Start.course_details }}</p>
    </div>
    <div data-v-0b37a264 id="com" class="teat_comment">
      <h3>课程评论</h3>
      <img src="../assets/微信图片_20200712170039.png" alt />
      <p>暂无评论</p>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      id: "",
      Start: [],
      Tea: [],
      value: 1,
      flag: false,
      activeIndex: 0,
      data1:'1',
      data2:'',
      show1:0,
      collect_id:""

    };
  },
  watch: {},
  filters: {
    priceShow(val) {
      if (val == 0) {
        return "免费";
      } else {
        return (val / 100).toFixed(2);
      }
    },
  },
  computed: {},
  methods: {
    toGo() {
      this.$router.go(-1);
    },
    async Changeclick1() {
      let { data: res } = await this.$http.post("https://365msmk.com/api/app/collect", {
        course_basis_id: this.id,
        type: 1,
      });
      this.$axios.get(
        `https://365msmk.com/api/app/courseInfo/basis_id=${this.id}`
      )
      .then((msg) => {
        // console.log(msg.data.data.info);
        this.show1 = msg.data.data.info.is_collect
      });
    },
     async Changeclick2(){
     console.log(this.collect_id)
      let { data: res } = await this.$http.put(`/api/app/collect/cancel/${this.collect_id}/1`);
      this.$axios.get(
        `https://365msmk.com/api/app/courseInfo/basis_id=${this.id}`
      )
      .then((msg) => {
        // console.log(msg.data.data.info);
        this.show1 = msg.data.data.info.is_collect
      });
    },
  },
  created() {},
  mounted() {
    // console.log(this.$route.query.id);
    this.id = this.$route.query.id;
    this.$axios
      .get(
        `https://365msmk.com/api/app/courseInfo/basis_id=${this.id}`
      )
      .then((msg) => {
        console.log(msg)
        // console.log(msg.data.data.info);
        this.Start = msg.data.data.info;
        this.Tea = msg.data.data.teachers;
        this.collect_id = msg.data.data.info.collect_id
        // console.log(this.Start);
        // console.log(msg)
        this.show1 = msg.data.data.info.is_collect
      });
  },
};
</script>
<style lang="scss" scoped>
.detail {
  background: #fafafa;
  width: 100%;
}
.btn {
  width: 100%;
  height: 40px;
  background: orange;
  border: none;
  color: #ffffff;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
}
.stat_con {
  width: 100%;
  height: 150px;
  background: #ffffff;
  position: relative;
  padding-top: 30px;
  padding-left: 30px;
  box-sizing: border-box;

  p {
    width: 80%;
    font-size: 16px;
  }
  .stat_logo {
    display: inline-block;
    margin-left: 20px;
    position: absolute;
    top: 0;
    right: 10px;
  }
  .stat_logo2 {
    color: green;
    font-size: 16px;
  }
  .stat_bz {
    color: #ccc;
    font-size: 14px;
  }
}
//教师团队
.tea {
  width: 100%;
  height: 200px;
  margin-top: 15px;
  background: #ffffff;
  padding-left: 30px;
  padding-top: 30px;
  box-sizing: border-box;

  h3 {
    width: 100%;
    height: 40px;
    line-height: 40px;

    font-size: 20px;
    font-weight: normal;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .name {
    font-size: 16px;
  }
}
//课程大纲
.tat_cj {
  width: 100%;
  height: 150px;
  margin-top: 15px;
  background: #ffffff;
  padding-left: 30px;
  padding-top: 30px;
  box-sizing: border-box;

  h3 {
    width: 100%;
    height: 40px;
    line-height: 40px;

    font-size: 18px;
    font-weight: normal;
  }
  p {
    font-size: 14px;
    color: #d4d4d4;
  }
}
//课程评论
.teat_comment {
  width: 100%;
  height: 350px;
  margin-top: 15px;
  background: #ffffff;
  padding-left: 20px;
  box-sizing: border-box;
  h3 {
    width: 100%;
    height: 40px;
    line-height: 40px;

    font-size: 18px;
    font-weight: normal;
  }
  img {
    width: 60%;

    display: inline-block;
    margin-left: 60px;
    //  height:100%;
  }
  p {
    margin-left: 120px;
    font-size: 16px;
  }
}
.act {
  color: darkorange;
}
.leav {
  color: #ccc;
}
</style>
