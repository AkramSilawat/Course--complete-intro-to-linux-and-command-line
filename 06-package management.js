// ========== Package Managment & APT Basics ========== //

// :~$  dpkg --help
// --->>  Usage: dpkg [options] command [arguments...]

// :~$  sudo apt install aptitud            // --->> Installing aptitude tool   


// :~$  aptitude                

// :~$  apt-get install   aptitude          // --->> Installing aptitude using apt       

// :~$  apt install lolcat              colorfull word

// :~$  lolcat --help                       // --->> Checking if the package is installed correctly or not. 

// :~$  cat log.txt 

// :~$  lolcat log.txt   

//--------------------------------

// :~$  sudo apt install nodejs        
// --->> install


// :~$  node  -v           
// --->> Check Node Version


// :~$  node -e "console.log('hello from node')"     
// ---->> hello from node


// :~$  apt search nodejs                            
// ---->> Search for packages related to nodejs


// :~$  sudo apt remove nodejs

// :~$  apt show lolcat                
// --->> Shows the package information of a specific package


// :~$  sodo apt autoremove                
// --->> Removes unused dependencies after installing/removing a package.


// :~$  sodu apt update                
// --->> update system package listings, then install/upgrade any new versions.


// :~$  apt list                         


// :~$  apt list --upgradeable             
// --->> Lists upgradable Packages


// :~$  sudo apt upgrade                


// :~$  sodu apt full-upgrade          
// --->> Upgrades all installed packages and their dependencies to newest versions, without removing.




// ============ APT Q&A ========== //

// :~$  sudo apt upgrade nodejs
// --->> Reading package lists... Done 

// :~$  node -v
// --->> v8.10.0

// :~$  sudo apt update

// :~$  





// ============ Snaps ============ //

// :~$  apt --help 

// :~$  sudo apt remove lolcat              // --->> Remove Snap Package Manager 

// :~$  sudo snap install lolcat         

// :~$  ls -lsah | lolcat                   // --->> Install LOLCAT in terminal using Snap

// :~$  sudo apt remove nodejs       

// :~$  snap info node                      // --->> Get Information about installed Snaps          

// :~$  sudo snap install --channel=14/stable  --classic node            // --->> Install NodeJS using Snap with St
