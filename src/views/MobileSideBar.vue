<template>
  <div>
    <TransitionRoot as="template" :show="appMenu.isOpen">
      <Dialog
        as="div"
        class="fixed inset-0 flex z-40 lg:hidden"
        @close="toggleSideBar"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div
            class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 default-background"
          >
            <TransitionChild
              as="template"
              enter="ease-in-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  @click="toggleSideBar"
                >
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="flex flex-col justify-center px-4">
              <div>
                <AppLogo />
              </div>
              <div class="flex flex-col space-y-10 pt-10">
                <ul v-for="(item, index) in menuItems" :key="index">
                  <li @click="toggleSideBar" class="flex items-center">
                    <router-link
                      class="pl-4 text-left capitalize menu-text"
                      :to="{ name: item.name }"
                    >
                      <i :class="item.icon"></i> {{ item.title }}</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <!--    <button
      type="button"
      class="px-1 text-white border-l focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
      @click="toggleSideBar"
    >
      <span class="sr-only">Open sidebar</span>
      <i class="fad fa-bars text-green-200"></i>
    </button>-->
  </div>
</template>

<script>
import { appMenuStore } from "@/stores/IndexStore";

import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from "@heroicons/vue/outline";
import { SearchIcon } from "@heroicons/vue/solid";
import AppLogo from "@/components/icons/AppLogo.vue";
import { menuItems } from "../../export";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: InboxIcon, current: false },
  { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export default {
  components: {
    AppLogo,
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    BellIcon,
    MenuAlt2Icon,
    SearchIcon,
    XIcon,
  },
  setup() {
    const sidebarOpen = ref(false);

    const appMenu = appMenuStore();

    const toggleSideBar = () => {
      // sidebarOpen.value = !sidebarOpen.value;
      appMenu.toggle();

      console.log("toggleSideBar");
    };

    return {
      navigation,
      userNavigation,
      sidebarOpen,
      appMenu,
      toggleSideBar,
      menuItems,
    };
  },
};
</script>
