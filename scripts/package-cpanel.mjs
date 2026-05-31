import { execSync } from 'node:child_process'
import { existsSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { prepareCpanelDeploy } from './prepare-cpanel.mjs'

const root = import.meta.dirname.replace(/[/\\]scripts$/, '')
const outDir = join(root, 'out')
const deployDir = join(root, 'deploy-cpanel')
const zipPath = join(root, 'go-flyt-cpanel.zip')
const skipBuild = process.argv.includes('--skip-build') || process.env.SKIP_BUILD === '1'

if (!skipBuild) {
  console.log('Building static site...')
  execSync('npm run build', { cwd: root, stdio: 'inherit' })
}

prepareCpanelDeploy(outDir, deployDir)

console.log('Creating go-flyt-cpanel.zip...')
rmSync(zipPath, { force: true })

try {
  execSync(`tar -a -c -f "${zipPath}" -C "${deployDir}" .`, {
    cwd: root,
    stdio: 'inherit',
  })
} catch {
  throw new Error(
    'Could not create zip. Upload the deploy-cpanel/ folder manually in cPanel File Manager.',
  )
}

console.log('')
console.log('Ready for cPanel upload:')
console.log(`  Folder: ${deployDir}`)
console.log(`  Zip:    ${zipPath}`)
console.log('')
console.log('Upload ALL files from deploy-cpanel/ into public_html/, including:')
console.log('  - index.html')
console.log('  - .htaccess')
console.log('  - next/   (CSS and JS — required)')
console.log('  - 404/')
