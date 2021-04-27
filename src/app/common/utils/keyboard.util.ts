interface Option {
  keyCode?: number;
  altKey?: number;
  ctrlKey?: number;
  element?: Element;
  [key: string]: any;
}

export function simulateKey(option: Option) {
  const { keyCode, type, altKey, shiftKey, ctrlKey, element = window } = option;
  const evtName = typeof type === "string" ? "key" + type : "keydown";
  const event = document.createEvent("HTMLEvents") as { [key: string]: any };
  event.initEvent(evtName, true, false);
  event.keyCode = keyCode;
  event.altKey = !!altKey;
  event.shiftKey = !!shiftKey;
  event.ctrlKey = !!ctrlKey;
  element.dispatchEvent(event as Event);
}
