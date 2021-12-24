<template>
  <div class="">
    <a-upload
      v-model:file-list="fileList"
      name="file"
      :multiple="false"
      @change="handleChange"
      @preview="onPreview"
    >
      <a-button>
        <upload-outlined></upload-outlined>
        Click to Upload
      </a-button>
    </a-upload>

    <input type="file" name="" @change="onImport($event)" />

    <table cellpadding="0" cellspacing="0" border="1">
      <thead>
        <tr>
          <th rowspan="2">1</th>
          <th rowspan="2">2</th>
          <th rowspan="2">3</th>
          <th rowspan="2">4</th>
          <th rowspan="2">5</th>
          <th colspan="3">6</th>
        </tr>

        <tr>
          <th>1</th>
          <th>1</th>
          <th>1</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td rowspan="3">1</td>
          <td rowspan="3">11</td>
          <td rowspan="3">111</td>
          <td rowspan="3">1111</td>
          <td rowspan="3">11111</td>
          <td>1</td>
          <td>2</td>
          <td>1</td>
        </tr>

        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>

        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <br />
    <table cellpadding="0" cellspacing="0" border="1">
      <thead>
        <tr>
          <th>a</th>
          <th>b</th>
          <th>c</th>
        </tr>
      </thead>

      <tbody>
        <template v-for="(item, index) in arr" :key="index">
          <tr>
            <td
              v-for="(val, key) in item"
              :key="key"
              :rowspan="key === 'c' ? '1' : (item.c && item.c.length) || '1'"
            >
              <div>
                {{ key === "c" && item.c.length > 0 ? val[0] : val }}
              </div>
            </td>
          </tr>

          <template v-if="item.c && item.c.length > 1">
            <tr v-for="(item, index) in item.c.slice(1)" :key="index">
              <td>
                <div>{{ item }}</div>
              </td>
            </tr>
          </template>
        </template>
      </tbody>
    </table>

    <button @click="addCount">add</button>
    <div v-html="showTtml"></div>
  </div>
</template>

<script lang="ts">
interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  url?: string;
}

interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}

import { defineComponent, ref } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";

import Xlsx from "xlsx";

export default defineComponent({
  name: "",

  components: {
    UploadOutlined,
  },

  setup() {
    console.log("Xlsx", Xlsx);
    const fileList = ref();
    const pxFiles = ref();
    const showTtml = ref("");

    const handleChange = (info: FileInfo) => {
      // console.log('fileList', fileList.value);

      let temp = fileList.value[0];

      console.log("temp", temp);

      console.log("11", temp.name);

      // let workbook = Xlsx.read(temp);

      // console.log('workbook', workbook);
    };

    const onPreview = () => {};

    const onImport = (obj) => {
      console.log("obj", obj.target.files);
      let f = obj.target.files[0];

      let reader = new FileReader();

      reader.onload = function (e) {
        let data = e.target && e.target.result;
        let wb = Xlsx.read(data, {
          type: "binary",
        });
        console.log("wb", wb);
        let workSheet = wb.Sheets[wb.SheetNames[0]];
        showTtml.value = Xlsx.utils.sheet_to_html(workSheet);
      };
      reader.readAsBinaryString(f);
    };

    let arr = [
      {
        a: 1,
        b: 2,
        c: 3,
      },
      {
        a: 1,
        b: 2,
        c: [3, 4],
      },
      {
        a: 1,
        b: 2,
        c: [3, 4, 5],
      },
    ];

    let arrKeys = Object.keys(arr);

    function addCount() {}

    return {
      fileList,
      pxFiles,
      showTtml,
      arr,
      arrKeys,

      handleChange,
      onPreview,
      onImport,
      addCount,
    };
  },
});
</script>

<style scoped></style>
