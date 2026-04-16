import * as React from 'react'
import { useTranslation } from 'react-i18next'
import Link from '@/next/link'

const NormalFormStatic = () => {
  const { t } = useTranslation()
  return (
    <>

      <div className="mx-auto mt-8 w-full">
        <div className="mx-auto w-full">
          <h2 className="text-text-primary title-4xl-semi-bold">{t('pageTitle', { ns: 'login' })}</h2>
          <p className="mt-2 text-text-tertiary body-md-regular">{t('welcome', { ns: 'login' })}</p>
        </div>
        <div className="relative">
          <div className="mt-6 flex flex-col gap-3">
          </div>
          <div className="w-72 h-72 rounded border border-gray-200">
            <img src="/assets/images/login/login-illus.png" alt="login-illus" className="w-full h-full object-cover" />
          </div>
          {true && (
            <>
              <div className="mt-2 block w-full text-text-tertiary system-xs-regular">
                {t('tosDesc', { ns: 'login' })}
              &nbsp;
                <Link
                  className="text-text-secondary system-xs-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dify.ai/terms"
                >
                  {t('tos', { ns: 'login' })}
                </Link>
              &nbsp;&&nbsp;
                <Link
                  className="text-text-secondary system-xs-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dify.ai/privacy"
                >
                  {t('pp', { ns: 'login' })}
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default NormalFormStatic