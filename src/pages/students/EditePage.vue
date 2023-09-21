<template>
  <q-page class="q-pa-xl">
    <div class="text-h4 text-bold q-mb-md">Welcome to Edit page</div>
    <div class="row q-text-h3 text-bold q-mb-md justify-center">
      <q-card square bordered class="q-pa-md shadow-1">
        <q-card-section>
          <q-form class="q-gutter-md">
            <q-input
              square
              filled
              v-model="model.student.title"
              type="text"
              label="title"
            />
            <q-input
              square
              filled
              v-model="model.student.body"
              type="text"
              label="Body"
            />
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-md justify-center">
          <q-btn
            class="q-mt-md"
            color="white"
            text-color="blue"
            unelevated
            label="Send"
            v-on:click="saveStudent"
            no-caps
          />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const model = ref({
  student: {
    title: "",
    body: "",
  },
});

onMounted(() => {
  getStudentData(route.params.id);
});

function getStudentData(studentId) {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${studentId}`)
    .then((res) => {
      model.value.student.title = res.data.title;
      model.value.student.body = res.data.body;
    })
    .catch((error) => {
      if (error.response.status == 404) {
        alert(error.message);
      }
    });
}
function saveStudent() {
  axios
    .put(
      `https://jsonplaceholder.typicode.com/posts/${route.params.id}`,
      model.value.student
    )
    .then((res) => {
      alert("data is updated", res);
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error);
      }
    });
}
</script>
