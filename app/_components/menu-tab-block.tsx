import React from 'react';
import { Platform, Pressable, StyleSheet, View } from 'react-native';
import Text from '@/components/TextCustom';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: 'relative',
    width: '100%',
    ...Platform.select({
      ios: {},
      android: {},
    }),
  },
  iconContainer: {
    height: 24,
    width: 24,
  },
  tabContainer: {
    alignItems: 'center',
    borderRadius: 12,
    height: 40,
    justifyContent: 'center',
  },
  tabContent: {
    alignItems: 'center',
    // backgroundColor: 'white',
    borderRadius: 12,
    flexDirection: 'row',
    height: 40,
    paddingHorizontal: 12,
    ...Platform.select({
      ios: {
        // shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  title: {
    // color: '#FF8D4D',
    fontFamily: 'Exo-Bold',
    marginLeft: 8,
  },
});

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

function MenuTabBlock({
  icon,
  title,
  source = [],
  mode = 'single',
  onPress,
}: MenuTabBlockProps) {
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
}

export default MenuTabBlock;
