// ============> Writing Script <============ //


// :~$  ls

// :~$  vi genfile.sh
    /*
        - mkdir -p ~/temp
        - cd ~/temp
        - touch file{1..10}.txt
        - echo done

        */

// :~$  source genfile.sh
// -->> done

// :~/temp$  ls

// :~/temp$  cd ..

// :~$  source genfile.sh

// :~/temp$  cd ..

// :~$  . genfile.sh  
// -->> done

// :~/temp$  cd ..

// :~$  bash gen_file.sh
// -->> done





// ============> Hashbang <============ //

// :~$  vi genfile.sh
    /**
      - #!/bin/bash

      - mkdir -p ~/temp
      - cd ~/temp
      - touch file{1..10}.txt
      - echo done

      */

// :~$  mv gen_files.sh gen_files

// :~$  ls

// :~$  chmod +x gen_files  

// :~$  ls

// :~$  ls -lsah

// :~$  ./gen_files      
// --->> done


// ------------------------------------------


// :~$  which node              
// --->> /usr/local/bin/node

// :~$  vi node_test
   /*
      - *#! /snap/bin/node
      - console.log('this is running from node.js')
        */

// :~$  chmod +x node_test

// :~$  ./node_test             
// --->> this is running from node.js




// ============> Path & Variable <============ //

// :~$  echo $PATH
// -->> /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin

// :~$  ls /user/local/sbin
// :~$  ls /user/local/games
// :~$  ls /snap/bin
/* 
   - code              firefox.geckodriver  snap-store.ubuntu-software
   - code.url-handler  geckodriver          snap-store.ubuntu-software-local-file
   - firefox           snap-store
   */

// :~$  mkdir my_bin

// :~$  m node_test my_bin

// :~$  mv gen_file my_bin

// :~$  cd my_bin/

// :~/my_bin$  ls
// -->> gen_file   node_test

// :~/my_bin$  cd ..

// :~$  vi .bashrc   
// --->> Alias definitons.
// --->> You may want to put all your additons into a separate file like

// --->> # added by me for testing purpose
// --->> PATH=$PATH:/home/mohit/my_bin

// :wq

// // :~$  clear

// ---------------------------------

// :~$  node_test
// --> this is running from node.js

// :~$  gen_files
// --> done





// ============ Arguments ============ //

// :~$  vi my_bin/gen_files

// :~$  gen_files ~/yet-different-folder
// -->  done

// :~$  pwd
// --> /home/akram

// :~$  ls

// :~$  cd yet-different-folder/

// :~$  /yet-different-folder$ ls

// :~$  /yet-different-folder$ cd .. 

// :~$  vi my_files still-different-folder
// ==> enter a file prefix: frontendmasters
// --> done

// :~$  ls

// :~$  cd still-different-folder/

// :~/still-different-folder$  ls 

