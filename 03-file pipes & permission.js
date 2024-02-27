// ============ Reading Files ============ //

// ---> LESS <---


// :~$  less textfile.txt

// :~$  ls 

// -  textfile.txt  test1.c   test2.c   test3.cpp

// :~$  vi textfile.txt

// :~$  less 

// :~$  less textfile.txt

// :~$  more textfile.txt




// ============ Man ============ //

// :~$  man less         // --> manual for less.

// :~$  less --help      // --> summary of less Commmand

// :~$  man python3





// ----------> cat  <-------------- //


// :~$ cat textfile.txt                //---> cat does is read the entire file and output it



// ============ Head/Tail ============ //

// :~$ tail textfile.txt             

// :~$ head textfile.txt        
 
// :~$ tail -n 3 textfile.txt          // --->  just see three lines

// :~$ tail -f textfile.txt   

// :~$ ^c  //--> that 's out of

// open the new terminal

// :~$ echo hi  >> textfile.txt        // ---> add something to the end of the file

// :~$ echo hi there >> textfile.txt

// :~$ ^c

// :~$ clear 


//-------------------------------------------


//primary Directory

// /home/username             // ---> home directory

// :~$  ls 

// :~$  pwd

// :~$  mkdir my-new-folder 

// :~$  ls
 
// :~$  cd my-new-folder/

// :~$  /my-new-folder ls

// :~$  pwd

// :~$  mkdir -p hi/my/name/is/brian

// :~$  ls
// -->  Home hy my-new-folder snap textfile.txt

// :~$   cd hi/

// :~/hi$  ls 
// --> my

// :~/hi$  cd my/name/is/brian/

// :~/hi/my/name/is/brian$  ls

// :~/hi/my/name/is/brian$  pwd




// ========== Creating & Moving Files ============ //

// ----> Create a new file called "textfile2.txt" in the "/home/username <---- //


// :~$  mkdir --help

// :~$  cd ~

// :~$  ls

// :~$  ls -lash

// :~$  touch my-new-file.txt   //change modify time
 
// :~$  ls -lash

// :~$  touch my-new-file.txt

// :~$  echo "Hello World!" >


// ---------

// :~$  rm my-new-file.txt      // ---> remove the one file

// :~$  ls

// :~$  rm my-new-folder/ 

// :~$  rm -r my-new-folder/ 

// :~$  ls

// :~$  mkdir lol

// :~$  cd lol

// :~/lol$  touch some-file.txt

// :~$  cd ..

// :~$  rm -r lol

// :~$  ls

// :~$  mkdir -p lol/hey

// :~$  rm -r lol

// :~$  ls



// :~$  rm -rf /.        
// --->  Never run this command:This is a famous command to run that will 
// --->  start deleting your whole system including the critical system files. 

//  trash-cli

// :~$  clear


//-----------------------------------------------

// :~$  ls

// :~$  cp source-file.txt destination-file.txt

// :~$  ls

// :~$  cp -R hi bye   

// :~$  ls -lsah

// :~$  cd bye

// :~/bye$  ls

// :~/bye$  cd my/name/is/brian/

// :~/bye/my/name/is/brian/$  cd ~

// :~$  ls

// :~$  mv bye something-else

// :~$  ls

// :~$  mv destination-file.txt another-file.txt

// :~$  ls

// :~$  clear


