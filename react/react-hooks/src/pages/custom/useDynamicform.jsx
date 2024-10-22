import React, { useState } from 'react'

const useDynamicform = (config) => {
    const [data, setData] = useState({})
    const handleChannge = e => {
        const { name, value, type, checked, files } = e.target
        if (type === "checkbox") {
            if (checked) {
                if (data[name]) {
                    setData({ ...data, [name]: [...data[name], value] })
                } else {
                    setData({ ...data, [name]: [value] })
                }
            } else {
                setData({
                    ...data,
                    [name]: data[name].filter(item => item != value)
                })
            }

        } else if (type === "file") {
            setData({ ...data, [name]: files[0] })
        } else {
            setData({ ...data, [name]: value })
        }
        // console.log(e.target.name, e.target.value)
    }
    const handleUI = (arg) => {
        switch (arg.type) {
            case "file":
            case "date":
            case "color":
            case "password":
            case "number":
            case "email":
            case "text": return <div className='my-2'>
                <label htmlFor={arg.name}>Enter {arg.name}</label>
                <input onChange={handleChannge} id={arg.name} type={arg.type} className='form-control' name={arg.name} />
            </div>
            case "select": return <select
                name={arg.name}
                onChange={handleChannge}
                className='form-control'>
                <option> choose {arg.name}</option>
                {
                    arg.options.map(item => <option value={item}>{item}</option>)
                }
            </select>
            case "textarea": return <div className='my-2'>
                <label htmlFor={arg.name}>Enter {arg.name}</label>
                <textarea
                    name={arg.name}
                    onChange={handleChannge}
                    id={arg.name}
                    className='form-control'
                    placeholder={`Enter ${arg.name}`}></textarea>
            </div>
            case "radio": return <div className="my-2">
                <p>Select {arg.name}</p>
                {
                    arg.options.map(item => <div className='form-check form-check-inline'>
                        <label htmlFor={item}>{item}</label>
                        <input
                            onChange={handleChannge}
                            value={item}
                            name={arg.name}
                            type="radio"
                            id={item}
                            className='form-check-input' />
                    </div>)
                }
            </div>
            case "checkbox": return <div className="my-2">
                <p >Choose {arg.name}</p>
                {
                    arg.options.map(item => <div className='form-check form-check-inline'>
                        <label htmlFor={item}>{item}</label>
                        <input
                            value={item}
                            onChange={handleChannge}
                            name={arg.name}
                            type="checkbox"
                            id={item}
                            className='form-check-input' />
                    </div>)
                }
            </div>
            case "submit":
            case "reset":
            case "button": return <button onClick={arg.click} type={arg.typpe} className="btn btn-primary">{arg.name}</button>
            default: return
        }
    }
    return {
        data: data,
        ui: <>
            {config.map(item => handleUI(item))}
        </>
    }
}

export default useDynamicform

// textarea
// readio
// ch3eckbox
// file