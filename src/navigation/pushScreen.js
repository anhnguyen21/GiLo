import { Navigation } from 'react-native-navigation';
import Login from '../screens/Authur/login';
import Icons from 'react-native-vector-icons/FontAwesome5';
export const pushScreen = (componentId, screenApp, passProps, title, visible, left) => {
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
    Icons.getImageSource('home', 14),
    Icons.getImageSource('shopping-bag', 14),
    Icons.getImageSource('bell', 14),
    Icons.getImageSource('user', 14),
    Icons.getImageSource('book', 14),
    Icons.getImageSource('bars', 14),
    Icons.getImageSource('search', 14),
  ]).then(([listBook, orderHistory, notifications, user, library, menu, search]) => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Home',
                      options: {
                        topBar: {
                          visible: true,
                          leftButtons: [
                            {
                              id: 'sideBar',
                              icon: menu,
                              fontSize: 10,
                            },
                          ],
                          rightButtons: [
                            {
                              id: 'search',
                              icon: search,
                              fontSize: 10,
                            },
                          ],
                        },
                        bottomTab: {
                          icon: listBook,
                          fontSize: 18,
                          animate: false,
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
                          icon: orderHistory,
                          fontSize: 18,
                          animate: false,
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
                          icon: notifications,
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
                          icon: user,
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
