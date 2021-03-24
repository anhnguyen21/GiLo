import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const index = () => {
  return (
    <View>
      <View style={styles.layoutTop}>
        <View style={styles.container}>
          <View style={styles.backLogin}>
            <Text style={styles.txtBack}>Lịch</Text>
          </View>
        </View>
      </View>
      <View style={styles.layoutContent}>
        <View style={styles.layoutTxtDate}>
          <Text style={styles.txtDay}>March, 2021</Text>
          <View style={styles.layoutIcon}>
            <Icon styles={styles.icon} name="chevron-left" />
            <Icon styles={styles.icon} name="chevron-right" />
          </View>
        </View>
        <View style={styles.layoutDay}>
          <View style={styles.layoutWeed}>
            <View style={styles.layoutItemDayInWeek}>
              <Text style={styles.txtWeek}>Mon</Text>
            </View>
            <View style={styles.layoutItemDayInWeek}>
              <Text style={styles.txtWeek}>Tue</Text>
            </View>

            <View style={styles.layoutItemDayInWeek}>
              <Text style={styles.txtWeek}>Wed</Text>
            </View>

            <View style={styles.layoutItemDayInWeek}>
              <Text style={styles.txtWeek}>Thur</Text>
            </View>

            <View style={styles.layoutItemDayInWeek}>
              <Text style={styles.txtWeek}>Fri</Text>
            </View>

            <View style={styles.layoutItemDayInWeek}>
              <Text style={styles.txtWeek}>Sat</Text>
            </View>

            <Text style={styles.txtWeek}>Sun</Text>
          </View>
          <View style={styles.layoutDayInWeek}>
            <View style={styles.layoutItemDayInWeek}>
              <Text style={styles.txtDayInWeek}>27</Text>
            </View>
            <View style={styles.layoutItemDayInWeek}>
              <Text style={styles.txtDayInWeek}>28</Text>
            </View>
            <View style={styles.layoutItemDayInWeek}>
              <Text style={styles.txtDayInWeek}>28</Text>
            </View>
            <View style={styles.layoutItemDayInWeek}>
              <Text style={styles.txtDayInWeek}>28</Text>
            </View>
            <View style={styles.layoutItemDayInWeek}>
              <Text style={styles.txtDayInWeek}>29</Text>
            </View>
            <View style={styles.layoutItemDayInWeek}>
              <Text style={styles.txtDayInWeek}>30</Text>
            </View>
            <View style={styles.layoutItemDayInWeek}>
              <Text style={styles.txtDayInWeek}>1</Text>
            </View>
            <View style={styles.layoutItemDayInWeek}>
              <Text style={styles.txtDayInWeek}>2</Text>
            </View>
            <View style={styles.layoutItemDayInWeek}>
              <Text style={styles.txtDayInWeek}>3</Text>
            </View>
            <View style={styles.layoutItemDayInWeek}>
              <Text style={styles.txtDayInWeek}>4</Text>
            </View>
            <View style={styles.layoutItemDayInWeek}>
              <Text style={styles.txtDayInWeek}>5</Text>
            </View>
            <View style={styles.layoutItemDayInWeek}>
              <Text style={styles.txtDayInWeek}>6</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  layoutTop: {
    backgroundColor: '#fff',
    height: 65,
  },
  container: {
    margin: 20,
  },
  backLogin: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  txtBack: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  layoutContent: {
    margin: 20,
    marginLeft: 30,
    // marginRight: 30,
  },
  layoutTxtDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtDay: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  layoutIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 40,
  },
  icon: {},
  layoutWeed: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtWeek: {
    color: '#CBCBC9',
    width: 48,
  },
  layoutDayInWeek: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  layoutItemDayInWeek: {
    alignItems: 'center',
    width: 48,
  },
  txtDayInWeek: {
    // padding: 5,
  },
});
