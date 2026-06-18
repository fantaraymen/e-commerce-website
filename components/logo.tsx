import Image from "next/image"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="https://i.ibb.co/rGsG0vd9/Screenshot-2026-06-18-001417-removebg-preview.png"
        alt="Casa Shop - Votre Maison"
        width={150}
        height={60}
        priority
        className="object-contain"
      />
    </div>
  )
}