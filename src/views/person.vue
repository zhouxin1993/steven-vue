<template>
  <section>
    <el-table stripe :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
        <template scope="scope">
          <el-input
            size="small"
            v-model="scope.row.name"
            v-show="scope.row.showedit"
            placeholder="请输入内容"
          ></el-input>
          <span v-show="!scope.row.showedit">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small"  v-show="!scope.row.showedit" @click="edit(scope.row)">编辑</el-button>
          <el-button type="text" size="small" v-show="scope.row.showedit"  @click="save(scope.row)">保存</el-button>
        </template>
      </el-table-column>
    </el-table>
    <child v-if="childData.show" :childData="childData"></child>
  </section>
</template>

<script>
import child from "./dialogtest";
export default {
  name: "Person",
  data() {
    return {
      dialogVisible: false,
      childData: {},
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          showedit: false,
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          showedit: false,
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          showedit: false,
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          showedit: false,
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  components: {
    child,
  },
  mounted() {},
  methods: {
    handleClick(val) {
      console.log(val, "val");
      this.dialogVisible = true;
      this.childData = {
        show: this.dialogVisible,
        name: val.name,
        address: val.address,
        date: val.date,
      };
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    edit(e){
      e.showedit = true;
      console.log(
        e,'e'
      )
    },
    save(e){
      e.showedit = false;
    }
  },
};
</script>

<style scoped >
.el-header {
  background-color: #048bd1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>