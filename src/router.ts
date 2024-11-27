import { createRouter, createWebHistory } from "vue-router";

// Import your components
import Dashboard from "./components/DashBoard.vue";

// Define your routes
const routes = [
  { path: "/dashboard", component: Dashboard }, // Dashboard route
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
routes,
});

export default router;
