import { NextPageWithLayout } from "@/pages/_app.page";

const WithSample = (Component: NextPageWithLayout) => {
  const WithSampleComponent = () => {
    return <Component />;
  };
  WithSampleComponent.getLayout = Component.getLayout;
  return WithSampleComponent;
};

export default WithSample;
