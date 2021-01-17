const createWindowsInstaller = require("electron-winstaller")
  .createWindowsInstaller;
const path = require("path");

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error);
    process.exit(1);
  });

function getInstallerConfig() {
  console.log("creating windows installer");
  const rootPath = path.join("./");
  const outPath = path.join(rootPath, "release");

  return Promise.resolve({
    appDirectory: path.join(outPath, "Ascension-win32-ia32/"),
    authors: "Joel Coddington",
    noMsi: true,
    outputDirectory: path.join(outPath, "windows-installer"),
    exe: "ascension.exe",
    setupExe: "AscensionInstaller.exe",
    setupIcon: path.join(rootPath, "src", "assets", "ascension.ico"),
  });
}
