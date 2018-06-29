$(document).ready( function () {
    $('#tabelpolls').DataTable();


    const dbRef = firebase.database().ref();
	const usersRef = dbRef.child('users');
} );