// bdd.config.ts
import { defineBddConfig } from 'playwright-bdd';

export default defineBddConfig({
  // features: ['features/**/*.feature'],
  steps: ['step_definitions/*.ts'],
  //world: ['./support/customWorld.ts'],
});
