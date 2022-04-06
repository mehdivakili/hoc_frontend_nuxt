<template>
  <div class="input-div">
    <input @input="handleInput" required :class="[(error)?'text-error':'']" v-model="content" :type="(password)? 'password': 'text'"
           :name="name"
           :placeholder="placeholder">
    <div class="icon">
      <v-icon color="#004948" size="40px">mdi-{{ icon }}</v-icon>
    </div>

    <div class="left-icon">
      <v-icon v-show="error" color="red"  size="30px">mdi-alert-circle-outline</v-icon>
    </div>
    <span v-show="error && showError">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    password: {default: false},
    value: {},
    icon: {},
    name: {},
    placeholder: {},
    error: {},
    showError: {default: false}
  },
  data() {
    return {
      content: this.value
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', this.content)
    }
  }


}
</script>

<style scoped>
input {
  background: white;
  border-radius: 15px;
  height: 60px;
  line-height: 40px;
  font-size: 25px;
  padding-right: 70px;
  width: 500px;
}
input:focus{
  outline: none;
}

.input-div {
  position: relative;
  margin-top: 30px;

}

.icon {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  color: #004948;
  background: rgba(169, 227, 225, 0.9);

  display: flex;
  justify-content: center;
}
.left-icon {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}
.text-error{
  border: 2px solid rgba(255, 0, 0,1);
  color: red;
}
</style>
