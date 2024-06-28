<script setup>
import { ref } from "vue";
const itemMenu = ["SHOP", "COLLECTIVE", "DESIGNER", "ABOUT US", "CONTACT"];
const imgs = ["product-2.png","product-3.png","product-4.png","product-5.png","product-6.png",]
const count = ref(0);
</script>

<template>
  <div class="font-sans text-gray-900">
    <header class="flex items-center border-b-2 border-gray-900/20">
      <div class="flex items-center justify-between flex-1 pl-20 pr-4">
        <a href="">
          <svg
            width="71"
            height="33"
            viewBox="0 0 71 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99 6.35C8.23 6.35 6.68 6.72 5.34 7.46C4.02 8.18 3 9.18 2.28 10.46C1.56 11.72 1.2 13.15 1.2 14.75C1.2 16.31 1.54 17.74 2.22 19.04C2.92 20.34 3.92 21.37 5.22 22.13C6.54 22.89 8.08 23.27 9.84 23.27C10.68 23.27 11.49 23.18 12.27 23C13.05 22.82 13.92 22.54 14.88 22.16L15.3 21.98L14.34 19.61L13.92 19.79C12.52 20.31 11.33 20.57 10.35 20.57C8.43 20.57 6.92 20.04 5.82 18.98C4.74 17.9 4.2 16.48 4.2 14.72C4.2 13.66 4.43 12.69 4.89 11.81C5.35 10.93 6.01 10.24 6.87 9.74C7.75 9.22 8.77 8.96 9.93 8.96C10.53 8.96 11.1 9 11.64 9.08C12.18 9.14 12.85 9.32 13.65 9.62L14.1 9.77L15.09 7.46L14.61 7.28C13.13 6.66 11.59 6.35 9.99 6.35ZM23.0756 23.27C24.2556 23.27 25.2956 23.02 26.1956 22.52C27.0956 22 27.7856 21.29 28.2656 20.39C28.7656 19.49 29.0156 18.45 29.0156 17.27C29.0156 15.45 28.4756 14 27.3956 12.92C26.3356 11.84 24.9056 11.3 23.1056 11.3C21.3056 11.3 19.8656 11.84 18.7856 12.92C17.7056 13.98 17.1656 15.44 17.1656 17.3C17.1656 18.46 17.4056 19.49 17.8856 20.39C18.3856 21.29 19.0756 22 19.9556 22.52C20.8556 23.02 21.8956 23.27 23.0756 23.27ZM23.0756 13.55C23.9156 13.55 24.6156 13.88 25.1756 14.54C25.7556 15.18 26.0456 16.1 26.0456 17.3C26.0456 18.48 25.7656 19.39 25.2056 20.03C24.6656 20.67 23.9556 20.99 23.0756 20.99C22.2356 20.99 21.5356 20.67 20.9756 20.03C20.4156 19.37 20.1356 18.46 20.1356 17.3C20.1356 16.12 20.4156 15.2 20.9756 14.54C21.5556 13.88 22.2556 13.55 23.0756 13.55ZM30.8363 14H36.2062L30.8363 21.53V23H40.2562V20.57H34.6462L40.0462 13.01V11.48H30.8363V14ZM46.2225 23.09L43.6125 29.18H46.8225L53.8725 11.48H50.8725L47.7825 20.33L44.3325 11.48H41.0625L46.2225 23.09ZM68.5472 10.85C68.5472 9.97 68.3872 9.16 68.0672 8.42C67.7672 7.68 67.3272 7.03 66.7472 6.47C66.1872 5.95 65.5372 5.55 64.7972 5.27C64.0572 4.99 63.2572 4.85 62.3972 4.85C61.5172 4.85 60.6972 4.99 59.9372 5.27C59.1972 5.55 58.5572 5.95 58.0172 6.47C57.4372 7.03 56.9872 7.68 56.6672 8.42C56.3672 9.16 56.2172 9.97 56.2172 10.85C56.2172 11.75 56.3672 12.57 56.6672 13.31C56.9872 14.05 57.4372 14.69 58.0172 15.23C58.5572 15.77 59.1972 16.18 59.9372 16.46C60.6972 16.74 61.5172 16.88 62.3972 16.88C63.2572 16.88 64.0572 16.74 64.7972 16.46C65.5372 16.18 66.1872 15.77 66.7472 15.23C67.3272 14.69 67.7672 14.05 68.0672 13.31C68.3872 12.57 68.5472 11.75 68.5472 10.85ZM67.2272 10.85C67.2272 12.35 66.7872 13.53 65.9072 14.39C65.0272 15.23 63.8572 15.65 62.3972 15.65C60.9372 15.65 59.7672 15.23 58.8872 14.39C58.0072 13.53 57.5672 12.35 57.5672 10.85C57.5672 9.41 58.0172 8.24 58.9172 7.34C59.7772 6.52 60.9372 6.11 62.3972 6.11C63.8572 6.11 65.0172 6.52 65.8772 7.34C66.7772 8.24 67.2272 9.41 67.2272 10.85ZM64.8872 9.56C64.8872 8.98 64.6872 8.51 64.2872 8.15C63.8872 7.79 63.3772 7.61 62.7572 7.61H60.2072V14H61.2872V11.57H62.6072L63.7472 14H64.9172L63.6272 11.36C64.4672 11.04 64.8872 10.44 64.8872 9.56ZM63.8672 9.59C63.8672 9.97 63.7272 10.25 63.4472 10.43C63.1672 10.61 62.8272 10.7 62.4272 10.7H61.2872V8.6H62.7272C63.0872 8.6 63.3672 8.69 63.5672 8.87C63.7672 9.05 63.8672 9.29 63.8672 9.59Z"
              fill="#17183B"
            />
          </svg>
        </a>
        <nav class="flex space-x-6">
          <a
            class="text-lg font-bold border-b-2 border-transparent hover:border-gray-900 transition-all duration-300"
            href=""
            v-for="item in itemMenu"
            :key="item"
          >
            {{ item }}</a
          >
        </nav>
        <div class="flex">
          <button class="h-[68px] px-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12H20"
                stroke="#17183B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 6H17"
                stroke="#17183B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 18H16"
                stroke="#17183B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button class="h-[68px] px-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="#17183B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                opacity="0.5"
                d="M20.9999 21L16.6499 16.65"
                stroke="#17183B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            class="h-[68px] px-6 border-l-2 border-gray-900/20 flex justify-center items-center"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M15 22C14.4477 22 14 21.5523 14 21C14 20.4477 14.4477 20 15 20C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22Z"
                stroke="#17183B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                opacity="0.5"
                d="M4 22C3.44772 22 3 21.5523 3 21C3 20.4477 3.44772 20 4 20C4.55228 20 5 20.4477 5 21C5 21.5523 4.55228 22 4 22Z"
                stroke="#17183B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23 1H19L16.32 14.39C16.2286 14.8504 15.9781 15.264 15.6125 15.5583C15.2468 15.8526 14.7893 16.009 14.32 16H4.6C4.1307 16.009 3.67318 15.8526 3.30754 15.5583C2.94191 15.264 2.69145 14.8504 2.6 14.39L1 6H18"
                stroke="#17183B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
    <main class="pt-10 pb-12 pl-20">
      <div class="w-full flex justify-between">
        <div class="flex flex-col w-1/3 space-y-8">
          <a href="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M23.04 12.48H0.959961"
                  stroke="#17183B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.75996 17.28L0.959961 12.48L5.75996 7.67999"
                  stroke="#17183B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <div class="text-lg font-semibold">
            <span class="text-gray-900/20">Chair&nbsp;</span>
            <span>/ Meryl Lourge Chair</span>
          </div>
          <h1 class="text-6xl font-semibold">Meryl Lourge Chair</h1>
          <div class="flex items-center justify-between">
            <p class="text-4xl font-medium">$149.99</p>
            <div class="flex space-x-2 items-center justify-center">
              <div class="flex space-x-1">
                <a href="" v-for="i in 5" :key="i">
                  <svg
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.73467 0.502901C6.84723 0.289557 7.15277 0.289558 7.26533 0.502902L9.0707 3.92471C9.11411 4.00699 9.19323 4.06447 9.28489 4.08033L13.0971 4.73994C13.3348 4.78106 13.4292 5.07165 13.2611 5.24463L10.5647 8.01904C10.4998 8.08575 10.4696 8.17876 10.4828 8.27083L11.0336 12.1003C11.0679 12.3391 10.8207 12.5187 10.6042 12.4122L7.13237 10.7051C7.0489 10.664 6.9511 10.664 6.86763 10.7051L3.39576 12.4122C3.1793 12.5187 2.93211 12.3391 2.96644 12.1003L3.51716 8.27083C3.5304 8.17876 3.50018 8.08575 3.43534 8.01904L0.738899 5.24463C0.57078 5.07165 0.665199 4.78106 0.902885 4.73994L4.71511 4.08033C4.80677 4.06447 4.88589 4.00699 4.9293 3.92471L6.73467 0.502901Z"
                      fill="#FFC41F"
                    />
                  </svg>
                </a>
              </div>
              <span class="font-semibold text-[18px]"
                >4.6 / 5.0 <span class="text-gray-900/30">(556)</span></span
              >
            </div>
          </div>
          <p class="text-[19px] font-semibold leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            totam cum officia deserunt qui incidunt asperiores impedit ut,
            quidem est nihil. Iusto, harum fuga. Nulla quaerat cum alias
            deleniti sit!
          </p>
          <div class="flex space-x-5">
            <button
              class="w-5 h-5 rounded-full bg-[#58737d] hover:ring-4 hover:ring-gray-900/20"
            ></button>
            <button
              class="w-5 h-5 rounded-full bg-[#58737d] hover:ring-4 hover:ring-gray-900/20"
            ></button>
            <button
              class="w-5 h-5 rounded-full bg-[#545454] hover:ring-4 hover:ring-gray-900/20"
            ></button>
            <button
              class="w-5 h-5 rounded-full bg-[#CBA5A5] hover:ring-4 hover:ring-gray-900/20"
            ></button>
          </div>
          <div class="flex space-x-6">
            <div class="flex space-x-3 rounded-md border-2 border-gray-900/30">
              <button @click="count--" class="p-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.16663 10H15.8333"
                    stroke="#17183B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <input
                type="text"
                v-model="count"
                class="w-16 font-semibold h-full text-center outline-none"
              />
              <button @click="count++" class="p-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 4.16669V15.8334"
                    stroke="#17183B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.16663 10H15.8333"
                    stroke="#17183B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <button
              class="uppercase font-semibold text-lg p-4 bg-teal-400 py-4 px-14 rounded-md text-white hover:ring-4 hover:ring-teal-300 transition-all duration-300"
            >
              Add to cart
            </button>
          </div>
          <p class="text-base font-semibold">
            Free 2-5 day shipping • Tool-free assembly • 30-day trial
          </p>
          <div class="flex justify-between items-center">
            <button
              class="text-teal-400 text-xl font-semibold flex justify-center items-center space-x-4"
            >
              <i class="fa-solid fa-heart"></i>
              <p class="">Add to Wishlist</p>
            </button>
            <div class="flex items-center space-x-6">
              <button class="">
                <i class="fa-brands fa-facebook text-2xl"></i>
              </button>
              <button>
                <i class="fa-brands fa-twitter text-2xl"></i>
              </button>
              <button>
                <i class="fa-brands fa-pinterest text-2xl"></i>
              </button>
              <button>
                <i class="fa-brands fa-square-instagram text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-1/2 items-end">
          <div class="flex items-start pr-20 space-x-2">
            <span class="text-3xl font-bold leading-tight">01 </span>
            <span class="text-2xl">/ 05</span>
          </div>
          <div class="flex pr-10 space-x-16 justify-between items-center">
            <button class="p-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#17183B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button class="p-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#17183B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <img src="./assets/img/product-1.png" class="w-[800px]" alt="">
          <div class="absolute top-60 right-0 w-[450px] h-[280px] bg-gradient-to-r to-teal-600/20 from-transparent"></div>
          <div class="flex space-x-6 items-start pr-20">
            <div v-for="img in imgs" :key="img" class="w-24 h-24 border-2 border-gray-900/20 hover:border-teal-400 cursor-pointer duration-300 transition-all">
              <img :src="`/src/assets/img/${img}`" alt="">
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>