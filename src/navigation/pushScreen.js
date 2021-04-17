import { Navigation } from 'react-native-navigation';
import Login from '../screens/Authur/login';
import Icons from 'react-native-vector-icons/FontAwesome5';
export const pushScreen = (
  componentId,
  screenApp,
  passProps,
  title,
  visible,
  left,
  visibleBottom,
) => {
  Promise.all([Icons.getImageSource(left, 16)]).then(([leftImage, rightImage]) => {
    Navigation.push(componentId, {
      component: {
        name: screenApp,
        passProps: {
          data: passProps,
          title: title,
        },
        options: {
          topBar: {
            visible: visible,
            title: {
              text: title,
            },
            leftButtons: [
              {
                id: left,
                icon: leftImage,
                fontSize: 10,
                color: '#555',
              },
            ],
          },
          bottomTabs: {
            visible: visibleBottom,
          },
        },
      },
    });
  });
};
export const loginScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Login',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};

export const homeScreen = () => {
  Promise.all([
    Icons.getImageSource('search', 14, '#8F8F8F'),
    Icons.getImageSource('shopping-bag', 14, '#8F8F8F'),
    Icons.getImageSource('home', 14, '#8F8F8F'),
    Icons.getImageSource('bell', 14, '#8F8F8F'),
    Icons.getImageSource('user', 14, '#8F8F8F'),
    Icons.getImageSource('plus', 14, '#8F8F8F'),
    Icons.getImageSource('bars', 14),
    Icons.getImageSource('search', 14),
  ]).then(([searchIcon, orderHistory, home, notifications, user, file, menu, search]) => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          activeTintColor: '#cd077d',
          options: {
            bottomTabs: {
              currentTabIndex: 0,
              activeTintColor: 'red',
              hideShadow: true,
              backgroundColor: '#F5F6F7',
            },
          },
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Home',
                      options: {
                        topBar: {
                          visible: false,
                        },
                        bottomTab: {
                          text: 'Tìm kiếm',
                          icon: home,
                          fontSize: 18,
                          animate: false,
                          color: '#8F8F8F',
                          selectedIconColor: '#f070a9',
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Order',
                      options: {
                        topBar: {
                          visible: false,
                        },
                        bottomTab: {
                          text: 'Đơn hàng',
                          icon: orderHistory,
                          fontSize: 18,
                          animate: false,
                          color: '#8F8F8F',
                          selectedIconColor: '#f070a9',
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      id: 'HOME_SCREEN',
                      name: 'age',
                      options: {
                        topBar: {
                          visible: false,
                        },
                        bottomTab: {
                          text: 'Quà tặng',
                          icon: file,
                          fontSize: 18,
                          animate: false,
                          color: '#8F8F8F',
                          style: {
                            backgroundColor: 'green',
                            borderTopWidth: 1,
                            borderTopColor: '#555',
                          },
                          selectedIconColor: '#f070a9',
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'NotificationDetail',
                      options: {
                        topBar: {
                          visible: false,
                        },
                        bottomTab: {
                          text: 'Thông báo',
                          icon: notifications,
                          color: '#8F8F8F',
                          badge: '2',
                          selectedIconColor: '#f070a9',
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Profile',
                      options: {
                        topBar: {
                          visible: false,
                        },
                        bottomTab: {
                          text: 'Tôi',
                          icon: user,
                          color: '#8F8F8F',
                          selectedIconColor: '#f070a9',
                        },
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    });
  });
};

export const introScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Intro',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};
