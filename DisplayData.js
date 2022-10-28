import { Component } from "react";
import {student} from "./data";
import "./styles.css";

export class DisplayData extends Component{
    render(){
        return(
            <div>
                
                <table border={1}>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>id</th>
                        <th>Score</th>
                    </tr>
                    {student.map((num)=>{
                        return(
                            <tr key={num.sno}>
                                <td>{num.sno}</td>
                                <td>{num.Name}</td>
                                <td>{num.id}</td>
                                <td>{num.score}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        );

    }
}
export default DisplayData;