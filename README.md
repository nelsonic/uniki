# uniki

![matrix-reloaded-keymaster](http://i.imgur.com/lRpBPXI.jpg)

There are ***many use cases*** for unique keys.

Our ["***itch***"](https://gettingreal.37signals.com/ch02_Whats_Your_Problem.php)
is minimizing the bytes occupied in our database by frequent strings.





# tl;dr

## Hold On, This Sounds Familiar ...

*If* this ***looks familiar***, its because it is!!  
We have built a virtually identical module: https://www.npmjs.com/package/perma  
The key (*see what we did there...?*) ***difference is*** that we are not excluding any characters from the population because no *humans* are
going to be typing these keys, they are used exclusively by
our database as keys.  
Also similar is https://www.npmjs.com/package/aguid
but ***uniki*** we ***don't want*** our **keys** to be ***36 characters*** **long**!
