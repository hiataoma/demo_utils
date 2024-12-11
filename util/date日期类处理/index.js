/***
 * 秒数转化为时分秒
 * @param value 秒数
 * @returns {string} 转化时间格式 时 分 秒
 */
function formatSeconds(value) {
    let seconds = parseInt(value);
    if (isNaN(seconds)) {
        return "0秒";
    }
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    seconds %= 60;
    const timeParts = [];
    if (hours > 0) {
        timeParts.push(hours + "小时");
    }
    if (minutes > 0) {
        timeParts.push(minutes + "分");
    }
    if (seconds > 0 || timeParts.length === 0) {
        timeParts.push(seconds + "秒");
    }
    return timeParts.join('');
}
