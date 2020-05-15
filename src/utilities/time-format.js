import React from 'react';

export function getFormatDate(date) {
    return new Date(date);
}
export function getCurrentDay(date) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[this.getFormatDate(date).getDay()]
}
export function getTime(date) {
    return <p>{("0" + this.getFormatDate(date).getHours()).slice(-2)}:{("0" + this.getFormatDate(date).getMinutes()).slice(-2)}</p>
}
export function getFormattedDate(date) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return <div>{this.getFormatDate(date).getDate()} {months[this.getFormatDate(date).getMonth()]}</div>
}