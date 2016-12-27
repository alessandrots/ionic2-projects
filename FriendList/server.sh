#!/bin/bash
service=nodemon

if (( $(ps -ef | grep -v grep | grep $service | wc -l) > 0 ))
then
echo $service + " is running!!!"
else
echo $service + " is NOT running!!!"
cd server 
#lsof -n -i4TCP:8000 | grep LISTEN	
#rm -Rf build
npm run tsc
./node_modules/.bin/nodemon build/coordenador.js
fi
#Para matar este servico
# ps aux | grep nodemon
# sudo kill -9 PID
# lsof -n -i4TCP:8000 | grep LISTEN
# sudo kill -9 PID
