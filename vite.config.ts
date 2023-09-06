import path from 'path'
import { globSync } from 'glob'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const dir = {
  src: 'src/',
  entries: 'src/entrypoints/',
  dist: 'dist/'
}

const entries:{[x:string]:string} = {}
globSync(path.join(dir.entries, '**/*.tsx')).forEach(filepath => {
  const key = filepath.replace(new RegExp(`^${dir.entries}`), '').replace(/\.tsx$/, '')
  entries[key] = `/${filepath.replace(new RegExp(`^${dir.src}`), '')}`
})

export default defineConfig(({ mode }) => ({
  mode,
  root : dir.src,
  base: `/`,
  public: 'public',
  envDir: './',
  appType: 'mpa',
  build: {
    outDir: path.relative(dir.src, dir.dist),
    emptyOutDir: true,
    watch: mode === 'development' ? {} : null,
    minify: mode !== 'development',
    manifest: true,
    rollupOptions: {
      input: entries
    }
  },
  plugins: [
    tsconfigPaths()
  ]
}))
