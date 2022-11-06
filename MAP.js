const HigherOrderFunctions = () =>
{
    const data = [{
        "name":"Henry",
        "Gender":"male",
        "salary":10000
    },
    {
        "name":"Harry",
        "Gender":"male",
        "salary":16000
    },
    {
        "name":"gwen",
        "Gender":"female",
        "salary":25000
    },
    ]
    //map - adding a new propety called bonus to all the objects of the array
    const mapData = data.map((item)=>
    {
        return(
            {
                "name":item.name,
                "Gender":item.Gender,
                "salary":item.salary,
                "Bonus":5000,
            }
        )
    })
    //filter - items which satisfy the given condition salary >10000 and < 20000
    const filteredData = data.filter((item)=>{
        return item.salary > 10000 && item.salary < 20000 ? item : "";
    })
    //reduce
    const totalSalary = data.reduce((total,item)=>
    {
        return total + item.salary;
    },0);
    console.log(mapData);
    console.log(filteredData);
    console.log(totalSalary);
    return(
        
        <div>
            <table border={2}>
                <tr>
                    <td>Name</td>
                    <td>Gender</td>
                    <td>salary</td>
                    <td>Bonus</td>
                </tr>
                {
                    mapData.map((item)=>
                    {
                        return(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.Gender}</td>
                                <td>{item.salary}</td>
                                <td>{item.Bonus}</td>
                            </tr>
                        )
                    })
                }
            </table><br/>
            <table border={2}>
                <tr>
                    <td>Name</td>
                    <td>Gender</td>
                    <td>salary</td>
                </tr>
                {
                    mapData.map((item)=>
                    {
                        return(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.Gender}</td>
                                <td>{item.salary}</td>
                            </tr>
                        )
                    })
                }
            </table>
            <h3>Total Salary : {totalSalary}</h3>
        </div>
    )
}
export default HigherOrderFunctions;
