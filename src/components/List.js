import React,{Component,useEffect,useState} from 'react';

 
export default class List extends Component{

    

    constructor(props){ 

        super(props)

        this.state= {
            data: [],
            user: '',
            name:'',
            search:''

        };
                        
     } 
                
    async componentDidMount(){
        this.fetchUsers()

    }
    fetchUsers = async () => {
        const res = await fetch (`https://api.github.com/search/users?q=a&page,per_page,sort,order`)
        const data = await res.json()
        this.setState({
            data: data.items,
            user: data.items[0].login
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault() 
        const res = await fetch(`https://api.github.com/search/users?q=${this.state.name}&page,per_page,sort,order`)
        const data = await res.json()
        this.setState({
            data: data.items,
            users: data.items[0].login
            })
         
    }
    handleChange = (e) => {
        this.setState({
        name: e.target.value
        })  
    }

    render(){
        return(
            <div className="col-md-5 mx-auto">
                <form onSubmit={this.handleSubmit}>
                    <div className="row mx-auto">
                        <div className="col-md-1 p-4">
                            <label for="search"><i className="fas fa-search"></i></label>
                        </div>
                        <div className="col-md-10"> 
                            <input
                                id="search"
                                className="form-control m-1 mt-2"
                                type="search"
                                onChange={this.handleChange}
                                />
                        </div>
                    </div>
                    <button className="btn btn-primary m-1" type="submit">Search</button>
                </form>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Login</th>
                        </tr>
                    </thead>

                {
                    this.state.data.map(item => {
                        return (                        
                             <tbody key={item.id}>
                                <tr>
                                    <td><img src={item.avatar_url} className="img img-thumbnail img-fluid rounded-circle col-md-8"/></td>
                        
                                    <td className="my-auto">
                                        <a className="text-decoration-none text-light" href={item.html_url} target="_blank" title={item.html_url}>
                                        <li>{item.login}</li> 
                                       <li><i className="fas fa-link"></i>{item.html_url}</li>
                                        </a>
                                    </td>
    
                                </tr>
                            </tbody>
                        )
                    })
                 }
                </table>
            </div>
            )
        }
    } 
