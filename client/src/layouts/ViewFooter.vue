<script setup>
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: 'mdi-facebook', url: '#', label: 'Facebook' },
    { icon: 'mdi-twitter', url: '#', label: 'Twitter' },
    { icon: 'mdi-linkedin', url: '#', label: 'LinkedIn' },
    { icon: 'mdi-instagram', url: '#', label: 'Instagram' },
  ]

  const footerLinks = [
    {
      title: 'Company',
      items: [
        { title: 'About Us', to: '/about' },
        { title: 'Team', to: '/team' },
        { title: 'Careers', to: '/careers' },
      ],
    },
    {
      title: 'Services',
      items: [
        { title: 'Web Development', to: '/services/web' },
        { title: 'Mobile Apps', to: '/services/mobile' },
        { title: 'Consulting', to: '/services/consulting' },
      ],
    },
    {
      title: 'Support',
      items: [
        { title: 'Contact', to: '/contact' },
        { title: 'FAQ', to: '/faq' },
        { title: 'Help Center', to: '/help' },
      ],
    },
  ]
</script>

<template>
  <v-footer
    class="pt-8"
    color="grey-darken-4"
  >
    <v-container>
      <v-row>
        <v-col
          v-for="section in footerLinks"
          :key="section.title"
          cols="12"
          sm="4"
        >
          <v-list
            bg-color="transparent"
            density="compact"
          >
            <v-list-subheader class="text-uppercase font-weight-bold">
              {{ section.title }}
            </v-list-subheader>
            <v-list-item
              v-for="item in section.items"
              :key="item.title"
              density="compact"
              :title="item.title"
              :to="item.to"
            />
          </v-list>
        </v-col>
      </v-row>

      <v-divider class="my-4" />

      <v-row align="center">
        <v-col
          class="text-center text-md-start"
          cols="12"
          md="6"
        >
          <span class="text-body-2">
            © {{ currentYear }} Skewnono. All rights reserved.
          </span>
        </v-col>

        <v-col
          class="text-center text-md-end"
          cols="12"
          md="6"
        >
          <v-btn
            v-for="link in socialLinks"
            :key="link.label"
            :aria-label="link.label"
            class="mx-1"
            :href="link.url"
            :icon="link.icon"
            size="small"
            variant="text"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
</style>
