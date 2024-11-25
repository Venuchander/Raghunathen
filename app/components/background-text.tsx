'use client'

interface BackgroundTextProps {
  text: string
}

export default function BackgroundText({ text }: BackgroundTextProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none select-none">
      <h1 className="text-[20vw] font-bold text-white/5">{text}</h1>
    </div>
  )
}

