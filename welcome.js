import os from 'os'
const welcome = () => {
    return `Привет, юзер. Вижу ты зашел с ${os.type()}`;
}
console.log(welcome());
export default {welcome}