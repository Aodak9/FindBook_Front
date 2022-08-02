import React from 'react'

export default function Filter({text}) {
  return (
    <div className='mx-auto'>
        <details class="open:bg-cream-300 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg rounded-lg" open>
    <summary class="text-sm leading-6 text-slate-900 dark:text-greyBlack-400 font-semibold select-none">
      {text}
    </summary>
    <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
      <p>Drama</p>
      <p>Terror</p>
      <p>Drama</p>
    </div>
  </details>
    </div>
  )
}
