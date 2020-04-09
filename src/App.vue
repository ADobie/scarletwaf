<template>
  <v-app id="inspire">

    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
<!--      尝试循环失败-->
<!--      <v-list>-->
<!--          <v-list-item-->
<!--            v-for="item in items"-->
<!--            :key="item"-->
<!--            link-->
<!--            to="{{item.link}}"-->
<!--          >-->
<!--&lt;!&ndash;            <router-link to="{{item.link}}">&ndash;&gt;-->
<!--              <v-list-item-icon>-->
<!--                <v-icon>{{item.icon}}</v-icon>-->
<!--              </v-list-item-icon>-->
<!--              <v-list-item-content>-->
<!--                <v-list-item-title>{{item.text}}</v-list-item-title>-->
<!--              </v-list-item-content>-->
<!--&lt;!&ndash;            </router-link>&ndash;&gt;-->
<!--          </v-list-item>-->
<!--      </v-list>-->
      <v-list>

        <v-list-item
          link
          to="/"
        >
          <v-list-item-icon>
            <v-icon>mdi-monitor-screenshot</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Waf 实时信息</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          to="/RuleConfig"
        >
          <v-list-item-icon>
            <v-icon>mdi-cog-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>自定义规则</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          to="/ScarletPot"
        >
          <v-list-item-icon>
            <v-icon>mdi-beehive-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>蜜罐</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          to="/Message"
        >
          <v-list-item-icon>
            <v-icon>mdi-bell</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>消息通知</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          to="/Test"
        >
          <v-list-item-icon>
            <v-icon>mdi-bell</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Test</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>

    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="grey darken-1"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title
        style="width: 300px"
      >
        <span class="hidden-sm-and-down">ScarletWaf 用户界面</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toobar-items>
        <v-btn
          icon
          x-large
          @click="onLogout"
        >
          <v-icon left>mdi-power</v-icon>
          <div>Out</div>
        </v-btn>
      </v-toobar-items>

    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    dialog: false,
    drawer: false,
    items: [
      { icon: 'mdi-contacts', text: 'Contacts', link: '/' },
      { icon: 'mdi-contacts', text: 'Contacts', link: '/RuleConfig' }
    ]
  }),
  methods: {
    onLogout () {
      this.$router.push({ path: '/Login' })
    }
  }
}
</script>
