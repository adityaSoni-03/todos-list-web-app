// isme bootstrap se nav-bar copy kiya h jsx m code likha h html nhi h jsx hh which is combination of both html and css darr ne ki baat nhi hh
// props ke child component hh jo ki parent component m pass kiya gya h just like class...then props se porps.title jaise properties ko use
// kr sakhte hh



import React from 'react'
import PropTypes from 'prop-types'


export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body sticky-top" data-bs-theme="dark">
            <div className="container-fluid">
                {/* <img src="C:/Downloads/todo-list-icon.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/> */}
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Profile</a>
                            </li>

                        </ul>
                    </div>
            </div>
            <nav class="navbar bg-dark border-bottom border-body sticky-top" >
                <div class="container-fluid">
                    {props.searchBar ? <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> : "no search bar"}
                </div>
            </nav>
        </nav>

    )
}

Header.defaultProps = {   // ye ishliye kyunki agr user ne parent component se pass nhi kiya koi title mtlb nhi likha title, header jsx mai toh default ye likha jayega automatic lekin {prop.title} use kiya hoga to hi bs
    title: "Your title here",
    searchBar: true
}
Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool // yaha kch nhi bs achi coding and systematic lage ishliye title string m hi hona chahiye specify kr diya h taki bug fixing m easy ho
}