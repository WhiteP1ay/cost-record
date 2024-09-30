import { detectDeviceType } from "./deviceUtils";

export default function flexible(window: Window, document: Document) {
  function resetFontSize() {
    const clientWidth = parseInt(
      document.documentElement.clientWidth.toString(),
      10
    );
    let size = 0;
    // 使用 detectDeviceType 函数判断设备类型

    if (detectDeviceType() === "desktop") {
      size = (document.documentElement.clientWidth / 1920) * 16;
      document.documentElement.style.fontSize = (size <= 14 ? 13 : size) + "px";
    } else {
      size = clientWidth;
      const fontSize = (size / 750) * 16;

      // reset mobile fontsize
      // @anyahui: 不能根据有没有token来判断几倍图

      document.documentElement.style.fontSize = fontSize + "px";
    }
  }

  resetFontSize();
  window.addEventListener("pageshow", resetFontSize);
  window.addEventListener("resize", resetFontSize);
}
