<template>
  <div class="oto">
    <!-- 顶部 -->
    <div class="sl_head">
      <p class="p1">
        <van-icon @click="fanhui" name="arrow-left" />
      </p>
      <p>一对一辅导</p>
      <p class="p1">
        <van-icon name="search" />
      </p>
    </div>
    <!-- 切换的导航标题 -->
    <div>
      <van-tabs v-model="active" title-active-color="#fb5500">
        <van-tab title="选择上课时间" click="tooglecon">
          <div>
            <van-calendar
              v-show="iscon"
              title="日期"
              :poppable="false"
              :show-confirm="false"
              :style="{ height: '250px' }"
            />
          </div>
          <!-- 时段 -->
          <div class="sl_time">
            <p>时段</p>
            <div class="sl_time_con">
              <div class="left">
                <button @click="chuxian">开始时间</button>
                <van-icon name="clock-o" />
              </div>
              <div class="right">
                <button @click="chuxian">结束时间</button>
                <van-icon name="clock-o" />
              </div>
            </div>
            <!-- 点击开始结束时间出现的遮罩层 -->
            <van-popup v-model="show" position="bottom" :style="{ height: '43%' }">
             <van-datetime-picker
              v-model="currentTime"
              type="time"
              title="选择时间"
              :min-hour="10"
              :max-hour="20"
            />
            </van-popup>
           
          </div>
        </van-tab>
        <van-tab title="选择老师条件">内容 2</van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      active: 2,
      iscon: true,
      show:false,
      currentTime: '00',
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
    tooglecon() {
      // this.iscon=true   todo
    },
    fanhui() {
      this.$router.push({
        path: "/yk"
      });
    },
    chuxian(){
      this.show=true
    }
  }
};
</script>

<style scoped>
.oto {
  height: 100%;
  background-color: #f0f2f5;
}
.sl_head {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #595959;
  justify-content: center;
  border-bottom: 1px solid #f5f5f5;
  background-color: #fff;
}
.sl_head > p:nth-of-type(2) {
  margin: 0 30%;
}
.p1 {
  font-size: 22px;
  font-weight: 600;
}
.sl_time {
  font-size: 12px;
  width: 100%;
  height: 80px;
  border-radius: 5px;
  background-color: #fff;
  margin-top: 10px;
  padding-top: 20px;
}
.sl_time > p {
  margin-bottom: 20px;
  margin-left: 20px;
  color: #757575;
}
.sl_time_con {
  display: flex;
  justify-content: center;
}
.sl_time > .sl_time_con > div {
  border: 1px solid #bfbfbf;
  width: 40%;
  height: 32px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.sl_time > .sl_time_con > div > button {
  width: 70%;
  height: 28px;
  border: none;
  outline: none;
  background-color: #ebebe4;
  color: #757575;
  text-align: left;
}
.sl_time > .sl_time_con > div:nth-child(1) {
  margin-right: 20px;
}
.sl_time > .sl_time_con > div:nth-child(2) {
  margin-left: 20px;
}
</style>