import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Platform, StyleSheet, View } from 'react-native';
import DateTimePicker, { DateType } from 'react-native-ui-datepicker';
import Svgs from '@/assets/svgs';
import MenuTabBlock from './menu-tab-block';

const styles = StyleSheet.create({
  calendarTextStyle: {
    color: '#5A2828',
    fontFamily: 'ExoBold',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    flex: 1,
    marginBottom: 30,
    paddingBottom: 6,
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
  schedule: {
    alignSelf: 'center',
    bottom: -20,
    justifyContent: 'center',
    position: 'absolute',
  },
  selectedTextStyle: {
    color: '#fff',
    fontFamily: 'bold',
  },
  weekDaysTextStyle: {
    color: '#5A2828',
  },
});

interface Range {
  startDate?: DateType;
  endDate?: DateType;
}

function DatePicker() {
  const [range, setRange] = useState<Range>({
    startDate: undefined,
    endDate: undefined,
  });

  const handleDateChange = (params: Range) => {
    setRange({
      startDate: params?.startDate,
      endDate: params?.endDate,
    });
  };

  const yesterday = dayjs().subtract(1, 'day').toDate();

  return (
    <View style={styles.container}>
      <DateTimePicker
        mode="range"
        startDate={range.startDate}
        endDate={range.endDate}
        onChange={handleDateChange}
        calendarTextStyle={styles.calendarTextStyle}
        selectedTextStyle={styles.selectedTextStyle}
        minDate={yesterday}
        selectedItemColor="#FFBA69"
        firstDayOfWeek={1}
        weekDaysTextStyle={styles.weekDaysTextStyle}
      />
      <View style={styles.schedule}>
        <MenuTabBlock
          title="Schedule"
          icon={<Svgs.IconClock />}
          onPress={() => console.log('onPress')}
        />
      </View>
    </View>
  );
}

export default DatePicker;
