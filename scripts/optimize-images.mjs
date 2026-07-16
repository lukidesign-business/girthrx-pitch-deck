import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const OUT = path.resolve('public/images')

/**
 * Each job: download a source image, downscale to a sane max width for web,
 * and emit a compressed WebP. Transparent PNGs keep their alpha channel.
 */
const jobs = [
  {
    name: 'jellybean-hero.webp',
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/outside%20%281%29.png-LjF0pxqn6IO0UmM9fLHlVLh3uiOM1n.jpeg',
    maxWidth: 1400,
    quality: 72,
    alpha: false,
  },
  {
    name: 'honey-lips-overlay.webp',
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/overlay%20background-iu9U5bICDYGI60hHnkyqTkmmNitgOt.png',
    maxWidth: 1600,
    quality: 68,
    alpha: false,
  },
  {
    name: 'sachets-trio.webp',
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260715_232209_368e4a5b-382c-438c-969a-81b926ec1c9d-Picsart-BackgroundRemover-JyoURfkF6ktnGCggh1FUYF1xNjgJ8R.png',
    maxWidth: 1000,
    quality: 78,
    alpha: true,
  },
  {
    name: 'sachet-solo.webp',
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260715_231824_ba73774e-6f5a-4a05-9a74-8cff9fbef8fb-Picsart-BackgroundRemover-s7HAUGm7l21UqDLCJkIaKr84tj3eA0.png',
    maxWidth: 700,
    quality: 80,
    alpha: true,
  },
  {
    name: 'sachets-fan.webp',
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260715_230849_da404d48-b139-4cd0-81d7-e666557017d7%20-%20Copy%20%282%29-d1ZPUsSWAa4kBWDI5cSwc7A6wHRzsD.png',
    maxWidth: 1000,
    quality: 74,
    alpha: false,
  },
  {
    name: 'display-box.webp',
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260713_205527_f5bc93b8-90c3-473c-bba6-b90e50ac4082%20-%20Copy-Picsart-BackgroundRemover%20-%20Copy-xaP5TH3rR9PaEX64z3E2GV1dAEMJcb.png',
    maxWidth: 900,
    quality: 78,
    alpha: true,
  },
]

await mkdir(OUT, { recursive: true })

for (const job of jobs) {
  const res = await fetch(job.url)
  if (!res.ok) {
    console.error(`FAILED ${job.name}: ${res.status}`)
    continue
  }
  const input = Buffer.from(await res.arrayBuffer())
  const pipeline = sharp(input)
    .rotate()
    .resize({ width: job.maxWidth, withoutEnlargement: true })
    .webp({ quality: job.quality, effort: 6, alphaQuality: job.alpha ? 90 : 100 })

  const out = await pipeline.toBuffer()
  const dest = path.join(OUT, job.name)
  await writeFile(dest, out)
  console.log(
    `${job.name}: ${(input.length / 1024).toFixed(0)}KB -> ${(out.length / 1024).toFixed(0)}KB`,
  )
}

console.log('done')
