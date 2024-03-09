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

// :~$  chmod +x gen_files                    

// :~$  ls -lsah

// :~$  ./genfile        ----->> done
