<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-color-primary">
      <q-input
        v-model="newTask"
        @keyup.enter="addTask"
        class="col"
        square
        filled
        bg-color="white"
        placeholder="Adicionar"
        dense
      >
        <template v-slot:append>
          <q-btn @click="addTask" round dense flat icon="add" />
        </template>
      </q-input>
    </div>
    <q-list>
      <q-item
        v-for="(task, index) in tasks"
        :key="task.title"
        @click="task.done = !task.done"
        :class="{'done bg-blue-1': task.done}"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-checkbox v-model="task.done" class="no-pointer-events" color="teal" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section>

        <div class="row">
          <q-btn @click.stop="editTask(index)" flat round dense color="primary" icon="edit" />
          <q-btn @click.stop="deleteTask(index)" flat round dense color="negative" icon="delete" />
         </div>


        </q-item-section>
      </q-item>
    </q-list>
    <div v-if="!tasks.length" class="no-tasks absolute-center">
      <q-icon name="close" size="100px" color="primary"></q-icon>
      <div class="text-h5 text-primary text-center">Vazio</div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListaPage",

  data() {
    return {
      newTask: "",
      tasks: JSON.parse(localStorage.getItem("tasks")) || [],
    };
  },
  methods: {
    deleteTask(index) {
      this.$q
        .dialog({
          title: "Confirmação",
          message: "Tens a certeza de que queres apagar?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.tasks.splice(index, 1);
          localStorage.setItem("tasks", JSON.stringify(this.tasks));
          this.$q.notify("Apagado com sucesso!");
        });
    },
    editTask(index) {
      const newTitle = this.$q.dialog({
        title: "Edição",
        prompt: {
          model: this.tasks[index].title,
          type: "text",
        },
        cancel: true,
        persistent: true,
      }).onOk((data) => {
        this.tasks[index].title = data;
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        this.$q.notify("Editado com sucesso!");
      });
    },
    addTask() {
      this.tasks.push({
        title: this.newTask,
        done: false,
      });
      this.newTask = "";
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
});
</script>

<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}
.no-tasks {
  opacity: 0.5;
}
</style>
