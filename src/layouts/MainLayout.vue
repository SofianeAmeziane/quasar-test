<template>
  <q-layout view="lHh Lpr fff">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <RouterLink class="navbar-brand" to="/">
            <q-img
              src="/icons/favicon-128x128.png"
              style="width: 40px"
              to="/"
            ></q-img
          ></RouterLink>
        </q-toolbar-title>

        <div class="gt-sm">
          <q-btn flat rounded to="/students">Students</q-btn>
          <q-btn class="q-mr-sm" rounded to="/students/create"
            >Create student</q-btn
          >
        </div>
        <div class="lt-md">
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>
        <q-item>
          <q-btn class="q-mr-sm" rounded to="/students">Students</q-btn>
        </q-item>
        <q-item>
          <q-btn class="q-mr-sm" rounded to="/students/create"
            >Create student</q-btn
          >
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container class="container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
<style scoped>
.container {
  background-color: rgb(234, 245, 245);
  width: 60%;
  margin: 0 auto;
  height: 100vh;
  display: inline-flexbox;
  text-align: center;
}
</style>
