import React from 'react';
import { Platform, View } from 'react-native';
import SvgIcon from '@/assets/svgs';
import { Tabs } from 'expo-router';
import Badge from '../_components/Badge';

interface TabScreen {
  name: string;
  title: string;
  IconFill: React.ElementType;
  Icon: React.ElementType;
  badgeCount?: number;
}

const tabScreens: TabScreen[] = [
  {
    name: 'home/home',
    title: 'Home',
    IconFill: SvgIcon.IconHomeFillColor,
    Icon: SvgIcon.IconHome,
  },
  {
    name: 'categories/index',
    title: 'Categories',
    IconFill: SvgIcon.IconCategoriesFillColor,
    Icon: SvgIcon.IconCategories,
  },
  {
    name: 'orders/index',
    title: 'Orders',
    IconFill: SvgIcon.IconOrdersFillColor,
    Icon: SvgIcon.IconOrders,
    badgeCount: 7, // BadgeCount cho Orders
  },
  {
    name: 'chat/index',
    title: 'Chat',
    IconFill: SvgIcon.IconChatFillColor,
    Icon: SvgIcon.IconChat,
    badgeCount: 3, // BadgeCount cho Chat
  },
  {
    name: 'account/index',
    title: 'Account',
    IconFill: SvgIcon.IconAccountFillColor,
    Icon: SvgIcon.IconAccount,
  },
];

const TabsLayout: React.FC = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FF8D4D',
      }}
    >
      {tabScreens.map(({ name, title, IconFill, Icon, badgeCount }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ position: 'relative' }}>
                {focused ? <IconFill /> : <Icon />}
                {badgeCount && badgeCount > 0 && (
                  <Badge count={badgeCount} style={{ top: -5, right: -10 }} />
                )}
              </View>
            ),
            tabBarLabelStyle: {
              fontFamily: 'Exo-Bold',
            },
            tabBarStyle: {
              ...Platform.select({
                android: {
                  paddingVertical: 5,
                  paddingBottom: 5,
                  height: 55,
                },
              }),
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;
