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

// :~$ ssh-keygen -t rsa          ---->> generate the RSA type key pair

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