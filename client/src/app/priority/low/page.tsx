import React from 'react'
import ReuseablePriorityPage from '../reuseablePriorityPage'
import { Priority } from '@/state/api'

function Low() {
  return (
    <ReuseablePriorityPage priority={Priority.Low}/>
  )
}

export default Low