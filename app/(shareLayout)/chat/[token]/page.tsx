'use client'
import * as React from 'react'
import ChatWithHistoryWrap from '@/app/components/base/chat/chat-with-history'
import SignInLayout from '@/app/signin/layout'
// import OneMoreStep from '@/app/signin/one-more-step'
import AuthenticatedLayout from '../../components/authenticated-layout'
import NormalFormStatic from '../../components/NormalFormStatic'
import QRCodePoll from '../../components/QRCodePoll'

const Chat = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  if (!isLoggedIn) {
    return (
      <SignInLayout>
        <QRCodePoll onScanSuccess={() => setIsLoggedIn(true)} />
      </SignInLayout>
    )
  }
  return (
    <AuthenticatedLayout>
      <ChatWithHistoryWrap />
    </AuthenticatedLayout>
  )
}

export default React.memo(Chat)
