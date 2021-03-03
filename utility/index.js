/* eslint-disable no-unused-vars */
function makeTree (tree, result, node, sequence = []) {
    let sequenceCopy = [...sequence];
    sequenceCopy.push(node);

    if (node.adjList.length === 0) {
        result.push(sequenceCopy);
    }

    node.adjList.forEach((item) => {
        makeTree(tree, result, tree[item], sequenceCopy);        
    });
}

function findRoot(tree) {
    let adjList = getAdjList(tree);
    let root = null;
    Object.entries(tree).forEach(([key, value]) => {
        if (!adjList.includes(key)) {
            root = key;
        }
    });
    return tree[root];
}

function getAdjList(tree) {
    let adjList = [];
    Object.entries(tree).forEach(([key, value]) => {
        adjList = adjList.concat(value.adjList)
    });
    return adjList;
}
function transformBranches (branch) {
    let transformBranch = [];
    for (let i=0; i< branch.length; i++) {
        let current = branch[i];
        let prev = branch[i-1];
        
        if (prev) {
            Object.assign(current,{ difference: current.value - prev.value });
            transformBranch.push(current);
        } else {
            Object.assign(current,{ difference: null });
            transformBranch.push(current);
        }
    }
    return transformBranch;
}
export {
    findRoot, makeTree, transformBranches
};