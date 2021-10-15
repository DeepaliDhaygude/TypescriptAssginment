function solution(D) {
    var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var map = { 'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6, 'Sun': 7 };
    var map = { 'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6, 'Sun': 7 };
    var D1 = {};
    var lastkey;
    var arr = [];
    var mkey = [];
    var dkey = [];
    mkey = Object.keys(map);
    for (var key in D) {
        var d = new Date(key);
        var dayName = weekdays[d.getDay()];
        dkey.push(dayName);
        if (dayName in D1) {
            D1[dayName] = D1[dayName] + D[key];
        }
        else {
            D1[dayName] = D[key];
        }
    }
    for (var k = 0; k < mkey.length; k++) {
        var match = false;
        for (var l = 0; l < dkey.length; l++) {
            if ((mkey[k] == dkey[l])) {
                match = true;
                break;
            }
        }
        if (!match) {
            var difference = 0;
            for (var key in D1) {
                var first = 0;
                var d1 = new Date(key);
                var dayName1 = weekdays[d1.getDay()];
                lastkey = 0;
                for (var j in map) {
                    first = D1[j];
                    difference = first - lastkey;
                    arr.push(difference);
                    if (dayName1 == j) {
                        continue;
                    }
                    else {
                        D1[j] = lastkey + arr[0];
                    }
                    lastkey = D1[j];
                }
            }
        }
    }
    var tmp = [];
    Object.keys(D1).forEach(function (key) {
        var value = D1[key];
        var index = map[key];
        tmp[index] = {
            key: key,
            value: value
        };
    });
    var orderedData = {};
    tmp.forEach(function (obj) {
        orderedData[obj.key] = obj.value;
    });
    console.log(orderedData);
}
console.log('Menu => ');
console.log('Input Dictionary');
console.log("Case 1. D = {'2020-01-01':4, '2020-01-02':4,'2020-01-03':6, '2020-01-04':8, '2020-01-05':2, '2020-01-06': -6, '2020-01-07':2, '2020-01-08':-2}");
console.log("Case 2. D = {'2020-01-01':6, '2020-01-04':12, '2020-01-05':14, '2020-01-06':2, '2020-01-07':4}");
console.log();
var choice = '1';
switch (choice) {
    case '1':
        var D = { '2020-01-01': 4, '2020-01-02': 4, '2020-01-03': 6, '2020-01-04': 8, '2020-01-05': 2, '2020-01-06': -6, '2020-01-07': 2, '2020-01-08': -2 };
        console.log('Case 1: Output Dictionary =>');
        solution(D);
        console.log();
    case '2':
        var DD = { '2020-01-01': 6, '2020-01-04': 12, '2020-01-05': 14, '2020-01-06': 2, '2020-01-07': 4 };
        console.log('Case 2: Output Dictionary =>');
        solution(DD);
        break;
}
