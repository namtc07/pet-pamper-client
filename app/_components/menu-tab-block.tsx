import Text from '@/components/TextCustom';
import React from 'react';
import { Platform, Pressable, StyleSheet, View } from 'react-native';

interface Tab {
  icon: React.ReactNode;
  title: string;
  onPress?: () => void;
}

interface MenuTabBlockProps {
  mode?: 'single' | 'multi';
  icon?: React.ReactNode;
  title?: string;
  source?: Tab[];
  onPress?: () => void;
}

const MenuTabBlock: React.FC<MenuTabBlockProps> = ({
  icon,
  title,
  source,
  mode = 'single',
  onPress,
}) => {
  const renderTab = (tab: Tab, index: number) => (
    <Pressable key={index} style={styles.tabContainer} onPress={tab.onPress}>
      <View style={styles.tabContent}>
        <View style={styles.iconContainer}>{tab.icon}</View>
        <Text style={styles.title}>{tab.title}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {mode === 'multi' ? (
        source?.map((tab, index) => renderTab(tab, index))
      ) : (
        <Pressable style={styles.tabContainer} onPress={onPress}>
          <View style={styles.tabContent}>
            <View style={styles.iconContainer}>{icon}</View>
            <Text style={styles.title}>{title}</Text>
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default MenuTabBlock;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    ...Platform.select({
      ios: {},
      android: {},
    }),
  },
  tabContainer: {
    borderRadius: 12,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContent: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 40,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  iconContainer: {
    width: 24,
    height: 24,
  },
  title: {
    color: '#FF8D4D',
    fontFamily: 'Exo-Bold',
    marginLeft: 8,
  },
});
