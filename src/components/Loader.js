import React from "react"

export default function Loader() {
    return (
        <div className="ring-container">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <p>Loading...</p>
        </div>
    )
}