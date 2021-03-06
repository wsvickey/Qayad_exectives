package com.qayad_executive;

import android.app.Application;
import android.content.Context;

import com.facebook.react.ReactApplication;
import com.imagepicker.ImagePickerPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.swmansion.reanimated.ReanimatedPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import java.lang.reflect.InvocationTargetException;
import com.vonovak.AddCalendarEventPackage;
import java.util.Arrays;
import java.util.List;
import com.BV.LinearGradient.LinearGradientPackage;
import com.reactnativecommunity.netinfo.NetInfoPackage;
import com.marianhello.bgloc.react.BackgroundGeolocationPackage;
import org.pgsqlite.SQLitePluginPackage;
public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          return Arrays.<ReactPackage>asList(

             new MainReactPackage(),
            new ImagePickerPackage(),
            new RNDeviceInfo(),
               new ReanimatedPackage(),
                  new RNGestureHandlerPackage(),
                  new LinearGradientPackage(),
                  new NetInfoPackage(),
                  new AddCalendarEventPackage(),
                  new BackgroundGeolocationPackage(),
                  new SQLitePluginPackage()

          );
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    initializeFlipper(this); // Remove this line if you don't want Flipper enabled
  }

  /**
   * Loads Flipper in React Native templates.
   *
   * @param context
   */
  private static void initializeFlipper(Context context) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.facebook.flipper.ReactNativeFlipper");
        aClass.getMethod("initializeFlipper", Context.class).invoke(null, context);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
