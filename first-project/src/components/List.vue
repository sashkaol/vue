<template>
  <div class="expenses">
    <v-container>
      <v-row>
        <v-col :cols="1">#</v-col>
        <v-col :cols="3">Date</v-col>
        <v-col :cols="4">Category</v-col>
        <v-col :cols="2">Cost</v-col>
        <v-col :cols="2">Menu</v-col>
      </v-row>
      <v-row v-for="(item, ind) in items" :key="ind">
        <v-col :cols="1">{{ item.id || ind + 1 }}</v-col>
        <v-col :cols="3">{{ item.date }}</v-col>
        <v-col :cols="4">{{ item.category }}</v-col>
        <v-col :cols="2">{{ item.cost }}</v-col>
        <v-col :cols="2">
          <img
            class="points"
            src="../assets/points.svg"
            alt="menu"
            @click="contextMenu(item, $event)"
          />
        </v-col>
      </v-row>
    </v-container>
    <!-- <div class="expense b">
      <div class="item first">#</div>
      <div class="item">Дата</div>
      <div class="item">Категория</div>
      <div class="item">Цена</div>
      <div class="item last"></div>
    </div>
    <div class="expense" v-for="(item, ind) in items" :key="ind">
      <div class="item first">{{ item.id || ind + 1 }}</div>
      <div class="item">{{ item.date }}</div>
      <div class="item">{{ item.category }}</div>
      <div class="item">{{ item.cost }}</div>
      <div class="item last">
        <img
          class="points"
          src="../assets/points.svg"
          alt="menu"
          @click="contextMenu(item, $event)"
        />
      </div>
    </div> -->
    <ContextMenu />
  </div>
</template>

<script>
import ContextMenu from "./ContextMenu.vue";
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ContextMenu,
  },
  methods: {
    contextMenu(item, event) {
      const items = [
        {
          text: "Редактировать",
          action: () => {
            this.actionEdit(item.id);
          },
        },
        {
          text: "Удалить",
          action: () => {
            this.actionDelete(item.id);
          },
        },
      ];
      this.$context.show({ items, event });
    },
    actionEdit(item) {
      console.log(`Запись ${item} будет отредактирована`);
    },
    actionDelete(id) {
      console.log(`Запись ${id} удалена`);
      this.$context.close();
    },
  },
};
</script>

<style>
.expense {
  border-bottom: 1.5px solid rgb(213, 217, 234);
  display: flex;
  max-width: 500px;
  width: 100%;
  height: 30px;
  align-items: center;
}
.expenses {
  margin-top: 10px;
}
.b {
  font-weight: bold;
}
.item {
  width: 150px;
}
.first {
  width: 50px;
}
.points {
  width: 27px;
}
.points:hover {
  cursor: pointer;
}
.last {
  width: 50px;
}
</style>