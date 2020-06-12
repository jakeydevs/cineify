<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <div class="max-w-screen-xl mx-auto">

      <div class="flex justify-between items-center py-5">
        <div>
          <h1 class="font-bold text-lg">
            🎥 Cineify
          </h1>
        </div>
        <div>
          <h2 class="text-sm text-gray-500">
            Created by <a href='https://jakey.dev' class='text-blue-500'>jakey.dev</a> - read the build process <a href='' class='text-blue-500'>here</a>
          </h2>
        </div>
      </div>

      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/style/app.scss";
</style>
