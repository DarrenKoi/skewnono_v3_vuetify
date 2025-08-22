# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 3 + Vuetify 3 web application with a Python Flask backend. The frontend uses modern Vue practices with Composition API and `<script setup>` syntax exclusively.

## Development Commands

### Frontend Development (client-vuetify/)

```bash
cd client-vuetify

# Start development server (port 3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint and auto-fix code
npm run lint
```

## VSCode Setup

### Auto-linting on Save

The project includes VSCode configuration for automatic linting when files are saved:

1. **Install Required Extensions:**
   - ESLint (`dbaeumer.vscode-eslint`)
   - Volar (`Vue.volar`)
   - TypeScript Vue Plugin (`Vue.vscode-typescript-vue-plugin`)

2. **Configuration Applied:**
   - ESLint auto-fixes code on save
   - Vue files are formatted using ESLint rules
   - Linting runs automatically with a 5-second timeout
   - Status bar shows ESLint status

3. **How it Works:**
   - Save any `.vue`, `.js`, or `.jsx` file
   - ESLint automatically fixes formatting and style issues
   - Errors that can't be auto-fixed are highlighted

The VSCode settings are in `client-vuetify/.vscode/settings.json`

## Architecture & Conventions

### Frontend Architecture

**Technology Stack:**

- Vue 3.5.17 with Composition API (`<script setup>` syntax only)
- Vuetify 3.9.1 for Material Design components
- Vite 6.3.5 for build and dev server
- Pinia for state management
- Vue Router with file-based routing

**Key Architectural Decisions:**

1. **Component Registration**: Components are auto-imported globally via `unplugin-vue-components`. Never manually import components.

2. **File-based Routing**: Pages in `src/pages/` automatically become routes. Layout selection via frontmatter.

3. **Auto-imports**: Vue Composition API functions, router, and Pinia are auto-imported. No need for explicit imports.

4. **Path Aliases**: Use `@/` for src directory imports (e.g., `@/stores/app`).

5. **State Management**: Pinia stores in `src/stores/`. Use `defineStore` and `storeToRefs` (auto-imported).

### Code Patterns

**Vue Component Structure:**

```vue
<script setup>
// All code uses Composition API with <script setup>
// No Options API, no export default
</script>

<template>
  <!-- Template content -->
</template>

<style scoped>
/* Component styles */
</style>
```

**Vuetify Integration:**

- Vuetify components are auto-imported
- Theme detection (dark/light) is automatic
- SASS variables customizable in `src/styles/settings.scss`
- Material Design Icons via `@mdi/font`

**Directory Structure:**

```text
client-vuetify/src/
├── assets/          # Static assets
├── components/      # Reusable components (auto-registered)
├── layouts/         # Page layouts
├── pages/           # File-based routes
├── plugins/         # Vue plugins config
├── router/          # Router setup
├── stores/          # Pinia stores
└── styles/          # SCSS/SASS styles
```

### Backend Architecture

Python Flask backend with utilities in `api/utils/`:

- Centralized logging with Loguru
- Environment-based configuration
- Redis integration ready
- Authentication utilities
- Task scheduling support

## Development Guidelines

### Component Development

1. Always use `<script setup>` syntax - no Options API
2. Components auto-register - don't import them
3. Use Vuetify components for UI consistency
4. Follow file-based routing conventions

### State Management

1. Create stores in `src/stores/`
2. Use `defineStore` from Pinia (auto-imported)
3. Access stores directly in components (auto-imported)

### Styling

1. Use Vuetify's built-in classes first
2. Custom SCSS in component `<style scoped>`
3. Global styles in `src/styles/`
4. Theme customization via Vuetify config

### API Integration

1. Frontend runs on port 3000
2. Configure API endpoints in environment variables
3. Use async/await for API calls
4. Handle errors with try/catch blocks

## Important Configuration Files

- `vite.config.mjs` - Build config, auto-imports, plugins
- `src/plugins/vuetify.js` - Vuetify theme and configuration
- `src/router/index.js` - Router setup with layouts
- `eslint.config.js` - Code quality rules

## Common Tasks

### Adding a New Page

Create file in `src/pages/`:

```vue
<script setup>
// Page logic
</script>

<template>
  <v-container>
    <!-- Page content -->
  </v-container>
</template>
```

### Creating a Component

Add to `src/components/`:

```vue
<script setup>
// Component logic - will auto-register globally
</script>

<template>
  <!-- Component template -->
</template>
```

### Adding a Pinia Store

Create in `src/stores/`:

```javascript
export const useMyStore = defineStore("myStore", () => {
  // Store logic using Composition API
  return {
    /* exposed state and methods */
  };
});
```

### Using Vuetify Components

```vue
<template>
  <!-- All Vuetify components are auto-imported -->
  <v-btn color="primary">Click me</v-btn>
  <v-card>
    <v-card-title>Title</v-card-title>
  </v-card>
</template>
```

## Testing

Currently no test framework is configured. When adding tests:

- Consider Vitest for unit testing (Vite-native)
- Use @vue/test-utils for component testing
- Consider Playwright for E2E testing

## Performance Considerations

1. Routes are lazy-loaded automatically
2. Vuetify components tree-shake in production
3. Vite handles code splitting
4. Use `v-lazy` for image loading when needed

## Security Notes

1. Never commit sensitive data or API keys
2. Use environment variables for configuration
3. Validate all user inputs
4. Sanitize data before rendering

## Deployment

1. Build: `npm run build` in client-vuetify/
2. Output in `client-vuetify/dist/`
3. Serve static files with any web server
4. Configure API endpoint for production

- I always use composition api syntax under <script setup>. For vue format, <template> comes first and then <script setup>