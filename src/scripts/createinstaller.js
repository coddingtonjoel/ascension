// C:\Users\sdkca\Desktop\electron-workspace\build.js
var electronInstaller = require("electron-winstaller");
// In this case, we can use relative paths
var settings = {
  // Specify the folder where the built app is located
  appDirectory: "./release/win/Ascension-win32-x64",
  // Specify the existing folder where
  outputDirectory: "./release/installers/windows",
  // The name of the Author of the app (the name of your company)
  authors: "Joel Coddington",
  // The name of the executable of your built
  exe: "./Ascension.exe",
  description: "League of Legends Mastery API Client",
};

electronInstaller.createWindowsInstaller(settings).then(
  () => {
    console.log("Installer creation succeeded.");
  },
  (e) => {
    console.log(`Installer creation error: ${e.message}`);
  }
);
