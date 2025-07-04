import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';


const config = defineConfig({
  projectId: '8chk8w3m',
  dataset: 'production',
  title: 'Balag Sanity Studio',
  apiVersion: '2023-10-16',
  basePath: '/admin',
  plugins: [
    structureTool()
    // Add any Sanity plugins you want to use here
  ],
  // other config options
});

export default config;