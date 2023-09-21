<template>
  <q-page class="q-pa-xl">
    <div class="scroll justify-center" style="height: 82vh">
      <div class="q-text-h3 text-bold q-mb-md">Welcome to students page</div>
      <div
        v-if="students.length > 0"
        class="q-pa-md example-row-stacked-to-horizontal"
      >
        <div class="row q-gutter-xs justify-center">
          <div
            v-for="(student, index) in students"
            v-bind:key="index"
            class="col-sx-12 col-sm-6 col-md-4 col-lg-3"
          >
            <q-card
              class="my-card text-white"
              style="
                background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
              "
            >
              <q-card-section>
                <div class="text-h6">magnam facilis autem</div>
              </q-card-section>
              <q-separator dark />
              <q-card-section class="q-pt-none q-pt-md">
                dolore placeat quibusdam ea quo vitae magni quis enim qui quis
                quo nemo aut saepe quidem repellat excepturi ut quia sunt ut
                sequi eos ea sed quas
              </q-card-section>
              <q-separator />
              <div class="col">
                <q-card-actions class="flex flex-end justify-center">
                  <q-btn
                    icon="mode_edit"
                    :to="{ path: '/students/' + student.id + '/edit' }"
                  ></q-btn>
                  <q-btn icon="delete" @click="onDelete(student.id)"></q-btn>
                </q-card-actions>
              </div>
            </q-card>
          </div>
        </div>
      </div>
      <h1 v-else>Loading...</h1>
    </div>
  </q-page>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const students = ref([]);
function getStudents() {
  axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    students.value = res.data;
  });
}
const onDelete = (studentId) => {
  if (confirm("Are you sure you want delete this data")) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${studentId}`)
      .then((res) => {
        alert(`student with id ${studentId} is deleted`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

onMounted(() => {
  getStudents();
});
</script>
