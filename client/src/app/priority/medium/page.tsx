import React from 'react'
import ReuseablePriorityPage from '../reuseablePriorityPage'
import { Priority } from '@/state/api'

function Medium() {
  return (
    <ReuseablePriorityPage priority={Priority.Medium}/>
  )
}

export default Medium