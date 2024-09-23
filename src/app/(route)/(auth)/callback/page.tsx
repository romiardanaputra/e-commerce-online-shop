'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import axios from 'axios'

const GoogleCallback = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleGoogleCallback = async () => {
      const code = searchParams.get('code') // Ambil parameter 'code' dari URL

      if (code) {
        try {
          // Kirim kode ke backend untuk ditukar dengan token
          const response = await axios.get(
            `http://localhost:3333/auth/google/callback?code=${code}`
          )

          if (response.status === 200) {
            const { token } = response.data.data

            // Simpan token ke localStorage
            localStorage.setItem('token', token)

            // Arahkan user ke dashboard
            router.push('/seller/dashboard')
          } else {
            console.error('Login failed: ', response.data.message)
          }
        } catch (error) {
          console.error('Error during Google callback: ', error)
        }
      }
    }

    handleGoogleCallback()
  }, [searchParams, router])

  return <div>Loading...</div>
}

export default GoogleCallback
