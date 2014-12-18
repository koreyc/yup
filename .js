function procCmd(command){

var cmd = command.split(" ")

if(cmd[0] == "gamemode"){
if(cmd[1] == "0"){

Level.setGamemode(0);

}

if(cmd[1] == "1"){

Level.setGamemode(1);

}

}

}

}
