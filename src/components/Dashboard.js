import React from 'react'
import Product from './Product'

export default (props) => {
    return (
        <div className='dashboard'>
            <div>
                {props.updatedList.map(el => {
                    return (
                        <Product />

                    )
                })}
            </div>
        </div>
    )
}
