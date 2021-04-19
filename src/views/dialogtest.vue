<template>
  <el-dialog
    title="提示"
    :visible.sync="childData.show"
    width="30%"
    :before-close="handleClose"
  >
    <span>{{ childData.date }}</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="childData.show = false">取 消</el-button>
      <el-button type="primary" @click="childData.show = false"
        >确 定</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "diachild",
  data() {
    return {
      propData: {},
    };
  },
  //     props: {
  //     childData: {
  //       type: Object,
  //       required: true,
  //       default() {
  //         return {
  //           show: false,
  //           data: {},
  //         };
  //       },
  //     },
  //   },
  props: ["childData"],
  watch: {
    childData: {
      immediate: true,
      handler: function () {
        console.log(this.childData, "childData112");
      },
    },
  },
  data() {
    return {};
  },
  created() {
    console.log(this.childData, "childData");
    this.childData.address = "oooo";
    this.propData = this.childData;
  },
  methods: {
    handleClose() {
      this.childData.show = false;
    },
  },
};
</script>