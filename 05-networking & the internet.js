// ============ SSH & Secondary Machine ============ //

// :~$  multipass launch --name secondary    ---->>  start a second Linux VM named secondary.

// :~$  multipass shell secondary            ---->>  an example of multipass launch name secondary

// ------------------------------

// :~$  sudo useradd -s /bin/bash -m -g ubuntu brian        ---->> create a new user called "brian

// :~$  sudo passwd brian           ---->> add the user "brian" and give it access to bash, make home directory

// :-$  su brian

// :/home/akram$  ls

// :/home/akram$  cd ..

// :/home$  ls
// --->> brian  akram




// ============ Linking two Machines with SSH ============ //

// :~$  ssh-keygen -t rsa          ---->> generate the RSA type key pair

// - Generating public/private rsa key pair.
// - Enter file in which to save the key (/home/akram/.ssh/id_rsa):
// - Enter passphrase (empty for no passphrase):
// - Enter same passphrase again:
/* * Your identification has been saved in /home/akram/.ssh/id_rsa
   * Your public key has been saved in /home/akram/.ssh/id_rsa.pub
   * The key fingerprint is:
   * SHA256:y3LSueAK734vO19rvdHfLS8+m5l5kOCPQH/PwJtvnPg dell@DESKTOP-751INM5
   * The key's randomart image is:
   *  +---[RSA 3072]----+
      |                 |
      |                 |
      |                 |
      |          . .    |
      |        S. o o . |
      |       o o. o.*  |
      |  .   + * .o.+oO.|
      |   o .+= o..ooBBO|
      |   o=oo*+.. .oOE*| 
      +----[SHA256]-----+
    */                                

// :~$ cd  .ssh/




// ============ SFTP ============ //   -- Douat

// ===>>  SFTP : Secure File Transfer Protocols
// ===>>  transfer files between two computers

// akram@primary:~$  sftp brian0912.168.64.63
// --->>  ssh: Could not resolve hostname brian0912.168.64.63: Name or service not known
// --->>  Connection closed.  
// --->>  Connection closed





// ============ ( Wget ) ============ //


// akram@primary:~$  wget https://raw.githubusercontent.com/btholt/bash2048/master/bash2048.sh

// akram@primary:~$  ls

// akram@primary:~$  ls -lsah

// akram@primary:~$  chmod +x bash 2048.sh

// akram@primary:~$  ls -lsah

// akram@primary:~$  bash2048.sh
// --->> bash2048.sh: command not found

// akram@primary:~$  . bash2048.sh
 /*Bash 2048 v1.1 (https://github.com/mydzor/bash2048) pieces=16 target=2048 score=84

   /------+------+------+------\
   |    4 |    8 |    2 |    2 |
   |------+------+------+------|
   |    8 |    4 |    8 |    8 |
   |------+------+------+------|
   |    4 |    2 |    4 |    4 |
   |------+------+------+------|
   |    2 |    4 |    2 |    2 |
   \------+------+------+------/
   Your score: 84
   This game lasted 00:01:30
   */

// akram@primary:~$  wget --help




// ============ Curl Basics ============ // 


// akram@primary:~$  curl https://raw.githubusercontent.com/btholt/bash2048/master/bash2048.sh
  
// akram@primary:~$  curl https://raw.githubusercontent.com/btholt/bash2048/master/bash2048.sh > game.sh


// akram@primary:~$  cat game.sh                // --->> display contents of
// --->> file in terminal

// akram@primary:~$  sh game.sh                 // --->> run the script
 
// akram@primary:~$ clear

// -----------------------------------

// akram@primary:~$  cd ~

// akram@primary:~$  pwd
// -- /home/student

// akram@primary:~$  python3 -m http.server 8000 --bind 0.0.0.0
// --->> Starting HTTP Server: Running on http://0.0.0.0:8000/, Ctrl+C to stop server.

// :~$ exit        // ---->> close out of ssh session




// ============ Curl HTTP Verbs ============ //
