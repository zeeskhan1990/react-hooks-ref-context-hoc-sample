import React from "react"

const withClassCurry = (WrappedComponent, classes) => {
    return props => {
        return (
            <div className={classes}>
                <WrappedComponent {...props} />
            </div>
        )
        
    }
}

export default withClassCurry