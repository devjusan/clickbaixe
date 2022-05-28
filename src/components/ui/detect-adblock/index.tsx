import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDetectAdBlock } from 'adblock-detect-react'
import { FaSadCry } from 'react-icons/fa'
import { useEffect } from 'react'

const DetectAdBlock = () => {
  const isAdBlockingEnabled = useDetectAdBlock()
  const notify = () =>
    toast(
      `Eita, detectamos um bloqueador de anúncios! Por favor, considere desativá-lo. :(`,
      {
        type: 'error',
        autoClose: false,
        icon: <FaSadCry fill="red" size={30} />,
      }
    )
  useEffect(() => {
    if (isAdBlockingEnabled) {
      notify()
    }
  }, [isAdBlockingEnabled])

  return isAdBlockingEnabled ? <ToastContainer /> : <></>
}

export default DetectAdBlock
