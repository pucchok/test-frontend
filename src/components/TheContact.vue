<template>
  <section class="text-gray-600 body-font relative">
    <div class="container px-6 py-2 mx-auto">
      <div class="flex flex-col text-center w-full mb-4">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-black dark:text-white">Contact Us</h1>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          <div class="p-2 w-full">
            <button class="btn btn-primary px-16 flex mx-auto">送信</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
