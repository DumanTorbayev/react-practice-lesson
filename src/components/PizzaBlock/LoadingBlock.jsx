import React from "react"
import ContentLoader from "react-content-loader"

const LoadingBlock = (props) => (
    <ContentLoader
        className={'pizza-block'}
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#efebeb"
        foregroundColor="#f2f2f2"
        {...props}
    >
        <circle cx="140" cy="142" r="130" />
        <rect x="0" y="279" rx="5" ry="5" width="280" height="24" />
        <rect x="0" y="319" rx="6" ry="6" width="280" height="84" />
        <rect x="0" y="423" rx="5" ry="5" width="90" height="25" />
        <rect x="129" y="417" rx="20" ry="20" width="152" height="35" />
    </ContentLoader>
)

export default LoadingBlock

