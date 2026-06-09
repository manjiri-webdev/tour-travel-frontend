<template>
  <section class="booking-section">
    <div class="booking-inner">
      <div class="booking-left">
        <h2>{{ slice.primary.booking_title }}</h2>
        <p>{{ slice.primary.booking_description }}</p>
      </div>
      <div class="booking-right">
        <div class="booking-row">
          <select v-model="formData.location" class="booking-select">
            <option value="">Enter your pickup location</option>
            <option v-for="(item, index) in slice.primary.pickup_locations" :key="index" :value="item.location_name">{{ item.location_name }}</option>
          </select>
        </div>
        <div class="booking-row two-col">
          <input type="date" v-model="formData.date" class="booking-input" placeholder="Select date"/>
          <input type="tel" v-model="formData.mobile" class="booking-input" placeholder="Mobile number"/>
        </div>
        <div class="booking-row">
          <button class="booking-btn" @click="submitBooking" :disabled="loading">{{ loading ? 'Booking...' : slice.primary.booking_button_text || 'Book Now' }}</button>
        </div>
        <p v-if="successMsg" class="success-msg">{{ successMsg }}</p>
        <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps(['slice'])
const formData = ref({
  location: '',
  mobile: '',
  date: ''
})
const loading = ref(false)
const successMsg = ref('')
const errorMsg = ref('')
const submitBooking = async () => {
  if (!formData.value.location || !formData.value.mobile || !formData.value.date) {
    errorMsg.value = 'Please fill all fields!'
    return
  }
  loading.value = true
  errorMsg.value = ''
  successMsg.value = ''
  try {
    await $fetch("/api/bookings/create", {
      method: 'POST',
      body: {
        pickup_location: formData.value.location,
        travel_date: formData.value.date,
        mobile_number: formData.value.mobile,
      }
    })
    successMsg.value = 'Booking confirmed! We will contact you soon.'
    formData.value = { location: '', mobile: '', date: '' }
  } catch (error) {
    errorMsg.value = 'Something went wrong. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>