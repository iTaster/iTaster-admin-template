<template>
  <el-container>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item :label="$t('objName')">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item :label="$t('objType')">
        <el-checkbox-group v-model="form.type">
          <el-checkbox v-for="type in typeObj" :label="type" :key="type" :type="type" name="type">
            {{ $t(type) }}
          </el-checkbox>
        </el-checkbox-group>
        <el-table
          v-show="form.type.length!==0"
          :data="tableData"
          style="width: 100%">
          <el-table-column prop="name" :label="$t('type')" width="80" align="center">
            <template slot-scope="scope">
              {{ $t(scope.row.name) }}
            </template>
          </el-table-column>
          <el-table-column v-for='desc in form.type' :label="$t(desc)" :key='desc' :desc="desc" header-align="center">
            <template slot-scope="scope">
              <!--todo: 如果仅文字，取消下面注解-->
              <!--{{scope.row[desc]}}-->
              <el-input v-model="scope.row[desc]" clearable></el-input>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
      <div>
        <p>{{ $t('objName') }}{{ form.name }}</p>
        <p>{{ $t('objType') }} {{ form.type }}</p>
        <p>tableData: {{ tableData }}</p>
      </div>
    </el-form>
  </el-container>
</template>

<script>
  export default {
    name: "A",
    data() {
      return {
        typeObj: ['type1', 'type2', 'type3', 'type4', 'type5', 'type6', 'type7'],
        form: {
          name: '',
          type: [],
        },
        tableData: [
          {
            name: 'order',
            type1: 'A',
            type2: 'B',
            type3: 'C',
            type4: 'D',
            type5: 'E',
            type6: 'F',
            type7: 'G',
          },
          {
            name: 'desc',
            type1: '',
            type2: '',
            type3: '',
            type4: '',
            type5: '',
            type6: '',
            type7: '',
          },
        ],
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>

</style>
