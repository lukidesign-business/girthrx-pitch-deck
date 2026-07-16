import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const imageUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260716_005753_5b64edb0-eba4-4b64-91d9-042b258089c7.png-xprFJiafsNMpiLeurDsB0u25HAxwDF.jpeg'
const tempFile = '/tmp/lamborghini-raw.jpg'
const outputDir = path.join(process.cwd(), 'public', 'images')

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true })

;(async () => {
  try {
    // Download with curl
    execSync(`curl -s -L "${imageUrl}" -o "${tempFile}"`)

    // Optimize: 1080w max, quality 82, WebP
    const optimized = await sharp(tempFile)
      .resize(1080, 1440, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 82 })
      .toBuffer()

    fs.writeFileSync(path.join(outputDir, 'lamborghini-ceo.webp'), optimized)
    fs.unlinkSync(tempFile)
    console.log(`✓ lamborghini-ceo.webp: ${(optimized.length / 1024).toFixed(1)}KB`)
  } catch (e) {
    console.error('Error:', e.message)
    process.exit(1)
  }
})()
