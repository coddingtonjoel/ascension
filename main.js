const path = require("path");
const url = require("url");
const { app, BrowserWindow, dialog } = require("electron");
const AppMenu = require("./AppMenu");
const axios = require("axios");

// this should be placed at top of main.js to handle setup events quickly
if (handleSquirrelEvent(app)) {
  // squirrel event handled and app will exit in 1000ms, so don't do anything else
  return;
}

let isDev = false;

if (
  process.env.NODE_ENV !== undefined &&
  process.env.NODE_ENV === "development"
) {
  isDev = true;
}

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1120,
    height: 850,
    minWidth: 700,
    minHeight: 750,
    show: false,
    frame: true,
    backgroundColor: "#FFFFFF",
    resizable: false,
    icon: `${__dirname}/src/assets/ascension.png`,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      webSecurity: false,
      allowRunningInsecureContent: false,
    },
  });

  let indexPath;

  if (isDev && process.argv.indexOf("--noDevServer") === -1) {
    indexPath = url.format({
      protocol: "http:",
      host: "localhost:8080",
      pathname: "index.html",
      slashes: true,
    });
  } else {
    indexPath = url.format({
      protocol: "file:",
      pathname: path.join(__dirname, "dist", "index.html"),
      slashes: true,
    });
  }

  mainWindow.loadURL(indexPath);

  // Don't show until we are ready and loaded
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  mainWindow.on("closed", () => (mainWindow = null));
}

// for CORS fix
app.commandLine.appendSwitch("disable-site-isolation-trials");

app.on("ready", () => {
  const filter = {
    urls: [
      "https://na1.api.riotgames.com/*",
      "https://br1.api.riotgames.com/*",
      "https://euw1.api.riotgames.com/*",
      "https://eun1.api.riotgames.com/*",
      "https://jp1.api.riotgames.com/*",
      "https://kr.api.riotgames.com/*",
      "https://la1.api.riotgames.com/*",
      "https://la2.api.riotgames.com/*",
      "https://oc1.api.riotgames.com/*",
      "https://ru.api.riotgames.com/*",
      "https://tr1.api.riotgames.com/*",
    ],
  };

  createMainWindow();

  new AppMenu(isDev);

  // check for updates
  const server = "https://ascension.coddingtonjoel.vercel.app/";
  const feed = `${server}/update/win32/${app.getVersion()}`;
  setTimeout(() => {
    axios
      .get(feed)
      .then((res) => {
        if (res.data !== "") {
          const dialogOpts = {
            type: "info",
            buttons: ["Download Update", "Later"],
            title: "Application Update",
            message: "New Update for Ascension",
            detail: `A new version of Ascension has been released.\nCurrent version: ${app.getVersion()}.\nNewer version: ${
              res.data.name
            }.`,
          };

          dialog.showMessageBox(dialogOpts).then((returnValue) => {
            if (returnValue.response === 0) {
              require("electron").shell.openExternal(
                "https://github.com/coddingtonjoel/ascension/releases"
              );
            }
          });
        }
      })
      .catch((err) => console.log(err));
  }, 3000);
});

// additional macOS settings for standarization

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createMainWindow();
  }
});

// Stop error
app.allowRendererProcessReuse = true;

// placed at the end of main.js
function handleSquirrelEvent(application) {
  if (process.argv.length === 1) {
    return false;
  }
  const ChildProcess = require("child_process");
  const path = require("path");
  const appFolder = path.resolve(process.execPath, "..");
  const rootAtomFolder = path.resolve(appFolder, "..");
  const updateDotExe = path.resolve(path.join(rootAtomFolder, "Update.exe"));
  const exeName = path.basename(process.execPath);
  const spawn = function (command, args) {
    let spawnedProcess, error;
    try {
      spawnedProcess = ChildProcess.spawn(command, args, {
        detached: true,
      });
    } catch (error) {}
    return spawnedProcess;
  };
  const spawnUpdate = function (args) {
    return spawn(updateDotExe, args);
  };
  const squirrelEvent = process.argv[1];
  switch (squirrelEvent) {
    case "--squirrel-install":
    case "--squirrel-updated":
      // Optionally do things such as:
      // - Add your .exe to the PATH
      // - Write to the registry for things like file associations and
      //   explorer context menus
      // Install desktop and start menu shortcuts
      spawnUpdate(["--createShortcut", exeName]);
      setTimeout(application.quit, 1000);
      return true;
    case "--squirrel-uninstall":
      // Undo anything you did in the --squirrel-install and
      // --squirrel-updated handlers
      // Remove desktop and start menu shortcuts
      spawnUpdate(["--removeShortcut", exeName]);
      setTimeout(application.quit, 1000);
      return true;
    case "--squirrel-obsolete":
      // This is called on the outgoing version of your app before
      // we update to the new version - it's the opposite of
      // --squirrel-updated
      application.quit();
      return true;
  }
}
