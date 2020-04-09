<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
        <th class="font-weight-black subtitle-1">Rule</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in items" :key="index">
            <td>{{ item}}</td>
<!--            <td><v-icon @click="Edit">mdi-pencil-outline</v-icon></td>-->
            <td><v-icon @click="deleteItem" class="float-right">mdi-close-circle-outline</v-icon></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: 'RuleList',
  props: ['items'],
  // data () {
  //   return {
  //     ]
  //   }
  // }
  methods: {
    deleteItem () {}
    // Edit () {}
  }

}
</script>

<style scoped>

</style>
