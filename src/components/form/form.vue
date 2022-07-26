<template>
  <div class="form">
    <el-form
      class="el-form"
      label-width="labelWidth"
      :model="formData"
      :rules="rules"
    >
      <el-form-item
        class="el-form-item"
        :label="item.label"
        v-for="item in formConfig"
        :key="item.label"
        :prop="item.prop"
      >
        <!-- text、number、textarea -->
        <template v-if="item.type === 'input'">
          <el-input
            class="form-input"
            :type="item.inputType"
            v-model="formData[item.prop]"
            v-bind="item.addtion"
          ></el-input>
        </template>
        <!-- select-->
        <template v-if="item.type === 'select'">
          <el-select
            class="form-select"
            v-model="formData[item.prop]"
            v-bind="item.addtion"
          >
            <el-option
              label="item.label"
              value="item.value"
              v-for="select in item.options"
              :key="select.value"
            ></el-option>
          </el-select>
        </template>
        <!-- checkBox -->
        <template v-if="item.type === 'checkbox'">
          <el-checkbox-group
            class="form-checkbox"
            v-model="formData[item.prop]"
            v-bind="item.addtion"
          >
            <el-checkbox
              label="checkItem.label"
              name="checkItem.name"
              v-for="checkItem in item.checkoutBoxs"
              :key="checkItem.value"
            ></el-checkbox>
          </el-checkbox-group>
        </template>
        <!-- radio -->
        <template v-if="item.type === 'radio'">
          <el-radio-group
            class="form-radio"
            v-model="formData[item.prop]"
            v-bind="item.addtion"
          >
            <el-radio
              label="radioItem.label"
              v-for="radioItem in item.radios"
              :key="radioItem.label"
            ></el-radio>
          </el-radio-group>
        </template>
        <!-- switch -->
        <template v-if="item.type === 'switch'">
          <el-switch
            class="form-switch"
            v-model="formData[item.prop]"
            v-bind="item.addtion"
          ></el-switch>
        </template>
        <!-- inputNumber -->
        <template v-if="item.type === 'inputNumber'">
          <el-input-number
            class="form-input-number"
            v-model="formData[item.prop]"
            v-bind="item.addtion"
          ></el-input-number>
        </template>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    labelWidth: {
      type: String, // "80px"
      default: "80px",
    },
    formConfig: {
      type: Array,
      default: () => [],
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      formData: {},
    };
  },
};
</script>

<style scoped></style>
