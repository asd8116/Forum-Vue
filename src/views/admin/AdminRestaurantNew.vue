<template>
  <div class="container py-5">
    <AdminRestaurantForm @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import AdminRestaurantForm from '@/components/admin/AdminRestaurantForm.vue'

export default {
  methods: {
    handleAfterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    }
  },
  components: {
    AdminRestaurantForm
  }
}
</script>