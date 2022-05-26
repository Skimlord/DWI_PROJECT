<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<template>
  <main class="flex justify-center">
    <div
      class="text-sm font-semibold flex justify-evenly items-center py-10 w-[50rem]"
    >
      <div>
        <img src="../assets/UT.png" alt="logo" class="w-[5rem]" />
      </div>
      <div class="text-sky-600">Home</div>
      <div
        class="cursor-pointer transition ease-in-out delay-150 text-sky-600 hover:-translate-y-1 hover:scale-110 hover:text-blue-400 duration-300"
      >
        About
      </div>
      <div
        class="cursor-pointer transition ease-in-out delay-150 text-sky-600 hover:-translate-y-1 hover:scale-110 hover:text-blue-400 duration-300"
      >
        Portfolio
      </div>
      <div
        class="cursor-pointer transition ease-in-out delay-150 text-sky-600 hover:-translate-y-1 hover:scale-110 hover:text-blue-400 duration-300"
      >
        Pages
      </div>
      <div
        class="cursor-pointer transition ease-in-out delay-150 text-sky-600 hover:-translate-y-1 hover:scale-110 hover:text-blue-400 duration-300"
      >
        Blog
      </div>
      <div
        class="cursor-pointer transition ease-in-out delay-150 text-sky-600 hover:-translate-y-1 hover:scale-110 hover:text-blue-400 duration-300"
      >
        Contact
      </div>
    </div>
    <!-- <div class="bg-gradient-to-r from-cyan-500 to-blue-500 ... h-20"></div> -->
  </main>
</template>
