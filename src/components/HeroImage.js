import React from 'react'

import HeaderDesktopImage from '../assets/Desktop_header.png'
import HeaderTabletImage from '../assets/Tablet_header.png'
import HeaderMobileImage from '../assets/Mobile_header.png'
import HeaderDesktop2XImage from '../assets/Desktop_header@2x.png'
import HeaderTablet2XImage from '../assets/Tablet_header@2x.png'
import HeaderMobile2XImage from '../assets/Mobile_header@2x.png'

import { Picture } from 'react-responsive-picture'

export default function HeroImage({ className }) {
    return (
        <Picture
            className={className}
            sources={[
                {
                    srcSet: `${HeaderMobileImage}, ${HeaderMobile2XImage} 2x`,
                    media: "(max-width: 420px)",
                },
                {
                    srcSet: `${HeaderTabletImage}, ${HeaderTablet2XImage} 2x`,
                    media: "(max-width: 980px)",
                },
                {
                    srcSet: `${HeaderDesktopImage}, ${HeaderDesktop2XImage} 2x`,
                }
            ]}
        >
        </Picture>
    )
}
