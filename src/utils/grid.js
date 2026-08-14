/**
 * Center incomplete last rows in a card grid.
 * Parent should use: `grid sm:grid-cols-4 lg:grid-cols-6`
 * (2 columns on sm, 3 columns on lg via col-span-2)
 */
export function centeredCardClass(index, total) {
  const classes = ['sm:col-span-2', 'lg:col-span-2']

  const smRem = total % 2
  if (smRem === 1 && index === total - 1) {
    classes.push('sm:col-start-2')
  }

  const lgRem = total % 3
  if (lgRem !== 0 && index >= total - lgRem) {
    const pos = index - (total - lgRem)
    if (lgRem === 1) {
      classes.push('lg:col-start-3')
    } else if (lgRem === 2) {
      classes.push(pos === 0 ? 'lg:col-start-2' : 'lg:col-start-4')
    }
  } else if (smRem === 1 && index === total - 1) {
    classes.push('lg:col-start-auto')
  }

  return classes.join(' ')
}

/** Same idea for md breakpoint as the first multi-column step (2 cols). */
export function centeredCardClassMd(index, total) {
  const classes = ['md:col-span-2', 'lg:col-span-2']

  const mdRem = total % 2
  if (mdRem === 1 && index === total - 1) {
    classes.push('md:col-start-2')
  }

  const lgRem = total % 3
  if (lgRem !== 0 && index >= total - lgRem) {
    const pos = index - (total - lgRem)
    if (lgRem === 1) {
      classes.push('lg:col-start-3')
    } else if (lgRem === 2) {
      classes.push(pos === 0 ? 'lg:col-start-2' : 'lg:col-start-4')
    }
  } else if (mdRem === 1 && index === total - 1) {
    classes.push('lg:col-start-auto')
  }

  return classes.join(' ')
}

/** 2 cols from mobile, 3 cols on lg. Parent: `grid grid-cols-2 lg:grid-cols-6` */
export function centeredCardClassFromMobile(index, total) {
  const classes = ['lg:col-span-2']

  const mobileRem = total % 2
  if (mobileRem === 1 && index === total - 1) {
    classes.push('col-span-2')
  }

  const lgRem = total % 3
  if (lgRem !== 0 && index >= total - lgRem) {
    const pos = index - (total - lgRem)
    if (lgRem === 1) {
      classes.push('lg:col-start-3')
    } else if (lgRem === 2) {
      classes.push(pos === 0 ? 'lg:col-start-2' : 'lg:col-start-4')
    }
  } else if (mobileRem === 1 && index === total - 1) {
    classes.push('lg:col-span-2', 'lg:col-start-auto')
  }

  return classes.join(' ')
}
