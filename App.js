import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-redux";
import store from "./redux/store.js";

import Index from "./screens/index/Index.js";
import Gallery from "./screens/gallery/Gallery.js";
import BigPhoto from "./screens/bigPhoto/BigPhoto.js";
import Camera from "./screens/camera/Camera.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Index" component={Index} />
          <Stack.Screen name="Gallery" component={Gallery} />
          <Stack.Screen name="Photo" component={BigPhoto} />
          <Stack.Screen name="Camera" component={Camera} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
