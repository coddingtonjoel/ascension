const { Menu, app } = require("electron");
const openAboutWindow = require("about-window").default;
const path = require("path");

const isMac = process.platform === "darwin";

class AppMenu extends Menu {
  // add any window objects needed to constructor
  constructor(isDev) {
    super();

    let template = [
      {
        role: "fileMenu",
      },
      {
        role: "editMenu",
      },
    ];

    if (isMac) {
      template.unshift({
        label: app.getName(),
        submenu: [
          {
            label: "About Ascension",
            click: () => {
              openAboutWindow({
                icon_path: path.join(
                  __dirname,
                  "src",
                  "assets",
                  "ascension.png"
                ),
                copyright: "Copyright (c) 2021 Joel Coddington",
              });
            },
          },
          { type: "separator" },
          { role: "services" },
          { type: "separator" },
          { role: "hide" },
          { role: "hideothers" },
          { role: "unhide" },
          { type: "separator" },
          { role: "quit" },
        ],
      });
    }

    if (!isMac) {
      template.push({
        label: "Help",
        submenu: [
          {
            label: "About Ascension",
            click: () => {
              openAboutWindow({
                icon_path: path.join(
                  __dirname,
                  "src",
                  "assets",
                  "ascension.png"
                ),
                copyright: "Copyright (c) 2021 Joel Coddington",
              });
            },
          },
        ],
      });
    }

    if (isDev) {
      template.push({
        label: "Developer",
        submenu: [
          { role: "reload" },
          { role: "forcereload" },
          { type: "separator" },
          { role: "toggledevtools" },
        ],
      });
    }

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  }
}

module.exports = AppMenu;
