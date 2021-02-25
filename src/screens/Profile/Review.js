import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import hoacuc from '../../assests/img/hoacuc.png';
import { Navigation } from 'react-native-navigation';
import ItemReview from '../../components/ItemReview';

const Review = (props) => {
  const backDetail = () => {
    Navigation.pop(props.componentId);
  };
  return (
    <View>
      <View style={styles.layoutTop}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backLogin} onPress={() => backDetail()}>
            <TouchableOpacity>
              <Icon name="chevron-left" size={18} />
            </TouchableOpacity>
            <Text style={styles.txtBack}>Đánh giá</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.layoutContent}>
        <View style={styles.layoutTotalReview}>
          <View style={styles.layoutLeftTop}>
            <View style={styles.layoutNumberReview}>
              <Text style={styles.txtNumber}>4.5</Text>
            </View>
            <Text style={styles.txtTotalreview}>320 reviews</Text>
            <View style={styles.layoutIcon}>
              <Icon style={styles.iconStar} name="star" />
              <Icon style={styles.iconStar} name="star" />
              <Icon style={styles.iconStar} name="star" />
              <Icon style={styles.iconStar} name="star" />
              <Icon style={styles.iconStar} name="star" />
            </View>
          </View>
          <View style={styles.layoutRightTop}>
            <View style={styles.layoutRowTotalReview}>
              <Text style={styles.txtNameReview}>5 sao</Text>
              <View style={styles.layoutIcon}>
                <Icon style={styles.iconStar} name="star" />
                <Icon style={styles.iconStar} name="star" />
                <Icon style={styles.iconStar} name="star" />
                <Icon style={styles.iconStar} name="star" />
                <Icon style={styles.iconStar} name="star" />
              </View>
              <Text style={styles.txtTotalNumberReview}>200</Text>
            </View>
            <View style={styles.layoutRowTotalReview}>
              <Text style={styles.txtNameReview}>4 sao</Text>
              <View style={styles.layoutIcon}>
                <Icon style={styles.iconStar} name="star" />
                <Icon style={styles.iconStar} name="star" />
                <Icon style={styles.iconStar} name="star" />
                <Icon style={styles.iconStar} name="star" />
                <Icon style={styles.iconStar} name="star" />
              </View>
              <Text style={styles.txtTotalNumberReview}>100</Text>
            </View>
            <View style={styles.layoutRowTotalReview}>
              <Text style={styles.txtNameReview}>3 sao</Text>
              <Text style={styles.txtTotalNumberReview}>50</Text>
            </View>
            <View style={styles.layoutRowTotalReview}>
              <Text style={styles.txtNameReview}>2 sao</Text>
              <Text style={styles.txtTotalNumberReview}>150</Text>
            </View>
            <View style={styles.layoutRowTotalReview}>
              <Text style={styles.txtNameReview}>1 sao</Text>
              <Text style={styles.txtTotalNumberReview}>20</Text>
            </View>
          </View>
        </View>
        <View style={styles.layoutCenter}>
          <ItemReview />
          <ItemReview />
          <ItemReview />
        </View>
      </View>
    </View>
  );
};

export default Review;

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
    alignItems: 'center',
    marginBottom: 30,
  },
  txtBack: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  layoutContent: {
    backgroundColor: '#fff',
    height: 750,
    borderTopColor: '#e7eaeb',
    borderTopWidth: 1,
  },
  layoutItem: {
    margin: 20,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  boderIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconItem: {
    color: '#fff',
  },
  layoutDetail: {
    borderBottomColor: '#e7eaeb',
    borderBottomWidth: 1,
    marginLeft: 20,
    width: 280,
    paddingBottom: 10,
  },
  txtTitle: {
    fontWeight: 'bold',
  },
  txtDetailsl: {
    color: '#e7eaeb',
  },
  txtTime: {
    color: '#e7eaeb',
  },
  layoutTotalReview: {
    flexDirection: 'row',
    margin: 30,
    marginBottom: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e7eaeb',
    paddingBottom: 10,
  },
  layoutLeftTop: {
    alignItems: 'center',
  },
  layoutNumberReview: {
    height: 60,
    width: 60,
    backgroundColor: '#40aa54',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  txtNumber: {
    color: '#fff',
    fontWeight: 'bold',
  },
  txtTotalreview: {
    marginTop: 10,
  },
  layoutIcon: {
    flexDirection: 'row',
    marginTop: 5,
  },
  iconStar: {
    color: '#FFD700',
  },
  layoutRightTop: {
    flexDirection: 'column',
  },
  layoutRowTotalReview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
  layoutCenter: {
    margin: 20,
  },
});
