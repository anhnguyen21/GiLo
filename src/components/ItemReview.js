import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import hoacuc from '../assests/img/hoacuc.png';

const ItemReview = (props) => {
  return (
    <View>
      <View style={styles.layItemRow}>
        <Image style={styles.imgAvatar} source={hoacuc} />
        <View style={styles.layDeatilReview}>
          <View style={styles.layoutName}>
            <Text style={styles.txtName}>{props.name}</Text>
            <Text style={styles.txtDay}>{props.time}</Text>
          </View>
          <View style={styles.layoutIcon}>
            <Icon style={styles.iconStar} name="star" />
            <Icon style={styles.iconStar} name="star" />
            <Icon style={styles.iconStar} name="star" />
            <Icon style={styles.iconStar} name="star" />
            <Icon style={styles.iconStar} name="star" />
          </View>
          <View style={styles.layoutDescription}>
            <Text style={styles.txtDescription}>{props.content}</Text>
          </View>
          <View style={styles.layoutLikeReply}>
            <View style={styles.layoutLike}>
              <Icon style={styles.iconHeart} name="heart" color="red" />
              <Text style={styles.txtLike}>24 Like</Text>
            </View>
            <View style={styles.layoutReply}>
              <Icon style={styles.iconReply} name="reply" />
              <Text style={styles.txtLike}>24 Like</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemReview;

const styles = StyleSheet.create({
  layItemRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e7eaeb',
    paddingBottom: 10,
    marginBottom: 20,
  },
  imgAvatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#e7eaeb',
  },
  layDeatilReview: {
    marginLeft: 20,
    width: 260,
  },
  layoutName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtName: {
    fontWeight: 'bold',
  },
  txtDay: {
    color: '#e7eaeb',
  },
  layoutIcon: {
    flexDirection: 'row',
    marginTop: 5,
  },
  iconStar: {
    color: '#FFD700',
  },
  layoutDescription: {
    marginTop: 5,
  },
  layoutLikeReply: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    marginTop: 5,
  },
  layoutLike: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  layoutReply: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtLike: {
    marginLeft: 10,
    color: '#e7eaeb',
  },
});
