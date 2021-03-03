const NodeMap = {
    "node1": {
        label: "Contact Info",
        value: 100,
        type: "BASIC",
        adjList: ["node2"]
    },
    "node2": {
        label: "NemID",
        value: 95,
        type: "SERVICE",
        adjList: ["node3", "nodeBranch2" , "nodeBranch1"]
    },
    "node3": {
        label: "Personal Address",
        value: 95,
        type: "BASIC",
        adjList: []
    },
    "nodeBranch1": {
        label: "Branch 1",
        value: 95,
        type: "BASIC",
        adjList: []
    },
    "nodeBranch2":{
        label: "Branch 2",
        value: 55,
        type: "BASIC",
        adjList: ["nodeBranch3"]
        
    },
    "nodeBranch3":{
        label: "Branch 3",
        value: 25,
        type: "BASIC",
        adjList: ["nodeBranch4"]
    },
    "nodeBranch4":{
        label: "Branch 4",
        value: 25,
        type: "BASIC",
        adjList: ["nodeBranch5"]
    },
    "nodeBranch5":{
        label: "Branch 5",
        value: 25,
        type: "BASIC",
        adjList: ["nodeBranch6"]
    },
    "nodeBranch6":{
        label: "Branch 6",
        value: 25,
        type: "BASIC",
        adjList: ["nodeBranch7"]
    },
    "nodeBranch7":{
        label: "Branch 7",
        value: 25,
        type: "BASIC",
        adjList: ["nodeBranch8"]
    },
    "nodeBranch8":{
        label: "Branch 8",
        value: 25,
        type: "BASIC",
        adjList: ["nodeBranch9"]
    },
    "nodeBranch9":{
        label: "Branch 9",
        value: 25,
        type: "BASIC",
        adjList: ["nodeBranch10"]
    },
    "nodeBranch10":{
        label: "Branch 10",
        value: 25,
        type: "BASIC",
        adjList: []
    }
};

export default NodeMap;