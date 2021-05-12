import React, {useState, useEffect} from 'react';

import {Loader} from './loader';
export {Home as default} from './Home';

const API = 'https://api.github.com/users';

export const Home = () => {

    const [loading ,setLoading] = useState(false);

    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [rep, setRep] = useState('');
    const [avatar, setAvatar] = useState('');
    const [locate, setLocate] = useState('');
    const [link, setLink] = useState('');
    const [error, setError] = useState(null); 

    const [userInput, setUserInput] = useState('');



    const getUsers = async () => {
        const res = await fetch(`${API}/akimad`);
        const data = await res.json()
        setUsers(data)

    }
    const changeState= () =>{
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }

    
    useEffect(() =>{
            
            getUsers()
        
           }, [])
  

 

    const setUsers = ({name, login, followers, following, public_repos, avatar_url,location,html_url }) => {
        setName(name);
        setLogin(login);
        setFollowers(followers);
        setFollowing(following);
        setRep(public_repos);
        setAvatar(avatar_url)
        setLocate(location);
        setLink(html_url);
    }

    
       const handleSerach = (e) => {
        setUserInput(e.target.value);
        
    }
     const handleSubmit = async (e) => {
         e.preventDefault()
         changeState();
        const res = await fetch(`${API}/${userInput}`)
         const data = await res.json()
         if (data.message) {
             setError(data.message)
         } else {
             setUsers(data);
             setError(null)
             
         }
      
    }
     if(loading){
        return(
            <Loader/>
        )
    } else {

    return(
        <div className="col-md-11 mx-auto" >
            <form className="form-group col-md-5 mx-auto p-3" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="row mx-auto" >
                        <div className="col-md-1 p-3">
                            <label for="search"><i className="fas fa-search"/></label>
                        </div>
                        <div className="col-md-10">
                            <input
                                id='search'
                                className='form-control mt-2' 
                                type='search' 
                                placeholder="Entry your search" 
                                aria-label="Search"
                                onChange={handleSerach}
                                /> 
                        </div>
                        </div>
                    </div>
                <div className="p-3">
                    <button className="btn btn-primary" type='submit' >Search</button>
                </div>
            </form>
            {error ? ( <div className="col-md-3 text-center mx-auto ">
                            <div className="card card-body shadow shadow-md-4">
                                    <h3>{error}</h3>
                            </div>
                        </div> ) : (
                <div className="card col-md-5 mx-auto p-2 shadow shadow-md-4">
                                
                    <div className="card-body p-2 mx-auto">
                    <div className="text-center">
                        <img src={avatar} alt="user_image" className="img img-thumbnail img-fluid rounded-circle col-md-10"/> 
                     </div>       
                        <div className="card card-body p-3 mx-auto mt-1">
                            <div className="row">
                                <div className="col-md-2">
                                    <i className="fas fa-user p-2"/>
                                </div>

                                <div className="col-md-9">
                                    <p>{name}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-9">
                                    <p>{login}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <i className="fas fa-users p-2"/>
                                </div>
                                <div className="col-md-9">
                                    <p>Followers: {followers}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <i className="fas fa-star p-2"/>
                                </div>
                                <div className="col-md-9">
                                    <p>Following: {following}</p>
                                </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <i className="fas fa-file-code p-2"/>
                                </div>
                                <div className="col-md-9">
                                    <p>Repositories: {rep}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <i className="fas fa-map-marker-alt p-2"/>
                                </div>
                                <div className="col-md-9">
                                    <p>{locate}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <i className="fas fa-link p-2"/>
                                </div>
                                <div className="col-md-9">
                                    <a className="text-decoration-none text-info" target="_blank" href={link}>{link}</a>
                                </div>
                            </div>


                            </div>

                        </div>
                    </div>
                </div>
            )}         
         </div>
        )


    }

}
