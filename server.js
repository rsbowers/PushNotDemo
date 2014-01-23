var apn = require('apn');
 
var token = "Your device token";
var device = new apn.Device(token);
 
var notification = new apn.Notification();
notification.expiry = Math.floor(Date.now() / 1000) + 3600;
notification.badge = 1;
notification.alert = "This is a Push Notification=)";
notification.payload = {'prop': 'special value'};
notification.device = device;
 
var options = {
 gateway: 'gateway.sandbox.push.apple.com',
 cert: 'assets/MobileHomeDepot.pem',
 key: 'assets/MobileHomeDepotKey.pem',
 passphrase: 'sapient123'
}

var apnsConnection = new apn.Connection(options);
apnsConnection.pushNotification(notification, device);