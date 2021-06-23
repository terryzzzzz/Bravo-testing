import React, { useState } from 'react'
import HeaderDesktopImage from '../assets/Desktop_header.png'
import HeaderTabletImage from '../assets/Tablet_header.png'
import HeaderMobileImage from '../assets/Mobile_header.png'
import HeaderMobile2XImage from '../assets/Mobile_header@2x.png'

import { Picture } from 'react-responsive-picture'

export default function Image({ className }) {
    return (
        <div>
            <Picture
                className={className}
                sources={[
                    {
                        srcSet: `${HeaderMobileImage}, ${HeaderMobile2XImage} 2x`,
                        media: "(max-width: 420px)",
                    },
                    {
                        srcSet: `${HeaderTabletImage}`,
                        media: "(max-width: 980px)",
                    },
                    {
                        srcSet: `${HeaderDesktopImage}`,
                    }
                ]}
            />
            <p className="text-green-dark">Hekki</p>
        </div>
    )
}
