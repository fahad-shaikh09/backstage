import { jsx } from 'react/jsx-runtime';
import { createFrontendModule, createRouteRef, PageBlueprint } from '@backstage/frontend-plugin-api';

const kubernetesOverviewRouteRef = createRouteRef();

const kubernetesPageOverride = PageBlueprint.make({
  params: {
    path: '/kubernetes',
    routeRef: kubernetesOverviewRouteRef,
    loader: () =>
      import('./KubernetesOverviewPage').then(m =>
        jsx(m.KubernetesOverviewPage, {}),
      ),
  },
});

export const kubernetesModule = createFrontendModule({
  pluginId: 'kubernetes',
  extensions: [kubernetesPageOverride],
});
