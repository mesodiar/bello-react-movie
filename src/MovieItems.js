import React, { Component } from 'react'

export default class MovieItems extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {id, poster_src, title, overview} = this.props.movie
        return (
           <table key={id} style={{textAlign: 'left'}}>
               <tbody>
                   <tr>
                       <td>
                        <img src={poster_src}></img>
                       </td>
                       <td>
                        <strong>{title}</strong>
                        <p>{overview}</p>
                       </td>
                   </tr>
               </tbody>
           </table>
        )
    }
}
