import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/utils'

/* -------------------------------------------------------------------------- */
/*  Background                                                                 */
/* -------------------------------------------------------------------------- */

type Glow = 'left' | 'right' | 'center' | 'none'

export function SlideBackground({
  glow = 'center',
  texture = false,
}: {
  glow?: Glow
  texture?: boolean
}) {
  const glowPos: Record<Glow, string> = {
    left: 'at 20% 40%',
    right: 'at 82% 45%',
    center: 'at 50% 30%',
    none: 'at 50% 50%',
  }

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#050608]" />
      {texture && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.10] mix-blend-screen"
          style={{ backgroundImage: 'url(/images/honey-texture.png)' }}
        />
      )}
      {glow !== 'none' && (
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(60% 60% ${glowPos[glow]}, rgba(245,158,11,0.16), transparent 70%)`,
          }}
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(5,6,8,0.2) 0%, rgba(5,6,8,0) 40%, rgba(5,6,8,0.75) 100%)',
        }}
      />
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Slide shell                                                                */
/* -------------------------------------------------------------------------- */

export function SlideShell({
  children,
  className,
  glow = 'center',
  texture = false,
}: {
  children: ReactNode
  className?: string
  glow?: Glow
  texture?: boolean
}) {
  return (
    <section className="relative h-full w-full overflow-hidden">
      <SlideBackground glow={glow} texture={texture} />
      {/*
        pt accounts for the fixed header (~72px on mobile, ~88px on sm+).
        pb accounts for the fixed bottom controls (~72px on mobile, ~88px on sm+).
        We do NOT use overflow-y-auto here — content must fit within the viewport.
        Use justify-center so content is vertically centred in the remaining space.
      */}
      <div
        className="relative z-10 flex h-full w-full flex-col justify-center"
        style={{ paddingTop: 'var(--slide-pt, 72px)', paddingBottom: 'var(--slide-pb, 72px)' }}
      >
        <div
          className={cn(
            'mx-auto w-full max-w-7xl px-4 sm:px-8 md:px-12 lg:px-16',
            className,
          )}
        >
          {children}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Reveal + helpers                                                           */
/* -------------------------------------------------------------------------- */

export function Reveal({
  children,
  index = 0,
  className,
  as: Tag = 'div',
}: {
  children: ReactNode
  index?: number
  className?: string
  as?: 'div' | 'span' | 'li' | 'p' | 'h1' | 'h2'
}) {
  return (
    <Tag
      data-reveal=""
      className={className}
      style={{ '--reveal-index': index } as CSSProperties}
    >
      {children}
    </Tag>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.28em] text-honey sm:text-xs">
      <span className="h-px w-6 bg-honey/60 sm:w-8" />
      {children}
    </span>
  )
}

export function SlideTitle({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn(
        'font-heading text-balance text-2xl font-bold uppercase leading-[0.95] tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
        className,
      )}
    >
      {children}
    </h2>
  )
}
