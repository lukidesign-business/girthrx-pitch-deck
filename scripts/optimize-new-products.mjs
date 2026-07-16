import sharp from 'sharp'
import fs from 'fs'
import https from 'https'
import path from 'path'

const urls = {
  'box-display': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260713_205527_f5bc93b8-90c3-473c-bba6-b90e50ac4082%20-%20Copy-Picsart-BackgroundRemover%20-%20Copy-1DR1lbuRx6jOUi1N9VaZKmMY5lz1Zu.png',
  'sachet-solo': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260715_230849_da404d48-b139-4cd0-81d7-e666557017d7%20-%20Copy-xEWMIab6uaM6Varg6Tbhv0nDKFFkQm.png',
  'sachets-display': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260715_232209_368e4a5b-382c-438c-969a-81b926ec1c9d.png-Xw2dbw1PHAfGEAAQiAgt13hOabONUp.jpeg',
  'sachet-studio': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260715_231824_ba73774e-6f5a-4a05-9a74-8cff9fbef8fb-Picsart-BackgroundRemover-xwB6GzWPplf8QA5PKmD3qp1EdbiEXH.png',
}

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = Buffer.alloc(0)
      res.on('data', (chunk) => {
        data = Buffer.concat([data, chunk])
      })
      res.on('end', () => resolve(data))
    }).on('error', reject)
  })
}

async function optimize() {
  const dir = '/vercel/share/v0-project/public/images'
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

  for (const [name, url] of Object.entries(urls)) {
    try {
      console.log(`Downloading ${name}...`)
      const buffer = await downloadImage(url)
      
      const webpPath = path.join(dir, `${name}.webp`)
      await sharp(buffer)
        .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 78, effort: 6 })
        .toFile(webpPath)
      
      const stats = fs.statSync(webpPath)
      console.log(`✓ ${name}.webp (${(stats.size / 1024).toFixed(0)}KB)`)
    } catch (e) {
      console.error(`✗ ${name}: ${e.message}`)
    }
  }
}

optimize()
