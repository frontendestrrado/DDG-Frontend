<template>
  <div class="MemberDetail from_content">
    <van-cell-group>
      <van-image
        width="80"
        height="80"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <van-field
        ref="name"
        center
        label="Name"
        :readonly="true"
        v-model="info.name"
      >
      </van-field>
      <van-field
        ref="member ID"
        center
        label="member ID"
        :readonly="true"
        v-model="info.name"
      >
      </van-field>
      <van-field
        ref="position"
        center
        label="position"
        :readonly="true"
        v-model="info.name"
      >
      </van-field>
      <van-field
        ref="phone"
        center
        label="phone"
        :readonly="true"
        v-model="info.name"
      >
      </van-field>
      <van-field
        ref="email"
        center
        label="email"
        :readonly="true"
        v-model="info.name"
      >
      </van-field>
      <van-field
        ref="enrollment date"
        center
        label="enrollment date"
        :readonly="true"
        v-model="info.name"
      >
      </van-field>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        name: 'bing'
      }
    }
  },
}
</script>

<style scoped>

</style>