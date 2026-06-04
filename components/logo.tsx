import { Home } from "lucide-react"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <Home className="w-6 h-6 text-primary-foreground" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-background" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-foreground leading-tight">
          Casa<span className="text-primary">Shop</span>
        </span>
        <span className="text-[10px] text-muted-foreground tracking-wider uppercase">
          Votre Maison
        </span>
      </div>
    </div>
  )
}
