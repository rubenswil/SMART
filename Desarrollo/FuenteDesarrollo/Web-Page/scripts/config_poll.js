$(document).ready( function () {
    $('#tabelpolls').DataTable();


    const dbRef = firebase.database().ref();
	const usersRef = dbRef.child('users');
} );


function select(){
	const dbRef = firebase.database().ref();
	const usersRef = dbRef.child('users');
}

function insert(){

}

function update(){

}

function delet(){

}