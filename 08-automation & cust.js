    //---------cron------------//
            
//A daemon, which is a program that runs continuously in the background.


// cron      ------> Linux has a feature called cron that will run tasks on a schedule.            

//:~$ cd /etc/cron.

//:~$ ls /etc/cron.hourly/              ------>  # This is where the hourly jobs are kept.

//:~$ ls/etc/cron.monthly/               ------->   # These are the monthly jobs, usually used for things like backups

//:~$ ls/etc/cron.daily/                   ------->   # These are the daily jobs, usually used for things like cleaning up

//:~$ cd my_bin/

//:~/my_bin$ vi make_new_file   

//:~/my_bin$ chmod +x make_new_file

//:~/my_bin$ ls -lsah

//:~/my_bin$ make_new_file  
 
//:~/my_bin$ ls

//:~$ cd temp-files/

//:~/temp-files$ ls