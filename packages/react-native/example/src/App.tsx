import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native';
import { ThemeProvider, helpers } from '@td-design/react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from './theme';
import Iconfont from './Iconfont';
import ModalPickerDemo from './ModalPickerDemo';
import ModalDatePickerDemo from './ModalDatePickerDemo';
import InputDemo from './InputDemo';
import ActionSheetDemo from './ActionSheetDemo';
import CardDemo from './CardDemo';
import BadgeDemo from './BadgeDemo';
import AccordionDemo from './AccordionDemo';
import ModalDemo from './ModalDemo';
import IconDemo from './IconDemo';
import DividerDemo from './DividerDemo';
import ImagePickerDemo from './ImagePickerDemo';
import TagDemo from './TagDemo';
import ProgressDemo from './ProgressDemo';
import StepperDemo from './StepperDemo';

/**启动时注册自定义图标 */
helpers.registerCustomIcon(Iconfont);
const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider {...{ theme }}>
        <SafeAreaView style={{ flex: 1 }}>
          <KeyboardAvoidingView enabled behavior="padding" style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" style={{ flex: 1 }}>
              {/* <ModalPickerDemo /> */}
              {/* <ActionSheetDemo /> */}
              {/* <ModalDatePickerDemo /> */}
              {/* <BadgeDemo /> */}
              {/* <AccordionDemo /> */}
              {/* <ModalDemo /> */}
              {/* <IconDemo /> */}
              {/* <DividerDemo /> */}
              {/* <ImagePickerDemo /> */}
              {/* <TagDemo /> */}
              {/* <InputDemo /> */}
              {/* <CardDemo /> */}
              {/* <ProgressDemo /> */}
              <StepperDemo />
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;