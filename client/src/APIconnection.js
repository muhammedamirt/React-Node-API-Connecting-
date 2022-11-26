import React, { useEffect, useState } from 'react'


function APIconnection(props) {
    const [api, setApi] = useState("")

    useEffect(() => {
        const callApi=()=>{

            //giving node api rout and localhost port

            fetch('http://localhost:5000/testapi')
                .then(data => data.text())
                .then(data => setApi({ apiData: data }))
        }
        callApi()
    },[])

    return (
        <div>
            <h2>
                {api.apiData}
            </h2>
        </div>
    )
}

export default APIconnection
