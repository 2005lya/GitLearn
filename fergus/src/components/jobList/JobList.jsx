import React, { Component} from "react";
import './jobList.css'
import axios from 'axios';

export default class JobList extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            url:'./data/data.json',
            status:'All',
            type:'',
            note:"",
            isDisplay:false
        }
    }
    changeStatus (e){
        return this.setState({status: e.target.value})
    }
    createList(){
        let { status, isDisplay} = this.state
        return this.state.data.map((item, index) => (
           <tbody key={index} className="jobBody" >   
                <tr style={{display: item.status === status|| item.type === status || status=== 'All' ? '' : 'none'}}>
                <td >
                    <div className="jobType">
                    {item.type}
                    </div>
                </td>
                <td className="jobStatus">
                    <select className="select">
                        <option value={item.status}>{item.status}</option>
                        <option value="scheduled" style={{display: item.status === 'scheduled' ? 'none': ''}} onChange= {e => this.changeStatus(e)}>scheduled</option>
                        <option value="active" style={{display: item.status === 'active' ? 'none': ''}} onChange= {e => this.changeStatus(e)}>active</option>
                        <option value="invoicing" style={{display: item.status === 'invoicing' ? 'none': ''}} onChange= {e => this.changeStatus(e)}>invoicing</option>
                        <option value="priced" style={{display: item.status === 'priced' ? 'none': ''}} onChange={e => this.changeStatus(e)}>priced</option>
                    </select>
                </td>
                <td>{item.date}</td>
                <td onClick={() => this.setState({isDisplay: !isDisplay})}>Learn More</td>
                </tr>
                <tr className="more"  style={{display: isDisplay ? '' : 'none'}}>
                    <td colSpan="5">
                    <div className="cName"><h3 className="cTitle">Customer Name : </h3>{item.name}</div>
                    <div className="cAddress"><h3 className="cTitle">Customer Address : </h3>{item.address}</div>
                    <div className="addNote">
                    <h3 className="cTitle">Add a Note : </h3>
                    <textarea name="" id={index} cols="30" rows="4" className="addText"></textarea>
                    <div className="btn">
                        <button onClick={() => this.setState({isDisplay: false})}>back</button>
                    </div>
                    </div>
                    </td>
                </tr>
            </tbody>
        ))
    }
    componentWillMount(){
        axios.get(this.state.url)
        .then(({data}) => this.setState({data}))

    }
    render(){
        console.log(111,!this.state.isDisplay[6])
        return (
           <div className="jobList">
               <div className="header">
                <h1>Status Border</h1>
                <div className="headerSelect">
                    <p>Filter by : </p>
                    <select value={this.state.status} onChange={e => this.setState({status: e.target.value})} className="selectStyle">
                        <option value="All">All</option>
                        <option value="scheduled">scheduled</option>
                        <option value="active">active</option>
                        <option value="invoicing">invoicing</option>
                        <option value="priced">priced</option>
                        <option value="CHARGE UP">charge up</option>
                        <option value="QUOTE">quote</option>
                    </select>
                </div>
            </div>
               <table className="table">
                   <thead >
                       <th >JOB TYPE</th>
                       <th >JOB STATUS</th>
                       <th >DATE</th>
                       <th>More</th>
                   </thead>
               {this.createList()}
               </table>
           </div>
        )
    }
}