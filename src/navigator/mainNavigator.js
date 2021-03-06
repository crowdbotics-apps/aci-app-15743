import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth28075Navigator from '../features/EmailAuth28075/navigator';
import Camera28074Navigator from '../features/Camera28074/navigator';
import CalendarView28073Navigator from '../features/CalendarView28073/navigator';
import Maps28072Navigator from '../features/Maps28072/navigator';
import Tutorial28071Navigator from '../features/Tutorial28071/navigator';
import Messaging28070Navigator from '../features/Messaging28070/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
EmailAuth28075: { screen: EmailAuth28075Navigator },
Camera28074: { screen: Camera28074Navigator },
CalendarView28073: { screen: CalendarView28073Navigator },
Maps28072: { screen: Maps28072Navigator },
Tutorial28071: { screen: Tutorial28071Navigator },
Messaging28070: { screen: Messaging28070Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
