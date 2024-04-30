// This should be the notification code as discussed previously
function sendNotification() {
  if (Notification.permission === 'granted') {
    new Notification('Hey there!', {
      body: 'This is an example notification from your GitHub-hosted script!',
      icon: 'https://example.com/icon.png'
    });
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification('Hey there!', {
          body: 'This is an example notification from your GitHub-hosted script!',
          icon: 'https://example.com/icon.png'
        });
      }
    });
  }
}
