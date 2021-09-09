<template>
  <div>
    <span>{{code}}</span>
  </div>
</template>

<script>
import api from '@/axios/api'

export default {
  name: "first",
  data() {
    return {
      it: {},
      code:''
    }
  },
  created() {
    api.getList().then((res) => {
      console.log(res)
      this.code = res.data.code
    })

  },
  methods: {
    getList(){
      this.it = api.getList();
    }
  }
}


</script>

