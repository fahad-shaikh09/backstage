import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import scaffolderPlugin from '@backstage/plugin-scaffolder/alpha';
import kubernetesPlugin from '@backstage/plugin-kubernetes/alpha';
import { navModule } from './modules/nav';
import { kubernetesModule } from './modules/kubernetes';

export default createApp({
  features: [catalogPlugin, scaffolderPlugin, kubernetesPlugin, navModule, kubernetesModule],
});
