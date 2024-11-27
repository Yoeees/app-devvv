<template>
    <div class="Login flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-30 w-28" src="./assets/csu.png" alt="Logo" />
        <h2 class="mt-11 text-center text-2xl/5 font-bold tracking-tight text-gray-900">Log in to your account</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <!-- Email Input -->
          <div>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                placeholder="Email"
                class="block w-full rounded-md border-0 py-2.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm/6"
              />
            </div>
          </div>
  
          <!-- Password Input -->
          <div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                placeholder="Password"
                class="block w-full rounded-md border-0 py-2 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm/6"
              />
            </div>
          </div>
  
          <!-- Sign In Button -->
          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-sm/6 font-semibold text-white shadow-sm hover:bg-sky-500 
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Sign in
            </button>
          </div>
  
          <!-- Forgot Password -->
          <div class="text-sm">
            <a
              href="#"
              class="flex w-full justify-center font-semibold text-yellow-600 hover:text-yellow-500"
            >
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <style scoped>
    .Login {
      background: linear-gradient(to bottom, #3DB144, #1A4B1D);
      height: 100vh;
    }
  </style>
  