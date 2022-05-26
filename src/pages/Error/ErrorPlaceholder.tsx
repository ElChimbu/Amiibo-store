import React from 'react'
import ErrorIcon from './ErrorIcon'
import common from '../../wordings/wording.json'
import Header from '../../components/HeaderComponent'

export default function ErrorPlaceholder() {
  return (
    <div>
    <Header/ >
    <div className="flex justify-center items-center h-96 flex-col sm:flex-row text-center sm:text-left">
      <ErrorIcon />
      <div className="flex flex-col">
        <p>
          <span className="font-bold">{common.page_error.title}</span>
        </p>
        <p>{common.page_error.subtitle}</p>
      </div>
    </div>
    </div>
  )
}