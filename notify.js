function sendNotification(title, message) {
  if (Notification.permission !== 'granted') {
    Notification.requestPermission().then(function(permission) {
      if (permission === 'granted') {
        new Notification(title, {
          body: message,
          icon: 'https://example.com/notification-icon.png'
        });
      }
    });
  } else {
    new Notification(title, {
      body: message,
      icon: 'https://example.com/notification-icon.png'
    });
  }
}
