import React, { useState, useEffect } from 'react'
import Card from '../components/Card'

import PlaceholderDesktop from '../assets/Desktop-Tablet_placeholder-A.png'
import PlaceholderDesktop2X from '../assets/Desktop-Tablet_placeholder-A@2x.png'
import PlaceholderMobile from '../assets/Mobile_placeholder-A@2x.png'
import PlaceholderMobile2X from '../assets/Mobile_placeholder-A@2x.png'

export default function CardList() {

    const [cardList, setCardList] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://87197325.blob.core.windows.net/fed-technical-test/events.json")
            .then(res => res.json())
            .then((result) => {
                const newCardList = result.map((value, index) => {
                    let classes = ''
                    if (index % 3 === 2) {
                        classes = 'lg:translate-y-6'
                    } else if (index % 3 === 1) {
                        classes = 'lg:translate-y-4'
                    }
                    return (
                        <div className={`w-full md:w-1/2 lg:w-1/3 px-10 py-5 lg:py-10 transform ${classes}`}>
                            <Card data={value} />
                        </div>
                    )
                })
                setCardList(newCardList)
            })
            .then(() => {
                setLoading(false)
            })
    }, [])

    if (!loading) {
        return (
            <div className="w-full flex justify-center">
                <div className="container">
                    <div className="w-full flex justify-center flex-wrap py-10 lg:py-16">
                        {cardList}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <p>Loading</p>
        )
    }
}
