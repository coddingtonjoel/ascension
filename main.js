const path = require("path");
const url = require("url");
const { app, BrowserWindow } = require("electron");
const AppMenu = require("./AppMenu");
const { session } = require("electron");

let mainWindow;

let isDev = false;

if (
  process.env.NODE_ENV !== undefined &&
  process.env.NODE_ENV === "development"
) {
  isDev = true;
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 700,
    minHeight: 750,
    show: false,
    frame: true,
    backgroundColor: "#FFFFFF",
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
