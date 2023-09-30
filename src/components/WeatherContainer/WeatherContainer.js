import React from 'react'
import styles from './WeatherContainer.module.css'

const WeatherContainer = (props) => {
    return(
        <div className={styles.WeatherContainer}>{props.children}</div>
    )
}

export default WeatherContainer