import React, { Component } from 'react'

export default class MovieItems extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
           <table>
               <tbody>
                   <tr>
                       <td>
                        <img src={this.props.movie.poster_src}></img>
                       </td>
                       <td>
                        <strong>{this.props.movie.title}</strong>
                        <p>{this.props.movie.overview}</p>
                       </td>
                   </tr>
               </tbody>
           </table>
        )
    }
}
