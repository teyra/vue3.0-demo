/**
 * 退出登录
 */
export const loginOut = () => {
    let path = window.location.href
    window.location.replace('/login?redirect=' + path)
}