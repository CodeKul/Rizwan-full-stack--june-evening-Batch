function xyz( name,amt,city){
    alert('codekul'+name+'amount'+amt+'city'+city);

}
function pq(callback){
    var name = prompt( 'Enter Your Name');
    var amt = prompt( 'Enter Your amt');
    var  city = prompt( 'Enter Your city Name');
    callback(name,amt,city);
}
pq(xyz);
