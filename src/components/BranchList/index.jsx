import React, { Component } from 'react';
import NodeMap from '../../../API/response';
import {makeTree, findRoot, transformBranches} from '../../../utility/index';
import Chart from '../Chart';
import './index.css';

class BranchList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tree : [],
            currentBranch : []
        }
        this.changeChart = this.changeChart.bind(this);
    }

    componentDidMount() {
        let root = findRoot(NodeMap);
        let result = [];
        makeTree(NodeMap, result, root);
        this.setState({ tree : result})
    }

    changeChart(e) {
        if(e.target.value != -1) {
            let currentBranch = this.state.tree[e.target.value];
            currentBranch = transformBranches(currentBranch);
            this.setState({ currentBranch })
        } else {
            this.setState({currentBranch: []});
        }
        
        
    }
    render() {
        let currentBranch = '';
        if (this.state.currentBranch.length) {
            currentBranch = <Chart branches = {this.state.currentBranch} />;
        }
        return (
            <div>
                <select onChange={this.changeChart}>
                    <option value="-1">Select Branch</option>
                    {
                        this.state.tree.length && this.state.tree.map((branch,key) => {
                            return <option value={key} key={key} > Branch {key + 1} </option>
                        })
                    }
                </select>
                <div className="branch">
                    {currentBranch}
                </div>
            </div>
        )
    }
}

export default BranchList;