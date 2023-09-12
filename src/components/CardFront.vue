<script setup lang="ts"></script>

<template>
  <div class="relative">
    <img class="h-[10rem] -z-10" src="../assets/bg-card-front.png" alt="card-front">

    <!-- Card Front Flow -->
    <div class="
      absolute 
      top-0 
      
      flex 
      flex-col 
      justify-between 

      w-full 
      h-full 

      p-5
      
      text-white
      ">
      <img class="w-14" src="../assets/card-logo.svg">

        <div class="flex flex-col gap-4">
          <div class="
            flex 
            flex-row 
            items-center 
            gap-2

            text-lg
            tracking-widest            
            text-white/75
            ">
            <p>0000</p>
            <p>0000</p>
            <p>0000</p>
            <p>0000</p>
          </div>
          <div class="
            flex 
            flex-row 
            justify-between 
            
            text-[7pt] 
            tracking-widest
            text-white/75
            ">
            <p>JANE APPLESEED</p>
            <p>00/00</p>
          </div>
        </div>
    </div>
  </div>
</template>