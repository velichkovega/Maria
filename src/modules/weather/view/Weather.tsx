import { Divider, Layout, theme, Typography } from '@/ui-kit';

import { Menu } from './Menu';
import { Search } from './Search';

export const Weather = () => {
  const {
    token: { borderRadius, colorBgBase },
  } = theme.useToken();

  return (
    <Layout
      style={{
        borderRadius: borderRadius,
        background: colorBgBase,
        backdropFilter: 'blur(5px) contrast(200%)',
        height: '100%',
        padding: '12px 0',
        boxShadow: '0px 0px 21px 0px rgba(66, 68, 90, 1)',
      }}
    >
      <Layout.Sider
        width={200}
        style={{ background: 'transparent', borderRight: '1px solid #fff' }}
      >
        <Menu />
      </Layout.Sider>
      <Layout.Content style={{ padding: '0 12px', minHeight: 280 }}>
        <Search />
        <Divider style={{ margin: '12px 0', height: '1px', background: '#fff' }} />
        <Typography.Text>Content</Typography.Text>
      </Layout.Content>
    </Layout>
  );
};
