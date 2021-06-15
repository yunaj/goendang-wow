<template>
  <div>
    <h1>여기서 vue3의 기본기를 익힙니다.</h1>
    <p>Hello, {{ state.test }}</p>
    <p>Hello, {{ test2 }}</p>
    <p>Hello, {{ test3 }}</p>
    <div><span>이름</span><input type="text" v-model="state.username"></div>
    <div><span>비번</span><input type="password" v-model="state.password"></div>
    <div><button @click="changeName('ABDFfsefs')">이름 바꾸기</button></div>
  </div>

</template>

<script>
import { reactive, computed } from "vue"
export default {
  name: "RouterTest",
  data() {
    return {
      test2: 'test2'
    }
  },

  /**
   *
   * @returns {{changeName: changeName, test3: string, state: UnwrapNestedRefs<{password: string, test: ComputedRef<string>, username: string}>}}
   * 더 이상 data로 관리하지 않음. 별도의 실행컨텍스트를 만들어서 관리.
    이로인한 이점은 더이상 this. 뭐시기로 접근할 필요가 없어진다
    다만 아직 reactive와 ref의 차이가 명확히 이해가 되지 않음.
   */
  // TODO
  setup() {
    const state = reactive({
      username: 'hoDer',
      password: 'sefsefsef',
      test: computed(() => state.username.toLowerCase()),
    });
    const test3 = 'test3';
    const changeName = (name) => {
      state.username = name;
    }
    return {
      state,
      test3,
      changeName
    }
  }
}
</script>

<style scoped>

</style>