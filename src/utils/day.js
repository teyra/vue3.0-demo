/**
 * 通用js方法封装处理
 * Copyright (c) 2019 ruoyi
 */
const baseURL = process.env.VUE_APP_BASE_API
/**
 * 倒计时
 */
export function parseCountDownTime(time) {
    let LeftAllsecond = Number(time);
    let leftDay = Math.floor(LeftAllsecond / (60 * 60 * 24));
    let leftHour = Math.floor(
        (LeftAllsecond - leftDay * 24 * 60 * 60) / 3600
    );
    let leftMinute = Math.floor(
        (LeftAllsecond - leftDay * 24 * 60 * 60 - leftHour * 3600) / 60
    );
    let leftSecond = Math.floor(
        LeftAllsecond -
        leftDay * 24 * 60 * 60 -
        leftHour * 3600 -
        leftMinute * 60
    );
    if (leftDay < 10 && leftDay > 0) {
        leftDay = "0" + leftDay;
    }
    if (leftHour < 10) {
        leftHour = "0" + leftHour;
    }
    if (leftMinute < 10) {
        leftMinute = "0" + leftMinute;
    }
    if (leftSecond < 10) {
        leftSecond = "0" + leftSecond;
    }
    return {
        leftDay,
        leftHour,
        leftMinute,
        leftSecond
    }
}
/**
 * 日期格式化
 */
export function parseTime(time, pattern) {
    if (arguments.length === 0 || !time) {
        return null
    }
    const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
            time = parseInt(time)
        } else if (typeof time === 'string') {
            time = time.replace(new RegExp(/-/gm), '/');
        }
        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000
        }
        date = new Date(time)
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') {
            return ['日', '一', '二', '三', '四', '五', '六'][value]
        }
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value || 0
    })
    return time_str
}
/**
 * 直播IM消息时间
 */
export function getImTime(time) {
    let date = new Date(time)
    let formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
    }
    //今天
    if (new Date(time).toDateString() === new Date().toDateString()) {
        return '今天    ' + (formatObj.h < 10 ? '0' + formatObj.h : formatObj.h) + ':' + (formatObj.i < 10 ? '0' + formatObj.i : formatObj.i)
    } else {
        //超过24小时
        //暂时只分为今天以外，超过一年
        //今年
        if (new Date().getFullYear() === formatObj.y) {
            return (formatObj.m < 10 ? '0' + formatObj.m : formatObj.m) + '-' + (formatObj.d < 10 ? '0' + formatObj.d : formatObj.d) + '    ' + (formatObj.h < 10 ? '0' + formatObj.h : formatObj.h) + ':' + (formatObj.i < 10 ? '0' + formatObj.i : formatObj.i)
        } else {
            return formatObj.y + '-' + (formatObj.m < 10 ? '0' + formatObj.m : formatObj.m) + '-' + (formatObj.d < 10 ? '0' + formatObj.d : formatObj.d) + '    ' + (formatObj.h < 10 ? '0' + formatObj.h : formatObj.h) + ':' + (formatObj.i < 10 ? '0' + formatObj.i : formatObj.i)
        }
    }
}
/**
 * 转化视频时长
 */
export function getVideoTime(time) {
    let day = Math.floor(time / (60 * 60 * 24));
    let hour = Math.floor((time - day * 24 * 60 * 60) / 3600);
    let minute = Math.floor((time - day * 24 * 60 * 60 - hour * 3600) / 60);
    let second = Math.floor(time - day * 24 * 60 * 60 - hour * 3600 - minute * 60);
    if (hour <= 0) {
        if (minute < 10) {
            minute = "0" + minute;
        }
        if (second < 10) {
            second = "0" + second;
        }
        return minute + ':' + second
    } else {
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (minute < 10) {
            minute = "0" + minute;
        }
        if (second < 10) {
            second = "0" + second;
        }
        return hour + ':' + minute + ':' + second
    }

}

/**
 * 表单重置
 */
export function resetForm(refName) {
    if (this.$refs[refName]) {
        this.$refs[refName].resetFields();
    }
}

/**
 * 添加日期范围
 */
export function addDateRange(params, dateRange, propName) {
    var search = params;
    search.params = {};
    if (null != dateRange && '' != dateRange) {
        if (typeof (propName) === "undefined") {
            search.params["beginTime"] = dateRange[0];
            search.params["endTime"] = dateRange[1];
        } else {
            search.params["begin" + propName] = dateRange[0];
            search.params["end" + propName] = dateRange[1];
        }
    }
    return search;
}

/**
 * 回显数据字典
 */
export function selectDictLabel(datas, value) {
    var actions = [];
    Object.keys(datas).some((key) => {
        if (datas[key].dictValue == ('' + value)) {
            actions.push(datas[key].dictLabel);
            return true;
        }
    })
    return actions.join('');
}

/**
 * 回显数据字典（字符串数组）
 */
export function selectDictLabels(datas, value, separator) {
    var actions = [];
    var currentSeparator = undefined === separator ? "," : separator;
    var temp = value.split(currentSeparator);
    Object.keys(value.split(currentSeparator)).some((val) => {
        Object.keys(datas).some((key) => {
            if (datas[key].dictValue == ('' + temp[val])) {
                actions.push(datas[key].dictLabel + currentSeparator);
            }
        })
    })
    return actions.join('').substring(0, actions.join('').length - 1);
}

/**
 * 通用下载方法
 */
export function download(fileName) {
    window.location.href = baseURL + "/common/download?fileName=" + encodeURI(fileName) + "&delete=" + true;
}

/**
 * 字符串格式化(%s )
 */
export function sprintf(str) {
    var args = arguments,
        flag = true,
        i = 1;
    str = str.replace(/%s/g, function () {
        var arg = args[i++];
        if (typeof arg === 'undefined') {
            flag = false;
            return '';
        }
        return arg;
    });
    return flag ? str : '';
}

/**
 * 转换字符串，undefined,null等转化为""
 */
export function praseStrEmpty(str) {
    if (!str || str == "undefined" || str == "null") {
        return "";
    }
    return str;
}

/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 */
export function handleTree(data, id, parentId, children) {
    let config = {
        id: id || 'id',
        parentId: parentId || 'parentId',
        childrenList: children || 'children'
    };

    var childrenListMap = {};
    var nodeIds = {};
    var tree = [];

    for (let d of data) {
        let parentId = d[config.parentId];
        if (childrenListMap[parentId] == null) {
            childrenListMap[parentId] = [];
        }
        nodeIds[d[config.id]] = d;
        childrenListMap[parentId].push(d);
    }

    for (let d of data) {
        let parentId = d[config.parentId];
        if (nodeIds[parentId] == null) {
            tree.push(d);
        }
    }

    for (let t of tree) {
        adaptToChildrenList(t);
    }

    function adaptToChildrenList(o) {
        if (childrenListMap[o[config.id]] !== null) {
            o[config.childrenList] = childrenListMap[o[config.id]];
        }
        if (o[config.childrenList]) {
            for (let c of o[config.childrenList]) {
                adaptToChildrenList(c);
            }
        }
    }
    return tree;
}