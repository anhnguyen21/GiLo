/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';
import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel';
const { width: width } = Dimensions.get('window');
import shop from '../../assests/img/slide1.jpg';
import buy from '../../assests/img/slide2.jpg';
import delivery from '../../assests/img/slide3.jpg';
import schedual from '../../assests/img/slide4.jpg';
import giftbox from '../../assests/icon/giftbox.png';
import flowerImage from '../../assests/icon/flowers.png';
import lipstickImage from '../../assests/icon/lipstick.png';
import giftCard from '../../assests/icon/gift-card.png';
import cake from '../../assests/icon/cake-slice.png';
import event from '../../assests/img/event.jpg';
import { pushScreen } from '../../navigation/pushScreen';
import ItemCard from '../../components/ItemCard';
import ItemCategories from '../../components/ItemCategories';
import { useSelector, useDispatch } from 'react-redux';
import DetailActions from '../../redux/DetailRedux/action';
import CartAction from '../../redux/CartRedux/action';
import bgEvent from '../../assests/img/bgEvent.jpg';
import greetingCard from '../../assests/img/greetingCard.jpg';

const data = {
  Sidser: [
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

const index = (props) => {
  const video = React.useRef(null);
  const [img, setImg] = React.useState(false);
  const [status, setStatus] = React.useState(true);
  const [entries, setEntries] = useState(data.Sidser);
  const [activeSlide, setActiveSlide] = useState(0);
  const dataProduct = useSelector((state) => state.home.responseDataType);
  const user = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const onGiftDetai = (id) => {
    dispatch(DetailActions.getDetailProduct(id, onSuccess));
  };

  const onSuccess = () => {
    pushScreen(props.componentId, 'Detail', user, '', false, 'chevron-left', false);
  };

  const onHomeToCart = () => {
    dispatch(CartAction.getCart(user, onSuccessCart));
  };

  const onSuccessCart = () => {
    pushScreen(props.componentId, 'Cart', user, '', false, 'chevron-left', false);
  };

  const _renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.itemSlideContainer}>
        <ParallaxImage
          source={item.image}
          containerStyle={styles.imageSlideContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.layoutTop}>
          <Text style={styles.txtApp}>GiLo</Text>
          <TouchableOpacity onPress={() => onHomeToCart()}>
            <Icon style={styles.iconCart} name="cart-plus" size={20} color="#808080" />
          </TouchableOpacity>
        </View>
        <View style={styles.shadowRadius}>
          <Carousel
            style={styles.containerCarousel}
            data={entries}
            renderItem={_renderItem}
            onSnapToItem={(index) => setActiveSlide(index)}
            sliderWidth={350}
            itemWidth={350}
            windowSize={1}
            hasParallaxImages={true}
            layout={'stack'}
            layoutCardOffset={40}
          />
        </View>
        <Pagination
          style={styles.pagination}
          dotsLength={entries.length}
          activeDotIndex={activeSlide}
          dotStyle={{
            width: 20,
            height: 5,
            borderRadius: 4,
            backgroundColor: '#000',
          }}
          inactiveDotStyle={{
            width: 20,
            height: 5,
            borderRadius: 4,
            backgroundColor: '#e9e9e9',
          }}
          inactiveDotScale={0.6}
        />
        <View style={styles.categories}>
          <ItemCategories icon={giftbox} title="Gift" />
          <ItemCategories icon={flowerImage} title="Flower" />
          <ItemCategories icon={lipstickImage} title="Lipstick" />
          <ItemCategories icon={cake} title="Cake" />
          <ItemCategories icon={giftCard} title="Gift Card" />
        </View>
        <Text style={styles.txtRow}>Sản phẩm đề xuất</Text>
        <ScrollView style={styles.row} horizontal={true} showsHorizontalScrollIndicator={false}>
          {dataProduct.map((item, index) => {
            return (
              <ItemCard
                key={index}
                image={item.img}
                title={item.name}
                price={item.price}
                idProduct={item.id}
                heart={item.heart}
                discount={item.discount}
                onGiftDetai={onGiftDetai}
              />
            );
          })}
        </ScrollView>
        <Text style={styles.txtRow}>Phần quà dành tặng bạn</Text>
        <View style={styles.layoutCard}>
          <Image style={styles.imgCard} source={greetingCard} />
        </View>
        <Text style={styles.txtRow}>Tổ chức sự kiện</Text>
        {/* <View style={styles.layoutDiscount}>
          <Image style={styles.imgDiscount} source={shop} />
          <View style={styles.layoutText}>
            <Text style={styles.txtTitle}>Giảm giá ngày valentines</Text>
            <Text style={styles.txtDescription}>Giảm 15% cho tất cả các loại sản phẩm</Text>
            <TouchableOpacity style={styles.btnView}>
              <Text style={styles.txtBtnView}>Xem chi tiết</Text>
            </TouchableOpacity>
          </View>
        </View> */}
        <View>
          {status ? (
            <View style={styles.container}>
              <View style={styles.layTxtOutEvent}>
                <Text style={styles.txtTitleE}>Bạn muốn tạo bất ngờ?</Text>
                <Text style={styles.txtDetailEvent}>Chúng tôi sẽ chuẩn bị thay bạn</Text>
              </View>
              <Image style={styles.imgE} source={bgEvent} />
              <View style={styles.layoutButtons}>
                <TouchableOpacity style={styles.btnPlay} onPress={() => setStatus(!status)}>
                  <Icon fontSize={20} name="play" color="#CBCBC9" />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.container}>
              <Video
                ref={video}
                source={{
                  uri:
                    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvideo.vietnamnet.vn%2Flim-tim-voi-video-toan-canh-khac-viet-quy-goi-cau-hon-ban-gai-a-62458.html&psig=AOvVaw1gAH5BNeL9VULYs09Eu6bd&ust=1616155414769000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjx8armue8CFQAAAAAdAAAAABAI',
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                paused={status}
                style={styles.backgroundVideo}
              />
              <View style={styles.layoutButtons}>
                <TouchableOpacity style={styles.btnPlay} onPress={() => setStatus(!status)}>
                  <Icon name="pause" fontSize={20} color="#CBCBC9" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
        <Text style={styles.txtRow}>Sản phẩm nổi bật</Text>
        <ScrollView style={styles.row} horizontal={true} showsHorizontalScrollIndicator={false}>
          {dataProduct.map((item, index) => {
            return (
              <ItemCard
                key={index}
                image={item.img}
                title={item.name}
                price={item.price}
                idProduct={item.id}
                heart={item.heart}
                discount={item.discount}
                onGiftDetai={onGiftDetai}
              />
            );
          })}
        </ScrollView>
        <View style={styles.layoutImgEvent}>
          <View style={styles.layoutTxtEvent}>
            <Text style={styles.txtTitleEvent}>Tổ chức sự kiện</Text>
            <Text style={styles.txtDesEvent}>Bạn có thể tạo bất ngờ cho người thân</Text>
            <Text style={styles.txtDesEvent}>Gắn kết yêu thương</Text>
            <Text style={styles.txtDesEvent}>- Có nhiều chính sánh</Text>
            <View style={styles.borderBottom} />
          </View>
          <Image style={styles.imgEvent} source={event} />
        </View>
      </View>
      {/* <View style={styles.layoutCopyright}>
        <Text style={styles.txtCopyright}>NguyenTheAnh@PNV21</Text>
      </View> */}
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  containerCarousel: {
    margin: 0,
  },
  layoutTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtApp: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  itemSlideContainer: {
    marginTop: 20,
    width: width - 40,
    height: width - 200,
  },
  imageSlideContainer: {
    borderRadius: 8,
    width: width - 60,
    height: width - 220,
    backgroundColor: '#fff',
    marginLeft: (width - (width - 20)) / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  image: {
    width: width - 60,
    height: width - 220,
  },
  title: {
    position: 'absolute',
    marginTop: 50,
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  categories: {
    marginLeft: 20,
    width: 320,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  layoutRow: {
    marginTop: 20,
    width: 130,
    height: 185,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    marginLeft: 10,
  },
  sales: {
    position: 'absolute',
    backgroundColor: 'yellow',
    padding: 5,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  txtSales: {
    fontSize: 10,
    color: 'red',
  },
  topIconItemRow: {
    marginLeft: 110,
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    width: 380,
    height: 215,
  },
  txtRow: {
    marginTop: 15,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  imgItemRow: {
    marginLeft: 5,
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
  },
  containerRow: {
    margin: 10,
    marginTop: 10,
  },
  txtTitle: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  btnAdd: {
    // backgroundColor: '#f070a9',
    width: 35,
    height: 35,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopColor: '#f070a9',
    borderColor: '#f070a9',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: 150,
    marginLeft: 95,
  },
  iconPlus: {
    fontSize: 18,
    color: '#f070a9',
  },
  layoutDiscount: {
    margin: 10,
    marginRight: 0,
    backgroundColor: '#e7eaeb',
    flexDirection: 'row',
    padding: 10,
    width: 350,
  },
  imgDiscount: {
    width: 150,
    height: 150,
  },
  layoutText: {
    marginLeft: 10,
  },
  btnView: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    width: 100,
    marginTop: 20,
    marginLeft: 30,
  },
  txtDescription: {
    marginTop: 10,
    width: 180,
  },
  txtBtnView: {
    color: '#fff',
    fontWeight: 'bold',
  },
  layoutCopyright: {
    backgroundColor: '#a3c2d8',
    width: width,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtCopyright: {
    color: '#fff',
  },
  layoutImgEvent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 10,
  },
  imgEvent: {
    width: 350,
    height: 250,
  },
  layoutTxtEvent: {
    position: 'absolute',
    top: 50,
    elevation: 100,
  },
  borderBottom: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    paddingBottom: 20,
    width: 100,
  },
  txtTitleEvent: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  txtDesEvent: {
    color: '#fff',
  },
  ////////////////
  layTxtOutEvent: {
    position: 'absolute',
    top: 40,
    marginLeft: 20,
    elevation: 100,
  },
  txtTitleE: {
    width: 250,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  txtDetailEvent: {
    color: '#fff',
    fontSize: 18,
  },
  imgE: {
    marginTop: 0,
    marginLeft: 10,
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  backgroundVideo: {
    width: 300,
    height: 200,
    marginLeft: 10,
  },
  layoutButtons: {
    position: 'absolute',
    marginLeft: 150,
    marginTop: 120,
  },
  buttons: {
    backgroundColor: '#CBCBC9',
    color: '#000',
  },
  layoutCard: {
    alignItems: 'center',
    marginTop: 20,
  },
  imgCard: {
    width: 300,
    height: 250,
    borderRadius: 10,
  },
});
