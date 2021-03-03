import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './index.css';

class Chart extends Component {
    render() {
      return (
            <table id="bar-graph">
            <tbody>
              { this.props.branches.map((branch, key) => {
                
                  return <tr key={key} id={(key+1)*10} style={{ marginLeft: `${key*10}%` }}>
                    <th>{branch.value}%</th>
                    <td
                      className={`bar-wrapper bar type-${branch.type}`}
                      style={{height: "300px",marginBottom: "1rem"}}
                    >
                      <p style={{marginTop: "10rem"}}>{branch.label}</p>
                      {/* <i className="fas fa-arrow-circle-down" style={{marginBottom: "2px"}}></i>
                      <span>{ branch.difference }</span> */}
                    </td>
                  </tr>
              })}
            </tbody>
          </table>
        )
    }
}

Chart.propTypes =  {
  branches: PropTypes.array
}

export default Chart;