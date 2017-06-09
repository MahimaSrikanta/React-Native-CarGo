import { DrawerNavigator } from 'react-navigation';

import Join from '../Groups';
import JoinGroup from '../JoinGroupScreen';
import Home from '../HomeScreen';
import CreateGroup from '../CreateGroup';
import ChatterBox from '../ChatterBox';
import ViewGroups from '../ViewGroups';
import UserProfile from '../UserProfile';
import GroupList from '../GroupList';

const Drawer = DrawerNavigator({
  Home: { screen: Home },
  UserProfile: { screen: UserProfile },
  ChatterBox: { screen: ChatterBox },
  'Find Ride': { screen: JoinGroup },
  'Create Group': { screen: CreateGroup },
  'GroupList': {screen: GroupList},
  // ViewGroups: { screen: ViewGroups },
  Join: { screen: Join },
},
  {
    drawerWidth: 200,
    drawerPosition: 'left',
  },
);

export default Drawer;
