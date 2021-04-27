export const isNotifyEnabled = () => Notification.permission === 'granted';

const defaultOption: NotificationOptions = {
  icon: '/favicon.ico',
};
export function notify(title: string, option: NotificationOptions = {}) {
  option = { ...option, ...defaultOption };
  if (isNotifyEnabled()) {
    try {
      new Notification(title, option);
    } catch (error) {
      // Fallback in mobile since Notification is Illegal in some devices
      navigator.serviceWorker.ready.then((reg) => {
        if (!reg) return;
        reg.showNotification(title, option);
      });
    }
  }
}
