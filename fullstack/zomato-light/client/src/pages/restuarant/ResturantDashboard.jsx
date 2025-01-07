import React from 'react'
import ResturantInfo from '../../components/resturant/ResturantInfo'
import { useSelector } from 'react-redux'
import ResturnatMenu from '../../components/resturant/ResturnatMenu'

const ResturantDashboard = () => {
    const { resturant } = useSelector(state => state.auth)
    return <>
        {
            resturant.infoComplete
                ? <ResturnatMenu />
                : <ResturantInfo />
        }

    </>
}


/*
    category
    name
    desc
    price
    image
*/
export default ResturantDashboard