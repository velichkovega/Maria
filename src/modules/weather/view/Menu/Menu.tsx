import { Menu as MenuModule, theme } from '@/ui-kit';

export const Menu = () => {
  const { Item } = MenuModule;
  const {
    token: { borderRadius },
  } = theme.useToken();

  return (
    <MenuModule
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{
        borderRadius: `${borderRadius}px 0 0 ${borderRadius}px`,
        padding: '0 8px',
      }}
    >
      <Item key="1">Temperature</Item>
      <Item key="2">Wind</Item>
      <Item key="3">Forest fire</Item>
    </MenuModule>
  );
};
