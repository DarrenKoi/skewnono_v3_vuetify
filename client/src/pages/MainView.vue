<script setup>
import ViewHeader from '@/layouts/ViewHeader.vue'
import ViewFooter from '@/layouts/ViewFooter.vue'

const features = [
  {
    icon: 'mdi-speedometer',
    title: 'Fast Performance',
    description: 'Lightning-fast load times and optimal performance across all devices'
  },
  {
    icon: 'mdi-shield-check',
    title: 'Secure & Reliable',
    description: 'Built with security best practices and reliable infrastructure'
  },
  {
    icon: 'mdi-palette',
    title: 'Beautiful Design',
    description: 'Modern, responsive design that looks great on any screen size'
  }
]

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '100+', label: 'Happy Clients' },
  { number: '24/7', label: 'Support Available' },
  { number: '99.9%', label: 'Uptime Guarantee' }
]
</script>

<template>
  <v-app>
    <ViewHeader />
    
    <v-main>
      <!-- Hero Section -->
      <v-container fluid class="pa-0">
        <v-parallax
          src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
          height="500"
        >
          <v-container>
            <v-row align="center" justify="center" class="fill-height">
              <v-col cols="12" md="8" class="text-center">
                <h1 class="text-h2 font-weight-bold mb-4">
                  Welcome to Skewnono
                </h1>
                <p class="text-h5 mb-6">
                  Building amazing digital experiences with modern technology
                </p>
                <v-btn
                  color="primary"
                  size="x-large"
                  class="mr-4"
                  to="/services"
                >
                  Get Started
                </v-btn>
                <v-btn
                  variant="outlined"
                  size="x-large"
                  color="white"
                  to="/about"
                >
                  Learn More
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </v-container>

      <!-- Features Section -->
      <v-container class="py-12">
        <v-row>
          <v-col cols="12" class="text-center mb-8">
            <h2 class="text-h3 font-weight-bold mb-4">Why Choose Us</h2>
            <p class="text-h6 text-grey">
              We deliver exceptional results with cutting-edge technology
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="feature in features"
            :key="feature.title"
            cols="12"
            md="4"
          >
            <v-card
              class="pa-6 text-center"
              elevation="0"
              variant="tonal"
            >
              <v-icon
                :icon="feature.icon"
                size="64"
                color="primary"
                class="mb-4"
              />
              <h3 class="text-h5 font-weight-bold mb-2">
                {{ feature.title }}
              </h3>
              <p class="text-body-1 text-grey">
                {{ feature.description }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Stats Section -->
      <v-container fluid class="bg-primary py-12">
        <v-container>
          <v-row>
            <v-col
              v-for="stat in stats"
              :key="stat.label"
              cols="6"
              md="3"
              class="text-center"
            >
              <div class="text-h3 font-weight-bold white--text">
                {{ stat.number }}
              </div>
              <div class="text-body-1 white--text">
                {{ stat.label }}
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-container>

      <!-- CTA Section -->
      <v-container class="py-12">
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="text-h3 font-weight-bold mb-4">
              Ready to Get Started?
            </h2>
            <p class="text-h6 mb-6 text-grey">
              Let's work together to bring your ideas to life
            </p>
            <v-btn
              color="primary"
              size="x-large"
              to="/contact"
            >
              Contact Us Today
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <ViewFooter />
  </v-app>
</template>

<style scoped>
.bg-primary {
  background-color: rgb(var(--v-theme-primary));
}

.white--text {
  color: white !important;
}
</style>