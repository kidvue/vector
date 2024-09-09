<script setup lang="ts">
import { XIcon, SquareIcon, MinusIcon } from "lucide-vue-next";

const menus = [
  {
    label: "File",
    items: [
      {
        label: "Preferences",
      },
    ],
  },
  {
    label: "Edit",
    items: [
      {
        label: "Undo",
      },
      {
        label: "Redo",
      },
    ],
  },
  {
    label: "View",
    items: [
      {
        label: "Zoom In",
      },
      {
        label: "Zoom Out",
      },
    ],
  },
  {
    label: "Window",
    items: [
      {
        label: "Disable resizing",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Support forum",
      },
      {
        label: "Feedbacks",
      },
      {
        label: "About",
      },
    ],
  },
];
</script>

<template>
  <div class="flex gap-2">
    <MenuBar :model="menus" />

    <div class="p-2 flex gap-2">
      <button
        class="h-8 w-8 flex items-center justify-center bg-transparent border-0 cursor-pointer hover:bg-neutral/20 transition rounded-md"
      >
        <i class="pi pi-minus" />
      </button>

      <button
        class="h-8 w-8 flex items-center justify-center bg-transparent border-0 cursor-pointer hover:bg-neutral/20 transition rounded-md"
      >
        <SquareIcon :size="12" />
      </button>

      <button
        class="h-8 w-8 flex items-center justify-center bg-transparent border-0 cursor-pointer hover:(bg-red/20 text-red-6) transition rounded-md"
      >
        <i class="pi pi-times" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.p-menubar {
  @apply bg-transparent border-0 gap-4 p-2 flex-grow;
}
</style>
