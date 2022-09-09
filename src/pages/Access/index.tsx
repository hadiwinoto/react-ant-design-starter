import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';
import { Button } from 'antd';

const AccessPage: React.FC = () => {
  const access = useAccess();
  return (
    <PageContainer
      ghost
      header={{
        title: 'React Ant Design',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button> Admin </Button>
      </Access>
    </PageContainer>
  );
};

export default AccessPage;
