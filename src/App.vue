<template>
  <div class="log-history">
    <!-- Top Navbar -->
    <header class="navbar">
      <div class="welcome-message">
        <h1>Welcome Admin,</h1>
        <p>Gent's Dorm Log History</p>
      </div>
      <button @click="toggleNav" class="nav-toggle">
        <span class="menu-icon">☰</span>
      </button>
      <a href="#"><u>View All</u></a>
    </header>

    <!-- Log History Section -->
    <main>
      <section class="logs">
        <div class="log" v-for="log in logs" :key="log.id">
          <!-- Side-by-Side Indicators -->
          <div class="indicator">
            <div class="type-indicator" :class="[log.type === 'Occupant' ? 'occupant' : 'visitor']"></div>
            <div class="status-indicator" :class="[log.status === 'IN' ? 'in' : 'out']"></div>
          </div>
          <!-- Log Details -->
          <div class="details">
            <div class="name-timestamp">
              <h2>{{ log.name }}</h2>
              <p class="timestamp">{{ log.timestamp }}</p>
            </div>
            <p class="activity" v-if="log.activity">{{ log.activity }}</p>
          </div>
        </div>
      </section>
    </main>

    <!-- Legend -->
    <footer class="legend">
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
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LogHistory',
  setup() {
    const logs = ref([
      { id: 1, name: 'Henry Ford', 
      timestamp: '2024-09-08 08:00 AM', 
      type: 'Occupant', 
      status: 'OUT', 
      activity: 'Downtown' 
      },
      
      { id: 1, name: 'John Doe', 
      timestamp: '2024-09-08 08:00 AM', 
      type: 'Visitor', 
      status: 'IN', 
      activity: 'Visiting Relative' 
      },

    ]);

    const toggleNav = () => {
      alert('Will be developing soon!'); 
    };

    return { logs, toggleNav };
  },
});
</script>

<style scoped>


body {
  margin: 0;
  color: #838383;
}

.log-history {
  max-width: 100%;
  margin: 5px;
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
  margin: 1rem 0;
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
  flex-direction: row; /* side by side */
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
