// ========== Package Managment & APT Basics ========== //

// akram@primary:~$  dpkg --help
// --->>  Usage: dpkg [options] command [arguments...]

// akram@primary:~$  sudo apt install aptitud            // --->> Installing aptitude tool   


// akram@primary:~$  aptitude                

// akram@primary:~$  apt-get install   aptitude          // --->> Installing aptitude using apt       

// akram@primary:~$  apt install lolcat              colorfull word

// akram@primary:~$  lolcat --help                       // --->> Checking if the package is installed correctly or not. 

// akram@primary:~$  cat log.txt 

// akram@primary:~$  lolcat log.txt   

//--------------------------------

// akram@primary:~$  sudo apt install nodejs        
// --->> install


// akram@primary:~$  node  -v           
// --->> Check Node Version


// akram@primary:~$  node -e "console.log('hello from node')"     
// ---->> hello from node


// akram@primary:~$  apt search nodejs                            
// ---->> Search for packages related to nodejs


// akram@primary:~$  sudo apt remove nodejs

// :~$  apt show lolcat                
// akram@primary--->> Shows the package information of a specific package


// akram@primary:~$  sodo apt autoremove                
// --->> Removes unused dependencies after installing/removing a package.


// akram@primary:~$  sodu apt update                
// --->> update system package listings, then install/upgrade any new versions.


// akram@primary:~$  apt list                         


// akram@primary:~$  apt list --upgradeable             
// --->> Lists upgradable Packages


// akram@primary:~$  sudo apt upgrade                


// akram@primary:~$  sodu apt full-upgrade          
// --->> Upgrades all installed packages and their dependencies to newest versions, without removing.




// ============ APT Q&A ========== //

// akram@primary :~$  sudo apt upgrade nodejs
// --->> Reading package lists... Done 

// akram@primary :~$  node -v
// --->> v8.10.0

// akram@primary :~$  sudo apt update

// akram@primary :~$  





// ============ Snaps ============ //

// :~$  apt --help 

// :~$  sudo apt remove lolcat              // --->> Remove Snap Package Manager 

// :~$  sudo snap install lolcat         

// :~$  ls -lsah | lolcat                   // --->> Install LOLCAT in terminal using Snap

// :~$  sudo apt remove nodejs       

// :~$  snap info node                      // --->> Get Information about installed Snaps          

// :~$  sudo snap install --channel=14/stable  --classic node            // --->> Install NodeJS using Snap with St
