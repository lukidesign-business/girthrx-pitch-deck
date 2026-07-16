'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, LayoutGrid, X } from 'lucide-react'
import { slides } from './slides'
import { cn } from '@/lib/utils'

function Wordmark() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/logo.png"
      alt="GirthRx Honey"
      className="h-10 w-auto object-contain sm:h-12"
    />
  )
}

export function Deck() {
  const [index, setIndex] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const lastNav = useRef(0)
  const count = slides.length

  // keep a live ref of index for event handlers
  const indexRef = useRef(index)
  useEffect(() => {
    indexRef.current = index
  }, [index])

  const goTo = useCallback(
    (i: number) => {
      setIndex((prev) => {
        const clamped = Math.max(0, Math.min(count - 1, i))
        return clamped === prev ? prev : clamped
      })
    },
    [count],
  )

  const next = useCallback(() => goTo(indexRef.current + 1), [goTo])
  const prev = useCallback(() => goTo(indexRef.current - 1), [goTo])

  /* Keyboard navigation */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        return
      }
      if (menuOpen) return
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          e.preventDefault()
          next()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault()
          prev()
          break
        case 'Home':
          e.preventDefault()
          goTo(0)
          break
        case 'End':
          e.preventDefault()
          goTo(count - 1)
          break
        case 'm':
        case 'M':
          setMenuOpen((o) => !o)
          break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, goTo, count, menuOpen])

  /* Wheel navigation (respects inner scroll) */
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (menuOpen) return
      if (Math.abs(e.deltaY) < 18) return
      const now = Date.now()
      if (now - lastNav.current < 850) return

      const track = trackRef.current
      const active = track?.children[indexRef.current] as HTMLElement | undefined
      const scroller = active?.querySelector<HTMLElement>('[data-scroller]')
      if (scroller) {
        const { scrollTop, scrollHeight, clientHeight } = scroller
        const atTop = scrollTop <= 1
        const atBottom = scrollTop + clientHeight >= scrollHeight - 1
        if (e.deltaY > 0 && !atBottom) return
        if (e.deltaY < 0 && !atTop) return
      }
      lastNav.current = now
      if (e.deltaY > 0) next()
      else prev()
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    return () => window.removeEventListener('wheel', onWheel)
  }, [next, prev, menuOpen])

  /* Touch swipe */
  useEffect(() => {
    let startX = 0
    let startY = 0
    const onStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    }
    const onEnd = (e: TouchEvent) => {
      if (menuOpen) return
      const dx = e.changedTouches[0].clientX - startX
      const dy = e.changedTouches[0].clientY - startY
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) next()
        else prev()
      }
    }
    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchend', onEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchend', onEnd)
    }
  }, [next, prev, menuOpen])

  const progress = ((index + 1) / count) * 100

  return (
    <main
      className="relative h-[100dvh] w-screen overflow-hidden bg-background"
      style={
        {
          '--slide-pt': '68px',
          '--slide-pb': '68px',
        } as React.CSSProperties
      }
    >
      {/* Header */}
      <header className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-5 sm:px-10">
        <button
          onClick={() => goTo(0)}
          className="pointer-events-auto flex items-center gap-2 text-lg"
          aria-label="Go to first slide"
        >
          <Wordmark />
        </button>
        <span className="pointer-events-none flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
          <span className="hidden h-1.5 w-1.5 rounded-full bg-rose sm:inline-block" />
          GirthRx × Jellybean
        </span>
      </header>

      {/* Progress bar */}
      <div className="absolute inset-x-0 top-0 z-40 h-0.5 bg-white/5">
        <div
          className="h-full bg-honey transition-[width] duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Slide track */}
      <div
        ref={trackRef}
        className="flex h-full transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        style={{ transform: `translateX(-${index * 100}vw)` }}
      >
        {slides.map((slide, i) => {
          const Comp = slide.Component
          const isActive = i === index
          return (
            <div
              key={slide.id}
              className={cn('h-full w-screen shrink-0', isActive && 'slide-active')}
              aria-hidden={!isActive}
              inert={!isActive}
            >
              <Comp />
            </div>
          )
        })}
      </div>

      {/* Bottom controls */}
      <div className="absolute inset-x-0 bottom-0 z-30 flex items-center justify-between px-6 py-6 sm:px-10">
        <button
          onClick={() => setMenuOpen(true)}
          className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-xs font-medium uppercase tracking-widest text-muted-foreground backdrop-blur transition-colors hover:border-honey/40 hover:text-foreground"
          aria-label="Open slide overview"
        >
          <LayoutGrid className="h-4 w-4" />
          <span className="hidden sm:inline">Slides</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="font-heading text-sm font-semibold tabular-nums tracking-widest text-foreground">
            {String(index + 1).padStart(2, '0')}
            <span className="mx-1 text-muted-foreground/50">/</span>
            <span className="text-muted-foreground">{String(count).padStart(2, '0')}</span>
          </span>
          <div className="flex items-center gap-2">
            <NavButton onClick={prev} disabled={index === 0} label="Previous slide">
              <ChevronLeft className="h-5 w-5" />
            </NavButton>
            <NavButton onClick={next} disabled={index === count - 1} label="Next slide">
              <ChevronRight className="h-5 w-5" />
            </NavButton>
          </div>
        </div>
      </div>

      {/* Overview / minimap */}
      {menuOpen && (
        <div className="absolute inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-md">
          <div className="flex items-center justify-between px-6 py-5 sm:px-10">
            <Wordmark />
            <button
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-honey/40 hover:text-foreground"
              aria-label="Close overview"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="no-scrollbar flex-1 overflow-y-auto px-6 pb-10 sm:px-10">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-honey">
              Jump to a section
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {slides.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => {
                    goTo(i)
                    setMenuOpen(false)
                  }}
                  className={cn(
                    'group flex items-center gap-4 rounded-2xl border p-4 text-left transition-colors',
                    i === index
                      ? 'border-honey/50 bg-honey/8'
                      : 'border-border bg-card/50 hover:border-honey/30',
                  )}
                >
                  <span
                    className={cn(
                      'font-heading text-2xl font-bold tabular-nums',
                      i === index ? 'text-honey' : 'text-white/15 group-hover:text-honey/50',
                    )}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-medium text-foreground">{slide.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

function NavButton({
  children,
  onClick,
  disabled,
  label,
}: {
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
  label: string
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/70 text-foreground backdrop-blur transition-all hover:border-honey/50 hover:text-honey disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground"
    >
      {children}
    </button>
  )
}
