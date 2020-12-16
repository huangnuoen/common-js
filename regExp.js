/* 正则匹配 */
/* 手机号匹配 */
// 匹配以1开头，第二位是3-9，后9位是0-9数字的字符串
export function checkPhone(phone) {
  return /^1[3456789][0-9]{9}$/g.test(phone)
  // return (/^1(3|4|5|6|7|8|9)[0-9]{9}$/g).test(phone)
}

/* 邮箱匹配 */
export function checkEmail(email) {
  const ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
  return ePattern.test(email)
}

const cardArea = {
  11: '北京',
  12: '天津',
  13: '河北',
  14: '山西',
  15: '内蒙古',
  21: '辽宁',
  22: '吉林',
  23: '黑龙江',
  31: '上海',
  32: '江苏',
  33: '浙江',
  34: '安徽',
  35: '福建',
  36: '江西',
  37: '山东',
  41: '河南',
  42: '湖北',
  43: '湖南',
  44: '广东',
  45: '广西',
  46: '海南',
  50: '重庆',
  51: '四川',
  52: '贵州',
  53: '云南',
  54: '西藏',
  61: '陕西',
  62: '甘肃',
  63: '青海',
  64: '宁夏',
  65: '新疆',
  71: '台湾',
  81: '香港',
  82: '澳门',
  91: '国外'
}
export function checkIdcard(sId) {
  if (!sId) {
    return '请输入证件号码'
  }
  sId = String(sId)
  if (!sId.match(/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/gi)) {
    return '身份证号格式不正确'
  }

  var iSum = 0
  var cardInfo = Array(2)
  sId = sId.replace(/x$/i, 'a')
  if (sId.length === 0) {
    return '身份证为空'
  }

  if (cardArea[parseInt(sId.substr(0, 2))] == null) {
    return '非法证件，你的地区填写有错误请仔细填写'
  }
  var sBirthday =
    sId.substr(6, 4) +
    '/' +
    Number(sId.substr(10, 2)) +
    '/' +
    Number(sId.substr(12, 2))
  var d = new Date(sBirthday)
  if (
    sBirthday !==
    d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()
  ) {
    return '非法证件，请仔细填写'
  }

  for (var i = 17; i >= 0; i--) {
    iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11)
  }

  if (iSum % 11 !== 1 || sId.length > 19) {
    return '非法证号，请认真填写'
  }

  var age = new Date().getFullYear() - d.getFullYear()
  cardInfo[0] = cardArea[parseInt(sId.substr(0, 2))]
  cardInfo[1] = sBirthday
  cardInfo[2] = age
  cardInfo[3] = sId.substr(16, 1) % 2 ? 1 : 2

  return cardInfo
}
