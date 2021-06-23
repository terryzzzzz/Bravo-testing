import React from 'react'

import { Picture } from 'react-responsive-picture'

export default function Card({ data }) {

    return (
        <div className="w-full h-full flex flex-col bg-gray-light">
            <div className="w-full">
                <Picture
                    className='w-full object-cover'
                    sources={[
                        {
                            srcSet: `${data.imgUrlMobile}, ${data.imgUrlMobile2x} 2x`,
                            media: "(max-width: 420px)",
                        },
                        {
                            srcSet: `${data.imgUrlDesktop}, ${data.imgUrlDesktop2x} 2x`,
                        }
                    ]}
                >
                </Picture>
            </div>
            <div className="p-5 flex flex-col">
                <h3 className="font-semibold mb-4">{data.title}</h3>
                <p>{data.description}</p>
            </div>
        </div>
    )
}
