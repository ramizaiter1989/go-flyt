import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, renameSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { join, extname } from 'node:path'

const TEXT_EXTENSIONS = new Set(['.html', '.css', '.js', '.json', '.txt', '.map', '.rsc'])

export function prepareCpanelDeploy(outDir, deployDir) {
  if (!existsSync(outDir)) {
    throw new Error('The out/ folder was not found. Run npm run build first.')
  }

  console.log('Preparing deploy-cpanel/ folder...')
  rmSync(deployDir, { recursive: true, force: true })
  mkdirSync(deployDir, { recursive: true })
  cpSync(outDir, deployDir, { recursive: true })

  const nextDir = join(deployDir, '_next')
  const assetsDir = join(deployDir, 'next')

  if (!existsSync(nextDir)) {
    throw new Error('Build output is missing the _next/ folder.')
  }

  renameSync(nextDir, assetsDir)
  rewriteAssetPaths(deployDir)

  const cssFiles = findFiles(assetsDir, '.css')
  const jsFiles = findFiles(assetsDir, '.js')

  if (cssFiles.length === 0 || jsFiles.length === 0) {
    throw new Error('Build output is missing CSS or JS assets in next/.')
  }

  console.log(`  Assets ready: ${cssFiles.length} CSS, ${jsFiles.length} JS files`)
  return { cssFiles: cssFiles.length, jsFiles: jsFiles.length }
}

function rewriteAssetPaths(dir) {
  for (const file of walkFiles(dir)) {
    if (!TEXT_EXTENSIONS.has(extname(file))) continue

    const source = readFileSync(file, 'utf8')
    const updated = source.replaceAll('/_next/', '/next/')

    if (updated !== source) {
      writeFileSync(file, updated, 'utf8')
    }
  }
}

function walkFiles(dir) {
  const files = []

  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry)
    const stats = statSync(fullPath)

    if (stats.isDirectory()) {
      files.push(...walkFiles(fullPath))
    } else {
      files.push(fullPath)
    }
  }

  return files
}

function findFiles(dir, extension) {
  return walkFiles(dir).filter((file) => extname(file) === extension)
}
