let a, b;

function setA() {
    setTimeout(() => {
        a = 2;
    }, 1000);
}

function setB() {
    setTimeout(() => {
        b = 2;
    }, 1000);
};

let pro = Promise.all([setA, setB]);
let proThen = pro.then((values) => values);
console.log('pro', pro);
console.log('proThen', proThen);

let json2 = "{\"addressProvince\":\"北京市\",\"addressCity\":\"北京市\",\"addressDistrict\":\"昌平区\",\"addressDetail\":\"可能不会\",\"marryStatus\":\"10\",\"immediateContact\":{\"name\":\"测试号码\",\"mobilePhoneNo\":\"13254463968\",\"relationship\":\"父母\"},\"secondImmediateContact\":{\"name\":\"村书记\",\"mobilePhoneNo\":\"15279436685\",\"relationship\":\"父母\"},\"gpsProvince\":\"北京市\",\"gpsCity\":\"北京市\",\"gpsDistrict\":\"朝阳区\",\"gpsAddress\":\"中国北京市朝阳区三里屯街道白家庄路1号院-2\",\"environment\":{\"latitude\":\"39.929517\",\"longitude\":\"116.460478\"}}";
let json = "{\"addressProvince\":\"北京市\",\"addressCity\":\"北京市\",\"addressDistrict\":\"昌平区\",\"addressDetail\":\"紧急集合机会\",\"marryStatus\":\"10\",\"immediateContact\":{\"name\":\"白班管事\",\"mobilePhoneNo\":\"15824353791\",\"relationship\":\"父母\"},\"secondImmediateContact\":{\"name\":\"白伟梁\",\"mobilePhoneNo\":\"17385489130\",\"relationship\":\"父母\"},\"deviceUniqueId\":\"6c623ac01ef96d61\",\"gpsAddress\":\"中国北京市朝阳区三里屯街道白家庄路1号院-2\",\"gpsCity\":\"北京市\",\"gpsDistrict\":\"朝阳区\",\"gpsProvince\":\"北京市\",\"imei\":\"and_exp:6c623ac01ef96d61\",\"ip\":\"10.0.12.186\",\"isEmulator\":\"N\",\"isHarmonyOs\":false,\"latiTude\":\"39.929517\",\"longiTude\":\"116.460485\",\"mac\":\"\",\"miitDeviceId\":\"{\\\"AAID\\\":\\\"e19e6261-a7a5-4d31-8ebb-e9f9e202c04f\\\",\\\"OAID\\\":\\\"9d1436cd262197d9\\\",\\\"UDID\\\":\\\"\\\",\\\"VAID\\\":\\\"f99b7d5d4773b241\\\"}\",\"networkType\":\"WIFI\",\"operationSys\":\"Android\",\"operationSysVersion\":\"12\",\"phoneMarker\":\"Xiaomi\",\"phoneModel\":\"M2102J2SC\",\"phoneOperator\":\"中国移动\"}";
let j1 = JSON.parse(json);
let j2 = JSON.parse(json2);

console.log('j1', j1);
console.log('j2', j2);
