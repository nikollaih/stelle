import React from "react"
import './Skeleton.css';

const ContratistaItemSkeleton = (props) => (
    <div
        className="bg-white text-center block bg-white p-4 rounded-lg sm:flex gap-4 items-center justify-start sm:justify-between">
        <div
            className="bg-gray-200 mb-4 sm:mb-0 mx-auto rounded-lg w-[100px] h-[100px] sm:max-w-[70px] sm:max-h-[70px] skeleton-rect"/>
            <div className="text-center block sm:mx-10 mx-0 sm:flex sm:flex-1 gap-4 items-center justify-between">
                <div className="p-2 w-[140px] sm:w-[90px] md:w-[120px] lg:w-[180px] mx-auto mb-2 sm:mb-0 bg-gray-200 rounded-lg skeleton-rect"/>
                <div className="p-2 w-[160px] sm:w-[90px] md:w-[120px] lg:w-[180px] mx-auto mb-2 sm:mb-0 bg-gray-200 rounded-lg skeleton-rect"/>
                <div className="p-2 w-[140px] sm:w-[90px] md:w-[120px] lg:w-[180px] mx-auto mb-2 sm:mb-0 bg-gray-200 rounded-lg skeleton-rect"/>
                <div className="p-2 w-[120px] sm:w-[90px] md:w-[120px] lg:w-[180px] mx-auto mb-2 sm:mb-0 bg-gray-200 rounded-lg skeleton-rect"/>
            </div>
        </div>
        )

        export default ContratistaItemSkeleton

