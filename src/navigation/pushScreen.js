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
    Icons.getImageSource('home', 14, '#009900'),
    Icons.getImageSource('bell', 14, '#8F8F8F'),
    Icons.getImageSource('user', 14, '#8F8F8F'),
    Icons.getImageSource('book', 14),
    Icons.getImageSource('bars', 14),
    Icons.getImageSource('search', 14),
  ]).then(([searchIcon, orderHistory, add, notifications, user, library, menu, search]) => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          options: {
            bottomTabs: {
              currentTabIndex: 2,
            },
          },
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Search',
                      options: {
                        topBar: {
                          visible: false,
                        },
                        bottomTab: {
                          text: 'Tìm kiếm',
                          icon: searchIcon,
                          fontSize: 18,
                          animate: false,
                          color: '#8F8F8F',
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
                      name: 'Home',
                      options: {
                        topBar: {
                          visible: false,
                        },
                        bottomTab: {
                          text: 'Home',
                          icon: add,
                          fontSize: 18,
                          animate: false,
                          color: '#8F8F8F',
                          style: {
                            backgroundColor: 'green',
                            borderTopWidth: 1,
                            borderTopColor: '#555',
                          },
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
