import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react"
import { Notification } from "../components/Notification"
import { AlertColor } from "@mui/material"

type ContextProps = {
  getError: (msg: string) => void
  getSuccess: (msg: string) => void
}

const NotificationCtx = createContext<ContextProps | null>(null)

export const NotificationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [msg, setMessage] = useState('')
  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState<AlertColor | undefined>(undefined)

  const getError = (msg: string) => {
    setSeverity('error')
    setOpen(true)
    setMessage(msg)
  }

  const getSuccess = (msg: string) => {
    setSeverity('success')
    setOpen(true)
    setMessage(msg)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const value = {
    getError,
    getSuccess
  }

  return (
    <NotificationCtx.Provider value={value}>
      <Notification handleClose={handleClose} open={open} severity={severity} msg={msg} />
      {children}
    </NotificationCtx.Provider>
  )
}

export const useNotification = () => {
  const ctx = useContext(NotificationCtx)

  if (!ctx) throw new Error('Opps, no context found')
  return ctx
}