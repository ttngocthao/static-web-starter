import React from 'react'
import { Helmet } from 'react-helmet'
import TabIcon from '../images/icon.png'
const Seo = ({ title }) => {
    return (
        <Helmet>
            <title>Company name{title ? ` - ${title}` : ''}</title>
            <link rel='icon' type="image/icon" href={TabIcon} />
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            {/* add some google font here if needed */}
        </Helmet>
    )
}

export default Seo
