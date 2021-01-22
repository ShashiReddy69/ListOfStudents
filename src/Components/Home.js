import React,{Component} from 'react';
import axios from 'axios';
import './Home.css'
class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            studentsList:[],
            text:null,
            showButton:false,
            studentDataByRollNumber:[],
             //ById:undefined
           ById:[]
        }
    }
    clickHandler=(id)=>{
        const getId={
           id:parseInt(id+1)
        };
        console.log(getId)
        axios({
            method:"POST",
            url:"http://localhost:2021/api/getDataById",
            headers:{"Content-Type":"application/json"},
            data:getId
        }).then(result=>{
            console.log(result)
            this.setState({
                ById:result.data.ById
            }) 
        }).catch(error=>{
            console.log(error)
        })
    }
    operation=()=>{
        this.setState({
            showButton:true
        })
    }
    componentDidMount(){
        axios({
            method:"GET",
            url:"http://localhost:2021/api/studentsList",
            headers:{"Content-Type":"application/json"}
        }).then(result=>{
           // console.log(result)
            this.setState({
                studentsList:result.data.studentsData
            })
        }).catch(error=>{
            console.log(error)
        })
    }
    render(){
        const {studentsList,ById}=this.state;
        return(
            <div id="root">
                <h1>Students Data from XYZ School</h1>
                <div className="data">
              <ol> {
                    studentsList.map((data,id)=>{
                        return <li key={data.id} >
                        <span className="data1" onClick={()=>{this.clickHandler(id)}}>
                            <a href="!#">{data.firstName}</a>-{data.RollNumber}
                        </span>
                        </li>
                    })
                } </ol>
                    <div className="byId">
                       {/* {JSON.stringify(ById)} */}
                          {
                              ById.map(data=>{
                                  return(
                                <div>
                                  <table>
                                    <h1>Student Details</h1>
                                    <tr>
                                       <td>RollNumber :</td>
                                       <td>{data.RollNumber}</td>
                                    </tr>
                                    <tr>
                                       <td>Name :</td>
                                       <td>{data.firstName} {data.lastName}</td>
                                    </tr>
                                    <tr>
                                       <td>Class :</td>
                                       <td>{data.Class}</td>
                                    </tr>
                                    <tr>
                                       <td>Age :</td>
                                       <td>{data.Age}</td>
                                    </tr>
                                    <tr>
                                       <td>DOB :</td>
                                       <td>{data.DOB}</td>
                                    </tr>
                                    <tr>
                                       <td>Address :</td>
                                       <td>{data.Details}</td>
                                    </tr>
                                  </table>
                                </div>
                                  )
                              })
                          }
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;