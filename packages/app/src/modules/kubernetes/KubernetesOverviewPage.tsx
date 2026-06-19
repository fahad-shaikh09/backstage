import { Link } from 'react-router-dom';
import {
  Content,
  ContentHeader,
  EmptyState,
  Page,
} from '@backstage/core-components';
import Button from '@material-ui/core/Button';

export function KubernetesOverviewPage() {
  return (
    <Page themeId="tool">
      <Content>
        <ContentHeader title="Kubernetes" />
        <EmptyState
          title="Select a service to view Kubernetes resources"
          description="Kubernetes deployments are shown on individual service pages. Open a service from the Catalog and click the Kubernetes tab to see its pods, deployments, and more."
          missing="content"
          action={
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/"
            >
              Browse the Catalog
            </Button>
          }
        />
      </Content>
    </Page>
  );
}
