'use client'
import * as React from 'react'
import { useTranslation } from 'react-i18next'

interface QRCodePollProps {
  onScanSuccess: (code: string, state: string) => void
}

/**
 * 微信二维码登录组件
 * 基于微信官方 OAuth2.0 授权登录实现
 * 参考文档：https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html
 */
const QRCodePoll: React.FC<QRCodePollProps> = ({ onScanSuccess }) => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = React.useState(true)
  const wxLoginRef = React.useRef<HTMLDivElement>(null)

  // 生成随机 state 参数，用于防止 CSRF 攻击
  const generateState = React.useCallback(() => {
    const randomStr = Math.random().toString(36).substring(2, 15)
    const timestamp = Date.now().toString()
    return `${randomStr}${timestamp}`
  }, [])

  // 初始化微信登录
  React.useEffect(() => {
    const initWxLogin = () => {
      // 检查 wxLogin 对象是否已加载
      if (typeof window !== 'undefined' && (window as any).WxLogin) {
        const state = generateState()
        // 存储 state 用于后续验证
        sessionStorage.setItem('wx_oauth_state', state)

        const wxLoginInstance = new (window as any).WxLogin({
          self_redirect: false, // 在顶层窗口跳转
          id: 'login_container',
          appid: 'wx466db2aeee508112', // TODO: 替换为实际的 AppID
          scope: 'snsapi_login', // 网页应用固定使用此 scope
          redirect_uri: encodeURIComponent('http://aic.yoseok.cn'), // TODO: 替换为实际的回调地址（需要 URL 编码）
          state, // 用于防止 CSRF 攻击
          style: 'black', // 二维码样式：black 或 white
          // href: '', // 可选：自定义样式链接
          // stylelite: 1, // 可选：使用新 UI 样式
          // color_scheme: 'auto', // 可选：主题跟随系统
          onQRcodeReady: () => {
            setIsLoading(false)
          },
          onReady: (isReady: boolean) => {
            if (isReady) {
              setIsLoading(false)
            }
          },
        })
      }
      else {
        // 如果 WxLogin 还未加载，延后重试
        setTimeout(initWxLogin, 500)
      }
    }

    // 加载微信官方 JS 库
    if (typeof window !== 'undefined' && !(window as any).WxLogin) {
      const script = document.createElement('script')
      script.src = '/scripts/wxLogin.js'
      script.async = true
      script.onload = () => {
        initWxLogin()
      }
      document.body.appendChild(script)
    }
    else {
      initWxLogin()
    }

    return () => {
      // 清理：可选的清理逻辑
    }
  }, [generateState])

  // 处理页面 URL 参数中的 code（微信回调）
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const code = params.get('code')
      const state = params.get('state')

      if (code && state) {
        // 验证 state 参数
        const storedState = sessionStorage.getItem('wx_oauth_state')
        if (state === storedState) {
          // 清理 state
          sessionStorage.removeItem('wx_oauth_state')
          // 调用回调函数，得到 code 后调用后端接口
          onScanSuccess(code, state)
        }
        else {
          console.error('State 参数验证失败，可能存在 CSRF 攻击')
        }
      }
    }
  }, [onScanSuccess])

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <h3 className="text-text-primary title-3xl-semi-bold text-center mb-2">
          {t('scanQRCode', { ns: 'login', defaultValue: '微信扫码登录' })}
        </h3>
        <p className="text-text-tertiary body-md-regular text-center mb-8">
          {t('scanQRCodeDesc', { ns: 'login', defaultValue: '打开微信扫描二维码' })}
        </p>

        {/* 微信登录二维码容器 */}
        <div className="flex justify-center mb-6">
          {isLoading && (
            <div className="w-72 h-72 rounded border border-gray-200 bg-gray-50 flex items-center justify-center">
              <p className="text-text-tertiary body-md-regular">加载中...</p>
            </div>
          )}
          <div
            id="login_container"
            ref={wxLoginRef}
            className="flex justify-center"
          />
        </div>

        {/* 说明文本 */}
        <div className="text-center text-text-tertiary system-xs-regular">
          <p>
            {t('wxLoginTip', { ns: 'login', defaultValue: '点击确认后，使用已登录的微信账号快速登录' })}
          </p>
        </div>
      </div>
    </div>
  )
}

export default React.memo(QRCodePoll)
