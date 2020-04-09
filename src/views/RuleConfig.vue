<template>
  <div>
    <v-card color="basil">
      <v-card-title>
        <v-text-field
          class="mx-4"
          flat
          hide-details
          label="Search"
          solo-inverted
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-card-title>

      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="basil"
        grow
      >
        <v-tab
          v-for="ruleType in ruleTypes"
          :key="ruleType"
        >
          {{ ruleType }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="rules in ruleFile"
          :key="rules"
        >
          <v-card
            color="basil"
            flat
          >
            <v-card-text>
              <rule-list :items="rules"></rule-list>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

    </v-card>

    <add-rule></add-rule>
  </div>
</template>

<script>
import RuleList from '../components/RuleList'
import AddRule from '../components/AddRule'

export default {
  name: 'RuleConfig',
  components: {
    RuleList,
    AddRule
  },
  data () {
    return {
      tab: null,
      ruleTypes: [
        'ruletype1',
        'ruletype2',
        'ruletype3',
        'ruletype4',
        'ruletype5'
      ],
      ruleFile: [
        ['ruledsadadasa1',
          'dsafdfiifidnfi2',
          'dssssssssdwewe3',
          'ddddddd2iiiiiiiiii4',
          '5',
          '6',
          '7'
        ],
        ['ruledsadadasa1',
          'dsafdfiifidnfi2',
          'dssssssssdwewe3',
          'ddddddd2iiiiiiiiii4'
        ],
        ['ruledsadadasa1',
          'dsafdfiifidnfi2',
          'dssssssssdwewe3',
          'ddddddd2iiiiiiiiii4'
        ],
        ['ruledsadadasa1',
          'dsafdfiifidnfi2',
          'dssssssssdwewe3',
          'ddddddd2iiiiiiiiii4'
        ],
        ['ruledsadadasa1',
          'dsafdfiifidnfi2',
          'dssssssssdwewe3',
          'ddddddd2iiiiiiiiii4'
        ]
      ]
    }
  },
  methods: {
    addRule () {}
  }
}
</script>

<style scoped>

</style>
