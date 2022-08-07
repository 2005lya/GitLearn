export default function countRedux(preState, action){
    console.log(preState, action);

    const { type, data } = action;
    switch (type){
        case 'add1':
            return preState+data;
        case 'add2':
            return preState-data;
        default:
            return 0;
    }
}