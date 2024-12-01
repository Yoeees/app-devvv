<script setup lang=ts>
import { defineComponent } from 'vue';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb' 

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import {
  AudioWaveform,
  BadgeCheck,
  ChevronRight,
  ChevronsUpDown,
  Command,
  GalleryVerticalEnd,
  LogOut,
  Plus,
  PanelLeftDashed, ScrollText, Users, Bed
} from 'lucide-vue-next'
import { ref } from 'vue'

// This is sample data.
const dorm = {
  static_dorm_name: {
    name: 'Gents Dormitory',
    logo: './csu.png', // Path to the dorm logo
  },
}
const data = {
  user: {
    name: 'Admin',
    email: 'Gents_Admin@gmail.com',
    avatar: './profile.jpg',
  },
}
// Content of of the SideBar
const Items = [{
    title: "Dashboard",
        url: "#",
        icon: PanelLeftDashed, // Replace `null` with actual icon component if available
    },
    {
        title: "Log History",
        url: "#",
        icon: ScrollText , // Replace with an icon component
    },
    {
        title: "Occupant",
        url: "#",
        icon: Bed, // Replace with an icon component
    },
    {
        title: "Visitor",
        url: "#",
        icon: Users, // Replace with an icon component

  }
]

</script>

<template>
  <SidebarProvider>
    <Sidebar class="custom-sidebar" collapsible="icon">
      <SidebarHeader class="">
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <!-- Static Logo -->
          <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <img :src="dorm.static_dorm_name.logo" alt="Dorm Logo" class="size-4" />
          </div>

          <!-- Static Dorm Name -->
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-semibold">{{ dorm.static_dorm_name.name }}</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
    <DropdownMenuSeparator class="bg-orange-900" />
  </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
            <SidebarGroupLabel>Menu-Items</SidebarGroupLabel>
            <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem
                v-for="item in Items"
                :key="item.title"
                >
                <SidebarMenuButton asChild>
                    <a :href="item.url">
                    <span v-if="item.icon">
                        <component class="w-5" :is="item.icon " />
                    </span>
                    <span>{{ item.title }}</span>
                    </a>
                </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
        </SidebarContent>
      <SidebarRail />
      <!--For Log-out -->
      <!-- Avatar fot users-->
      <SidebarFooter>
        <DropdownMenuSeparator class="bg-orange-900" />
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <!-- Avatar fot users-->
              <DropdownMenuTrigger as-child>
                <SidebarMenuButton
                  size="lg"
                  class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar class="h-8 w-8 rounded-lg">
                    <AvatarImage :src="data.user.avatar" :alt="data.user.name" />
                    <AvatarFallback class="rounded-lg">
                      GND
                    </AvatarFallback>
                  </Avatar>
                  <div class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold">{{ data.user.name }}</span>
                    <span class="truncate text-xs">{{ data.user.email }}</span>
                  </div>
                  <ChevronsUpDown class="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg" side="bottom" align="end" :side-offset="4">
                <DropdownMenuLabel class="p-0 font-normal">
                  <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar class="h-8 w-8 rounded-lg">
                      <AvatarImage :src="data.user.avatar" :alt="data.user.name" />
                      <AvatarFallback class="rounded-lg">
                        GND
                      </AvatarFallback>
                    </Avatar>
                    <div class="grid flex-1 text-left text-sm leading-tight">
                      <span class="truncate font-semibold">{{ data.user.name }}</span>
                      <span class="truncate text-xs">{{ data.user.email }}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator class="bg-orange-900"/>
                <DropdownMenuItem>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
              <!--For  Users Avatar-->
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <!--For  Users Avatar-->
    </Sidebar>
    <SidebarInset>
      <header class=" bg-green-800 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
          <Separator orientation="vertical" class="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem class="hidden md:block">
                <BreadcrumbLink href="#">
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header >

        
      <main>
          <header class="2">
            <section class="legend">
              <div class="legend-item">
                <div class="color-box occupant"></div>
                <span>Occupant</span>
              </div>
              <div class="legend-item">
                <div class="color-box visitor"></div>
                <span>Visitor</span>
              </div>
              <div class="legend-item">
                <div class="color-box in"></div>
                <span>IN</span>
              </div>
              <div class="legend-item">
                <div class="color-box out"></div>
                <span>OUT</span>
              </div>
            </section>
        </header>
      </main>
    </SidebarInset>
  </SidebarProvider>
</template>


<style scoped>

.log-history {
  max-width: 100%;
}

/* Navbar */
.navbar {
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background: linear-gradient(to right, #4caf50, #0b6623);
  color: white;
  padding: 1rem;
}

.nav-toggle {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Logs Section */
.logs {
  margin: 0.5rem 0.5rem;
}

a {
  display: flex;
  justify-content: flex-end;
}

.log {
  display: flex;
  align-items: center;
  border: 1px solid #8f760a;
  margin: 0.5rem 0;
  padding: 0;
  border-radius: 5px;
  background: #dddddd;
}

.indicator {
  display: flex;
  flex-direction: row; /* side by side color scheme indicator inside the rectangle*/
  width: 20px;
  height: 50px;
  margin-right: 0.5rem;
}

/* Full height */
.type-indicator,
.status-indicator {
  flex: 1;
  height: 100%;
}

/* OCCUPANT */
.type-indicator {
  background-color: #3fa1f7;
}

/* OUT */
.status-indicator {
  background-color: #f44336;
}

/* OCCUPANT */
.occupant {
  background-color: #3fa1f7;
}

/* VISITOR */
.visitor {
  background-color: #f8cc55;
}

/* IN */
.in {
  background-color: #4caf50;
}

/* OUT */
.out {
  background-color: #f44336;
}

/* Log Details */
.details {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.name-timestamp {
  display: flex;
  margin-right: 0.5rem;
  justify-content: space-between;
  align-items: center;
}

h2 {
  margin: 0;
  font-size: 1rem;
}

.timestamp {
  font-size: 0.8rem;
  color: gray;
}

.activity {
  display: flex;
  margin-right: 1rem;
  font-size: 0.9rem;
  color: #555;
  justify-content: flex-end;
}

/* Legend */
.legend {
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
} 

.legend-item {
  display: flex;
  align-items: center;
}

.color-box {
  width: 15px;
  height: 15px;
  margin-right: 0.5rem;
  border-radius: 2px;
}
</style>
