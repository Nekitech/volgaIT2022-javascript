import React from 'react'
import {Link}  from 'react-router-dom';
import {css, StyleSheet} from 'aphrodite/no-important'

const CloseButton = (props) => {
  return (
    <Link style={{textDecoration: 'none'}}to="/">
        <img {...props} style={{cursor: 'pointer'}} src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImV4aXQiPgo8cGF0aCBpZD0iTGluZSAxMCBDb3B5IiBkPSJNMTQuNjExOCAxTDEgMTQuNjExOCIgc3Ryb2tlPSIjM0E0ODUwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBpZD0iTGluZSAxMCBDb3B5IDIiIGQ9Ik0xLjE3Njc3IDFMMTQuNzg4NiAxNC42MTE4IiBzdHJva2U9IiMzQTQ4NTAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjwvZz4KPC9zdmc+Cg=='} alt="" />
    </Link>
  )
}

export default CloseButton