CURRENT_DIR=$(pwd)

inotifywait -r -m -e modify . | 
   while read path _ file; do 
       echo "File has changed"
       node $CURRENT_DIR/swagger2slate/index.js
       cd slate-docker && docker-compose restart && cd ..
       
   done
