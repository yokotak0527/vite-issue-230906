# Problem Summary

I'm building a Multi-Page Application (MPA) using Vite. I have two entry points (index.tsx and sub.tsx), both of which import the same Text component. This Text component uses CSS Modules. After building the project, a CSS file corresponding to sub.tsx is generated, but no CSS file is generated for index.tsx.

# What I've Tried

I tried changing the rollupOptions in vite.config.ts, but it didn't solve the issue.