const gameController = require('../controllers/gameController');

var rooms = []
//started the socket io
const socketIo = (io) => {
    //while a user connected 
    io.on('connection', (socket) => {      
        console.log('a user connected');
        //while user disconnected 
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
        socket.on('test-socket', testData => {
            console.log(testData);
            io.emit('test-socket', testData)
        })
         //console.log(Object.keys(socket.adapter.rooms))
        //  if (rooms.length == 0) {
        //     if (Object.keys(socket.adapter.rooms).length > 0) {
        //         Object.keys(socket.adapter.rooms).forEach(room => {
        //             var clients = io.nsps[namespace].adapter.rooms[room];
        //             let numClents = Object.keys(clients).length 
        //             rooms.push({room:room, players: [], numClents});
        //             //console.log(rooms)
        //         });
        //     }
        // } 
        // console.log(rooms)
        // when the client emits 'adduser', this listens and executes
        socket.on('join', function(player){
            socket.username = player.playerName;  
            numRooms = rooms.length;     
                 if(numRooms == 0){
                    gameController.createRoom('room1',function(newRoom){
                        socket.room = 'room1';                        
                        gameController.addPlayerToRoom('room1',player.playerName,socket,function(newplayer){
                            newRoom.players.push(newplayer);
                            rooms.push(newRoom);  
                            socket.join('room1');
                            console.log(socket.room);
                            io.emit('join', 'you have connected to room1');
                            io.to(socket.room).emit('addplayer', 'New player ' + player.playerName + ' joined'); 
                        })                       
                    })
                }     
        });
        socket.on('chat', function(player, message){
            console.log('Chat messgage from '+player.playerName);
            io.to(socket.room).emit('chat', 'thank you');
            
        });
        //console.log(Object.keys(socket.adapter.sids))
    });    
}
module.exports = {
    openSocket: socketIo
}