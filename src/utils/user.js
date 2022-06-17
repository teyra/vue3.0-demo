import {
    getinfo
} from '@/api/account/account'
import {
    setUserId,
    setUserName,
    setUserAvatar,
    getUserId,
    getUserName,
    getUserAvatar,
    getUserAccount,
    setUserAccount
} from './auth';
export async function updateUserInfo() {
    let res = await getinfo()
    const user = res.data
    let {
        id,
        userName,
        userAvatar,
        userAccount,
    } = user
    setUserId(id)
    setUserName(userName)
    setUserAvatar(userAvatar)
    setUserAccount(userAccount)
}
export function getUserInfo() {
    const id = getUserId()
    const userName = getUserName() !== 'null' ? getUserName() : ''
    const userAvatar = getUserAvatar() !== 'null' ? getUserAvatar() : ''
    const userAccount = getUserAccount()
    let data = {
        id: id,
        userName: userName,
        userAvatar: userAvatar,
        userAccount: userAccount
    }
    return data
}