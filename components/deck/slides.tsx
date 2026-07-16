import type { ComponentType, ReactNode } from 'react'
import { ArrowRight, Check, X } from 'lucide-react'
import { Eyebrow, Reveal, SlideShell, SlideTitle } from './primitives'
import { cn } from '@/lib/utils'

/* -------------------------------------------------------------------------- */
/*  Custom on-brand SVG icons (no generic lucide)                              */
/* -------------------------------------------------------------------------- */

function IconHex({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 2L21.5 7.5V16.5L12 22L2.5 16.5V7.5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function IconDrop({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 3C12 3 5 10.5 5 15a7 7 0 0 0 14 0c0-4.5-7-12-7-12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}

function IconBeam({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}

function IconCycle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M20 12a8 8 0 0 1-14.4 4.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 12a8 8 0 0 1 14.4-4.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 17l-1.5-3.5M4 7l1.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconCut({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 6.5L20 12M8.5 17.5L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconPulse({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M2 12h3l3-7 4 14 3-8 2 4 2-3h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconBattery({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="2" y="7" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18 10.5V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 10.5V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="5" y="10" width="6" height="4" rx="0.5" fill="currentColor" />
    </svg>
  )
}

function IconTarget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  )
}

function IconLeaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M21 3C21 3 12 3 7 8c-3.5 3.5-4 9-4 9s5.5-.5 9-4c5-5 9-10 9-10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M3 21l6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconTrend({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M3 17l5-5 4 4 9-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 7h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 2l2.9 6.5 6.9 0.7-5 4.8 1.4 6.9L12 17.7l-6.2 3.2 1.4-6.9-5-4.8 6.9-0.7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function IconStack({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M2 9l10 5 10-5-10-5-10 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M2 14l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 19l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconSpeaker({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M3 9h4l5-5v16l-5-5H3V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16 8c1.5 1 2.5 2.5 2.5 4s-1 3-2.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 5c2.5 1.8 4 4.5 4 7s-1.5 5.2-4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconStore({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M3 9h18M3 9l2-5h14l2 5M3 9v11h18V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="9" y="13" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function IconPlay({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 8.5l6 3.5-6 3.5V8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function IconPin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 21C12 21 5 14 5 9a7 7 0 0 1 14 0c0 5-7 12-7 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function IconRocket({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 2c2 3 3 5.5 3 9H9c0-3.5 1-6 3-9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 11l-3 8 3-2h6l3 2-3-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="1.5" fill="currentColor" />
    </svg>
  )
}

function IconCoin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v1M12 16v1M9 11.5c0-1.1.9-2 2-2h2a1.5 1.5 0 1 1 0 3h-2a1.5 1.5 0 0 0 0 3h2a2 2 0 0 0 2-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 3L4 6v6c0 5 4 8 8 9 4-1 8-4 8-9V6l-8-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconFlask({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M9 3h6M10 3v6L4 18a1 1 0 0 0 .9 1.5h14.2A1 1 0 0 0 20 18l-6-9V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 15h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconUsers({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 21v-2a5 5 0 0 1 10 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="17" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M21 21v-1.5a4 4 0 0 0-5-3.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconPackage({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M21 8l-9-5-9 5v8l9 5 9-5V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M3 8l9 5 9-5M12 13v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7.5 5.5L16.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconGauge({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 12L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <path d="M7 12a5 5 0 0 1 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconEyeOff({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10.5 10.6A3 3 0 0 0 13.4 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6.3 6.4C4.5 7.7 3 9.7 3 12c0 0 3 7 9 7a10 10 0 0 0 4.7-1.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 5.2A10 10 0 0 1 12 5c6 0 9 7 9 7a13.5 13.5 0 0 1-2.3 3.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* -------------------------------------------------------------------------- */
/*  Shared card styles                                                         */
/* -------------------------------------------------------------------------- */

const cardBase =
  'relative rounded-xl border border-white/8 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-md transition-all duration-300 hover:border-honey/35 hover:from-honey/[0.07] hover:to-honey/[0.02]'

const cardGlint =
  'before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent'

function GlassCard({
  children,
  className,
  glow = false,
}: {
  children: ReactNode
  className?: string
  glow?: boolean
}) {
  return (
    <div
      className={cn(
        cardBase,
        cardGlint,
        glow && 'border-honey/40 bg-gradient-to-br from-honey/[0.10] to-honey/[0.02] shadow-[0_0_40px_-12px_rgba(245,158,11,0.45)]',
        className,
      )}
    >
      {children}
    </div>
  )
}

function IconBox({
  icon: Icon,
  className,
}: {
  icon: ComponentType<{ className?: string }>
  className?: string
}) {
  return (
    <div
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-honey/20 to-honey/5 text-honey ring-1 ring-honey/25 sm:h-10 sm:w-10',
        className,
      )}
    >
      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Small shared bits                                                          */
/* -------------------------------------------------------------------------- */

function ProductImage({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src || '/placeholder.svg'}
      alt={alt}
      className={cn('h-full w-full object-contain', className)}
    />
  )
}

function MiniCard({
  icon: Icon,
  title,
  children,
  index = 0,
}: {
  icon: ComponentType<{ className?: string }>
  title: string
  children: ReactNode
  index?: number
}) {
  return (
    <Reveal index={index} className={cn(cardBase, cardGlint, 'p-3 sm:p-4 lg:p-5')}>
      <IconBox icon={Icon} className="mb-2 sm:mb-3" />
      <h3 className="mb-1 font-heading text-sm font-semibold uppercase tracking-wide text-foreground sm:text-base">
        {title}
      </h3>
      <p className="text-xs leading-relaxed text-muted-foreground">{children}</p>
    </Reveal>
  )
}

/* -------------------------------------------------------------------------- */
/*  01 — Brand Story (first slide)                                            */
/* -------------------------------------------------------------------------- */

function BrandSlide() {
  return (
    <SlideShell glow="right" texture>
      <div className="grid items-center gap-4 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <Reveal
          index={3}
          className="relative mx-auto aspect-square w-full max-w-[140px] overflow-hidden rounded-2xl sm:hidden"
        >
          <div className="absolute inset-0 rounded-2xl bg-honey/10 blur-2xl" />
          <ProductImage
            src="/images/product-banner.png"
            alt="GirthRx Honey product family — box and sachets"
            className="relative object-cover"
          />
        </Reveal>
        <div>
          <Reveal index={0}>
            <Eyebrow>The Ultimate Power Source</Eyebrow>
          </Reveal>
          <Reveal index={1}>
            <SlideTitle className="mt-3 sm:mt-4">
              Premium Honey, Refined into a{' '}
              <span className="honey-text">Daily Ritual.</span>
            </SlideTitle>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-2 font-heading text-sm font-medium uppercase tracking-wide text-honey sm:mt-3 sm:text-base lg:text-xl">
              For men who finish strong.
            </p>
          </Reveal>
          <Reveal index={3}>
            <p className="mt-2 max-w-lg text-xs leading-relaxed text-muted-foreground sm:mt-3 sm:text-sm lg:text-base">
              GirthRx is quietly confident, engineered for modern men who want real
              performance without awkward conversations or clinical packaging. Every
              sachet is designed to feel like a small luxury, not a supplement chore.
            </p>
          </Reveal>
          <Reveal index={4}>
            <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/50 sm:mt-4 sm:text-xs">
              Investor &amp; Partner Overview
              <span className="mx-2 text-honey">·</span>
              girthrx.com
            </p>
          </Reveal>
        </div>
        <Reveal
          index={3}
          className="relative mx-auto hidden aspect-square w-full max-w-xs overflow-hidden rounded-2xl sm:block lg:max-w-none"
        >
          <div className="absolute inset-0 rounded-2xl bg-honey/10 blur-2xl" />
          <ProductImage
            src="/images/product-banner.png"
            alt="GirthRx Honey product family — box and sachets"
            className="relative object-cover"
          />
        </Reveal>
      </div>
    </SlideShell>
  )
}

/* -------------------------------------------------------------------------- */
/*  02 — The Problem                                                           */
/* -------------------------------------------------------------------------- */

function ProblemSlide() {
  return (
    <SlideShell glow="left">
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
        <div>
          <Reveal index={0}>
            <Eyebrow>The Problem</Eyebrow>
          </Reveal>
          <Reveal index={1}>
            <SlideTitle className="mt-3 sm:mt-4">
              Modern men are tired of cringe, clinical{' '}
              <span className="honey-text">&ldquo;solutions.&rdquo;</span>
            </SlideTitle>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-3 max-w-sm text-pretty text-xs leading-relaxed text-muted-foreground sm:mt-4 sm:text-sm lg:text-base">
              There is no discreet, premium, ritual-based product men are proud to use.
              <span className="text-foreground"> Until now.</span>
            </p>
          </Reveal>
        </div>
        <div className="grid gap-2 sm:gap-3">
          <MiniCard icon={IconBattery} title="Fatigue & Burnout" index={2}>
            Constant pressure at work, the gym, and home leaves men running on empty,
            with no discreet way to recharge.
          </MiniCard>
          <MiniCard icon={IconPulse} title="Performance Anxiety" index={3}>
            Confidence quietly follows energy, yet few products address both together.
          </MiniCard>
          <MiniCard icon={IconEyeOff} title="A Crowded, Cringe Market" index={4}>
            Synthetic pills and stimulants feel clinical, risky, or downright
            embarrassing to buy.
          </MiniCard>
        </div>
      </div>
    </SlideShell>
  )
}

/* -------------------------------------------------------------------------- */
/*  03 — The Solution / Ritual                                                 */
/* -------------------------------------------------------------------------- */

function SolutionSlide() {
  const steps = [
    { icon: IconCut, label: 'Tear', copy: 'Open a discreet, mess-free sachet anywhere.' },
    { icon: IconDrop, label: 'Take', copy: 'One sachet every two days; new users start with half.' },
    { icon: IconDrop, label: 'Thrive', copy: 'Feel natural energy, stamina, and quiet confidence build.' },
    { icon: IconCycle, label: 'Repeat', copy: 'Consistency compounds into a ritual.' },
  ]
  return (
    <SlideShell glow="center" texture>
      <div className="max-w-2xl">
        <Reveal index={0}>
          <Eyebrow>The Solution</Eyebrow>
        </Reveal>
        <Reveal index={1}>
          <SlideTitle className="mt-3 sm:mt-4">The GirthRx Ritual</SlideTitle>
        </Reveal>
        <Reveal index={2}>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:mt-3 sm:text-sm lg:text-base">
            Not a pill. A premium honey-based vitality ritual: natural energy, stamina,
            endurance, and confidence in one discreet sachet.
          </p>
        </Reveal>
      </div>

      <div className="mt-4 grid gap-2 grid-cols-2 sm:mt-6 sm:gap-3 md:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal
            key={s.label}
            index={i + 2}
            className={cn(cardBase, cardGlint, 'p-3 sm:p-4 lg:p-5')}
          >
            <div className="mb-2 flex items-center justify-between sm:mb-3">
              <IconBox icon={s.icon} />
              <span className="font-heading text-2xl font-bold text-white/8 sm:text-3xl">
                0{i + 1}
              </span>
            </div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground sm:text-base lg:text-lg">
              {s.label}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.copy}</p>
            {i < steps.length - 1 && (
              <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-honey/40 md:block" />
            )}
          </Reveal>
        ))}
      </div>
    </SlideShell>
  )
}

/* -------------------------------------------------------------------------- */
/*  04 — Product & Formula                                                     */
/* -------------------------------------------------------------------------- */

function ProductSlide() {
  const ingredients = [
    { value: '19,000mg', label: 'Organic Natural Honey' },
    { value: '325mg', label: 'Royal Honey Jelly' },
    { value: '200mg', label: 'Peruvian Maca' },
    { value: '50mg', label: 'Ginseng' },
  ]
  const benefits = [
    'Natural, sustained energy',
    'Stamina & endurance support',
    'Confidence & daily vitality',
    'Zero synthetic stimulants',
  ]
  return (
    <SlideShell glow="center">
      <Reveal index={0}>
        <Eyebrow>Product & Formula</Eyebrow>
      </Reveal>
      <Reveal index={1}>
        <SlideTitle className="mt-3 sm:mt-4">
          GRX 01: <span className="honey-text">20g Functional Honey Sachet</span>
        </SlideTitle>
      </Reveal>

      <Reveal index={3} className="relative mx-auto h-36 w-full max-w-[140px] sm:hidden">
        <div className="absolute inset-[20%] rounded-full bg-honey/20 blur-3xl" />
        <ProductImage
          src="/images/hero-product.png"
          alt="GirthRx GRX 01 20g functional honey sachet and box"
          className="relative drop-shadow-2xl"
        />
      </Reveal>

      <div className="mt-3 grid items-center gap-4 sm:mt-6 lg:grid-cols-[1fr_0.85fr] lg:gap-8">
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {ingredients.map((ing, i) => (
            <Reveal
              key={ing.label}
              index={i + 2}
              className={cn(cardBase, cardGlint, 'p-3 sm:p-4')}
            >
              <p className="font-heading text-xl font-bold text-honey sm:text-2xl lg:text-3xl">{ing.value}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{ing.label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal index={3} className="relative mx-auto hidden h-48 w-full max-w-xs sm:block sm:h-56 lg:h-64 lg:max-w-none">
          <div className="absolute inset-[20%] rounded-full bg-honey/20 blur-3xl" />
          <ProductImage
            src="/images/hero-product.png"
            alt="GirthRx GRX 01 20g functional honey sachet and box"
            className="relative drop-shadow-2xl"
          />
        </Reveal>
      </div>

      <Reveal index={5} className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 sm:mt-4 sm:gap-x-4 sm:gap-y-2">
        {benefits.map((b) => (
          <span key={b} className="inline-flex items-center gap-1.5 text-xs text-foreground/85 sm:text-sm">
            <Check className="h-3.5 w-3.5 text-honey sm:h-4 sm:w-4" />
            {b}
          </span>
        ))}
      </Reveal>
    </SlideShell>
  )
}

/* -------------------------------------------------------------------------- */
/*  05 — Usage & Experience                                                    */
/* -------------------------------------------------------------------------- */

function UsageSlide() {
  const points = [
    { icon: IconGauge, text: 'Dosing: one sachet every two days. New users can start with half.' },
    { icon: IconPackage, text: 'Discreet, mess-free, pre-measured packaging built for everyday carry.' },
    { icon: IconPulse, text: 'Integrates quietly into modern routines: work, gym, and nightlife.' },
  ]
  return (
    <SlideShell glow="left">
      <Reveal index={2} className="relative mx-auto flex items-center justify-center sm:hidden">
        <div className="absolute inset-[15%] rounded-full bg-honey/20 blur-3xl" />
        <ProductImage
          src="/images/single.jpeg"
          alt="GirthRx 20g honey sachet — single serving"
          className="relative h-32 w-auto drop-shadow-2xl"
        />
      </Reveal>
      <div className="grid items-center gap-4 sm:gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <Reveal index={0}>
            <Eyebrow>Usage & Experience</Eyebrow>
          </Reveal>
          <Reveal index={1}>
            <SlideTitle className="mt-3 sm:mt-4">A Quiet, Confident Daily Ritual</SlideTitle>
          </Reveal>
          <ul className="mt-3 space-y-2 sm:mt-5 sm:space-y-3">
            {points.map((p, i) => (
              <Reveal as="li" key={p.text} index={i + 2} className="flex gap-2.5 sm:gap-3">
                <IconBox icon={p.icon} className="mt-0.5 shrink-0" />
                <span className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {p.text}
                </span>
              </Reveal>
            ))}
          </ul>
          <Reveal index={5}>
            <p className="mt-3 font-heading text-xs font-medium uppercase tracking-wide text-foreground sm:mt-4 sm:text-sm lg:text-base">
              No pills. No powders to measure.{' '}
              <span className="honey-text">No awkward conversations.</span>
            </p>
          </Reveal>
        </div>
        <Reveal index={2} className="relative hidden items-center justify-center sm:flex">
          <div className="absolute inset-[15%] rounded-full bg-honey/20 blur-3xl" />
          <ProductImage
            src="/images/single.jpeg"
            alt="GirthRx 20g honey sachet — single serving"
            className="relative max-h-56 w-auto drop-shadow-2xl lg:max-h-80"
          />
        </Reveal>
      </div>
    </SlideShell>
  )
}

/* -------------------------------------------------------------------------- */
/*  06 — Market Opportunity                                                    */
/* -------------------------------------------------------------------------- */

function MarketSlide() {
  const items = [
    {
      icon: IconTrend,
      title: "Men's Health",
      copy: 'A rapidly growing category as men invest in energy, stamina, and wellness.',
    },
    {
      icon: IconLeaf,
      title: 'Natural',
      copy: 'Men are shifting away from synthetic boosters toward botanical alternatives.',
    },
    {
      icon: IconTarget,
      title: 'White Space',
      copy: 'GirthRx sits between supplements and lifestyle as a premium honey ritual.',
    },
  ]
  return (
    <SlideShell glow="center" texture>
      <Reveal index={0}>
        <Eyebrow>Market Opportunity</Eyebrow>
      </Reveal>
      <Reveal index={1}>
        <SlideTitle className="mt-3 sm:mt-4">A Fast-Growing, Underserved Category</SlideTitle>
      </Reveal>
      <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-3 lg:gap-4">
        {items.map((it, i) => (
          <Reveal
            key={it.title}
            index={i + 2}
            className={cn(cardBase, cardGlint, 'p-3 sm:p-4 lg:p-5')}
          >
            <IconBox icon={it.icon} className="mb-2 sm:mb-3" />
            <h3 className="mb-1 font-heading text-xs font-semibold uppercase tracking-wide text-foreground sm:text-sm lg:text-base">
              {it.title}
            </h3>
            <p className="text-[10px] leading-snug text-muted-foreground sm:text-xs sm:leading-relaxed">{it.copy}</p>
          </Reveal>
        ))}
      </div>
      <Reveal index={5}>
        <p className="mt-3 max-w-3xl text-pretty text-xs text-foreground/85 sm:mt-4 sm:text-sm lg:text-base">
          Positioned at the intersection of{' '}
          <span className="text-honey">men&apos;s health</span>,{' '}
          <span className="text-honey">functional foods</span>, and{' '}
          <span className="text-honey">premium lifestyle retail</span>.
        </p>
      </Reveal>
    </SlideShell>
  )
}

/* -------------------------------------------------------------------------- */
/*  07 — Traction & Social Proof                                               */
/* -------------------------------------------------------------------------- */

function TractionSlide() {
  const channels = [
    { icon: IconStore, text: 'Direct-to-consumer via the GirthRx Shopify "Men\'s Health Shop."' },
    { icon: IconPlay, text: 'Social commerce, including TikTok Shop listings for the 20g sachet.' },
    { icon: IconStack, text: 'Early bulk / wholesale conversations with gyms and retailers.' },
  ]
  return (
    <SlideShell glow="right">
      <Reveal index={0}>
        <Eyebrow>Traction & Social Proof</Eyebrow>
      </Reveal>
      <Reveal index={1}>
        <SlideTitle className="mt-3 sm:mt-4">Real Customers. Real Repeat Purchases.</SlideTitle>
      </Reveal>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3">
        <GlassCard glow className="p-4 sm:p-5 lg:p-6">
          <Reveal index={2}>
            <p className="font-heading text-3xl font-bold text-honey sm:text-4xl lg:text-5xl">
              4.8<span className="text-lg text-honey/70 sm:text-xl lg:text-2xl">/5</span>
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-foreground/70 sm:text-xs">Average Customer Rating</p>
          </Reveal>
        </GlassCard>
        <GlassCard className="p-4 sm:p-5 lg:p-6">
          <Reveal index={3}>
            <p className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              94<span className="text-lg text-muted-foreground sm:text-xl lg:text-2xl">%</span>
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-foreground/70 sm:text-xs">Would Reorder</p>
          </Reveal>
        </GlassCard>
      </div>

      <div className="mt-2 grid gap-2 sm:mt-3 sm:grid-cols-3 sm:gap-3">
        {channels.map((c, i) => (
          <Reveal
            key={c.text}
            index={i + 4}
            className={cn(cardBase, cardGlint, 'flex items-start gap-2.5 p-3 sm:p-4')}
          >
            <c.icon className="mt-0.5 h-4 w-4 shrink-0 text-honey sm:h-5 sm:w-5" />
            <span className="text-xs leading-relaxed text-muted-foreground">{c.text}</span>
          </Reveal>
        ))}
      </div>
    </SlideShell>
  )
}

/* -------------------------------------------------------------------------- */
/*  08 — Business Model & Pricing                                             */
/* -------------------------------------------------------------------------- */

function PricingSlide() {
  const tiers = [
    { name: 'Single Sachet', price: '$10', note: 'First-time trial, impulse purchase.', best: false },
    { name: '10-Pack', price: '$49.99', note: 'Ritual adoption, ~1 month supply.', best: true },
    { name: '3 × 10 Bundle', price: '$149', note: 'Committed users, best per-unit value.', best: false },
  ]
  const engine = [
    'Bundle pricing rewards commitment and lifts average order value.',
    'One-sachet-every-two-days usage drives predictable reorder cycles.',
    'Fast & priority shipping options support upsell at checkout.',
  ]
  return (
    <SlideShell glow="center">
      <Reveal index={0}>
        <Eyebrow>Business Model & Pricing</Eyebrow>
      </Reveal>
      <Reveal index={1}>
        <SlideTitle className="mt-3 sm:mt-4">Simple, High-Margin Bundle Economics</SlideTitle>
      </Reveal>

      <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-3">
        {tiers.map((t, i) => (
          <Reveal key={t.name} index={i + 2}>
            <GlassCard glow={t.best} className="relative p-3 sm:p-4 lg:p-5">
              {t.best && (
                <span className="absolute -top-2.5 left-4 rounded-full bg-honey px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-primary-foreground sm:text-[10px]">
                  Best Value
                </span>
              )}
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">{t.name}</p>
              <p
                className={cn(
                  'mt-1 font-heading text-xl font-bold sm:text-2xl lg:text-3xl',
                  t.best ? 'text-honey' : 'text-foreground',
                )}
              >
                {t.price}
              </p>
              <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground sm:text-xs">{t.note}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <Reveal index={5} className={cn(cardBase, cardGlint, 'mt-3 p-3 sm:mt-4 sm:p-4')}>
        <p className="mb-2 flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-wide text-foreground sm:text-sm">
          <IconCycle className="h-4 w-4 text-honey" /> Repeat-Purchase Engine
        </p>
        <div className="grid gap-2 sm:grid-cols-3">
          {engine.map((e) => (
            <span key={e} className="flex items-start gap-1.5 text-xs text-muted-foreground">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-honey" />
              {e}
            </span>
          ))}
        </div>
      </Reveal>
    </SlideShell>
  )
}

/* -------------------------------------------------------------------------- */
/*  09 — Go-to-Market                                                          */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*  10 — Competitive Landscape                                                 */
/* -------------------------------------------------------------------------- */

function CompetitiveSlide() {
  const rows = ['Natural', 'Discreet', 'Premium Feel', 'Ritual']
  const cols = [
    { name: 'GirthRx', values: ['yes', 'yes', 'yes', 'yes'], highlight: true },
    { name: 'Synthetic Pills', values: ['no', 'no', 'mid', 'no'], highlight: false },
    { name: 'Energy Drinks', values: ['mid', 'yes', 'mid', 'no'], highlight: false },
  ]
  const mark = (v: string) => {
    if (v === 'yes') return <Check className="mx-auto h-4 w-4 text-honey sm:h-5 sm:w-5" />
    if (v === 'no') return <X className="mx-auto h-4 w-4 text-muted-foreground/40 sm:h-5 sm:w-5" />
    return <span className="text-muted-foreground/60">~</span>
  }
  return (
    <SlideShell glow="center">
      <Reveal index={0}>
        <Eyebrow>Competitive Landscape</Eyebrow>
      </Reveal>
      <Reveal index={1}>
        <SlideTitle className="mt-3 sm:mt-4">The Premium, Discreet Alternative</SlideTitle>
      </Reveal>

      <Reveal index={2} className="mt-4 overflow-x-auto sm:mt-5">
        <table className="w-full border-separate border-spacing-0 text-center">
          <thead>
            <tr>
              <th className="w-1/3" />
              {cols.map((c) => (
                <th
                  key={c.name}
                  className={cn(
                    'rounded-t-xl px-2 py-2.5 font-heading text-xs font-semibold uppercase tracking-wide sm:px-4 sm:py-3',
                    c.highlight
                      ? 'bg-honey/15 text-honey ring-1 ring-honey/25 ring-inset'
                      : 'text-muted-foreground',
                  )}
                >
                  {c.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={r}>
                <td className="border-t border-white/8 px-2 py-2.5 text-left text-xs font-medium text-foreground sm:px-4 sm:py-3 sm:text-sm">
                  {r}
                </td>
                {cols.map((c) => (
                  <td
                    key={c.name}
                    className={cn(
                      'border-t border-white/8 px-2 py-2.5 sm:px-4 sm:py-3',
                      c.highlight && 'bg-honey/8',
                      c.highlight && ri === rows.length - 1 && 'rounded-b-xl',
                    )}
                  >
                    {mark(c.values[ri])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      <Reveal index={3}>
        <p className="mt-3 max-w-3xl text-pretty text-xs text-muted-foreground sm:mt-4 sm:text-sm lg:text-base">
          GirthRx is the only entrant treating men&apos;s vitality as a premium daily
          ritual, not a clinical fix.
        </p>
      </Reveal>
      <Reveal index={4} className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5 sm:mt-3">
        {[
          { icon: IconFlask, t: 'Lab-Tested' },
          { icon: IconShield, t: 'GMP Quality' },
          { icon: IconStar, t: 'American-Made Formula' },
        ].map((b) => (
          <span key={b.t} className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80">
            <b.icon className="h-3.5 w-3.5 text-honey sm:h-4 sm:w-4" />
            {b.t}
          </span>
        ))}
      </Reveal>
    </SlideShell>
  )
}

/* -------------------------------------------------------------------------- */
/*  11 — Roadmap                                                               */
/* -------------------------------------------------------------------------- */

function RoadmapSlide() {
  const items = [
    { icon: IconPackage, title: 'Product Line Extensions', copy: 'New flavors and formats building on GRX 01.' },
    { icon: IconCycle, title: 'Subscription & Loyalty', copy: 'Recurring "one sachet every two days" plan with rewards.' },
    { icon: IconPin, title: 'Regional Expansion', copy: 'Beyond initial DTC and social-commerce markets.' },
    { icon: IconPlay, title: 'Creator & Streaming', copy: 'Deeper partnerships in men\'s lifestyle and fitness content.' },
  ]
  return (
    <SlideShell glow="center">
      <Reveal index={0}>
        <Eyebrow>Roadmap & Expansion</Eyebrow>
      </Reveal>
      <Reveal index={1}>
        <SlideTitle className="mt-3 sm:mt-4">What&apos;s Next for GirthRx</SlideTitle>
      </Reveal>
      <div className="mt-4 grid gap-2 sm:mt-6 sm:grid-cols-2 sm:gap-3 lg:gap-4">
        {items.map((it, i) => (
          <Reveal
            key={it.title}
            index={i + 2}
            className={cn(cardBase, cardGlint, 'flex items-start gap-2.5 p-3 sm:gap-3 sm:p-4 lg:p-5')}
          >
            <IconBox icon={it.icon} className="shrink-0" />
            <span>
              <span className="block font-heading text-sm font-semibold uppercase tracking-wide text-foreground sm:text-base">
                {it.title}
              </span>
              <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                {it.copy}
              </span>
            </span>
          </Reveal>
        ))}
      </div>
    </SlideShell>
  )
}

/* -------------------------------------------------------------------------- */
/*  12 — The Ask                                                               */
/* -------------------------------------------------------------------------- */

function AskSlide() {
  const funds = [
    { icon: IconStack, title: 'Inventory & Fulfillment', copy: 'Scale production and meet DTC/wholesale demand.' },
    { icon: IconSpeaker, title: 'Marketing & Creators', copy: 'Expand social commerce and men\'s lifestyle reach.' },
    { icon: IconPin, title: 'Geographic & Retail', copy: 'Grow distribution into gyms, retailers, new regions.' },
  ]
  const outcomes = [
    'Expanded reach across DTC, social, and retail',
    'Revenue growth via bundles & subscriptions',
    'Stronger brand awareness in men\'s lifestyle',
    'New gym, retail & wholesale partnerships',
  ]
  return (
    <SlideShell glow="left">
      <Reveal index={0}>
        <Eyebrow>The Ask</Eyebrow>
      </Reveal>
      <Reveal index={1}>
        <SlideTitle className="mt-3 sm:mt-4">Partner With Us to Scale the Ritual.</SlideTitle>
      </Reveal>
      <Reveal index={2}>
        <p className="mt-2 max-w-2xl text-xs text-muted-foreground sm:mt-3 sm:text-sm lg:text-base">
          Raising growth capital and building partnerships with retail, wholesale, and
          distribution partners across men&apos;s health and lifestyle.
        </p>
      </Reveal>

      <div className="mt-4 grid gap-3 sm:mt-5 lg:grid-cols-2 lg:gap-5">
        <div>
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-honey sm:text-sm">
            <IconCoin className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Use of Funds / Partnerships
          </p>
          <div className="space-y-2">
            {funds.map((f, i) => (
              <Reveal
                key={f.title}
                index={i + 2}
                className={cn(cardBase, cardGlint, 'flex items-start gap-2.5 p-3 sm:p-4')}
              >
                <f.icon className="mt-0.5 h-4 w-4 shrink-0 text-honey sm:h-5 sm:w-5" />
                <span>
                  <span className="block text-xs font-semibold text-foreground sm:text-sm">{f.title}</span>
                  <span className="text-[10px] leading-relaxed text-muted-foreground sm:text-xs">{f.copy}</span>
                </span>
              </Reveal>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-honey sm:text-sm">
            <IconRocket className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Expected Outcomes
          </p>
          <GlassCard glow className="p-3 sm:p-4 lg:p-5">
            <Reveal index={4}>
              <ul className="space-y-2 sm:space-y-2.5">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-xs text-foreground/85 sm:text-sm">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-honey sm:h-4 sm:w-4" />
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>
          </GlassCard>
        </div>
      </div>
    </SlideShell>
  )
}

/* -------------------------------------------------------------------------- */
/*  13 — Closing                                                               */
/* -------------------------------------------------------------------------- */

function ClosingSlide() {
  return (
    <SlideShell glow="center" accent="duo" texture overlay>
      <div className="mx-auto max-w-3xl text-center">
        <Reveal index={0} className="flex justify-center">
          <CollabTag />
        </Reveal>
        <Reveal index={1}>
          <h2 className="mt-5 font-heading text-3xl font-bold uppercase leading-[0.95] tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            A <span className="honey-text">Boss-Led</span> Era for&nbsp;
            <span className="duo-text">GirthRx.</span>
          </h2>
        </Reveal>
        <Reveal index={2}>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-xs leading-relaxed text-muted-foreground sm:text-sm lg:text-base">
            A premium 40% growth partnership — built for a woman ready to lead the brand as its
            public face, voice, and CEO-style front.
          </p>
        </Reveal>
        <Reveal index={3}>
          <a
            href="https://girthrx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-heading text-xl font-semibold uppercase tracking-wide text-honey transition-opacity hover:opacity-80 sm:text-2xl"
          >
            girthrx.com
            <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </Reveal>
        <Reveal index={4}>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
            Collaboration &amp; Partnership Proposal
          </p>
        </Reveal>
      </div>
    </SlideShell>
  )
}

/* ========================================================================== */
/*  GIRTHRX × JELLYBEAN — COLLABORATION BLOCK                                  */
/*  Feminine-powerful, rose-accented layer over the honey/black identity.     */
/* ========================================================================== */

/* --- Extra on-brand icons for the collaboration block --------------------- */

function IconCrown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M3 8l4 4 5-7 5 7 4-4-2 12H5L3 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M5 20h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconSpark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 2c.6 5 2 6.4 7 7-5 .6-6.4 2-7 7-.6-5-2-6.4-7-7 5-.6 6.4-2 7-7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M19 3.5v3M20.5 5h-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function IconCamera({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7H7l1.5-2.5h7L17 7h2.5A1.5 1.5 0 0 1 21 8.5V18a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18V8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function IconCalendar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3.5" y="5" width="17" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconHeart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 20s-7-4.6-9.2-9C1.4 8 2.8 4.8 6 4.8c2 0 3.2 1.2 4 2.6.8-1.4 2-2.6 4-2.6 3.2 0 4.6 3.2 3.2 6.2C19 15.4 12 20 12 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function IconGlobe({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function IconWand({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M5 19L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 4l.8 2.2L18 7l-2.2.8L15 10l-.8-2.2L12 7l2.2-.8L15 4Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M6 4v2M5 5h2M19 14v2M18 15h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function IconLips({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M3 10c2-2 4-3 5.5-3 1.4 0 2.5.9 3.5 1.8C13 7.9 14.1 7 15.5 7 17 7 19 8 21 10c-1.5 4-5 6-9 6s-7.5-2-9-6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M3 10c3 .8 6 1.2 9 1.2S18 10.8 21 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

/* --- Rose-accented card + icon chrome ------------------------------------- */

const roseCardBase =
  'relative rounded-xl border border-rose/15 bg-gradient-to-br from-rose/[0.07] to-white/[0.015] backdrop-blur-md transition-all duration-300 hover:border-rose/40 hover:from-rose/[0.12] hover:to-white/[0.02]'

function RoseIconBox({
  icon: Icon,
  className,
}: {
  icon: ComponentType<{ className?: string }>
  className?: string
}) {
  return (
    <div
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-rose/25 to-honey/10 text-rose ring-1 ring-rose/25 sm:h-10 sm:w-10',
        className,
      )}
    >
      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
    </div>
  )
}

/* Small pill used to badge the collaboration slides */
function CollabTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-rose/25 bg-rose/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-rose sm:text-[10px]">
      <span className="h-1.5 w-1.5 rounded-full bg-rose" />
      GirthRx × Jellybean
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/*  C1 — Collaboration Hero (CEO Opportunity)                                  */
/* -------------------------------------------------------------------------- */

function CollabHeroSlide() {
  const stats = [
    { value: '40%', label: 'Growth Partnership' },
    { value: 'CEO', label: 'Public-Facing Role' },
    { value: '1of1', label: 'The Female Face' },
  ]
  return (
    <SlideShell glow="right" accent="duo" overlay>
      <div className="grid items-center gap-5 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <Reveal index={0}>
            <CollabTag />
          </Reveal>
          <Reveal index={1}>
            <SlideTitle className="mt-3 sm:mt-4">
              The <span className="rose-text">CEO</span> Collaboration{' '}
              <span className="duo-text">Opportunity</span>
            </SlideTitle>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-3 max-w-lg text-pretty text-xs leading-relaxed text-muted-foreground sm:text-sm lg:text-base">
              We&apos;re building the next era of GirthRx around one woman with the image,
              audience, and authority to define it. This is a{' '}
              <span className="text-foreground">40% growth partnership</span> — an invitation to
              lead the brand&apos;s public voice as its founding female face.
            </p>
          </Reveal>
          <Reveal index={3}>
            <p className="mt-3 font-heading text-sm font-medium uppercase tracking-wide text-rose sm:text-base lg:text-lg">
              Not a promo deal. A seat at the table.
            </p>
          </Reveal>
          <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-3">
            {stats.map((s, i) => (
              <Reveal key={s.label} index={i + 4} className={cn(roseCardBase, cardGlint, 'p-3 text-center sm:p-4')}>
                <p className="font-heading text-xl font-bold rose-text sm:text-2xl lg:text-3xl">{s.value}</p>
                <p className="mt-0.5 text-[9px] uppercase tracking-widest text-muted-foreground sm:text-[10px]">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal index={3} className="relative mx-auto w-full max-w-[230px] sm:max-w-[250px] lg:max-w-none">
          <div className="absolute -inset-3 rounded-3xl bg-rose/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-rose/20 ring-1 ring-white/5">
            <ProductImage
              src="/images/jellybean-hero.webp"
              alt="Jellybean as the face of GirthRx, beside the branded G-Wagon"
              className="aspect-[3/4] object-cover lg:aspect-[4/5]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white sm:text-sm">
                Boss energy. Brand equity.
              </p>
              <p className="mt-1 text-[10px] text-white/70 sm:text-xs">
                Luxury, influence, and ownership — the face of a viral performance brand.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SlideShell>
  )
}

/* -------------------------------------------------------------------------- */
/*  C2 — What GirthRx Builds & Provides                                        */
/* -------------------------------------------------------------------------- */

function ProvideSlide() {
  const items = [
    { icon: IconCamera, title: 'Premium Creative', copy: 'Product visuals, ad creative, and promo content built for you and delivered ready to post.' },
    { icon: IconStore, title: 'TikTok Shop Setup', copy: 'Full TikTok Shop integration and product listings — handled on our side end to end.' },
    { icon: IconUsers, title: 'Affiliate Program', copy: 'Creator seeding and TikTok affiliate implementation to scale reach beyond your own audience.' },
    { icon: IconGlobe, title: 'Web & Landing Pages', copy: 'Conversion-focused pages tied to girthrx.com to turn attention into orders.' },
    { icon: IconWand, title: 'Creative Direction', copy: 'Ongoing campaign concepts, launch materials, and brand positioning support.' },
    { icon: IconStack, title: 'Backend & Systems', copy: 'Marketing infrastructure, fulfillment, and the operational engine behind the scenes.' },
  ]
  return (
    <SlideShell glow="left" accent="duo">
      <Reveal index={0}>
        <Eyebrow tone="rose">What GirthRx Provides</Eyebrow>
      </Reveal>
      <Reveal index={1}>
        <SlideTitle className="mt-3 sm:mt-4">
          We Bring the <span className="rose-text">Infrastructure.</span> You Bring the Spotlight.
        </SlideTitle>
      </Reveal>
      <Reveal index={2}>
        <p className="mt-2 max-w-2xl text-xs leading-relaxed text-muted-foreground sm:mt-3 sm:text-sm lg:text-base">
          This isn&apos;t a request for promotion — it&apos;s a full support system. We create the
          assets and hand you polished materials, so you can focus on being the face, voice, and
          amplifier of the brand.
        </p>
      </Reveal>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-3 lg:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.title} index={i + 2} className={cn(roseCardBase, cardGlint, 'p-3 sm:p-4 lg:p-5')}>
            <RoseIconBox icon={it.icon} className="mb-2 sm:mb-3" />
            <h3 className="mb-1 font-heading text-sm font-semibold uppercase tracking-wide text-foreground sm:text-base">
              {it.title}
            </h3>
            <p className="text-[11px] leading-relaxed text-muted-foreground sm:text-xs">{it.copy}</p>
          </Reveal>
        ))}
      </div>
    </SlideShell>
  )
}

/* -------------------------------------------------------------------------- */
/*  C3 — What We Expect (CEO energy in action)                                 */
/* -------------------------------------------------------------------------- */

function ExpectSlide() {
  const points = [
    { icon: IconCamera, title: 'Weekly Content', copy: 'Regular posts featuring or mentioning the product — in your own natural style.' },
    { icon: IconLips, title: 'Authentic Voice', copy: 'TikToks in your voice. We don\u2019t over-script your personality — momentum beats rigid rules.' },
    { icon: IconCalendar, title: 'Event Presence', copy: 'Show up for the moments that matter — appearances that build real brand visibility.' },
    { icon: IconCrown, title: 'Brand Leadership', copy: 'Help shape the public identity, culture, and confidence of the brand as its face.' },
  ]
  return (
    <SlideShell glow="right" accent="rose">
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
        <div>
          <Reveal index={0}>
            <Eyebrow tone="rose">How the 40% is Activated</Eyebrow>
          </Reveal>
          <Reveal index={1}>
            <SlideTitle className="mt-3 sm:mt-4">
              CEO Energy, <span className="rose-text">In Action.</span>
            </SlideTitle>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-3 max-w-sm text-pretty text-xs leading-relaxed text-muted-foreground sm:text-sm lg:text-base">
              Ownership is earned through visibility, content, and presence. This is what leadership
              looks like in the role — consistent, confident, and yours.
            </p>
          </Reveal>
          <Reveal index={3}>
            <p className="mt-3 font-heading text-xs font-medium uppercase tracking-wide text-foreground sm:text-sm lg:text-base">
              A real partner role — <span className="rose-text">not just a title.</span>
            </p>
          </Reveal>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
          {points.map((p, i) => (
            <Reveal key={p.title} index={i + 2} className={cn(roseCardBase, cardGlint, 'p-3 sm:p-4 lg:p-5')}>
              <RoseIconBox icon={p.icon} className="mb-2 sm:mb-3" />
              <h3 className="mb-1 font-heading text-sm font-semibold uppercase tracking-wide text-foreground sm:text-base">
                {p.title}
              </h3>
              <p className="text-[11px] leading-relaxed text-muted-foreground sm:text-xs">{p.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </SlideShell>
  )
}

/* -------------------------------------------------------------------------- */
/*  C4 — TikTok Shop + Affiliate Growth Engine                                 */
/* -------------------------------------------------------------------------- */

function TikTokEngineSlide() {
  const funnel = [
    { icon: IconSpark, tag: 'Top of Funnel', title: 'Desire', copy: 'You create premium, seductive short-form that makes the brand magnetic.' },
    { icon: IconUsers, tag: 'Mid Funnel', title: 'Reach', copy: 'Affiliate creators seed the product, multiplying views and social proof.' },
    { icon: IconStore, tag: 'Bottom of Funnel', title: 'Convert', copy: 'TikTok Shop turns attention into direct, in-app purchases.' },
  ]
  return (
    <SlideShell glow="center" accent="duo">
      <Reveal index={0}>
        <Eyebrow tone="rose">Growth Engine</Eyebrow>
      </Reveal>
      <Reveal index={1}>
        <SlideTitle className="mt-3 sm:mt-4">
          A <span className="duo-text">TikTok-Native</span> Conversion Machine
        </SlideTitle>
      </Reveal>
      <Reveal index={2}>
        <p className="mt-2 max-w-2xl text-xs leading-relaxed text-muted-foreground sm:mt-3 sm:text-sm lg:text-base">
          You are the premium face at the top; affiliate creators scale the reach underneath. Every
          week of content compounds into a direct-to-purchase loop.
        </p>
      </Reveal>

      <div className="mt-4 grid grid-cols-1 gap-2 sm:mt-6 sm:grid-cols-3 sm:gap-3">
        {funnel.map((f, i) => (
          <Reveal key={f.title} index={i + 2} className={cn(roseCardBase, cardGlint, 'relative p-3 sm:p-4 lg:p-5')}>
            <div className="mb-2 flex items-center justify-between sm:mb-3">
              <RoseIconBox icon={f.icon} />
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-rose/70 sm:text-[10px]">
                {f.tag}
              </span>
            </div>
            <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-foreground sm:text-lg">
              {f.title}
            </h3>
            <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground sm:text-xs">{f.copy}</p>
            {i < funnel.length - 1 && (
              <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-rose/40 sm:block" />
            )}
          </Reveal>
        ))}
      </div>

      <Reveal index={5} className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 sm:mt-4">
        {['Influencer Commerce', 'Creator-Led Growth', 'Social Proof Loops', 'Premium DTC Expansion'].map((t) => (
          <span key={t} className="inline-flex items-center gap-1.5 text-[11px] font-medium text-foreground/80 sm:text-xs">
            <Check className="h-3.5 w-3.5 text-rose sm:h-4 sm:w-4" />
            {t}
          </span>
        ))}
      </Reveal>
    </SlideShell>
  )
}

/* -------------------------------------------------------------------------- */
/*  C5 — Her Personal Brand Fit                                                */
/* -------------------------------------------------------------------------- */

function BrandFitSlide() {
  const traits = [
    { icon: IconCrown, title: 'Authority', copy: 'You read as a boss, not a billboard — desirability with real command.' },
    { icon: IconHeart, title: 'Magnetism', copy: 'Your audience leans in. That attention is the brand\u2019s most valuable asset.' },
    { icon: IconSpark, title: 'Ambition', copy: 'Luxury lifestyle and drive that positions the brand exactly where we want it.' },
    { icon: IconCamera, title: 'Native Talent', copy: 'A natural fit for viral short-form — confident, sexy, and effortlessly premium.' },
  ]
  return (
    <SlideShell glow="left" accent="rose" overlay>
      <div className="grid items-center gap-5 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div>
          <Reveal index={0}>
            <Eyebrow tone="rose">Why You</Eyebrow>
          </Reveal>
          <Reveal index={1}>
            <SlideTitle className="mt-3 sm:mt-4">
              You Don&apos;t Promote Brands. You <span className="rose-text">Define</span> Them.
            </SlideTitle>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-3 max-w-lg text-pretty text-xs leading-relaxed text-muted-foreground sm:text-sm lg:text-base">
              This role was mapped to your strengths on purpose. You merge femininity with authority,
              sex appeal with substance — the exact blend that makes a performance brand feel
              aspirational instead of clinical.
            </p>
          </Reveal>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3">
            {traits.map((t, i) => (
              <Reveal key={t.title} index={i + 3} className={cn(roseCardBase, cardGlint, 'p-3 sm:p-4')}>
                <div className="mb-1.5 flex items-center gap-2">
                  <RoseIconBox icon={t.icon} className="h-8 w-8 sm:h-9 sm:w-9" />
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground sm:text-base">
                    {t.title}
                  </h3>
                </div>
                <p className="text-[11px] leading-relaxed text-muted-foreground sm:text-xs">{t.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal index={2} className="relative mx-auto hidden w-full max-w-xs lg:block lg:max-w-none">
          <div className="absolute -inset-2 rounded-3xl bg-rose/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-rose/20">
            <ProductImage
              src="/images/jellybean-hero.webp"
              alt="Jellybean embodying the GirthRx CEO image"
              className="aspect-[3/4] object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050608] to-transparent" />
          </div>
        </Reveal>
      </div>
    </SlideShell>
  )
}

/* -------------------------------------------------------------------------- */
/*  C6 — Visual Brand World                                                    */
/* -------------------------------------------------------------------------- */

function VisualWorldSlide() {
  const motifs = [
    'Glossy lips & gold liquid honey',
    'Black & honey-gold core identity',
    'Jellybean rose-glow feminine layer',
    'Luxury nightlife editorial styling',
    'Wrapped G-Wagon hero imagery',
    'Cinematic, high-converting ad look',
  ]
  return (
    <SlideShell glow="right" accent="duo">
      <Reveal index={0}>
        <Eyebrow tone="rose">Visual Brand World</Eyebrow>
      </Reveal>
      <Reveal index={1}>
        <SlideTitle className="mt-3 sm:mt-4">
          Two Worlds, <span className="duo-text">One Aesthetic.</span>
        </SlideTitle>
      </Reveal>

      <div className="mt-4 grid gap-3 sm:mt-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <Reveal index={2} className="relative col-span-2 overflow-hidden rounded-2xl border border-rose/15">
            <ProductImage
              src="/images/sachets-trio.webp"
              alt="GirthRx Honey sachets — black packaging with gold honey and lips motif"
              className="aspect-[16/9] object-contain p-3"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050608]/60 to-transparent" />
          </Reveal>
          <Reveal index={3} className="overflow-hidden rounded-2xl border border-white/8">
            <ProductImage
              src="/images/sachet-solo.webp"
              alt="Single GirthRx Honey sachet"
              className="aspect-square object-contain p-3"
            />
          </Reveal>
          <Reveal index={4} className="overflow-hidden rounded-2xl border border-white/8">
            <ProductImage
              src="/images/sachets-fan.webp"
              alt="GirthRx Honey sachets fanned out"
              className="aspect-square object-cover"
            />
          </Reveal>
        </div>

        <div>
          <Reveal index={3}>
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm lg:text-base">
              GirthRx&apos;s masculine performance identity, softened with Jellybean&apos;s rose glow.
              Premium, seductive, and polished — never cheap.
            </p>
          </Reveal>
          <div className="mt-3 grid gap-1.5 sm:mt-4 sm:gap-2">
            {motifs.map((m, i) => (
              <Reveal key={m} index={i + 4} className="flex items-start gap-2 text-[11px] text-foreground/85 sm:text-xs">
                <IconLips className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose sm:h-4 sm:w-4" />
                {m}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  )
}

/* -------------------------------------------------------------------------- */
/*  C7 — Partnership Structure (40%)                                           */
/* -------------------------------------------------------------------------- */

function StructureSlide() {
  const ours = [
    'Product, formula & fulfillment',
    'Creative, assets & campaigns',
    'TikTok Shop & affiliate setup',
    'Web, systems & brand support',
  ]
  const hers = [
    'Presence & premium image',
    'Weekly content & promotion',
    'Events & public leadership',
    'Audience connection & advocacy',
  ]
  return (
    <SlideShell glow="center" accent="duo" overlay>
      <Reveal index={0}>
        <Eyebrow tone="rose">Partnership Structure</Eyebrow>
      </Reveal>
      <Reveal index={1}>
        <SlideTitle className="mt-3 sm:mt-4">
          A Clean <span className="rose-text">40%</span> Growth Partnership
        </SlideTitle>
      </Reveal>

      <div className="mt-4 grid gap-2 sm:mt-6 sm:grid-cols-2 sm:gap-3 lg:gap-4">
        <Reveal index={2}>
          <GlassCard className="h-full p-4 sm:p-5 lg:p-6">
            <p className="mb-2 flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wide text-honey sm:mb-3 sm:text-base">
              <IconStack className="h-4 w-4" /> GirthRx Brings
            </p>
            <ul className="space-y-2">
              {ours.map((o) => (
                <li key={o} className="flex items-start gap-2 text-xs text-foreground/85 sm:text-sm">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-honey sm:h-4 sm:w-4" />
                  {o}
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
        <Reveal index={3}>
          <div className={cn(roseCardBase, cardGlint, 'h-full rose-glow p-4 sm:p-5 lg:p-6')}>
            <p className="mb-2 flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wide text-rose sm:mb-3 sm:text-base">
              <IconCrown className="h-4 w-4" /> Jellybean Brings
            </p>
            <ul className="space-y-2">
              {hers.map((h) => (
                <li key={h} className="flex items-start gap-2 text-xs text-foreground/85 sm:text-sm">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose sm:h-4 sm:w-4" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal index={4} className={cn(roseCardBase, cardGlint, 'mt-3 flex flex-wrap items-center justify-between gap-3 p-3 sm:mt-4 sm:p-4')}>
        <p className="font-heading text-xs font-semibold uppercase tracking-wide text-foreground sm:text-sm">
          Shared goal
        </p>
        <div className="flex flex-wrap gap-x-3 gap-y-1.5">
          {['Growth', 'Authority', 'Scale', 'Revenue', 'Category Leadership'].map((g) => (
            <span key={g} className="text-[11px] font-medium duo-text sm:text-xs">
              {g}
            </span>
          ))}
        </div>
      </Reveal>
    </SlideShell>
  )
}

/* -------------------------------------------------------------------------- */
/*  Registry                                                                   */
/* -------------------------------------------------------------------------- */

export type Slide = {
  id: string
  name: string
  Component: ComponentType
}

export const slides: Slide[] = [
  { id: 'closing', name: 'Pitch Deck', Component: ClosingSlide },
  { id: 'collab-hero', name: 'CEO Opportunity', Component: CollabHeroSlide },
  { id: 'brand', name: 'Brand Story', Component: BrandSlide },
  { id: 'problem', name: 'The Problem', Component: ProblemSlide },
  { id: 'solution', name: 'The Ritual', Component: SolutionSlide },
  { id: 'product', name: 'Product & Formula', Component: ProductSlide },
  { id: 'usage', name: 'Usage', Component: UsageSlide },
  { id: 'market', name: 'Market', Component: MarketSlide },
  { id: 'traction', name: 'Traction', Component: TractionSlide },
  { id: 'pricing', name: 'Business Model', Component: PricingSlide },
  { id: 'competitive', name: 'Competitive', Component: CompetitiveSlide },
  { id: 'roadmap', name: 'Roadmap', Component: RoadmapSlide },
  { id: 'collab-provide', name: 'What We Provide', Component: ProvideSlide },
  { id: 'collab-expect', name: 'CEO Energy in Action', Component: ExpectSlide },
  { id: 'collab-tiktok', name: 'Growth Engine', Component: TikTokEngineSlide },
  { id: 'collab-fit', name: 'Why You', Component: BrandFitSlide },
  { id: 'collab-visual', name: 'Visual Brand World', Component: VisualWorldSlide },
  { id: 'collab-structure', name: 'Partnership Structure', Component: StructureSlide },
  { id: 'ask', name: 'The Ask', Component: AskSlide },
]
