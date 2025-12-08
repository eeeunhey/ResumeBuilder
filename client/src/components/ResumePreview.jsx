import React from 'react'

const ResumePreview = ({data, template, accentColor, classes = " "}) => {
  return (
    <div className='w-full bg-gray-100'>
        <div className={"border border-gray-200 print:shadow-none print:border-none" + classes}>
            프리뷰 페이지 구성
        </div>

    </div>
  )
}

export default ResumePreview