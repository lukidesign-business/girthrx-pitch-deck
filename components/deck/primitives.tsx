import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/utils'

/* -------------------------------------------------------------------------- */
/*  Background                                                                 */
/* -------------------------------------------------------------------------- */

type Glow = 'left' | 'right' | 'center' | 'none'
type Accent = 'honey' | 'rose' | 'duo'

export function SlideBackground({
  glow = 'center',
  texture = false,
  accent = 'honey',
  overlay = false,
}: {
  glow?: Glow
  texture?: boolean
  accent?: Accent
  overlay?: boolean
}) {
  const glowPos: Record<Glow, string> = {
    left: 'at 20% 40%',
    right: 'at 82% 45%',
    center: 'at 50% 30%',
    none: 'at 50% 50%',
  }

  const glowColor: Record<Accent, string> = {
    honey: 'rgba(245,158,11,0.16)',
    rose: 'rgba(236,72,153,0.18)',
    duo: 'rgba(244,114,182,0.16)',
  }

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#050608]" />

      {/* Honey-lips editorial overlay  -  the sensual brand motif behind collab slides */}
      {overlay && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.16]"
            style={{ backgroundImage: 'url(/images/honey-lips-overlay.webp)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(5,6,8,0.94) 0%, rgba(5,6,8,0.72) 45%, rgba(5,6,8,0.5) 100%)',
            }}
          />
        </>
      )}

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
            background: `radial-gradient(60% 60% ${glowPos[glow]}, ${glowColor[accent]}, transparent 70%)`,
          }}
        />
      )}
      {/* Duo accent: a subtle rose bloom opposite the primary glow */}
      {accent === 'duo' && (
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(50% 50% at 88% 82%, rgba(236,72,153,0.14), transparent 70%)',
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
  accent = 'honey',
  overlay = false,
}: {
  children: ReactNode
  className?: string
  glow?: Glow
  texture?: boolean
  accent?: Accent
  overlay?: boolean
}) {
  return (
    <section className="relative h-full w-full overflow-hidden">
      <SlideBackground glow={glow} texture={texture} accent={accent} overlay={overlay} />
      {/*
        pt accounts for the fixed header (~72px on mobile, ~88px on sm+).
        pb accounts for the fixed bottom controls (~72px on mobile, ~88px on sm+).
        We do NOT use overflow-y-auto here  -  content must fit within the viewport.
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

export function Eyebrow({
  children,
  tone = 'honey',
}: {
  children: ReactNode
  tone?: 'honey' | 'rose'
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.28em] sm:text-xs',
        tone === 'rose' ? 'text-rose' : 'text-honey',
      )}
    >
      <span className={cn('h-px w-6 sm:w-8', tone === 'rose' ? 'bg-rose/60' : 'bg-honey/60')} />
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
