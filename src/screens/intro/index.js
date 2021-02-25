/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import shop from '../../assests/icon/shop.png';
import buy from '../../assests/icon/buy.png';
import delivery from '../../assests/icon/delivery.png';
import schedual from '../../assests/icon/schedual.png';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import ItemIntro from '../../components/ItemIntro';
import { pushScreen } from '../../navigation/pushScreen';

const { width, height } = Dimensions.get('window');

const data = {
  intro: [
    {
      title: 'Cửa hàng',
      description: 'Rất nhiều cuốn sách hay và chương trình thú vị được tích hợp trên hệ thống',
      image: shop,
      btn: false,
    },
    {
      title: 'Xem & mua sản phẩm',
      description: 'Sách sẽ được giữ trong 2 giờ đồng hồ Hãy chắc chắn là bạn đến nhận kịp giờ',
      image: buy,
      btn: false,
    },
    {
      title: 'Địa điểm & thời gian',
      description: 'Chọn một nơi yêu thích và tận hưởng cuốn sách mà mình yêu thích thôi nào.',
      image: schedual,
      btn: true,
    },
    {
      title: 'Chờ giao hàng',
      description: 'Chọn một nơi yêu thích và tận hưởng cuốn sách mà mình yêu thích thôi nào.',
      image: delivery,
      btn: true,
    },
  ],
};

const Intro = (props) => {
  const [entries, setEntries] = React.useState(data.intro);
  const [activeSlide, setActiveSlide] = React.useState(0);
  const _renderItem = ({ item, index }) => {
    return <ItemIntro key={index} title={item.title} image={item.image} />;
  };
  const onNextStart = () => {
    pushScreen(props.componentId, 'Start', '', '', false, 'chevron-left');
  };
  return (
    <View style={styles.contain}>
      <Carousel
        style={styles.container}
        data={entries}
        renderItem={_renderItem}
        onSnapToItem={(index) => setActiveSlide(index)}
        sliderWidth={400}
        itemWidth={400}
        windowSize={1}
      />
      <View style={styles.pagination}>
        <Pagination
          dotsLength={entries.length}
          activeDotIndex={activeSlide}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: '#000',
          }}
          inactiveDotStyle={{
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: '#e9e9e9',
          }}
          inactiveDotScale={0.6}
        />
      </View>
      {(() => {
        if (activeSlide === 3) {
          return (
            <TouchableOpacity style={styles.layoutBtnIntro} onPress={() => onNextStart()}>
              <Text style={styles.txtBtnIntro}>Mua sắm</Text>
            </TouchableOpacity>
          );
        }
      })()}
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  contain: {
    alignItems: 'center',
  },
  container: {
    width: width,
    height: height,
  },
  pagination: {
    alignItems: 'center',
    marginTop: 30,
  },
  layoutBtnIntro: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#f070a9',
  },
  txtBtnIntro: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
