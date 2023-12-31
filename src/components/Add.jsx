import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddData } from '../action/action'

function Add() {
    const dispatch = useDispatch();
    const abc = useSelector(state => state.LogInData);
    const [data, setData] = useState({ name: "", number: "" });
    const [allData, setAllData] = useState([])
    const handelChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const saveData = () => {
        const save = dispatch(AddData(data));
        setAllData([...allData, save.data])
    }

    return (
        <>
            <center>
                <label htmlFor="">Name
                    <input type="text" name='name' onChange={ handelChange } />
                </label>
                <label htmlFor="">Number
                    <input type="number" name='number' onChange={ handelChange } />
                </label>
                <button onClick={ saveData }>Save</button>

                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allData.map((ele, index) => (
                                <tr key={ index }>
                                    <td>{ index + 1 }</td>
                                    <td>{ ele.name }</td>
                                    <td>{ ele.number }</td>
                                    <td>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </center>
        </>
    )
}

export default Add