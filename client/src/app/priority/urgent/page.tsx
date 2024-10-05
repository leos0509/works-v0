import React from 'react'
import ReuseablePriorityPage from '../reuseablePriorityPage'
import { Priority } from '@/state/api'

function Urgent() {
  return (
    <ReuseablePriorityPage priority={Priority.Urgent}/>
  )
}

export default Urgent