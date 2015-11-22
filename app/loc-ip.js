function locIP() {
    var myIp = require('ip');
    var netIp = myIp.address();
    return netIp;
}
