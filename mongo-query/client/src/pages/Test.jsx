import React, { useEffect, useState } from 'react';

import axios from "axios"
import PieChart from './PieChart';


function Test() {
    const [skills, setSkills] = useState()
    const getData = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/dummy")
            setSkills({
                kala: data.result,
                gender: data.genderResult,
                account: data.accountResult,
            })
        } catch (error) {
            console.log(error)
        }
    }


    // $lookup
    useEffect(() => {
        getData()
    }, [])
    return <div style={{ height: 400, display: "flex" }}>
        {
            skills && <>
                <PieChart
                    chartData={skills.kala.map(item => item.count)}
                    chartLabel={skills.kala.map(item => item._id)}
                />
                <PieChart
                    chartData={skills.gender.map(item => item.count)}
                    chartLabel={skills.gender.map(item => item._id)}
                />
                <PieChart
                    chartData={skills.account.map(item => item.count)}
                    chartLabel={skills.account.map(item => item._id ? "active" : "in-active")}
                />
            </>
        }
    </div>
}

export default Test
